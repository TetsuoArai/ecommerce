
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


function ShoppingCart() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [size, setSize] = useState([]);

    useEffect(() => {
        fetchData();
        fetchSize();
    }, []);




    

    const fetchData = async () => {
        const response = await fetch("http://localhost:3000/api/sneakers");

        if (response.ok) {
        const data = await response.json();
        setProduct(data.filter((product) => product.id == id));
        }
    };

    const fetchSize = async () => {
        const response = await fetch("http://localhost:3000/api/sizes");

        if (response.ok) {
        const size = await response.json();
        setSize(size.filter((size) => size.sneakerId == id));
        }
    };

    if(!product) return "No product";

    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="w-auto">
                <div className="card lg:card-side bg-base-10 shadow-xl w-[150vh] h-[80vh]">
                    <img
                    src={`http://localhost:3000/${product[0].image}`}
                    alt="Album" className="bg-cover h-full drop-shadow-[10px_13px_7px_rgba(100,100,100,10)] hover:-translate-y-2 hover:ease-in duration-300 max-h-auto "
                    />

                <div className="card-body w-[200vh] ml-5">
                    <h2 className="card-title text-[45px] w-full mb-[20px] font-bold tracking-wide">{product[0].model}</h2>
                    <p className="text-[22px]"><span className="font-bold text-[25px] ">Price:</span> ${product[0].price}<br/>{product[0].publishedAt}</p>
                    <h1 className="font-bold">Size:</h1>
                    <div className="grid grid-cols-5">
                    {size.map((size) => (
                        <ul className="grid gap-6 grid-cols-3" key={size.id}>
                            <li className="flex flex-col justify-center items-center mb-4 ml-4">
                                <input type="checkbox" id={size.id} value="" className="hidden peer" required="" />
                                <label htmlFor={size.id} className="inline-flex items-center justify-center max-w-[30px] max-h-[30px] p-5 text-white  border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-900 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-900 dark:peer-checked:text-gray-900 peer-checked:text-gray-900 hover:bg-gray-50 dark:text-gray-900 dark:bg-white ">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">{size.size}</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    ))}
                </div>




                    <div className="card-actions justify-end">
                    <button className="btn btn-active btn-accent w-full text-white">Add cart</button>
                    <button className="btn btn-active btn-neutral w-full text-white">Wish list</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;

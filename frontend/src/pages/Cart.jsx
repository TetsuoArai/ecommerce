import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Cart() {
    const { user } = useUser();
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedData = localStorage.getItem(user.id);
        const parsedData = JSON.parse(storedData);
        setItems(parsedData);
    }, []);

    useEffect(() => {
      items.forEach((product) => (
        setTotal(product.price)
      ))
      console.log(total)
  }, []);
    
    function deleteData(id){
      const deleteFilter = items.filter((product) => product.id !== id)
      localStorage.setItem(user.id, JSON.stringify(deleteFilter))
      setItems(deleteFilter)
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
      });
      Toast.fire({
        icon: "error",
        title: "The product has been removed"
      });
    }



    return (
        <div className=" h-full bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold h-full">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {items.map((product, index) => {
                return (
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={index}>
                    <img
                      src={`http://localhost:3000/${product.image}`}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {product.model}
                        </h2>
                        <p className="mt-1 text-[14px] text-gray-700">Size: {product.size}</p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">${product.price}</p>
                          <button onClick={()=>deleteData(product.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">${total}</p> 
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
          
        </div>
      );
    }
    
export default Cart;

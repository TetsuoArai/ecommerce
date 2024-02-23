import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShoppingCart() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [size, setSize] = useState([]);
  const [Check, setCheck] = useState(null);

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

  const ch = (siz) => {
    setCheck(siz);
  };

  if (!product) return "No product";

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <SignedIn>
        <div className="w-auto">
          <div className="card lg:card-side bg-base-10 shadow-xl max-w-[150vh] max-h-[90vh]">
            <img
              src={`http://localhost:3000/${product[0].image}`}
              alt="Album"
              className="bg-cover h-full drop-shadow-[10px_13px_7px_rgba(100,100,100,10)] hover:-translate-y-2 hover:ease-in duration-300 max-h-auto w-auto "
            />

            <div className="card-body max-w-[300vh] ml-5">
              <h2 className="card-title text-[45px] mb-[20px] font-bold tracking-wide h-[200px] ">
                <span className="block leading-[0.8]">{product[0].model}</span>
              </h2>
              <p className="text-[22px]">
                <span className="font-bold text-[25px] ">Price:</span> $
                {product[0].price}
                <br />
                {product[0].publishedAt}
              </p>
              <h1 className="font-bold">Size:</h1>
              <div className="grid grid-cols-5">
                {size.map((size, index) => (
                  <ul className="grid gap-6 grid-cols-3" key={index}>
                    <li className="flex flex-col justify-center items-center mb-4 ml-4">
                      <input
                        type="checkbox"
                        id={index}
                        className="hidden peer"
                        checked={size.size === Check}
                        onChange={() => ch(size.size)}
                      />
                      <label
                        htmlFor={index}
                        className="inline-flex items-center justify-center max-w-[30px] max-h-[30px] p-5 text-black  border-2 border-gray-800 rounded-lg cursor-pointer dark:hover:text-gray-900 dark:border-gray-100 peer-checked:border-teal-600 hover:text-gray-900 dark:peer-checked:text-gray-900 peer-checked:text-gray-900 hover:bg-teal-50 dark:text-gray-900 dark:bg-white ">
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            {size.size}
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                ))}
              </div>

              <div className="card-actions w-auto pb-2 ">
                <button className="btn btn-active btn-accent w-full text-white ">
                  Add cart
                </button>
                <button className="btn btn-active btn-neutral w-full text-white">
                  Wish list
                </button>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        Iniciar Sesion
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default ShoppingCart;

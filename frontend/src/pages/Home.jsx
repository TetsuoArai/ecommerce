import { Button, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/sneakers");

    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    }
  };

  const RP = products.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const TenProduct = RP.slice(0, 8);

  return (
    <div>
      <h1 className="text-3xl mb-6 mt-10 ml-8">Recent Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 ">
        {TenProduct.map((product) => (
          <div
            className="rounded-lg m-1 w-auto shadow-xl shadow-black-500/50 border-none flex flex-col mt-7 ml-7 mb-10"
            key={product.id}>
            <div className="bg-[#f3f4f6]">
              <img
                src={`http://localhost:3000/${product.image}`}
                className="bg-cover h-auto drop-shadow-[10px_13px_7px_rgba(100,100,100,10)] hover:-translate-y-2 hover:ease-in duration-300"
              />
            </div>
            <h1 className="text-xl font-bold text-[30px] ml-6 mt-2">
              {product.model}
            </h1>
            <span className="ml-6 mt-2 mb-3 text-2xl">${product.price}</span>
            <Stack
              direction="row"
              spacing={4}
              className="flex items-center justify-center mt-2 mb-2">
              <Button colorScheme="teal" variant="solid" className="w-[180px]">
                Buy now
              </Button>
              <Link to={`/ShoppingCart/${product.id}/`}>
              <Button colorScheme="teal" variant="outline">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="2em">
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
              </svg>
              </Button>
              </Link>

            </Stack>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

import { Button, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Filter() {
  const [brands, setBrands] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const price = ["$200 - $250", "$150 - $200", "$100 - $150", "$50 - $100"];

  useEffect(() => {
    fetchData();
  }, []);

  console.log(selectedPrice);

  const fetchData = async () => {
    try {
      await fetch("http://localhost:3000/api/brand")
        .then((response) => response.json())
        .then((product) => setBrands(product));
    } catch (error) {
      console.error("Hay un error");
    }
  };

  const handlePriceSelection = (clickedPrice) => {
    setSelectedPrice(clickedPrice);
  };

  return (
    <div className="text-[30px]">
      <form action="">
        <div className="flex flex-col m-5 mb-10">
          <h1 className="mb-2 font-bold">Marcas:</h1>
          {brands.map((brand) => (
            <div className="flex items-center mb-5" key={brand.id}>
              <Checkbox colorScheme="blue" size="lg">
                {brand.name}
              </Checkbox>
            </div>
          ))}
          <h1 className="mb-5 font-bold">Precio:</h1>
          {price.map((price, index) => (
            <Checkbox
              colorScheme="blue"
              className="flex items-center mb-4 "
              size="lg"
              key={index}
              isChecked={price === selectedPrice}
              onChange={() => handlePriceSelection(price)}>
              {price}
            </Checkbox>
          ))}
        <Button colorScheme="teal" variant="solid" className="w-[250px] mt-10" 
        >Filtrar</Button>
        </div>
      </form>
    </div>
  );
}

export default Filter;

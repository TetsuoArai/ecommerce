import { useEffect, useState } from "react";

function Products(){
    const [products, SetProducts] = useState([])

    useEffect(() =>{
        fetchData()
    },[])

    const fetchData= async () =>{
        const response = await fetch("http://localhost:3000/api/sneakers")
        SetProducts(response)
    }
    
    console.log(products)
}

export default Products;
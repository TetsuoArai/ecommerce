import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

function AddCart({idUser,image, model, size, price,qty}){
    const [cart , setCart] = useState([])
    console.log(cart)

    useEffect(() => {
        const date = localStorage.getItem(idUser)
        if(date){
        setCart(JSON.parse(date))
        }
    },[idUser])

    function Add(){
        if(size != null){
            const product = {'image':image, 'model':model, 'size':size, 'price':price, 'qty':qty};
            setCart(prevCart => {
                const newCart = [...prevCart, product];
                localStorage.setItem(idUser, JSON.stringify(newCart));
                return newCart;
                
            });
            Swal.fire({
                title: 'Success!',
                text: 'It has been added to your shopping cart',
                icon: 'success',
                showConfirmButton: false,
                timer: 1800
            })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'You need to choose a size',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

    return(
        <button className="btn btn-active btn-accent w-full text-white "  onClick={Add}>
            Add cart
        </button>
    )
}

export default AddCart;
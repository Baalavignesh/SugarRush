import { useEffect, useState } from "react";
import { Container, Fade } from "@mui/material";
import NavBar from "../../shared/navbar";

const Cart : React.FC =() => {
  useEffect(() => {
    console.log('Cart screen');
  }, [])

  let [cartCake, setCartCake] = useState<any>([]);

  useEffect(() => {
    let cart = localStorage.getItem('cart');
    if(cart){
      setCartCake(JSON.parse(cart));
    }
  }, [])

  return (
    <div>
      <NavBar />
      <Fade in={true} timeout={1500}>
      <Container maxWidth="xl">
        <h1 className="text-4xl font-bold text-center mt-8 pb-12">My Cart</h1>
        <div className="flex justify-end mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
            </button>
        </div>
        <div className="grid grid-cols-1 gap-4">

            {cartCake.map((cake: any, index: number) => (
                <div key={index} className="w-full p-2">
                <div className="flex  gap-12 items-center mt-4 p-4 bg-white shadow-lg rounded-lg border-2 border-yellow-300 hover:animate-glitter">
                <div className="flex-shrink-0">
                <img src={cake.image} alt={cake.cake} className="w-48 h-48 rounded-full object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <h2 className="text-xl font-bold text-gray-800">{cake.cake}</h2>
                <p className="text-gray-600">{cake.description}</p>
                <p className="text-lg font-semibold text-primary mt-2">Rs. {cake.price}</p>

                </div>
                </div>
              </div>
            ))}
        </div>

      </Container>
      </Fade>


    </div>
  );
};

export default Cart;

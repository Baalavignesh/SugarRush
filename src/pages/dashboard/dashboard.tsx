import { useEffect, useState } from "react";
import { Container, Fade } from "@mui/material";
import NavBar from "../../shared/navbar";
import cakes from "../../constants/cakes";

const Dashboard : React.FC =() => {
  useEffect(() => {
    console.log('dashboard screen');
  }, [])

  let [cartCake, setCartCake] = useState<any>([]);

  let handleCart = (cake: any) => {
    console.log('cart added');
    const updatedCart = [...cartCake, cake];
    setCartCake(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  return (
    <div>
      <NavBar />
      <Fade in={true} timeout={1500}>
      <Container maxWidth="xl">
        <h1 className="text-4xl font-bold text-center mt-8 pb-12">Welcome to SugarRush</h1>
        <div className="grid grid-cols-3 gap-4 mb-12">
        {
        cakes.map((cake, index) => {
          return (
            <div key={index} className="w-full p-2">
              <div className="flex flex-col justify-between items-center mt-4 p-4 bg-white shadow-lg rounded-lg border-2 border-yellow-300 hover:animate-glitter">
              <div className="flex-shrink-0">
              <img src={cake.image} alt={cake.cake} className="w-48 h-48 rounded-full object-cover" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-xl font-bold text-gray-800">{cake.cake}</h2>
              <p className="text-gray-600">{cake.description}</p>
              <p className="text-lg font-semibold text-primary mt-2">Rs. {cake.price}</p>

              <button className="mt-4 px-4 py-2 bg-gray-50 text-black rounded hover:bg-gray-100 border-2 border-black" onClick={() => handleCart(cake)}>
                Add to Cart
              </button>
              </div>
              </div>
            </div>
          )
        })
      }
        </div>

      </Container>
      </Fade>


    </div>
  );
};

export default Dashboard;

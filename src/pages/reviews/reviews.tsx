import { useEffect } from "react";
import { Container, Fade } from "@mui/material";
import NavBar from "../../shared/navbar";
import reviews from "../../constants/reviews";

const Reviews : React.FC =() => {
  useEffect(() => {
    console.log('Reviews screen');
  }, [])


  return (
    <div>
      <NavBar />
      <Fade in={true} timeout={1500}>
      <Container maxWidth="xl">
        <h1 className="text-4xl font-bold text-center mt-8 pb-12">Our Reviews</h1>
        <div className="grid grid-cols-1 gap-4">
    {
      reviews.map((review:any, index) => {
        return (
          <div>
            <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
              <div className="flex gap-6 pb-4 items-center">

              <h2 className="text-2xl font-semibold mb-2">{review.name}</h2>
              <span className="text-yellow-500 mr-2 flex gap-1">
                  {Array(review.rating).fill('⭐')}
                </span>
              </div>
              <p className="text-gray-700 mb-4 text-xl">{review.comment}</p>
              <div className="flex items-center">
                
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

export default Reviews;

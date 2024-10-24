import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  let navigate = useNavigate();

  return (
    <div className="p-4 py-6 pl-12 pr-12 flex justify-between items-center bg-white border-b-gray-100 border-2 text-black">
      {/* <img
        src={appLogo2}
        className="cursor-pointer w-32 absolute left-10"
      /> */}
      <p
        className="font-light text-3xl cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        SugarRush
      </p>
      <div className="flex gap-12 font-light text-md">
        <h4
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer border-b-2 border-b-white hover:border-blue-300 transition-all duration-200"
        >
          Best Bistro
        </h4>
        <h4
          onClick={() => navigate("/about")}
          className="cursor-pointer border-b-2 border-b-white hover:border-blue-300 transition-all duration-200"
        >
           About us
        </h4>
        <h4
          onClick={() => navigate("/reviews")}
          className="cursor-pointer border-b-2 border-b-white hover:border-blue-300 transition-all duration-200"
        >
           Reviews
        </h4>

      </div>
      <div className="flex gap-12">
          <FontAwesomeIcon icon={faCartShopping} size="lg" onClick={()=> navigate("/cart")} className="cursor-pointer"/>
          <FontAwesomeIcon icon={faUser} size="lg" className="cursor-pointer"/>
          <FontAwesomeIcon icon={faRightFromBracket} size="lg" onClick={() => navigate("/")} className="cursor-pointer"/>
        </div>
    </div>
  );
};
export default NavBar;

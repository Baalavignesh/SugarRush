import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Fade } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();


  const handleLogin = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    console.log("login screen");
  }, []);
  return (
    <div className="bg-custom-white text-black"> 
    <Fade in={true} timeout={1000}>
      <div
        className="flex justify-center items-center gap-12 pl-24 pr-24 py-24 h-screen bg-custom-white"
      >
        <div className="bg-yellow-200 rounded-md w-full text-6xl h-96 flex justify-center items-center">
            Welcome to SugarRush
        </div>
        <div className="w-full items-start pb-4">
        <h1>Login Screen</h1>
        <p className="mb-6">Please enter your information to continue</p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="p-4 m-2 border-2 rounded-sm "
          />
          <input
            type="text"
            placeholder="Number"
            className="p-4 m-2 border-2 rounded-sm "
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 m-2 border-2 rounded-sm "
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 m-2 border-2 rounded-sm "
          />
          <button
            type="submit"
            className="p-4 rounded-sm bg-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        </div>
      </div>
    </Fade>
     </div>

  );
};

export default Login;

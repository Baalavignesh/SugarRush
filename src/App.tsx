import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PRIMARY } from "./constants/colors";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Error from "./pages/error/error";
import About from "./pages/about/about";
import Cart from "./pages/cart/cart";
import Reviews from "./pages/reviews/reviews";

PRIMARY;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/cart" Component={Cart} />
        <Route path="/reviews" Component={Reviews} />
        <Route path="/" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;

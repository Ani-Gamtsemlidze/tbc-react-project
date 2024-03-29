import { Link } from "react-router-dom";
import logo from "../../images/X-Logo.png";
import Navigation from "./Navigation";
function Header() {
  return (
    <header className="flex  justify-between items-center  bg-gray-900">
      <Link to="/">
      <img
        alt="X-logo"
        className="w-6 h-6 object-contain ml-8"
        src={logo}
      />
      </Link>
    <Navigation />
     </header>
  );
}

export default Header;

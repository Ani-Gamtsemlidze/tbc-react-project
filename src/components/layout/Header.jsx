import logo from "../../images/X-Logo.png";
import Navigation from "./Navigation";
function Header() {
  return (
    <header className="flex justify-between items-center  bg-gray-900">
      <img
        alt="X-logo"
        className="w-6 h-6 object-contain ml-8 my-3	"
        src={logo}
      />
<Navigation />
    </header>
  );
}

export default Header;

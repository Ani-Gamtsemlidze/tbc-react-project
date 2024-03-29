import logo from "../../images/X-Logo.png";
import Navigation from "./Navigation";
function Header() {
  return (
    <header className="flex p-2 justify-between items-center  bg-gray-900">
      <img
        alt="X-logo"
        className="w-6 h-6 object-contain ml-8	"
        src={logo}
      />
<Navigation />
    </header>
  );
}

export default Header;

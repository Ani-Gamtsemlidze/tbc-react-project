import logo from "../../images/X-logo.png";
function Header() {
  return (
    <header className="flex justify-between items-center  bg-green-800">
      <img
        alt="X-logo"
        className="w-6 h-6 object-contain ml-8 my-3	"
        src={logo}
      />
      <nav>
        <ul className="flex mr-8 my-3	">
          <li>
            <a
              href="#"
              className="mr-4 text-white hover:border-b  hover:border-white 	"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-white hover:border-b hover:border-white	"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-white hover:border-b hover:border-white"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-white hover:border-b hover:border-white 	"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

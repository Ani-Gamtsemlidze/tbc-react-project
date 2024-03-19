import { Link } from "react-router-dom";

function Navigation () {
    return (  
          <nav>
        <ul className= "flex mr-8 my-3"	>
          <li>
          <Link to="/"
              className={'mr-4 text-white hover:border-b'}
            >
              Home
            </Link>
          </li>
          <li>
          <Link to="/"
              className="mr-4 text-white hover:border-b hover:border-white	"
            >
              About
            </Link>
          </li>
          <li>
          <Link to="/"
              className="mr-4 text-white hover:border-b hover:border-white"
            >
              Product
            </Link>
          </li>
          <li>
            <Link to="/"
              className="mr-4 text-white hover:border-b hover:border-white 	"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="mr-4 text-white hover:border-b hover:border-white 	"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation ;
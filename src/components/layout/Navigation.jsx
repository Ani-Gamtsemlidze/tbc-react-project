function Navigation () {
    return (  
          <nav>
        <ul className= "flex mr-8 my-3"	>
          <li>
            <a
              href="#"
              className={'mr-4 text-white hover:border-b'}
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
    );
}

export default Navigation ;
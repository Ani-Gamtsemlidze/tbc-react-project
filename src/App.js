import logo from "./images/X-logo.png";
import contentImage from "./images/vegan.png";
import "./App.css";

function App() {
  return (
    <div className="main-container">
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
      <main className="  flex flex-col items-center bg-gray-200	">
        <div className="mt-2">
          <h1 className="text-green-800 text-center text-3xl	">
            Making Vegan Easy
          </h1>
        </div>
        <img
          className="w-96 h-72 object-cover mt-4"
          alt="eating at vegan cafe"
          src={contentImage}
        />
        <div className="m-8">
          <h2 className="text-xl font-bold text-green-800	">
            An Introduction to Vegan Diets
          </h2>
          <div>
            <p className="text-black text-lg  	">
              Veganism is an enormous topic encompassing nutrition, animal
              protection, food politics, and more. In this short piece I’ll
              introduce the concept and explain its vast appeal. The word vegan
              was originally defined as a diet free of meat, dairy products, and
              eggs.
            </p>
            <p className="text-black text-lg my-6  	">
              The term now also refers to any item, from shoes to shampoo, made
              without animal products. Vegan diets offer compelling advantages
              on several fronts. They keep farm animals out of slaughterhouses
              and factory farms.
            </p>{" "}
            <p className="text-black text-lg  	">
              Choosing vegan foods can also benefit your health and protect the
              environment. A careful look at the reasons to go vegan is well
              worth your time. But our objective right now is to quickly cover
              the basics. So let’s keep moving.
            </p>
          </div>
        </div>
      </main>
      <footer className="flex justify-between bg-green-800">
        <div className="flex flex-col m-8">
          <a href="#" className="text-white text-sm">
            წესები და პირობები
          </a>
          <a href="#" className="text-white text-sm mt-2">
            კონფიდენციალურობის პოლიტიკა
          </a>
        </div>
        <form action="/submit" className="m-8">
          <label htmlFor="subscribe" className="text-white">
            Subscribe to our Newsletter:
          </label>
          <div className="mt-2">
            <input
              className="pl-2 rounded-md outline-none"
              type="text"
              id="subscribe"
              name="subscribe"
              placeholder="Email address"
            />
            <button className="text-white text-sm ml-2" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}

export default App;

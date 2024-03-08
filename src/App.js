import logo from "./images/X-Logo.png";
import content_image from "./images/veggies.jpg";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header className="flex justify-between items-center p-4 bg-slate-500	">
        <img alt="X-logo" className="w-6 h-6 object-contain" src={logo} />
        <nav>
          <ul className="flex">
            <li>
              <button className="pr-2	">Home</button>
            </li>
            <li>
              <button className="pr-2	">About</button>
            </li>
            <li>
              <button className="pr-2	">Product</button>
            </li>
            <li>
              <button className="pr-2	">Blog</button>
            </li>
          </ul>
        </nav>
      </header>
      <main
        className="bg-cover bg-no-repeat bg-gradient-to-l	"
        style={{ backgroundImage: `url(${content_image})`, height: "496px" }}
      >
        <div className="absolute top-0 bg-black"></div>
      </main>
    </div>
  );
}

export default App;

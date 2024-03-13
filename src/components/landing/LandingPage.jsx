import contentImage from "../../images/landing/vegan.png";
import VeganismIntro from "./VeganismIntro";

function LandingPage() {
  return (
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
        <VeganismIntro />
      </div>
    </main>
  );
}

export default LandingPage;

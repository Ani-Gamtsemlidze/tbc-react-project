import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Search from "./components/search/Search";
import Products from "./components/products/Products";

import item1 from "../src/images/products/item-1.jpg"
import item2 from "../src/images/products/item-2.jpg"
import item3 from "../src/images/products/item-3.jpg"
import item4 from "../src/images/products/item-4.jpg"


function App() {
  return (
    
    <div className="flex min-h-screen flex-col ">
      <Header />
      <Search />

      <div className="flex flex-1 max-h-96 overflow-y-scroll justify-start bg-slate-500 flex-wrap">

      <Products title="Headphones" description="Experience unparalleled audio quality and freedom 
      with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
      these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
      img={item1} />
      <Products title="sunglasses" description="Experience unparalleled audio quality and freedom 
      with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
      these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
      img={item2}  />
      <Products title="sunglasses" description="Experience unparalleled audio quality and freedom 
      with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
      these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
      img={item3}  />
      <Products title="sunglasses" description="Experience unparalleled audio quality and freedom 
      with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
      these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
      img={item4}  />
      <Products title="sunglasses" description="Experience unparalleled audio quality and freedom 
      with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
      these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
      img={item4}  />
      <Products title="sunglasses" description="Experience unparalleled audio quality and freedom 
      with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
      these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
      img={item4}  />
      <Products title="sunglasses" description="Experience unparalleled audio quality and freedom 
      with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
      these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
      img={item4}  />
 
      </div>
      <Footer />
    </div>
  );
}

export default App;


import React from 'react'
import Header from '../layout/Header'
import Search from '../search/Search'
import Products from '../products/Products'
import Footer from '../layout/Footer'
  

import item1 from "../../images/products/item-1.jpg"
import item2 from "../../images/products/item-2.jpg"
import item3 from "../../images/products/item-3.jpg"
import item4 from "../../images/products/item-4.jpg"
import item5 from "../../images/products/item-5.jpg"

function HomePage() {
  return (
<div className="flex min-h-screen flex-col justify-between ">
<div>
<Header />
<Search />
</div>
<div className=" products flex flex-1 overflow-y-scroll justify-start bg-slate-500 flex-wrap px-8">
<Products title="Headphones" description="Experience unparalleled audio quality and freedom 
with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
img={item1} />
<Products title="Sunglasses" description="Experience unparalleled audio quality and freedom 
with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
img={item2}  />
<Products title="Shoes" description="Experience unparalleled audio quality and freedom 
with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
img={item3}  />
<Products title="Pepsiko" description="Experience unparalleled audio quality and freedom 
with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
img={item4}  />
<Products title="Shoes" description="Experience unparalleled audio quality and freedom 
with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
img={item5}  />
<Products title="Sunglasses" description="Experience unparalleled audio quality and freedom 
with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
img={item4}  />
<Products title="Sunglasses" description="Experience unparalleled audio quality and freedom 
with the SoundWave Pro Wireless Headphones. Designed for music enthusiasts and audiophiles, 
these premium headphones deliver immersive sound, exceptional comfort, and convenient wireless connectivity."
img={item4}  />

</div>
<Footer />
</div>  )
}

export default HomePage



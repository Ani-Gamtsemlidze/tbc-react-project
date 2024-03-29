
import React from 'react'

import Products from '../../components/products/Products'

import { productsData } from '../../data/productsData'


function HomePage() {

  return (
<div className=" products flex flex-1 overflow-y-scroll justify-start bg-gray-200 flex-wrap px-8">
  {productsData.map((product) => (
    <React.Fragment key={product.id}>
    <Products  title={product.title} description={product.description} price={product.price} img={product.img} />
    </React.Fragment>
  ))}


</div>
)
}

export default HomePage



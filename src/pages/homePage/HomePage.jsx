
import React from 'react'

import Products from '../../components/products/Products'


function HomePage({itemsData}) {

  return (
<div className=" products flex flex-1 overflow-y-scroll justify-start bg-gray-200 flex-wrap px-8">
  {itemsData.map((product) => (
    <React.Fragment key={product.id}>
    <Products  title={product.title} description={product.description} price={product.price} img={product.img} />
    </React.Fragment>
  ))}


</div>
)
}

export default HomePage



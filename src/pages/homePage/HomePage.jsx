
import React from 'react'

import Products from '../../components/products/Products'
import Search from '../../components/search/Search'


function HomePage({itemsData, onSort, searchItem, onSearch}) {

  return (
    <>
    <Search onSort={onSort} searchItem={searchItem} onSearch={onSearch} />
      <div className=" products flex flex-1 overflow-y-scroll justify-start bg-gray-200 flex-wrap p-8">
        {itemsData.map((product) => (
          <React.Fragment key={product.id}>
          <Products  title={product.title} description={product.description} price={product.price} img={product.img} />
          </React.Fragment>
        ))}
      </div>

    </>
)
}

export default HomePage



import React from 'react'
import { Flex } from '../Flex'
import ProductCart1 from '../ProductCart/ProductCart1'

function ProductList({products, ...props}) {
  return (
    <Flex flexWrap='wrap' gap="20">
        {
            products.map((item, i) => {
                return(
                    <ProductCart1 key={i} product={item}/>
                )
            })
        }
    </Flex>
  )
}

export default ProductList
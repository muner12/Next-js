import React from 'react'

import {useParams} from "next/navigation";

function ProductDetails({params}:{params:{productId:string}}) {
  return (
    <div>ProductDetails:{params.productId}</div>
  )
}

export default ProductDetails
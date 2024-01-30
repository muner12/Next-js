import React from 'react'

function ReviewDetails({params}:{
  params:{  productId:string,
    reviewId:string,
  }
}) {
  return (
    <div>product:{params.productId}---- review: {params.reviewId}</div>
  )
}

export default ReviewDetails
export default function SingleReview({params}:{
    params:{
        productId:String,
        reviewId:String
    }
}){
    return(<div>
        <h3> Review {params.reviewId} for product {params.productId}</h3>
    </div>)
}
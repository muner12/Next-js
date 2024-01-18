export default function SingleProduct(
    {params}:{params:{
        productId:String,
    }}
    
    ){
        console.log();
    return <div>
        <h3>Product ID:{params.productId}</h3>
    </div>
}
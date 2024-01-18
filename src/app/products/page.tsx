import Link from "next/link";

export default function Products(){
    const productId=100;
    return <div>
        <h4><Link href={"/"}>Home</Link></h4>
        <h1>products</h1>

        <ul>
            <li><Link href={"/products/1"}> Product 1</Link></li>
            <li><Link href={"/products/2"} replace>Product 2</Link></li>
            <li><Link href={"/products/3"}>Product 3</Link></li>
            <li><Link href={`/products/${productId}`}>Product {productId}</Link></li>

        </ul>
    </div>
}
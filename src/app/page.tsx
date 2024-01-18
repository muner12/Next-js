import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <ul>
        <li><Link href={"/products"}>Products</Link></li>
      </ul>

    </div>
  )
}

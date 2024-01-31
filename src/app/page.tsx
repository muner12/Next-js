"use client"
import Link from 'next/link'




export default function Home() {
  return (
    <div className='w-full'>
      

      <div>

      <ul>
        <li><Link href={"/product"}>Product</Link></li>
        <li><Link href={"/docs"}>Docs</Link></li>
      </ul>

      </div>

    </div>
  )
}

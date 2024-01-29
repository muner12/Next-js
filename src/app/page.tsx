import Image from 'next/image'
import Link from 'next/link'
import Post from './components/post/post'

export default function Home() {
  return (
    <div className='w-full'>
       <h3>Home</h3>
      <div className='flex gap-x-10'>
      <ul>
        <li><Link href={"/products"}>Products</Link></li>
      </ul>
      </div>

      <div>

        <Post/>
      </div>
     
      
     

    </div>
  )
}

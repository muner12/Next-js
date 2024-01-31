import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='w-full text-4xl bg-blue-300 rounded '><Link href={"/"}>Home</Link></h1>
        <ul>

            <li>Proudct 1</li>
            <li>Proudct 2</li>
            <li>Proudct 3</li>
            <li>Proudct 4</li>
        </ul>
    </div>
  )
}

export default page
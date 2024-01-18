"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AuthLayout(
    {children}:{children:React.ReactNode}
    ){
        //write Code here
        const navLink=[{
            name:"Register",
            href:"/register"
        },{
            name:"Login",
            href:"/login"
        },{
            name:"forg",
            href:"/forg"
        }]
        const pathname=usePathname();
    return(<>
    <div>
        {
            navLink.map(link=>{
                let isActive=pathname.startsWith(link.href);
                return <Link className={isActive?"font-bold mr-4":"text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
            })
        }
        {
            children
        }
    </div>
    </>)
}
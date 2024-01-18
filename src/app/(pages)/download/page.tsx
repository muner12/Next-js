"use client"

import { useRouter } from "next/navigation"

export default function Download(){
    const router=useRouter();
    const clickHandler=()=>{
        router.push("/");
    }
    return <>
    <button onClick={clickHandler} >Download</button>
    </>

}
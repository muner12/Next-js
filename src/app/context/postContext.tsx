"use client"


import React,{useState,createContext} from "react"
interface contextType{
    value:string,
    setValue:React.Dispatch<React.SetStateAction<string>>

}

type postDataTypes={
    id:number,
    title:string,
    des:string,

}
export const PostContext=createContext<undefined | null | string | any>(undefined);
export const PostProvider=({children}:{children:React.ReactNode})=>{

const [post,setPosts]=useState<postDataTypes[]>([
    {id:1,title:"post 1",des:"post description"}
]);

 const addPost=(newpost:postDataTypes)=>{
    setPosts([...post,newpost])

 }

    return <PostContext.Provider value={{post,addPost}}>{
            children
        }</PostContext.Provider>
}

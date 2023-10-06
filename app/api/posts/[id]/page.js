"use client"
import axios from "axios"
import { useEffect, useState } from "react"

const page = ({params: (id)}) => {
    const [error, setError ] = useState(null)
    const [post, setPost ] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            try{
                const data = await axios(`/api/posts/${id}`)
                setPost(data.data)
            }catch(error){
                setError("error fetching post")
            }
        }
        fetchData()
    },[_id])

    if(error){
        return (
            <div className="flex flex-col items-center justify-center w-full h-full mt-20 ">
                <h1 className="text-4xl font-bold ">Error</h1>
                <p className="text-xl mt-10 text-gray-500  md:w-1/2 text-center px-10 ">{error}</p>
            </div>
        )
    }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-20 ">
        <img src={post.img} className="w-full h-96 object-cover object-center " alt={post.title}></img>
        <div className="flex flex-col items-center justify-center w-full mt-20 ">
            <h1 className="text-4xl font-bold text-center md:text-left ">{post.title || "no title found for this post"}</h1>
        </div>
    </div>
  )
}

export default page

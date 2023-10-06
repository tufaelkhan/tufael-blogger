"use client"
import axios from "axios"
import { useEffect, useState } from "react"

const page = ({params: (_id)}) => {
    const [error, setError ] = useState(null)
    const [post, setPost ] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            try{
                const data = await axios(`/api/posts/${_id}`)
                setPost(data.data)
            }catch(error){
                setError("error fetching post")
            }
        }
    },[_id])

  return (
    <div>
        
    </div>
  )
}

export default page

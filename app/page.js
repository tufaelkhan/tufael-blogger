"use client"
import BlogCard from '../component/cards/BlogCard'
import { useState, useEffect, useContext } from 'react'
import PostContext from '../context/PostContext'
import axios from 'axios'
import Tag from '../component/cards/Tag'

export default function Home() {
  const [ posts , setPosts ] = useState([])
  const [ selectedTags, setSelectedTags ] = useState([])
  const [ error, setError ] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await axios.get('/api/posts')
        setPosts(data.data)
      }catch(error){
        setError('data not fetching')
      }
    }
  },[])

  return (
    <div>
      
    </div>
  )
}

"use client"
import BlogCard from '../component/cards/BlogCard'
import { useState, useEffect, useContext } from 'react'
import PostContext from '../context/PostContext'
import axios from 'axios'
import Tag from '../component/cards/Tag'

export default function Home() {
  const [ posts , setPosts ] = useState([
    {
      title:'new technology learn',
      subtitle: 'here is learn some next.js and mongoose',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
      tag: 'react.js',
    }
  ])
  const [ selectedTags, setSelectedTags ] = useState([])
  const [ error, setError ] = useState(null)

  // useEffect(()=>{
  //   async function fetchData(){
  //     try{
  //       const data = await axios.get('/api/posts')
  //       setPosts(data.data)
  //     }catch(error){
  //       setError('data not fetching')
  //     }
  //   }
  // },[])

  if(posts?.length === 0){
    return <div className='text-center'>no post found...</div>
  }
  // if(error){
  //   return (
  //     <div className='text-center text-4xl mt-10'>
  //       <img src='#' alt='error' className='w-96'/>
  //     </div>
  //   )
  // }


  return (
    <main className='min-h-screen p-10 lg:p-20 '>
      <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex flex-col justify-center items-center uppercase tracking-widest h-96 '>
        <span className='text-4xl border-b-4 pb-3 font-bold'>
          Md. Tufael Khan Web Dev Blog
        </span>
      <p className='text-lg mt-10 '>Like, share and subscribe for more content</p>
      </h2>
      <h2 className='flex flex-wrap mt-10 gap-4 '>
        {
          [
            ...new Set(
              posts?.map((post, idx) =>{
                return post.tag
              })
            )
          ].map(tag =>{
            return <div>{tag}</div>
          })
        }
      </h2>
    </main>
  )
}

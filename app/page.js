"use client"
// import BlogCard from '../component/cards/BlogCard'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Tag from '../component/cards/Tag'
import { BlogCard } from '@/component/cards/BlogCard'
import PostContext from '@/context/PostContext'

export default function Home() {
  const [ posts , setPosts ] = useState([ ])
  const [ selectedTags, setSelectedTags ] = useState([])
  const [ error, setError ] = useState(null)

  const { setPosts:postContextFunc } = useContext(PostContext)

  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await axios.get('/api/posts')
        console.log(data);
        setPosts(data.data)
        postContextFunc(data.data)
      }catch(error){
        setError('data not fetching')
      }
    }
    fetchData()
  },[])

  if(posts?.length === 0){
    return <div className='text-center'>no post found...</div>
  }
  if(error){
    return (
      <div className='text-center text-4xl mt-10'>
        <img src='https://img.freepik.com/premium-vector/window-operating-system-error-warning-dialog-window-popup-message-with-system-failure-flat-design_812892-54.jpg' alt='error' className='w-96 h-96 object-cover'/>
      </div>
    )
  }


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
          ].map((tag, idx) =>{
            return (
              <Tag key={tag} tag={tag} isSelected={selectedTags.includes(tag)} setSelectedTags={setSelectedTags}/>
            )
          })
        }
        {
          selectedTags?.length !== 0 && (
            <button
            onClick={()=>setSelectedTags([])}
            className='bg-red-500 text-white py-2 px-4 rounded-md '>clear</button>
          )
        }
      </h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
{
        selectedTags?.length !== 0 && posts?.filter((post) =>{
          return selectedTags.includes(post.tag)
        }).map(post => {
          return (
            <BlogCard tag={post?.tag} title={post?.title} subtitle={post?.desc} img={post?.img}  />
          )
        })
      }
      {
        selectedTags?.length === 0 && posts?.map(post => {
          return (
            <BlogCard tag={post?.tag} title={post?.title} subtitle={post?.desc} img={post?.img}  />
          )
        })
      }
</div>
    </main>
  )
}

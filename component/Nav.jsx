import Link from 'next/link'
import React, { useState } from 'react'

export const Nav = ({posts}) => {
    const [ filter, setFilter ] = useState('')

    const handlePostClick = () =>{
        setFilter('')
    }

    const filterPosts = filter ? posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase())) : []

  return (
    <nav className='px-16 mt-10 flex justify-between items-center flex-wrap'>
        <h1 className='text-4xl font-bold text-gray-800 p-4 mx-auto md:mx-0 '>
            tufael khan web dev
        </h1>
        <div className="relative mx-auto md:mx-0 ">
        <input type='text'
        className='rounded-lg border-2 border-gray-200 focus:outline-none'
        >

        </input>
        </div>
    </nav>
  )
}

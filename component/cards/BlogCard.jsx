import Link from 'next/link'
import React from 'react'

export const BlogCard = ({ tag, title, img, id}) => {
  return (
    <div>BlogCard
        <Link href={`/post/${id}`}>
            <div className='rounded-lg object-cover'>
                <img src={img} alt={title} className='rounded-t-lg object-cover h-40 w-full ' />
            </div>
        </Link>
    </div>
  )
}

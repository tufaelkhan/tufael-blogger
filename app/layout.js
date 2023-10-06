"use client"
import PostContext from '@/context/PostContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Nav } from '@/component/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tufael web dev blog',
  description: 'Best blog for web development',
}

export default function RootLayout({ children }) {
  const [ posts, setPosts ] = useState([])
  return (
      <PostContext.Provider value={{
        posts,
        setPosts,
      }}>
    <html lang="en">
      <body className={inter.className}>
      <Nav posts={posts} />
        {children}
        </body>
    </html>
      </PostContext.Provider>
  )
}

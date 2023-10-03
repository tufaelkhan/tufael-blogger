"use client"
import BlogCard from '../component/cards/BlogCard'
import { useState, useEffect, useContext } from 'react'
import PostContext from '../context/PostContext'
import axios from 'axios'
import Tag from '../component/cards/Tag'

export default function Home() {
  const [ posts , setPosts ] = useState([])
  const [ selectedTags, setSelectedTags ] = useState([])
  return (
    <div>
      
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'



const AllBlogs = () => {

const [ blogs, setBlogs ] = useState([])
const [ hasError, setHasError ] = useState(false)

const { id } = useParams()

// 
console.log('All Blogs', useParams())



// Accessing Blogs
useEffect(() => {

  const getData = async () => {
    try {
      const { data } = await axios.get('/api/blog/')
      console.log(data)
      setBlogs(data)
    } catch (error) {
      setHasError(true)
      console.log(hasError)
    }
  }
  getData()
}, [])



// Accessing Specific Blog

useEffect(() => {
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`)
      setBlogs(data)
      console.log(data)
    } catch (error) {
      setHasError(true)
    }
  }
  getBlogs()
}, [id]) 


return (
<>
  <div className="blog-page fade-in">

    <div className="blog-box">
      <p className="blog-msg">Want to post something on our site? Login or sign up for an account! Otherwise click on a post to read more.</p>

{/* Blog Card */}
    {blogs.map(blog => {
      console.log(blog)
      return (
        <>
          <Link to={`/blog/${blog.id}`}>
            <h2 className="single-blog-title">{blog.title}</h2>
          </Link>

        </>
      )
    })}

    </div> 

  </div>
</>
)
}


export default AllBlogs
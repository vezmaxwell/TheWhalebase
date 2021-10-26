import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'



const SingleBlog = () => {

  const history = useHistory()

  const [ blog, setBlog ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()

  console.log('Single Blog', useParams())
  console.log('blog data', blog)


// Accessing Specific Whale

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await axios.get(`/api/blog/${id}`)
        setBlog(data)

      } catch (error) {
        setHasError(true)
        console.log(hasError)
      }
    }
    getBlog()
  }, [id, hasError]) 


  const handleDelete = async () => {
    try {
      await axios.delete(
        `/api/blog/${id}`, { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }}
      )
      history.push('/api/blog/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <div className="single-blog-page fade-in">
    <div className="single-blog-container">
      <div className="blog-card">

        <h2 className="blog-title">{blog.title}</h2>

        <div className="blog-btns">
          <button onClick={handleDelete} className="delete-btn form-button">Delete Post</button>
          <button className="delete-btn form-button">Edit Post</button>
        </div>

        
        <img className="blog-img" src={blog.image} alt="" />
        {/* <h4 className="blog-owner">Written by {blog.owner}</h4> */}

        <h3 className="blog-heading">{blog.heading_1}</h3>
        <p className="blog-section">{blog.section_1}</p>
        <h3 className="blog-heading">{blog.heading_2}</h3>
        <p className="blog-section">{blog.section_2}</p>
        <h3 className="blog-heading">{blog.heading_3}</h3>
        <p className="blog-section">{blog.section_3}</p>




      </div>
    </div>
  </div>
  )

}


export default SingleBlog
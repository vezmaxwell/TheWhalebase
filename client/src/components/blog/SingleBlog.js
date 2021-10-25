import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const SingleBlog = () => {

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

  return (
  <>
    <div className="single-blog-page">
      <div className="blog-card">

        <p>SINGLE BLOG PAGE</p>

        <h2>{blog.title}</h2>
        <img src={blog.image} alt="" />
        <h3 className="blog-heading">{blog.heading_1}</h3>
        <p className="blog-section">{blog.section_1}</p>
        <h3 className="blog-heading">{blog.heading_2}</h3>
        <p className="blog-section">{blog.section_2}</p>
        <h3 className="blog-heading">{blog.heading_3}</h3>
        <p className="blog-section">{blog.section_3}</p>
        <h4 className="blog-owner">{blog.owner}</h4>


      </div>
    </div>
  </>
  )

}


export default SingleBlog
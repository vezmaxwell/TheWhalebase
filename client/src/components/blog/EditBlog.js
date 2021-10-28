import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import ImageUpload from '../helpers/ImageUpload'

const EditBlog = () => {

  const history = useHistory()
  const { id } = useParams()
  console.log('id params', id)

  const [ blog, setBlog ] = useState({
    title: '',
    image: '',
    heading_1: '',
    section_1: '',
    heading_2: '',
    section_2: '',
    heading_3: '',
    section_3: '',
  })

  console.log('blog', blog)
  console.log()
  
  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await axios.get(`/api/blog/${id}`)
        setBlog(data)
        console.log('data', data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlog()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  const handleChange = (event) => {
    const newObj = { ...blog, [event.target.name]: event.target.value }
    setBlog(newObj)
  }

  const handleImageUrl = (url) => {
    try {
      setBlog({ ...blog, image: url })
    } catch (error) {
      console.log('blog edit img error', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put( `/api/blog/${id}`, blog, { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}`} } )
      history.push(`/blog/${id}`)
    } catch (error) {
      console.log('put error', error)
    }
  }



  return (
    <div className="blog-form-page form-page">

      <div className="form-container blog-container center fade-in">
        
        <h1 className="form-header">Edit your post</h1>


        <form onSubmit={handleSubmit} className="form blog-form">

          <div className="formfield">
            <label htmlFor="title">Title of your blog</label>
            <input onInput={handleChange} type="text" name="title" value={blog.title} id="title" placeholder="* What is your blog about?" />
          </div>

          <div className="formfield">
            <ImageUpload name="image" handleImageUrl={handleImageUrl} />
          </div>
          
          <div className="formfield">
            <label htmlFor="heading_1">Heading</label>
            <input onInput={handleChange} type="text" name="heading_1" value={blog.heading_1} id="heading_1" placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_1">Paragraph</label>
            <textarea onInput={handleChange} type="text" name="section_1" value={blog.section_1}  id="section_1" placeholder="* Place your text here..." />
          </div>

          <div className="formfield">
            <label htmlFor="heading_2">Heading</label>
            <input onInput={handleChange} type="text" name="heading_2" value={blog.heading_2}  id="heading_2" placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_2">Paragraph</label>
            <textarea onInput={handleChange} type="text" name="section_2" value={blog.section_2}  id="section_2" placeholder="Place your text here..." />
          </div>

          <div className="formfield">
            <label htmlFor="heading_3">Heading</label>
            <input onInput={handleChange} type="text" name="heading_3" value={blog.heading_3} id="heading_3" placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_3">Paragraph</label>
            <textarea onInput={handleChange} type="text" name="section_3" value={blog.section_3} id="section_3" placeholder="Place your text here..." />
          </div>


          <div className="formfield">
            <button className="form-button">Submit Changes</button>
          </div>

        </form>
      </div>
    </div>
  )

}

export default EditBlog 
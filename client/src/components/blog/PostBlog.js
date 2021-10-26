import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'
import ImageUpload from '../helpers/ImageUpload'

// import userIsAuthenticated from '../helpers'

const PostBlog = () => {

  const history = useHistory()

  // const { latestPost } = useParams()

  const [ blogPost, setBlogPost ] = useState({
    title: '',
    image: '',
    heading_1: '',
    section_1: '',
    heading_2: '',
    section_2: '',
    heading_3: '',
    section_3: '',
    owner: ''
  })

  const handleChange = (event) => {
    const newObj = { ...blogPost, [event.target.name]: event.target.value }
    setBlogPost(newObj)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/blog/', blogPost,
      { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` } }
      )
      history.push('/api/blog/')
    } catch (error) {
      console.log('Blog Error ->', error)
    }
  }

  const handleImageUrl = (url) => {
    try {
      setBlogPost({ ...blogPost, image: url })
    } catch (error) {
      console.log('Image Error', error)
    }
  }

  return (
    <div className="blog-form-page form-page">

      <div className="form-container blog-container center fade-in">
        
        <h1 className="form-header">Post something here!</h1>


        <form onSubmit={handleSubmit} className="form blog-form">

          <div className="formfield">
            <label htmlFor="title">Title of your blog</label>
            <input onInput={handleChange} type="text" name="title" id="title" value={blogPost.title} placeholder="* What is your blog about?" />
          </div>

          <div className="formfield">
            <ImageUpload value={blogPost.image} name="image" handleImageUrl={handleImageUrl} />
          </div>
          
          <div className="formfield">
            <label htmlFor="heading_1">Heading</label>
            <input onInput={handleChange} type="text" name="heading_1" id="heading_1" value={blogPost.heading_1} placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_1">Paragraph</label>
            <textarea onInput={handleChange} type="text" name="section_1" id="section_1" value={blogPost.section_1} placeholder="* Place your text here..." />
          </div>

          <div className="formfield">
            <label htmlFor="heading_2">Heading</label>
            <input onInput={handleChange} type="text" name="heading_2" id="heading_2" value={blogPost.heading_2} placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_2">Paragraph</label>
            <textarea onInput={handleChange} type="text" name="section_2" id="section_2"  value={blogPost.section_2} placeholder="Place your text here..." />
          </div>

          <div className="formfield">
            <label htmlFor="heading_3">Heading</label>
            <input onInput={handleChange} type="text" name="heading_3" id="heading_3" value={blogPost.heading_3} placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_3">Paragraph</label>
            <textarea onInput={handleChange} type="text" name="section_3" id="section_3" value={blogPost.section_3} placeholder="Place your text here..." />
          </div>


          <div className="formfield">
            <button className="form-button">Submit Post</button>
          </div>

        </form>
      </div>
    </div>
  )


}

export default PostBlog
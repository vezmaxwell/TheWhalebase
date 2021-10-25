import React, { useState } from 'react'

const PostBlog = () => {

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

  return (
    <div className="form-page">

      <div className="form-container center fade-in">
        
        <h1 className="form-header">Post something here!</h1>


        <form className="form">
          
          <div className="formfield">
            <label htmlFor="heading_1">Heading</label>
            <input type="text" name="heading_1" id="heading_1" value={blogPost.heading_1} placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_1">Paragraph</label>
            <textarea type="text" name="section_1" id="section_1"  placeholder="Place your text here..." />
          </div>

          <div className="formfield">
            <label htmlFor="heading_2">Heading</label>
            <input type="text" name="heading_2" id="heading_2" value={blogPost.heading_2} placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_2">Paragraph</label>
            <textarea type="text" name="section_2" id="section_2"  placeholder="Place your text here..." />
          </div>

          <div className="formfield">
            <label htmlFor="heading_3">Heading</label>
            <input type="text" name="heading_3" id="heading_3" value={blogPost.heading_3} placeholder="What is this section about?" />
          </div>

          <div className="formfield">
            <label htmlFor="section_3">Paragraph</label>
            <textarea type="text" name="section_3" id="section_3"  placeholder="Place your text here..." />
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
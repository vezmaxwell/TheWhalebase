import React from 'react'
import 'dotenv/config'
import axios from 'axios'


const ImageUpload = ({ value, image, handleImageUrl }) => {

  const url = process.env.REACT_APP_CLOUDINARY_URL
  const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
  console.log(url, preset)

  const handleChange = async (event) => {
    const dataToSend = new FormData()
    dataToSend.append('file', event.target.files[0])
    dataToSend.append('upload_preset', 'z8ot9oay')
    const { data } = await axios.post('https://api.cloudinary.com/v1_1/dztdzj6si/image/upload', dataToSend)
    handleImageUrl(data.url)
  }

  return (
    <>
      <label htmlFor={image}>Blog Image</label>
      <input type="file" name={image} className="input" onChange={handleChange} />
    </>
  )

}

export default ImageUpload
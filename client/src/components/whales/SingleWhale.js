import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const SingleWhale = () => {

  const [ whale, setWhale ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()


  useEffect(() => {
    const getWhale = async () => {
      try {
        const { data } = await axios.get(`/api/whales/${id}`)
        setWhale(data)
        console.log('data', data)
      } catch (error) {
        setHasError(true)
        console.log(hasError)
      }
    }
    getWhale()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  if (!whale.status) return null
  
  console.log('status', whale.status.status)
  console.log(whale.status.status_description)

  return (
  <>

      {/* Whale Card */}
      <div className="whalecard single-whale-container fade-in">

        <div className="whalename">
          <h2 className="single-whale-title name">{whale.name}</h2>
          <h3 className="italic sci-name">{whale.scientific_name}</h3>
        </div>

          

          <div className="img-info">
            <img className="single-whale-img" src={whale.image} alt={whale.name} />

            <div className="whale-info-container">
              <h4 className="info"><span className="bold info-header">Regions they roam:</span><br/> {whale.regions}</h4>
              <h4 className="info"><span className="bold info-header">How big they can get:</span><br/> {whale.size}</h4>
              <h4 className="info status"><span className="bold info-header">Conservation status: </span>{whale.status.status}</h4>
              <p className="info status_des italic">{whale.status.status_description}</p>
            </div>

          </div>
          
          <div className="whale-description-container">
            <h4 className="single-whale-title">{whale.title_1}</h4>
            <p className="single-whale-info">{whale.info_1}</p>
            <h4 className="single-whale-title">{whale.title_2}</h4>
            <p className="single-whale-info">{whale.info_2}</p>
            <h4 className="single-whale-title">{whale.title_3}</h4>
            <p className="single-whale-info">{whale.info_3}</p>
          </div>

        </div>
{/* 
    {comments.map(comment => {
      console.log(comment)
      return (
        comment.owner
      )
    })} */}

  </>
  )

}


export default SingleWhale
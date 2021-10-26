import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const SingleWhale = () => {

  const [ whale, setWhale ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()

  // const [ comments, setComments ] = useState([])

  // console.log('Single whale', useParams())


// Accessing Specific Whale

  useEffect(() => {
    const getWhale = async () => {
      try {
        const { data } = await axios.get(`/api/whales/${id}`)
        setWhale(data)
        // console.log('whale data', data)
      } catch (error) {
        setHasError(true)
        // console.log(hasError)
      }
    }
    getWhale()
  }, [id, hasError]) 


// Accessing Comments

  // useEffect(() => {
  //   const getComments = async () => {
  //     try {
  //       const { data } = await axios.get('/api/comments/')
  //       setComments(data)
  //       console.log(data)
  //     } catch {
  //       setHasError(true)
  //       console.log('comments error', hasError)
  //     }
  //   }
  //   getComments()
  // }, [])

  return (
  <>

      {/* Whale Card */}
      <div className="whalecard fade-in">

        <div className="whalename">
          <h2 className="single-whale-title name">{whale.name}</h2>
          <h3 className="italic">{whale.scientific_name}</h3>
        </div>

          

          <div className="img-info">
            <img className="single-whale-img" src={whale.image} alt={whale.name} />

            <div className="whale-info-container">
              <h4 className="info"><span className="bold">Regions they roam:</span><br/> {whale.regions}</h4>
              <h4 className="info"><span className="bold">How big they can get:</span><br/> {whale.size}</h4>
              {/* <h4 className="info status"><span className="bold">Conservation status: </span>{whale.status.status}</h4>
              <p className="info status_des italic">{whale.status.status_description}</p> */}
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
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const SingleWhale = () => {

  const [ whale, setWhale ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()

  // const [ comments, setComments ] = useState([])

  console.log('Single whale', useParams())


// Accessing Specific Whale

  useEffect(() => {
    const getWhale = async () => {
      try {
        const { data } = await axios.get(`/api/whales/${id}`)
        setWhale(data)
      } catch (error) {
        setHasError(true)
        console.log(hasError)
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
  //     } catch {
  //       setHasError(true)
  //       console.log(hasError)
  //     }
  //   }
  //   getComments()
  // }, [])

  return (
  <>
    <div className="container">
      <div className="whale-card">

        {/* Whale Card */}
        
          <h2>{whale.name}</h2>
          <h3>{whale.scientific_name}</h3>
          <h4>{whale.regions}</h4>
          <h4>{whale.size}</h4>
          {/* <h4>{whale.status.status}</h4>
          <p>{whale.status.status_description}</p> */}
          <img src={whale.image} alt={whale.name} />
          <h4>{whale.title_1}</h4>
          <p>{whale.info_1}</p>
          <h4>{whale.title_2}</h4>
          <p>{whale.info_2}</p>
          <h4>{whale.title_3}</h4>
          <p>{whale.info_3}</p>


      </div>
    </div>

    {/* {comments.map(comment => {
      console.log(comment)
      return (
        comment.owner
      )
    })} */}

  </>
  )

}


export default SingleWhale
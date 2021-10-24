import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'



const AllWhales = () => {

const [ whales, setWhales ] = useState([])
const [ hasError, setHasError ] = useState(false)

const { id } = useParams()

// 
console.log('All whales', useParams())



// Accessing Whales API
useEffect(() => {

  const getData = async () => {
    try {
      const { data } = await axios.get('/api/whales/')
      console.log(data)
      setWhales(data)
    } catch (error) {
      setHasError(true)
    }
  }
  getData()
}, [])



// Accessing Specific Whale

useEffect(() => {
  const getWhales = async () => {
    try {
      const { data } = await axios.get(`/api/whales/${id}`)
      setWhales(data)
      console.log(data)
    } catch (error) {
      setHasError(true)
    }
  }
  getWhales()
}, [id]) 


return (
<>
  <h1 className="all-whales-header">All Whales</h1>
    <div className="all-whales-container">


    
  {/* Whale Card */}
      {whales.map(whale => {
        console.log(whale)
        return (
          <>
          <div className="whale-card">

            <div className="whaleimgbox">
              <img className="whalecard-img" src={whale.image} alt={whale.name} />
            </div>

            <Link to={`/whales/${whale.id}`}>
              <h2 className="whalecard-name">{whale.name}</h2>
            </Link>
          </div>
          </>
        )
      })}

    </div> 

</>
)

}


export default AllWhales
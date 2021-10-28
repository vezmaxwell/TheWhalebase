import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'



const AllWhales = () => {

const [ whales, setWhales ] = useState([])
const [ hasError, setHasError ] = useState(false)

const [ search, setSearch ] = useState( { searchTerm: '' } )
const [ filteredWhales, setFilteredWhales ] = useState([])

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
      console.log(hasError)
    }
  }
  getData()
}, [hasError])


useEffect(() => {
  const regexSearch = new RegExp(search.searchTerm, 'i')
  setFilteredWhales(whales.filter(whale => {
    return regexSearch.test(whale.name)
  }))
}, [setFilteredWhales, search, whales])


  const handleFilteredWhales = (event) => {
    const newObj = { ...whales, [event.target.name]: event.target.value }
    console.log(newObj)
    setSearch(newObj)
  }



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
<div className="all-whale-page">

    <div className="search">
      <input onChange={handleFilteredWhales} value={search.searchTerm} name="searchTerm" type="text" placeholder="Search Whales" />
    </div>
      
    <div className="all-whales-container fade-in">



  {/* Whale Card */}
      {
        (filteredWhales.length > 0 ?
        filteredWhales : whales).map(whale => {
          console.log(whale)
          return (
            <>
            <div key={whale.id} className="whale-card fade-in">
  
              <Link to={`/whales/${whale.id}`}>
                <div className="whaleimg-box">
                  <img className="whalecard-img" src={whale.image} alt={whale.name} />
                </div>
                <h2 className="whalecard-name">{whale.name}</h2>
              </Link>
            </div>
            </>
          )
        })
      }

    </div> 

</div>
)

}


export default AllWhales
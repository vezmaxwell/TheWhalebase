import React from 'react'
import { useHistory } from 'react-router-dom'

const Loading = () => {

  const history = useHistory()

  setTimeout(() => {
    return history.push('/')
  }, 2000)

  return (
    <>
      <div className="loading">
        <div className="loading-img"></div>
      </div>
    </>
  )

}

export default Loading
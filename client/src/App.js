import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import AllWhales from './components/whales/AllWhales'
import SingleWhale from './components/whales/SingleWhale'

import AllBlogs from './components/blog/AllBlogs'
import SingleBlog from './components/blog/SingleBlog'

import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'

import Home from './components/common/Home'
import Nav from './components/common/Nav'

function App() {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/whales')
      console.log('APP PAGE', data)
    }
    getData()
})

  return (
    <BrowserRouter>
    <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth/login">
            <Login />
          </Route>
        <Route exact path="/auth/register">
          <SignUp />
        </Route>
        <Route exact path="/whales">
          <AllWhales />
        </Route>
        <Route path="/whales/:id">
          <SingleWhale />
        </Route>
        <Route exact path="/blog">
          <AllBlogs />
        </Route>
        <Route exact path="/blog/:id">
          <SingleBlog />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Greetings } from "./pages/Greetings"
import { About } from "./pages/About"
import { Error } from "./pages/Error"
import { Posts } from "./pages/Posts"
import { Layout } from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Greetings />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/posts" element={<Posts />}/>
        </Route>
          <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
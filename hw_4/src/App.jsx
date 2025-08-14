import { useState } from 'react'
import { Weather } from './components/Weather'
import './App.scss'
import weatherDB from "./db/weather.json"

const App = () => {
  return <>
    <h1>Search weather</h1>
    <Weather />
  </>
}

export default App

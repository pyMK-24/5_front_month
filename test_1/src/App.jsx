import React from 'react'
import "./App.css"
import { Quiz } from './components/Test'
import tests from "./db/Tests.json"

export const App = () => {
  return (
    <div>
      <h1>Test</h1>
      {tests.map((testItem, index) => (
        <Quiz
          key={index}
          question={testItem.question}
          options={testItem.options}
          answer={testItem.answer}
        />
      ))}
    </div>
  )
}

export default App
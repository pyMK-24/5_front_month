import React from 'react'
import { Counter } from './components/Counter'
import { FilteredList } from './components/FilteredList'

export const App = () => {
  return (
    <div>
      <Counter />
      <FilteredList />
    </div>
  )
}

export default App
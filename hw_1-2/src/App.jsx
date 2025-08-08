import './App.scss'
import { UserList } from './components/cards/Userlist'
import users from "./db/users.json"

const App = () => {
  return (
    <>
      <h1 id='title'>User Cards</h1>
      <UserList user={users}/>
    </>
  )
}

export default App

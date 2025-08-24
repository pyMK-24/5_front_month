import { UserCard } from "./Usercard"
import users from "../../db/users.json"

export const UserList = () => {
  return (
    <div className="user_list">
        {users.filter(user => user.active).map(user => (
            <UserCard key={user.id} name={user.name} age={user.age} city={user.city} active={user.active} />
        ))}
    </div>
  )
}

export const UserCard = ({ name, age, city, active }) => {
  return (
    <div className="user_card">
      <h1>{name}</h1>
      <span>{age}</span>
      <p>{city}</p>
      <p>{active ? "Active": "Inactive"}</p>
    </div>
  )
}
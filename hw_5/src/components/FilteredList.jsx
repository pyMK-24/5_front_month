import React, { useState } from 'react'

export const FilteredList = () => {
    console.log("FilteredList")
    const [filter, setFilter] = useState('')

    const ListUsers = [
        {
            id: 1, name: 'Alice'
        },
        {
            id: 2, name: "John",
        },
        {
            id: 3, name: "Arthur"
        }
    ]

    let filteredListUsers

    if (filter === "") {
        filteredListUsers = []
    } else {
        filteredListUsers = UseMemo(ListUsers.filter(user => user.name.toLowerCase().includes(filter.toLowerCase())))
    }


    return (
        <div>
            <input type="text" value={filter} placeholder='search by name' onChange={(e) => setFilter(e.target.value)}/>
            {filteredListUsers.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    )
}

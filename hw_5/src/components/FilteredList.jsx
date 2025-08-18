import React, { useState, useMemo, useCallback } from 'react';

export const FilteredList = () => {
    console.log("FilteredList")
    const [filter, setFilter] = useState('')

    const [users, setUsers] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Arthur' }
    ])

    const filteredUsers = useMemo(() => {
            return users.filter(user =>
                user.name.toLowerCase().includes(filter.toLowerCase())
            );
        }, [users, filter])


    return (
        <div>
            <input type="text" value={filter} placeholder='search by name' onChange={(e) => setFilter(e.target.value)}/>
            {filteredUsers.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    )
}

import React, { useState, useMemo, useCallback } from 'react';

export const FilteredList = () => {
    console.log("FilteredList")
    const [filter, setFilter] = useState('')
    const [newUser, setNewUser] = useState('')


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

    const addUser = useCallback(() => {
        if (newUser.trim() !== '') {
            const userId = users.length ? users[users.length - 1].id + 1 : 1
            const newUserObj = { id: userId, name: newUser.trim() };
            setUsers(prevUsers => [...prevUsers, newUserObj]);
            setNewUser('');
        }
    },[newUser, users])

    return (
        <div>
            <input type="text" value={filter} placeholder='search user' onChange={(e) => setFilter(e.target.value)}/>
            {filteredUsers.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
            <input type="text" value={newUser} placeholder='add user' onChange={(e) => setNewUser(e.target.value)}/>
            <button onClick={addUser}>Добавить пользователя</button>
        </div>
    )
}

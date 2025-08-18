import React, { useCallback, useState } from "react"
import { ChildButton } from "./ChildButton"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div>
            <p>Счётчик: {count}</p>
            <ChildButton onClick={handleClick} label="+" />
        </div>
    )
}

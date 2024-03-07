import React from 'react'
import { useState } from 'react'
import { Context } from './Context'

const State = (props) => {
    const [num, setNum] = useState(0)

    const plus = () => {
        setNum(num + 1)
    }

    const minus = () => {
        if (num === 0) {
            setNum(0)
        } else {
            setNum(num - 1)
        }
    }
    return (
        <Context.Provider value = {{num, plus, minus}}>
            {props.children}
        </Context.Provider>
    )
}

export default State

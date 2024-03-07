import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action) => {
        if (action.type === "plus") {
            return state + 1
        }
        if (action.type === "minus") {
            return state - 1
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <div className="my-4">
                <h3 className='mt-5'>useReducer</h3>
                <div className="container mt-5 d-flex">
                    <button type="button" className="btn btn-danger mx-2" onClick={()=>{dispatch({type: "minus"})}}>-</button>
                    <div className='mx-3'>
                        {state}
                    </div>
                    <button type="button" className="btn btn-primary mx-2" onClick={()=>{dispatch({type: "plus"})}}>+</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer

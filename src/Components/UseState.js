import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/Context'

const UseState = () => {

  const context = useContext(Context);
  const {num, plus, minus} = context

  useEffect(() => {
    document.title = "React Hooks"
}, [])

  return (
    <div>
      {/* useState */}
      <div className="my-4">
          <div className="container mt-5 d-flex">
            <button type="button" className="btn btn-danger mx-2" onClick={minus}>-</button>
            <div className='mx-3'>
              {num}
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={plus}>+</button>
          </div>
        </div>
    </div>
  )
}

export default UseState

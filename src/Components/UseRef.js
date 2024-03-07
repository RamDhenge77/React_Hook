import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [val, setVal] = useState("")
    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1;
    })
    return (
        <div>
            <h3 className='mt-5'>UseRef:</h3>
            <input type="text" value={val} onChange={(e) =>  setVal(e.target.value) } /><br />
            <h5 className='mt-4'>Render Count {count.current}</h5>
        </div>
    )
}

export default UseRef
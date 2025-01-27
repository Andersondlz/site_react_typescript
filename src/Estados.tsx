import { useState } from 'react'

export const Estados = () =>{
    const [count, setCount] = useState(0)
    const [value, serOutroValor] = useState(1)
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>
                Add
            </button>
            <h1>{count}</h1>1

            <button onClick={() => serOutroValor(value + 1)}>
                Add 
            </button>
            <h1>{value}</h1>
        </div>
    )
}
import React from 'react'
import { useState } from 'react'

export const Contador = ({ initial, step }) => {
    const [counter, setCounter] = useState(initial);

    const increase = ()=> setCounter(counter + step)
    const diminish = ()=> setCounter((count) => count - step)

    return (
        <div>
            <h1>
                Contador: {counter}
                <hr/>
                <button onClick = { increase }>Aumentar</button>
                <button onClick = { diminish } >Disminuir</button>
            </h1>
        </div>
    )
}

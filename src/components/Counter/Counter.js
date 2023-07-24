import { useState } from 'react'
import './Counter.css'

function Counter(){

    const [count, setCount] = useState(0)

    function incrementHandler(){
        setCount(count + 1)
        console.log(count)
    }

    function decrementHandler(){
        setCount(count - 1)
        console.log(count)
    }

    return(
        <div className='counter'>
            <div className="counting">
                <h1> {count} </h1>
            </div>
            <div className="btns">
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter 
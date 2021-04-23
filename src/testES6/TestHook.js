import React, {useState, useEffect} from 'react'

function TestHook() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        {
            /* show title of tab */
        }
      document.title = `you click button ${count} times`
    })
    return (
        <div>
            <p>button clicked ? times</p>
            <button onClick = {()=>setCount(count+1)}>click here</button>
        </div>
    )
}

export default TestHook

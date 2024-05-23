import { useState } from "react"

console.log('Run in background')

const Example = () => {
    const [count, setCount] = useState(0)

    return <h1 onClick={(() => setCount(prev => prev + 1))}>Example {count}</h1>
}

export default Example

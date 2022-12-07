import { useState } from 'react'
import './App.css'
import { InputCounter } from './components/InputCounter/InputCounter'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>LETTER COUNTER</h1>
            <InputCounter />
        </div>
    )
}

export default App

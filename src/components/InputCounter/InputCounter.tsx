import React, {useState, useEffect} from 'react'

export const InputCounter = () => {

    const [count, setCount] = useState<string>('');

    const countLetters = (event: any) => {
        const length = event.target.value;
        setCount(length)
    }

    useEffect(() => {
        setCount(count)
    }, [count])

    return (
        <div>
            <input type="text" onChange={(event) => countLetters(event)}/>
            <p>Letter counter: {count.length}</p>
        </div>
    )
}

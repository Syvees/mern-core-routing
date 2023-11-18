import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {

    const { word } = useParams()

    return (
        <div>
            {
            isNaN(word) 
            ? <p>The word is: {word}</p>
            : <p>The number is: {word}</p>
            }
        </div>
    )

}
export default Word
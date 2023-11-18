import React from 'react'
import { useParams } from 'react-router-dom'

const WordColor = () => {

    const { word, fcolor, bcolor } = useParams()

    return (
        <div style={{color:fcolor, background:bcolor}}>The word is: {word} </div>
        )
}

export default WordColor
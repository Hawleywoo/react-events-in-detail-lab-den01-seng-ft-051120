// Code CoordinatesButton Component Here
import React from 'react'


export default function CoordinatesButton(props){

    const handleClick = (event) => {
        let array = [event.clientX, event.clientY]
        props.onReceiveCoordinates(array)
    }

    return (
        <button onClick={handleClick}>Coords</button>
    )
}
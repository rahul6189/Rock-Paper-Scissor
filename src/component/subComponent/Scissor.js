import React from 'react'
import image from '../../assets/images/scissor.png';

function Scissor() {
    return <span className="image-body">
        <img alt={image} src={image} className="image" />
    </span>
}

export default Scissor

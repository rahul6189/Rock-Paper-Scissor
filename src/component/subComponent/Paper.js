import React from 'react'
import image from '../../assets/images/paper.png';

function Paper() {
    return <span className="image-body">
        <img alt={image} src={image} className="image" />
    </span>
}

export default Paper

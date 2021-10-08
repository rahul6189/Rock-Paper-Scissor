import React from 'react'
import image from '../../assets/images/rock.png';

function Rock() {
    return <span className="image-body">
        <img alt={image} src={image} className="image" />
    </span>
}

export default Rock


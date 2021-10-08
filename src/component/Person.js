import React from 'react'

function Person({ name, score, collection, action }) {

    return (
        <div className="section">
            <h1 className="person-name">{name}</h1>
            {score !== undefined && <span className="score"> score - {score} </span>}
            {action !== undefined && <div className="image-new">
                {collection[action].image}
            </div>}
        </div>
    )
}

export default Person

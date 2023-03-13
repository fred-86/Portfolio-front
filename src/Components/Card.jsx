import React from 'react'
import PropTypes from 'prop-types'
/**
 *  Generic card
 * @param {string} img - image to the card
 * @param {string} title - titleto the card
 * @returns  {React.ReactElement}
 */
export function Card({ img, title }) {
    return (
        <div className="card-container card">
            <div className="card-img">
                <img className="img" src={img} alt={img + ' ' + title} />
            </div>
            <div className="card-title">
                <h2 className="title">{title}</h2>
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

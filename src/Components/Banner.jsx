import React from 'react'
import PropTypes from 'prop-types'

export function Banner({ title }) {
    return (
        <div data-testid="banner-testId" className="banner-wrapper">
            <h1 className="banner-title">{title}</h1>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
}

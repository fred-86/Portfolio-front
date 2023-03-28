import React from 'react'
import PropTypes from 'prop-types'

export function Icon({ item, isOpen }) {
    return (
        <>
            <div className="icon">{item.icon}</div>
            <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link_text"
            >
                {item.name}
            </div>
        </>
    )
}
Icon.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
}

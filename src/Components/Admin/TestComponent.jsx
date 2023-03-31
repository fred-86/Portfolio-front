import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

export function TestComponent({ linksValue }) {
    const [links, setLinks] = useState(
        linksValue.map((link) => ({
            name: link.name,
            link: link.link,
        }))
    )
    const handleLinkChange = (e, index) => {
        const { name, value } = e.target
        const newLinks = [...links]
        newLinks[index] = { ...newLinks[index], [name]: value }
        setLinks(newLinks)
    }
    console.log('linksValue', linksValue)
    return (
        <div>
            {links.map((link, index) => (
                <div key={index}>
                    <TextField
                        label="Link Name"
                        value={link.name}
                        name="name"
                        onChange={(e) => handleLinkChange(e, index)}
                    />
                    <TextField
                        label="Link URL"
                        name="link"
                        value={link.link}
                        onChange={(e) => handleLinkChange(e, index)}
                    />
                </div>
            ))}
        </div>
    )
}

TestComponent.propTypes = {
    linksValue: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            name: PropTypes.string,
        })
    ),
}

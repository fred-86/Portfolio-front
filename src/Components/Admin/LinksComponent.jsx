import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

export function LinksComponent({ linksValue, onChange }) {
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

        onChange(e, index)
    }

    return (
        <>
            {links.map((link, index) => (
                <div className="link-wrapper" key={index}>
                    <TextField
                        label="Link Name"
                        value={link.name}
                        className="link"
                        name="name"
                        onChange={(e) => handleLinkChange(e, index)}
                    />
                    <TextField
                        label="Link URL"
                        name="link"
                        className="link"
                        value={link.link}
                        onChange={(e) => handleLinkChange(e, index)}
                    />
                </div>
            ))}
        </>
    )
}

LinksComponent.propTypes = {
    linksValue: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    onChange: PropTypes.func,
}

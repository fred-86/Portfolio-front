import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const CreateNewPersonModal = ({ open, columns, onClose, onSubmit }) => {
    const [values, setValues] = useState(() =>
        // eslint-disable-next-line react/prop-types
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = ''
            return acc
        }, {})
    )

    const [links, setLinks] = useState([{ name: '', link: '' }])

    const handleSubmit = () => {
        // put your validation logic here
        const data = {
            ...values,
            links,
        }
        onSubmit(data)
        onClose()
    }

    const handleLinkChange = (index, key, value) => {
        const newLinks = [...links]
        newLinks[index][key] = value
        setLinks(newLinks)
    }

    const handleAddLink = () => {
        setLinks([...links, { name: '', link: '' }])
    }

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Create New Account</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {columns.map((column) => (
                            <TextField
                                key={column.accessorKey}
                                label={column.header}
                                name={column.accessorKey}
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        ))}
                        {links.map((link, index) => (
                            <div key={index}>
                                <TextField
                                    label="Link Name"
                                    value={link.name}
                                    onChange={(e) =>
                                        handleLinkChange(
                                            index,
                                            'name',
                                            e.target.value
                                        )
                                    }
                                />
                                <TextField
                                    label="Link URL"
                                    value={link.link}
                                    onChange={(e) =>
                                        handleLinkChange(
                                            index,
                                            'link',
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        ))}
                        <Button onClick={handleAddLink}>Add Link</Button>
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button color="info" onClick={onClose} variant="contained">
                    Cancel
                </Button>
                <Button color="info" onClick={handleSubmit} variant="contained">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

CreateNewPersonModal.propTypes = {
    columns: PropTypes.array,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
}

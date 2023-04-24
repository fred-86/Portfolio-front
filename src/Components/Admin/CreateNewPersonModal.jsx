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
        console.log('data', data)
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
    const handleRemoveLink = (indexToRemove) => {
        setLinks((prevLinks) => {
            const newLinks = [...prevLinks]
            newLinks.splice(indexToRemove, 1)
            return newLinks
        })
    }
    const [previewImage, setPreviewImage] = useState(null)

    const handleRemoveAvatar = () => {
        setPreviewImage(null)
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
                        {columns
                            .filter(
                                (column) =>
                                    column.header !== 'Status' &&
                                    column.header !== 'Liens'
                            )

                            .map((column) => (
                                <div key={column.accessorKey}>
                                    {column.accessorKey === 'avatar' && (
                                        <>
                                            {previewImage != null && (
                                                <div className="field-avatar ">
                                                    <img
                                                        className="field-img"
                                                        src={previewImage}
                                                        alt="aperçu de l'image"
                                                    />
                                                    <span
                                                        className="field-img-delete"
                                                        onClick={() =>
                                                            handleRemoveAvatar()
                                                        }
                                                    >
                                                        supprimer
                                                    </span>
                                                </div>
                                            )}

                                            <div className="field-button">
                                                <span className="button-label">
                                                    Avatar{' '}
                                                </span>
                                                <Button
                                                    variant="contained"
                                                    component="label"
                                                    sx={{
                                                        marginBottom: '1rem',
                                                    }}
                                                >
                                                    Upload
                                                    <input
                                                        hidden
                                                        accept="image/*"
                                                        multiple
                                                        type="file"
                                                        key={column.accessorKey}
                                                        name={
                                                            column.accessorKey
                                                        }
                                                        onChange={(e) => {
                                                            setValues({
                                                                ...values,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .files[0],
                                                            })
                                                            setPreviewImage(
                                                                URL.createObjectURL(
                                                                    e.target
                                                                        .files[0]
                                                                )
                                                            )
                                                        }}
                                                    />
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                    {column.accessorKey !== 'avatar' && (
                                        <TextField
                                            key={column.accessorKey}
                                            label={column.header}
                                            name={column.accessorKey}
                                            onChange={(e) =>
                                                setValues({
                                                    ...values,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    )}
                                </div>
                            ))}

                        {links.map((link, index) => (
                            <div key={index} className="link-wrapper">
                                <TextField
                                    label="Nom du lien"
                                    value={link.name}
                                    className="link"
                                    onChange={(e) =>
                                        handleLinkChange(
                                            index,
                                            'name',
                                            e.target.value
                                        )
                                    }
                                />
                                <TextField
                                    label="Url du lien"
                                    value={link.link}
                                    className="link"
                                    onChange={(e) =>
                                        handleLinkChange(
                                            index,
                                            'link',
                                            e.target.value
                                        )
                                    }
                                />
                                {index > 0 && (
                                    <span
                                        className="delete-link"
                                        onClick={() => handleRemoveLink(index)}
                                    >
                                        supprimer
                                    </span>
                                )}
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

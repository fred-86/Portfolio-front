/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react'
import MaterialReactTable from 'material-react-table'
import PropTypes from 'prop-types'
import {
    Button,
    Box,
    IconButton,
    Tooltip,
    Checkbox,
    FormControlLabel,
} from '@mui/material'
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Email as EmailIcon,
} from '@mui/icons-material'
import { CreateNewPersonModal } from './CreateNewPersonModal'
import { LinksComponent } from './LinksComponent'
import { useDispatch, useSelector } from 'react-redux'
import {
    deletePersons,
    getPersons,
    registerPersons,
    updatePersons,
} from '../../__services__/persons.action'
import { selectPersons } from '../../_helpers__/selectorPersons'

export function MaterialTable({ personsData }) {
    const dispatch = useDispatch()
    // for avatar
    console.log(personsData)
    const [file, setFile] = useState('')
    const avatarEdit = ({ row }) => {
        const [previewImage, setPreviewImage] = useState(row.original.avatar)
        return (
            <>
                <p>{previewImage}</p>
                <img
                    className="field-img"
                    src={previewImage}
                    alt={previewImage}
                />
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
                        // key={column.accessorKey}
                        // name={column.accessorKey}
                        onChange={(e) => {
                            setFile(e.target.files[0])
                            setPreviewImage(
                                URL.createObjectURL(e.target.files[0])
                            )
                        }}
                    />
                </Button>
            </>
        )
    }
    // for checkBox
    const [isChecked, setIsChecked] = useState(false)
    const StatusEdit = ({ row }) => {
        const [checked, setChecked] = useState(false)
        useEffect(() => {
            setChecked(row.original.status)
        }, [row.original.status])

        const handleChange = (event) => {
            setChecked(event.target.checked)
            setIsChecked(event.target.checked)
        }

        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'status' }}
                        />
                    }
                    label="Status"
                    labelPlacement="start"
                />
            </Box>
        )
    }

    const [createModalOpen, setCreateModalOpen] = useState(false)
    // copy data for the state
    const newData = personsData.map((item) => ({
        ...item,
    }))
    const [data, setData] = useState(newData)
    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        const dataValue = {
            avatar: values.avatar,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            links: values.links,
            status: isChecked,
        }

        await dispatch(
            updatePersons({
                id: row.original.id,
                dataUpdate: dataValue,
                file: file,
            })
        )
        // dispatch(getPersons())
        // data[row.index] = dataValue
        // console.log('edit', data[row.index])
        // setData([...data])
        // Get the updated data from the server
        await dispatch(getPersons())
        // console.log('response', response)
        // console.log('type', typeof [...updatedData])
        // if (Array.isArray(updatedData)) {
        //     setData([...updatedData])
        // } else {
        //     console.error('Error: updatedData is not an array')
        // }

        exitEditingMode()

        // if (!Object.keys(validationErrors).length) {
        //     data[row.index] = values
        //     // send/receive api updates here, then refetch or update local table data for re-render
        //     setData([...data])
        //     exitEditingMode() // required to exit editing mode and close modal
        // }
    }

    const handleCreateNewRow = async (values) => {
        const dataValue = {
            avatar: values.avatar,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            links: values.links,
            status: false,
        }

        // dispatch(registerPersons(dataValue))

        // data.push(dataValue)
        // setData([...data])
        await dispatch(registerPersons(dataValue))
        await dispatch(getPersons())

        // if (Array.isArray(registerData.personsInfo)) {
        //     setData(registerData.personsInfo)
        // } else {
        //     console.error('Error: updatedData is not an array')
        // }
    }
    const handleCancelRowEdits = () => {
        // setValidationErrors({});
        console.log('setValidationErrors')
    }

    // For Links //
    const handleLinksChange = (event, rowIndex, index) => {
        const newLinks = [...data[rowIndex].links]
        newLinks[index][event.target.name] = event.target.value
        const updatedLinks = [...data]
        const updatedLink = {
            ...updatedLinks[rowIndex].links[index],
            name: event.target.value,
        }
        updatedLinks[rowIndex] = {
            ...updatedLinks[rowIndex],
            links: [
                ...updatedLinks[rowIndex].links.slice(0, index),
                updatedLink,
                ...updatedLinks[rowIndex].links.slice(index + 1),
            ],
        }

        // console.log('event', updatedLinks)

        // console.log('rowIndex', index)
    }

    // table columns //
    const columns = useMemo(
        () => [
            {
                header: 'Avatar',
                size: 100,
                accessorKey: 'avatar',
                enableSorting: false,
                enableColumnFilter: false,
                Cell: ({ row }) => (
                    <Box>
                        <img
                            alt="avatar"
                            height={30}
                            src={row.original.avatar}
                            loading="lazy"
                            style={{ borderRadius: '50%' }}
                        />
                    </Box>
                ),
                Edit: avatarEdit,
                muiTableBodyCellEditTextFieldProps: {
                    variant: 'outlined',
                },
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                header: 'First Name',
                size: 60,
                accessorKey: 'firstName',
                muiTableBodyCellEditTextFieldProps: {
                    variant: 'outlined',
                },
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                header: 'Last Name',
                size: 60,
                accessorKey: 'lastName',
                muiTableBodyCellEditTextFieldProps: {
                    variant: 'outlined',
                },
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                header: 'Email',
                size: 80,
                accessorKey: 'email',
                muiTableBodyCellEditTextFieldProps: {
                    variant: 'outlined',
                },
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                header: 'phone',
                size: 80,
                accessorKey: 'phone',
                muiTableBodyCellEditTextFieldProps: {
                    variant: 'outlined',
                },
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                header: 'Liens',
                size: 80,
                accessorKey: 'links',
                Cell: ({ row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {row.original.links.map((link) => {
                            return (
                                <a
                                    key={link.name}
                                    href={link.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                    </Box>
                ),
                Edit: ({ cell, row }) => (
                    <LinksComponent
                        linksValue={cell.getValue()}
                        onChange={(event, index) =>
                            handleLinksChange(event, row.index, index)
                        }
                    />
                ),

                muiTableBodyCellEditTextFieldProps: {
                    variant: 'outlined',
                },

                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },

            {
                header: 'Status',
                size: 50,
                accessorFn: (originalRow) =>
                    originalRow.status ? 'true' : 'false',

                Cell: ({ cell }) =>
                    cell.getValue() === 'true' ? 'Actif' : 'Inactif',

                Edit: StatusEdit,
                muiTableBodyCellEditTextFieldProps: {
                    variant: 'outlined',
                },
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
        ],
        []
    )

    return (
        <section className="table-wrapper">
            <MaterialReactTable
                columns={columns}
                data={data}
                enableDensityToggle={false}
                enableEditing
                editingMode="modal"
                onEditingRowSave={handleSaveRowEdits}
                onEditingRowCancel={handleCancelRowEdits}
                enableRowActions
                renderRowActions={({ row, table }) => (
                    <Box
                        sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}
                    >
                        <Tooltip arrow placement="left" title="send">
                            <IconButton
                                color="primary"
                                onClick={() =>
                                    window.open(
                                        `mailto:${row.original.email}?subject=Hello ${row.original.firstName}!`
                                    )
                                }
                            >
                                <EmailIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="left" title="Edit">
                            <IconButton
                                color="warning"
                                onClick={() => {
                                    table.setEditingRow(row)
                                }}
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="left" title="delete">
                            <IconButton
                                color="error"
                                onClick={() => {
                                    console.log('row', row.original.id)
                                    console.log('data', data)

                                    data.splice(row.index, 1) // assuming simple data table
                                    setData([...data])

                                    dispatch(deletePersons(row.original))
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
                renderTopToolbarCustomActions={() => (
                    <Button
                        color="info"
                        onClick={() => setCreateModalOpen(true)}
                        variant="contained"
                    >
                        Create New Account
                    </Button>
                )}
            />
            <CreateNewPersonModal
                columns={columns}
                open={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
                onSubmit={handleCreateNewRow}
            />
        </section>
    )
}

MaterialTable.propTypes = {
    personsData: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            status: PropTypes.bool,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    link: PropTypes.string,
                    name: PropTypes.string,
                })
            ),
        })
    ).isRequired,
}

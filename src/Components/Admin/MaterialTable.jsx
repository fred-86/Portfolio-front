/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react'
import MaterialReactTable from 'material-react-table'
import PropTypes from 'prop-types'
import { Button, Box, IconButton, Tooltip, MenuItem } from '@mui/material'
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Email as EmailIcon,
} from '@mui/icons-material'
import { CreateNewPersonModal } from './CreateNewPersonModal'

export function MaterialTable({ testdata }) {
    console.log(testdata)
    const columns = useMemo(
        () => [
            {
                header: 'Avatar',
                size: 100,
                accessorKey: 'avatar',
                enableSorting: false,
                enableColumnFilter: false,

                // eslint-disable-next-line react/prop-types
                Cell: ({ row }) => (
                    <Box>
                        <img
                            alt="avatar"
                            height={30}
                            // eslint-disable-next-line react/prop-types
                            src={row.original.avatar}
                            loading="lazy"
                            style={{ borderRadius: '50%' }}
                        />
                    </Box>
                ),
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
                accessorKey: 'firstName', // accessor is the "key" in the data
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
                // eslint-disable-next-line react/prop-types
                Cell: ({ row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {row.original.links.map((link) => {
                            return (
                                <a key={link.name} href={link.link}>
                                    {link.name}
                                </a>
                            )
                        })}
                    </Box>
                ),
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
                filterVariant: 'checkbox',
                Cell: ({ cell }) =>
                    cell.getValue() === 'true' ? 'Actif' : 'Inactif',
                muiTableBodyCellEditTextFieldProps: {
                    select: true, // change to select for a dropdown
                    children: testdata.map((item) => (
                        <MenuItem key={item.id} value={item.status}>
                            {item.status}
                        </MenuItem>
                    )),
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
    const [createModalOpen, setCreateModalOpen] = useState(false)
    // copy data for the state
    const newData = testdata.map((item) => ({
        ...item,
    }))
    const [data, setData] = useState(newData)
    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        data[row.index] = values
        setData([...data])
        exitEditingMode()
        // if (!Object.keys(validationErrors).length) {
        //     data[row.index] = values
        //     // send/receive api updates here, then refetch or update local table data for re-render
        //     setData([...data])
        //     exitEditingMode() // required to exit editing mode and close modal
        // }
    }
    const handleCreateNewRow = (values) => {
        data.push(values)
        setData([...data])
    }
    const handleCancelRowEdits = () => {
        // setValidationErrors({});
        console.log('setValidationErrors')
    }

    return (
        <section className="table-wrapper">
            <MaterialReactTable
                columns={columns}
                data={data}
                enableDensityToggle={false}
                enableEditing
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
                                    console.log('row', row.index)
                                    console.log('data', data)

                                    data.splice(row.index, 1) // assuming simple data table
                                    setData([...data])
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
    testdata: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            status: PropTypes.bool,
            links: PropTypes.shape({
                link: PropTypes.string,
                name: PropTypes.string,
            }),
        })
    ).isRequired,
}

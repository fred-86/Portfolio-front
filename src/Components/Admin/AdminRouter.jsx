import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../../Pages/admin/DashBoard'
import { AdminLayout } from './AdminLayout'

/**
 *  router to the admin
 * @component
 * @returns  {React.ReactElement}
 */
export function AdminRouter() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="dashboard" element={<DashBoard />} />
            </Route>
        </Routes>
    )
}

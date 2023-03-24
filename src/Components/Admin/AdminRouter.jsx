import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../../Pages/admin/DashBoard'
import { Error404 } from '../../Pages/Error404'
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
                <Route index element={<DashBoard />} />
                <Route path="dashboard" element={<DashBoard />} />
            </Route>
            <Route path="/*" element={<Error404 />} />
        </Routes>
    )
}

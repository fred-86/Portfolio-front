import React from 'react'
import { Outlet } from 'react-router-dom'

import { AdminHeader } from './AdminHeader'
/**
 * Layout that contains the different pages for admin
 * @returns  {React.ReactElement}
 */
export function AdminLayout() {
    return (
        <div className="admin-layout">
            <AdminHeader />
            <Outlet />
        </div>
    )
}

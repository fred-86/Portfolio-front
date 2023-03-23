import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Footer } from './Footer'
// import { Header } from './Header'

export function AdminLayout() {
    return (
        <div className="admin-layout">
            <h1>Admin layout</h1>
            <Outlet />
        </div>
    )
}

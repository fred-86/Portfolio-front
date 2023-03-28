import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../../Pages/admin/DashBoard'
import { Persons } from '../../Pages/admin/Persons'
import { Error404 } from '../../Pages/Error404'
import { SideBar } from './SideBar'

/**
 *  router to the admin
 * @component
 * @returns  {React.ReactElement}
 */
export function AdminRouter() {
    return (
        <SideBar>
            <Routes>
                <Route index element={<DashBoard />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="Persons" element={<Persons />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </SideBar>
    )
}

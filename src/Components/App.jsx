import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../Pages/auth/AuthRouter'
import { AuthGuard } from '../__services__/AuthGard'
import { AdminRouter } from './Admin/AdminRouter'
import { Navigation } from './Navigation'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Navigation />} />

                    <Route
                        path="/admin/*"
                        element={
                            <AuthGuard>
                                <AdminRouter />
                            </AuthGuard>
                        }
                    />
                    <Route path="/auth/*" element={<AuthRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

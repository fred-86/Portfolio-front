import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRouter } from './Admin/AdminRouter'
import { Navigation } from './Navigation'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Navigation />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </div>
    )
}

export default App

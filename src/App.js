import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/about" element={<Layout />} />
                <Route path="/contact" element={<Layout />} />
            </Routes>
        </>
    )
}

export default App

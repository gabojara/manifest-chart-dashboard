import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { Layout } from './components/layout'

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

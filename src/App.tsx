import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { Layout } from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

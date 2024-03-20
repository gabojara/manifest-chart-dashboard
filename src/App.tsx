import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { Layout } from './components/layout'
import { store } from './redux/store'
import './App.css'

function App() {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  )
}

export default App

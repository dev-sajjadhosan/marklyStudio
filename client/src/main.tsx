import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layouts/Layout/Layout'
import AuthProvider from './Auth/AuthProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Layout />
    </AuthProvider>
  </StrictMode>,
)

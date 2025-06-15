import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from './context/AuthProvider'
import { SnackbarProvider } from 'notistack'
import { HeaderProvider } from './context/HeaderProvider'
import './index.css'
import Layout from './layouts/Layout/Layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <HeaderProvider>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={3000}
        />
        <Layout />
      </HeaderProvider>
    </AuthProvider>
  </StrictMode>,
)

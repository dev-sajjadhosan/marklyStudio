import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from './context/AuthProvider'
import { SnackbarProvider } from 'notistack'
import { HeaderProvider } from './context/HeaderProvider'
import './index.css'
import Layout from './layouts/Layout/Layout'
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HeaderProvider>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            autoHideDuration={2100}
          />
          <Layout />
        </HeaderProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)

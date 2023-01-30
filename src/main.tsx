import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import QueryProvider from './context/QueryContext'

const queryClient = new QueryClient({ defaultOptions: {queries: {staleTime: 1000 * 60 * 5}}})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QueryProvider>
          <App />
        </QueryProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  ,
)

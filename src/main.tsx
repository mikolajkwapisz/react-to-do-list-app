import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import QueryProvider from './context/QueryContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QueryProvider>
          <App />
        </QueryProvider>
      </QueryClientProvider>
    </BrowserRouter>
  ,
)

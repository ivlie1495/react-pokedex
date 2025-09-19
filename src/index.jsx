import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import App from './App'
import 'react-loading-skeleton/dist/skeleton.css'
import { HttpLink } from '@apollo/client'

const endpoint = import.meta.env.VITE_GRAPTH_URL

if (!endpoint) {
  throw new Error('VITE_GRAPTH_URL environment variable is undefined')
}

const client = new ApolloClient({
  link: new HttpLink({ uri: endpoint }),
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)

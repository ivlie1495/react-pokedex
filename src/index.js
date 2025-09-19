import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import 'react-loading-skeleton/dist/skeleton.css'

const endpoint = import.meta.env.VITE_GRAPTH_URL

if (!endpoint) {
  throw new Error('VITE_GRAPTH_URL environment variable is undefined')
}

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

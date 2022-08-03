import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Client from 'shopify-buy';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

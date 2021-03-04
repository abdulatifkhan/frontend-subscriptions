import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider, ApolloClient, InMemoryCache,  } from "@apollo/client";

const clinet = new ApolloClient({
  uri: "http://localhost:5000",
 cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={clinet}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
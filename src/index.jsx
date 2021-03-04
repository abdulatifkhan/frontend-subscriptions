import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider, ApolloClient, InMemoryCache, split, HttpLink, } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = new HttpLink({
  uri: 'http://localhost:5000'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:5000/graphql',
  options: {
    reconnect: true,
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const clinet = new ApolloClient({
  link: splitLink,
 cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={clinet}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
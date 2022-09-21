import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
//establish new link to graphql server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});
//use ApolloClinet() constructor to instantiate Apollo Client instance & create connection to the API endpoint.  
//Instantiate new cache object
const client = new ApolloClient({link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    // enable application to interact with Apollo Client
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;

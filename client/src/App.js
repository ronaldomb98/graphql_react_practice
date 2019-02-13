import React, { Component } from 'react';
import { ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import './App.css';
const client = new ApolloClient({
  uri: "http://react-app.test:4000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors',graphQLErrors);
    console.log('networkError',networkError);
  }
});



class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <h1>Hola</h1>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import { ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import './App.css';

// Import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components

import Header from "./components/Header";
import Clientes from "./components/Clientes";
import EditarCliente from './components/EditarCliente';
import NuevoCliente from './components/NuevoCliente';

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
          <Router>
            <Fragment>
              <Header/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Clientes}/>
                  <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
                  <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;

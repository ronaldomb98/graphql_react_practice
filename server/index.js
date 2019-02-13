import express from "express";
import {typeDefs} from "./data/schema";
import {resolvers} from "./data/resolvers";
import {ApolloServer} from "apollo-server-express";

const app = express();

const server = new ApolloServer({typeDefs, resolvers})

server.applyMiddleware({app});

app.listen(4000, () => { console.log(`El servidor esta corriendo ${server.graphqlPath}`); })

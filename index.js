import express from "express";
import {schema} from "./data/schema";
import {resolvers} from "./data/resolvers";
import graphqlHTTP from "express-graphql";

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}));


app.use('/', (req, res)=>{
    return res.send('Holii')
})

app.listen(3000, () => console.log('Working on 3000'));
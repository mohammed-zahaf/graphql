import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from "./data/schema";
import { resolvers } from "./data/resolvers";

const app = express();
app.get(['/', '/alive'], (req, res) => {
    res.send('Server is alive!')
});

app.use('/graphql', createHandler({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen(8585, () => {
    console.log('ZM:: Running server on port localhost:8585/graphql');
});
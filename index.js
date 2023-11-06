import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

const app = express();
app.get(['/', '/alive'], (req, res) => {
    res.send('Server is alive!')
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen(8585, () => {
    console.log('ZM:: Running server on port localhost:8585/graphql');
});
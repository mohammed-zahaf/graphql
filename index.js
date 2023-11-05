import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

const app = express();
app.get(['/', '/alive'], (req, res) => {
    res.send('Server is alive!')
});

const root = {
    hello: () => {
        return "I'am Mohammed!";
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8585, () => {
    console.log('ZM:: Running server on port localhost:8585/graphql');
});
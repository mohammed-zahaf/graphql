import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

const app = express();
app.get(['/', '/alive'], (req, res) => {
    res.send('Server is alive!')
});

class Product {
    constructor(id, {name, description, price, soldout, stores}) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores;
    }

}

// User to store data
const productDatabase = {};

const root = {
    product: () => {
        return {
            id: require("crypto").randomBytes(10).toString('hex'),
            name: "Honey",
            description: "Is coming from savage montain",
            price: 100.50,
            soldeout: false,
            stores: [
                {store: "Paris"},
                {store: "Rabat"},
            ]
        };
    },
    createProduct: ({input}) => {
        const id = require("crypto").randomBytes(10).toString('hex');
        productDatabase[id] = input;
        return new Product(id, input)
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
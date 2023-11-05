import express from "express";

const app = express();
app.get('/', (req, res) => {
    res.send('Graphql is amazing!')
});

app.listen(8585, () => {
    console.log('ZM:: Running server on port localhost:8585/graphql');
})
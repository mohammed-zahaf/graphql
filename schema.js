import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldeout: Boolean
    }

    type Query {
        product: Product
    }
`)

export { schema };
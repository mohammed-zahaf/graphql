import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        inventory: Int
        stores: [Store]
    }
    
    type Store {
        store: String
    }

    input StoreInput {
        store: String
    }
    
    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        inventory: Int
        stores: [StoreInput]
    }
   
    type Query {
        getProducts: [Product]
        getProduct(id: ID): Product
    }
    
    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(id: ID, input: ProductInput): Product
        removeProduct(id: ID): String
    }
`)

export { schema };
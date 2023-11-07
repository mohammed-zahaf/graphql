import Product from "./product";

function generateId() {
    return require("crypto").randomBytes(10).toString('hex');
}

function generateRandomProduct(id) {
    const random = (Math.random() * 100).toFixed(0);

    return new Product(id, {
            name: `Product num ${random}`,
            description: `Product ${random} is a random product`,
            price: Math.random() * 100,
            soldout: random % 2 ? "SOLDOUT" : "ONSALE",
            inventory: random,
            stores: [
                {store: "Paris"},
                {store: "Rabat"},
            ]
        })
}

function generatProducts() {
    return [generateId(), generateId(), generateId(), generateId()]
        .reduce((acc, id) => {
            acc[id] = generateRandomProduct(id);
            return acc;
        }, {})
}

// data store
const productDatabase = {
    ...generatProducts()
};


const resolvers = {
    getProducts: () => {
        return Object.values(productDatabase);
    },
    getProduct: ({id}) => {
        return new Product(id, productDatabase[id]);
    },
    createProduct: ({input}) => {
        const id = generateId();
        productDatabase[id] = new Product(id, input);
        return productDatabase[id];
    },
    updateProduct: ({id, input}) => {
        if (productDatabase[id]) {
            productDatabase[id] = {
                ...productDatabase[id],
                ...input,
            }
        }

        return productDatabase[id];
    },
    removeProduct: ({id}) => {
        if (productDatabase[id]) {
            delete productDatabase[id];
            return `Product ${id} was successfuly removed!`;
        }

        return `Product ${id} was not found!`;
    }
};

// Graphql Resolvers
export { resolvers };

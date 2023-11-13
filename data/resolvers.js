import { Widgets } from "./dbConnectors";


const resolvers = {
    getProducts: () => {
        return Widgets.find();
    },
    getProduct: ({id}) => {
        return Widgets.findById(id)
            .then((product)=> {
                return product;
            })
            .catch((err) => {
                return err;
            });
    },
    createProduct: ({input}) => {
        const newProduct = new Widgets(input);
        return newProduct.save(input)
            .then((product) => {
                return product;
            })
            .catch((err) => {
                return err;
            });
    },
    updateProduct: ({id, input}) => {
        const updateProduct = new Widgets(input);
        return Widgets.updateOne({_id: id}, input)
            .then((product) => {
                return resolvers.getProduct({id});
            })
            .catch((err) => {
                return err;
            });
    },
    removeProduct: ({id}) => {
        return Widgets.deleteOne({_id: id})
            .then(() => {
                return `Product ${id} was successfully removed!`;
            })
            .catch((err) => {
                return `Product ${id} not removed: ${err}`;
            })
    }
};

// Graphql Resolvers
export { resolvers };

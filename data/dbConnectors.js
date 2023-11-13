import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/graphql');

const widgetSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    soldout: { type: String },
    inventory: { type: String },
    stores: { type: Array },
});

const Widgets = mongoose.model('widgets', widgetSchema);

export {
    Widgets,
}
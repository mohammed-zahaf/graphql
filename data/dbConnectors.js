import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets', {
    userNewUrlParser: true
});

const wdgetSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    soldout: {type: String},
    inventory: {type: String},
    stores: {type: Array},
});

const widgets = mongoose.model('widgets', wdgetSchema);

export {
    widgets,
}
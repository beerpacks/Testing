const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [disheIdSchema]
});

var disheIdSchema = new Schema({
    dish:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }
});

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;
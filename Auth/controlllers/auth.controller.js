const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = Schema({
    id: {type: Schema.Types.ObjectId, required: true},
    name: String,
    password: {type: String, required: true}
});

module.exports = User = mongoose.model("user", UserModel)
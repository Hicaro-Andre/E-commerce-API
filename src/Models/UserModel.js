const mongoose = require ("mongoose")

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  Cpf: String,
  Name: String,
  Email: String,
});

const UserModel = mongoose.model("users" , UserSchema);
module.exports = UserModel;
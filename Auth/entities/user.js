import mongoose from 'mongoose';

const UserModel = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

let User;
export default User = mongoose.model("user", UserModel);

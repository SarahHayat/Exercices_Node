import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const UserModel = Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export default User = model("user", UserModel);

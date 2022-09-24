import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema ({
    name: { type: String, unique: false, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, unique: false, require: true },
});

const User = mongoose.model("User", userSchema);

const userTokenSchema = new Schema ({
  userId: { type: String, unique: false, require: true },
  refresh: { type: String, unique: false, require: true },
});

const UserToken = mongoose.model("UserToken", userTokenSchema);

export { User, UserToken };

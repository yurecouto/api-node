import mongoose from "mongoose";
const { Schema } = mongoose;

const objectSchema = new Schema ({
    name: { type: String, unique: false, require: true },
    array: { type: Array, unique: false, require: false },
    object: { 
        objName: { type: String, unique: false, require: true },
        objValue: { type: String, unique: false, require: true },
    },
    number: { type: Number, unique: false, require: false },
});

const ObjectTest = mongoose.model("ObjectTest", objectSchema);
export { ObjectTest };
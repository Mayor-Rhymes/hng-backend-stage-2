import mongoose, { Schema } from "mongoose";

const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    }
  },
 
);

const Person = mongoose.model("Person", personSchema);

export default Person;

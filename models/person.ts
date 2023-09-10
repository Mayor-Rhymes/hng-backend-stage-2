import mongoose, { Schema } from "mongoose";

const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: [4, "Please enter at least 4 characters"],
    }
  },
 
);

const Person = mongoose.model("Person", personSchema);

export default Person;

import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    name: String,
    genre: String,
    year: String,
  },
  { timestamps: true, versionKey: false }
);

const moviemodel = model("movie", movieSchema);
export default moviemodel;

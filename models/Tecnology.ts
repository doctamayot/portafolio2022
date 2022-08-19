import mongoose, { Schema, model, Model } from "mongoose";
import { ITecnology } from "../interfaces";
const tecnologySchema = new Schema(
  {
    title: { type: String, required: true },
    images: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String, required: true }],
    description: { type: String, required: true },
    clase: { type: String, required: true },
  },
  { timestamps: true }
);

tecnologySchema.index({ title: "text", tags: "text" });

const Tecnology: Model<ITecnology> =
  mongoose.models.Tecnology || model("Tecnology", tecnologySchema);

export default Tecnology;

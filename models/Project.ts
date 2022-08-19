import mongoose, { Schema, model, Model } from "mongoose";
import { IProject } from "../interfaces";
const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    web: { type: String, required: true, unique: true },
    tags: [{ type: String, required: true }],
    description: { type: String, required: true },
    clase: { type: String, required: true },
  },
  { timestamps: true }
);

projectSchema.index({ title: "text", tags: "text" });

const Project: Model<IProject> =
  mongoose.models.Project || model("Project", projectSchema);

export default Project;

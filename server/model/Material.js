import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    type: String,
    department: String,
    semester: String,
    subject: String,
    year: String,
    examType: String,
    downloads: {
      type: Number,
      default: 0,
    },
    size: String,
    fileUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Material", materialSchema);
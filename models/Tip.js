import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    mood: {
      type: String,
      required: true,
      enum: ["happy", "sad", "neutral", "anxious", "angry", "excited"],
    },
    goal: {
      type: String,
      required: true,
      enum: ["relaxation", "focus", "sleep", "fitness", "mindful"],
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export default mongoose.model("Tip", schema);

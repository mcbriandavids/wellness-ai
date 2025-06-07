import mongoose from("mongoose");
const schema = mongoose.Schema(
  {
    name: String,
    mood: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Tip", schema);

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

// Index for faster querying
categorySchema.index({ parent: 1 });

module.exports = mongoose.model("Category", categorySchema);
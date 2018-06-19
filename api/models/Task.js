const mongoose = require("mongoose");

module.exports = mongoose.model("Task", {
  text: String,
  day: String,
  done: Boolean,
  remindTimeTask: { type: Date, default: new Date() }
});

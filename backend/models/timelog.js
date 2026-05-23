const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
  employee:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  project:   { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  hoursWorked: { type: Number, required: true },
  report:    { type: String },
  date:      { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('TimeLog', timeLogSchema);
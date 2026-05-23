const Project = require('../models/Project');
const TimeLog = require('../models/TimeLog');

// View assigned projects
exports.getMyProjects = async (req, res) => {
  const projects = await Project.find({ assignedTo: req.user._id });
  res.json(projects);
};

// Submit time log/report
exports.submitReport = async (req, res) => {
  const { projectId, hoursWorked, report } = req.body;
  try {
    const log = await TimeLog.create({
      employee: req.user._id,
      project: projectId,
      hoursWorked,
      report,
    });
    // Update project status
    await Project.findByIdAndUpdate(projectId, { status: 'in-progress' });
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMyLogs = async (req, res) => {
  const logs = await TimeLog.find({ employee: req.user._id })
    .populate('project', 'title deadline');
  res.json(logs);
};
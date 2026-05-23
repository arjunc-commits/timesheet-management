const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/employeecontroller');

router.use(protect);
router.get('/my-projects', ctrl.getMyProjects);
router.post('/submit-report', ctrl.submitReport);
router.get('/my-logs', ctrl.getMyLogs);
module.exports = router;
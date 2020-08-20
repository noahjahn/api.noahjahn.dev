const router = require('express').Router();
const VisitorsController = require('./controller');

router.post('/', VisitorsController.create);

module.exports = router;
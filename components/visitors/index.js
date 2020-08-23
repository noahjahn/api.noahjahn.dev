const router = require('express').Router();
const VisitorsController = require('./controller');

router.post('/', VisitorsController.create);
router.patch('/', VisitorsController.update);


module.exports = router;
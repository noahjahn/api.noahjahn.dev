const router = require('express').Router();

router.post('/', (req, res) => {
    res.data = req.body;
    res.status(200).sendFormat(req, res);
});

module.exports = router;
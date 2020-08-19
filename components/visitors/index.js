const router = require('express').Router();
Visitor = require('../../config/mongodb/models/visitor');

router.post('/', (req, res) => {

    var visitor = new Visitor({ 
        "ipAddress": "68.43.183.18",
        "location": "Kentwood, MI 49505",
        "darkMode": true,
    });

    visitor.save((err) => {
        if (err) {
            return console.log(err);
        }
        console.log('saved visitor')
    });

    Visitor.find({}, (err, visitors) => {
        if (err) return console.error(err);
        console.log(visitors);
        console.log('visitors')
    });

    res.data = req.body;
    res.status(200).sendFormat(req, res);
});

module.exports = router;
const router = require('express').Router();

router.post('/', (req, res) => {
    Visitor = require('../../config/mongodb/models/visitor');

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
        // saved!
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
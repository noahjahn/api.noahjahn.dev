const User = require('../../config/mongodb/models/user');
const { generateUuid, generateApiKeyFromUuid } = require('./service');

module.exports = {
    create: (req, res) => {
        var uuid = generateUuid();
        var apikey = generateApiKeyFromUuid(uuid);
        var user = new User({ 
            "uuid": uuid,
            "username": req.body.username,
            "apikey": apikey,
            "origins": req.body.origins || null
        });

        user.save()
            .then((user) => {
                res.status(200);
                res.data = {
                    apikey: user.apikey
                };
            })
            .catch((err) => {
                if (err.code == 11000) {
                    if (!res.errors) {
                        res.errors = {
                            422: {
                                "property": Object.keys(err.keyPattern)[0],
                                "message": `${Object.keys(err.keyPattern)[0]} already exists, please enter a different one.`
                            }
                        }
                    }
                    res.status(422);
                } else if (JSON.stringify(err).errors == 'required') {
                    console.log(Object.keys(err.errors)[0] + "is required");
                } else {
                    console.error(err);
                    console.error(JSON.stringify(err));
                    console.error(err.code);
                    res.status(500);
                }
            })
            .finally(() => {
                res.data = {
                    ...res.data,
                    ...req.body
                }
                res.sendFormat(req, res);
            });
    }
}
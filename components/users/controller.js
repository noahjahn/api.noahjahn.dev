const User = require('../../config/mongodb/models/user');
const { generateUuid, generateApiKeyFromUuid } = require('./service');

module.exports = {
    create: (req, res) => {
        const uuid = generateUuid();
        const apikey = generateApiKeyFromUuid(uuid);
        const user = new User({
            uuid,
            username: req.body.username,
            apikey,
            origins: req.body.origins || null
        });

        user.save()
            .then((user) => {
                res.status(200);
                res.data = {
                    apikey: user.apikey
                };
            })
            .catch((error) => {
                if (error.code == 11000) {
                    if (!res.errors) {
                        res.errors = {
                            422: {
                                property: Object.keys(error.keyPattern)[0],
                                message: `${Object.keys(error.keyPattern)[0]} already exists, please enter a different one.`
                            }
                        }
                    }
                    res.status(422);
                } else if (JSON.stringify(error).errors == 'required') {
                    console.log(Object.keys(error.errors)[0] + 'is required');
                } else {
                    console.error(error);
                    console.error(JSON.stringify(error));
                    console.error(error.code);
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
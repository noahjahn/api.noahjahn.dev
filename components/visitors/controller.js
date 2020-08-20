const Visitor = require('../../config/mongodb/models/visitor');
const { getLocationByPublicIpv4 } = require('../../libraries/ip-api.com');

module.exports = {
    create: async (req, res) => {
        var location = await getLocationByPublicIpv4(req.connection.remoteAddress);
        var visitor = new Visitor({ 
            "ipAddress": req.connection.remoteAddress,
            "location": location,
            "darkMode": req.body.darkMode,
        });
    
        visitor.save()
            .then((visitor) => {
                res.status(200);
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
                } else {
                    console.error(err);
                    res.status(500);
                }
            })
            .finally(() => {
                res.sendFormat(req, res);
            });
    }
}
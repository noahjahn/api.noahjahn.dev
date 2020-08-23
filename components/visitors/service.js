const ipApi = require('../../libraries/ip-api.com');

module.exports = {
    getRemotePublicIp: (req) => {
        return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    },

    getLocationByPublicIpv4: async (ipAddress) => {
        try {
            return (await ipApi.getLocationByPublicIpv4(ipAddress));
        } catch (err) {
            console.error(err);
            return;
        }
    },

    hasNewIpAddress: (visitor, newIpAddress) => {
        if (visitor.locations.length) {
            let matchingLocationIpAddresses = visitor.locations.filter(function (element) {
                return (element.ipAddress == newIpAddress);
            });
            if (matchingLocationIpAddresses.length) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    },

    saveAndRespond: (visitor, req, res) => {
        visitor.save()
            .then((visitor) => {
                res.data = visitor
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
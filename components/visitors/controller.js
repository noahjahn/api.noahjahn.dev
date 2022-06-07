const Visitor = require('../../config/mongodb/models/visitor');
const { exit } = require('process');
const { getRemotePublicIp, getLocationByPublicIpv4, saveAndRespond, hasNewIpAddress } = require('./service');

module.exports = {
    create: async (req, res) => {
        try {
            const visitor = new Visitor({
                origin: req.get('host'),
                darkMode: req.body.darkMode,
            });
            const ipAddress = getRemotePublicIp(req);
            const location = await getLocationByPublicIpv4(ipAddress);
            if (location) {
                visitor.locations = [
                    location
                ];
            }
            saveAndRespond(visitor, req, res);
        } catch (error) {
            console.error(error);
            exit(1);
        }
    },

    read: (req, res) => {
        res.status(404).sendFormat(req, res);
    },

    update: async (req, res) => {
        try {
            const visitor = await Visitor.findById(req.body._id);
            if (visitor) {
                const ipAddress = getRemotePublicIp(req);
                if (hasNewIpAddress(visitor, ipAddress)) {
                    const location = await getLocationByPublicIpv4(ipAddress);
                    if (location) {
                        (visitor.locations).push(location);
                    }
                }
                if (req.body.darkMode) {
                    visitor.darkMode = req.body.darkMode;
                }
                visitor.count++;
                saveAndRespond(visitor, req, res);
            } else {
                res.status(404).sendFormat(req, res);
            }

        } catch (error) {
            console.error(error);
            exit(1);
        }
    }
}

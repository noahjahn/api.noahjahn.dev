const Visitor = require('../../config/mongodb/models/visitor');
const { exit } = require('process');
const { getRemotePublicIp, getLocationByPublicIpv4, saveAndRespond, hasNewIpAddress } = require('./service');

module.exports = {
    create: async (req, res) => {
        try {
            var visitor = new Visitor({
                "origin": req.get('host'),
                "darkMode": req.body.darkMode,
            });
            let ipAddress = getRemotePublicIp(req);
            let location = await getLocationByPublicIpv4(ipAddress);
            if (location) {
                visitor.locations = [
                    location
                ];
            }
            saveAndRespond(visitor, req, res);
        } catch (err) {
            console.error(err); 
            exit(1);
        }
    },

    read: (req, res) => {
        res.status(404).sendFormat(req, res);
    },

    update: async (req, res) => {
        try {
            var visitor = await Visitor.findById(req.body._id);
            if (visitor) {
                let ipAddress = getRemotePublicIp(req);
                if (hasNewIpAddress(visitor, ipAddress)) {
                    console.log(ipAddress);
                    let location = await getLocationByPublicIpv4(ipAddress);
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
            
        } catch (err) {
            console.error(err);
            exit(1);
        }
    }
}
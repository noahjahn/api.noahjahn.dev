const http = require('http');

module.exports.getLocationByPublicIpv4 = (ipAddress) => {
    return new Promise ((resolve, reject) => {
        let requestOptions = {
            "host": "ip-api.com",
            "port": 80,
            "path": `/json/${ipAddress}`,
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            }
        }
    
        let req = http.request(requestOptions, (res) => {
            var resBody = "";
    
            res.on("data", (chunk) => {
                resBody += chunk;
            });
    
            res.on("end", () => {
                resBody = JSON.parse(resBody);
                let location = {
                    "countryCode": resBody.countryCode,
                    "region": resBody.region,
                    "city": resBody.city,
                    "zip": resBody.zip,
                }
                resolve(location);
            });
        });
    
        req.on('error', (err) => {
            reject(err);
        });
    
        req.end();
    });
}
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
    
        var req = http.request(requestOptions, (res) => {
            var resBody = "";
    
            res.on("data", (chunk) => {
                resBody += chunk;
            });
    
            res.on("end", () => {
                try {
                    resBody = JSON.parse(resBody);
                    if (resBody.status == 'success') {
                        return resolve({
                            "ipAddress": resBody.query,
                            "countryCode": resBody.countryCode,
                            "region": resBody.region,
                            "city": resBody.city,
                            "zip": resBody.zip
                        });
                    } else {
                        reject(resBody);
                    }
                } catch (err) {
                    reject(err);
                }
            });
            
        });
    
        req.on('error', (err) => {
            console.log('test error');
            reject(err);
        });
    
        req.end();
    });
}
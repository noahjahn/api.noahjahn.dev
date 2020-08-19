const Format = require('./format');
const ResponseError = require('./error');

module.exports.init = (req, res, next) => {
    res.sendFormat = this.sendFormat;
    next();
};

module.exports.sendFormat = (req, res) => {
    res.header("Content-Type", 'application/json');
    responseFormat = new Format();
    switch(res.statusCode) {
        case 100:
            break;
        case 101:
            break;        
        case 102:
            break;
        case 200:
            break;        
        case 201:
            break;
        case 202:
            break;
        case 203:
            break;
        case 204:
            break;
        case 205:
            break;
        case 206:
            break;
        case 207:
            break;
        case 208:
            break;
        case 226:
            break;
        case 300:
            break;
        case 301:
            break;
        case 302:
            break;
        case 303:
            break;
        case 304:
            break;
        case 305:
            break;
        case 306:
            break;
        case 307:
            break;
        case 308:
            break;
        case 400:
            responseFormat.appendError(new ResponseError(null, "Bad request", "Fix it!"));
            break;
        case 401:
            break;
        case 402:
            break;
        case 403:
            break;
        case 404:
            responseFormat.appendError(new ResponseError(null, "Not Found", "Fix it!"));
            break;
        case 405:
            break;
        case 406:
            break;
        case 407:
            break;
        case 408:
            break;
        case 409:
            break;
        case 410:
            break;
        case 411:
            break;
        case 412:
            break;
        case 413:
            break;
        case 414:
            break;
        case 415:
            break;
        case 416:
            break;
        case 417:
            break;
        case 418:
            break;
        case 420:
            break;
        case 422:
            responseFormat.appendError(new ResponseError(res.errors[422].property, "Unprocessable Entity", res.errors[422].message));
            break;
        case 423:
            break;
        case 424:
            break;
        case 425:
            break;
        case 426:
            break;
        case 428:
            break;
        case 429:
            break;
        case 431:
            break;
        case 444:
            break;
        case 449:
            break;
        case 450:
            break;
        case 451:
            break;
        case 499:
            break;
        case 500:
            break;
        case 501:
            break;
        case 502:
            break;
        case 503:
            break;
        case 504:
            break;
        case 505:
            break;
        case 506:
            break;
        case 507:
            break;
        case 508:
            break;
        case 509:
            break;
        case 510:
            break;
        case 511:
            break;
        case 598:
            break;
        case 599:
            break;
    }
    if (res.data) {
        responseFormat.setData(res.data);
    }
    res.json(responseFormat);    
};
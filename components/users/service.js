const { v4: uuidv4 } = require('uuid');
const uuidApiKey = require('uuid-apikey');

module.exports = {
    generateUuid: () => {
        return uuidv4();
    },
    generateApiKeyFromUuid: (uuid) => {
        return uuidApiKey.toAPIKey(uuid);
    }
}
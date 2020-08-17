require('dotenv').config();
require('./config').init();
const app = require('./middleware');

const server = app.listen(process.env.PORT, () => {
    var host = server.address().address;
    console.log(`api.noahjahn.dev listening at http://${host}:${process.env.PORT}`);
});

module.exports = app;
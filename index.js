const app = require('./middleware');

const port = 8000;
const server = app.listen(port, () => {
    var host = server.address().address;
    console.log(`api.noahjahn.dev listening at http://${host}:${port}`);
});
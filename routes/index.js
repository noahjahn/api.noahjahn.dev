const router = require('express').Router();
const passport = require('passport');
const fetch = require('node-fetch');
const authentication = require('../components/authentication');
const v1 = require('./v1');

router.get('/', (req, res) => {
    res.status(200).send();
});
router.use('/authentication', authentication);
router.use('/v1', passport.authenticate('jwt', { session: false }), v1);
router.get('/mc/survival', async (req, res) => {
    const result = await fetch('http://104.179.49.51:3333/gamemode/38113ddb7499/survival/SumFloppyNubs');
    res.json(await result.json());
});

router.get('/mc/creative', async (req, res) => {
    const result = await fetch('http://104.179.49.51:3333/gamemode/38113ddb7499/creative/SumFloppyNubs');
    res.json(await result.json());
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('respond with a resource');
});

router.get('/:email', (req, res) => {
	res.send('respond with a resource');
});

router.get('/create', (req, res) => {
	res.send('respond with a resource');
});

router.post('/create', (req, res) => {
	res.send('respond with a resource');
});

module.exports = router;

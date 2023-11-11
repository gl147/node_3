const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
	console.log(req.params)
	res.end('u put ' + req.params.id + ' as parameter')
})

module.exports = router;
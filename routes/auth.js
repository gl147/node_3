const express = require('express')

const router = express.Router();

router.get('/login1', (req, res) => {
	res.end('logged user1')
})

router.get('/login2', (req, res) => {
	res.end('wrong password for user1')
})

router.get('/login3', (req, res) => {
	res.end('user1 is already logged from another device')
})

module.exports = router;
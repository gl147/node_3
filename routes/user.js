const express = require('express')

const router = express.Router();

router.get ('/user1', (req, res) => {
	res.end('user1')
})

router.get('/user2', (req, res) => {
	res.end('user2')
})

router.get('/user3', (req, res) => {
	res.end('user3')
})

module.exports =  router;


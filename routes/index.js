const express = require('express');
import AppController from '../controllers/AppController';

const router = express.Router();

router.get('/', (req, res)=>{res.send('home')})

router.get('/status', (req, res)=>{
//	AppController.getStatus(req, res)
 res.send('status')
})

router.get('/stats', (req, res)=>{
//	AppController.getStats(req, res)
 res.send('stats')
})

module.exports = router

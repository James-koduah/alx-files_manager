const redisClient = require('../utils/redis')
import dbClient from '../utils/db';
import sha1 from 'sha1'


class UsersController{
	static postNew(req, res){
		const { email } = req.body
		const { password } = req.body

		if (!email){
			res.status(400).json({'error': 'Missing email'})
			return
		}
		if (!password){
			res.status(400).json({'error': 'Missing password'})
			return
		}

		const users = dbClient.client.db().collection('users')
		users.findOne({ email }, (err, user)=>{
			if (user){ 
				res.status(400).json({error: 'Already exist'}) 
			} else { 
				users.insertOne({email, password: sha1(password)})
				.then((result)=>{
					res.status(201).json({id: result.insertedId, email });
				})
			}
		})
	}


}

module.exports = UsersController

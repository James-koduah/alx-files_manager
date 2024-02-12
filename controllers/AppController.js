const redisClient = require('../utils/redis')
const dbClient = require('../utils/db')


class AppController{
	static getStatus(req, res){
		let redisAlive = redisClient.isAlive()
		let dbAlive = dbClient.isAlive()
		res.status(200).json({
			"redis": redisAlive,
			"db": dbAlive
		})
	}

	static getStats (req, res){
		let nUsers = dbClient.nbUsers()
		let nFiles = dbClient.nbFiles()
		res.status(200).json({
			"users": nUsers,
			"files": nFiles
		})
	}
}

module.exports = AppController

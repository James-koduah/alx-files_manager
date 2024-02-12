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

	static async getStats (req, res){
		let nUsers = await dbClient.nbUsers()
		let nFiles = await dbClient.nbFiles()
		res.status(200).json({
			"users": nUsers,
			"files": nFiles
		})
	}
}

module.exports = AppController

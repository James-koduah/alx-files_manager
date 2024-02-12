const redisClient = require('../utils/redis')
const dbClient = require('../utils/db')


class AppController{
	status(req, res){
		let redis_alive = redisClient.isAlive()
		let dbAlive = dbClient.isAlive()
		res.status(200)
		res.json({
			"redis": redisAlive,
			"db": dbAalive
		})
	}

	stats (){
		let nUsers = dbClient.nbUsers()
		let nFiles = dbClient.nbFiles()
		res.status(200)
		res.json({
			"users": nUsers,
			"files": nFiles
		})
	}
}

module.exports = AppController

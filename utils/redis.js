const redis = require('redis')
const util = require('util')

class RedisClient{
	constructor(){
		this.client = redis.createClient()
		this.alive = true
		this.client.on('error', (e)=>{
			console.log(e)
			this.alive = false
		})
	}

	isAlive(){
		return this.alive
	}

	async get(key){
		const get = util.promisify(this.client.get).bind(this.client)
		const value = await get(key)
		return value
	}

	async set(key, value, time){
		this.client.set(key, value, 'EX', time)
	}

	async del(key){
		this.client.del(key)
	}

}

const redisClient = new RedisClient()
module.exports = redisClient

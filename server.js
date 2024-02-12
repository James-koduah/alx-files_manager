const express = require('express');
const router = require('./routes/index');
const app = express()

let port = 5000
if (process.env.PORT) port = process.env.PORT;

app.use('/status', router);
app.use('/stats', router);


app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`)
})

export default app;

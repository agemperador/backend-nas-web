const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db/database');
const userRouter = require('./routes/user-router');


//Initialization
const app = express();

//Settings
const apiPort = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


//Database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


//routes
app.get('/', (req, res) => {

    res.send('Hello World!')

})

app.use('/api', userRouter)

//Server start
app.listen(apiPort, () => {
    console.log('Server en el puerto', apiPort);
})
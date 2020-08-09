const mongoose = require('mongoose');

//qweik02

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true },
        (err, res) => {
            if (err) throw err
            console.log('Database conection')

        })
    .catch(e => {
        console.error('Conecction error', e.message);
    });

const db = mongoose.connection

module.exports = db;
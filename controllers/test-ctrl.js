const User = require('../models/user-model')


getUser = (req, res) => {
    console.log(req);
    return res.send('hola mundo');
}

module.exports = {
    getUser
}
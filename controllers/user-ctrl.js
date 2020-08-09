const User = require('../models/user-model');
const { response } = require('../helpers')

createUser = (req, res) => {

    const body = req.body

    if (!body) {
        return response(400, { error: 'Se necesita un usuario' }, res)
    }

    const user = new User(body)

    if (!user) {
        return response(400, { error: err }, res)
    }

    console.log(req);

    user
        .save()
        .then(() => {
            return response(200, {
                id: user._id,
                message: 'Usuario creado'
            }, res)

        })
        .catch(error => response(400, {
            error,
            message: 'Usuario no creado'
        }, res))
}

updateUser = async(req, res) => {
    const body = req.body


    if (!body) {
        return response(400, { error: 'Hacen falta las modificaciones' }, res)
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return response(400, {
                err,
                message: "Usuario no encontrado"
            }, res)
        }
        user.name = body.name
        user.nick = body.nick
        user.pass = body.pass
        user.admin = true


        user
            .save()
            .then(() => {
                return response(200, {
                    id: user._id,
                    name: user.name,
                    message: 'Usuario actualizado'
                }, res)

            })
            .catch(error => {
                return response(200, {
                    error,
                    message: 'Usuario no actualizado!',
                }, res)
            })
    })
}

deleteUser = async(req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {

        if (err) {
            return response(400, {
                error: err
            }, res)
        }

        if (!user) {
            return response(404, { error: 'Usuario no encontrado' }, res)
        }
        return response(200, { data: user }, res)
    }).catch(err => console.log(err))
}

getUsers = async(req, res) => {

    await User.find({}, (err, users) => {

        if (err) return response(400, { error: err }, res)

        if (!users.length) return response(404, { error: 'No se encuentran usuarios' }, res)

        return res.status(200).json({ data: users })
    }).catch(err => console.log(err))
}

getUserById = async(req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {

        if (err) return response(400, { error: err }, res)

        if (!user) return response(404, { error: 'Usuario no encontrado' }, res)

        return response(200, { data: user }, res)

    }).catch(err => console.log(err))
}



module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    getU
}
response = (status, message, res) => {

    var success = false
    if (status == 200) {
        success = true
    }

    return res
        .status(status)
        .json({
            success,
            message
        })
}

module.exports = { response };
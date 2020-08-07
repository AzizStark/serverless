const { handler } = require("../helloworld")

module.exports.handler = (ent, cxt, done) => {
    done(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({
            message: 'hello'
        })
    })
}
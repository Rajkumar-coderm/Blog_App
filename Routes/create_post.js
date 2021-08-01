const { authenticateToken } = require('../auth/jwt')
module.exports = (app, knex) => {
    app.post("/create_post", authenticateToken, (req, res) => {
        const userdata = {
            user_id: req.data.id,
            Date: new Date(),
            text: req.body.text,
            description: req.body.description
        }
        knex('user_post').insert(userdata)
            .then((data) => {
    
                res.send(userdata);
            }).catch((err) => {
                console.log(err);
            })
    })
}
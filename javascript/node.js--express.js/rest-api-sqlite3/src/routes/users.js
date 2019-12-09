module.exports = app => {

    const Users = app.db.models.Users;

    app.route('/users')
        .get((req, res) => {
            Users.findAll({})
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json({
                        msg: err.message
                    });
                })
        })
        .post((req, res) => {
            Users.create(req.body)
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json({
                        msg: err.message
                    });
                })

        });

    app.route('/users/:id')
        .get((req, res) => {
            Users.findOne({
                    where: req.params
                })
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json({
                        msg: err.message
                    });
                });
        })
        .delete((req, res) => {
            Users.destroy({
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(err => {
                    res.status(412).json({
                        msg: err.message
                    });
                });
        })
        .put((req, res) => {
            Users.update(req.body, {
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(err => {
                    res.status(412).json({
                        msg: err.message
                    });
                });
        })

}
module.exports = app =>{
    
    app.route('/')
        .get((req, res) => {
            res.json({status: 'Task API'})
        })
        .post((req, res) => {

        });

}
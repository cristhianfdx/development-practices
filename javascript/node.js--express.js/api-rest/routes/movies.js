import mongojs from 'mongojs';

const db = mongojs('DatabaseMovies', [
    'movies'
]);

module.exports = app=>{

    app.get('/movies', (req, res) =>{              
        db.movies.find((err, movies)=>{
            res.json({
                response: movies
            }); 
        });
    });

    app.post('/movies', (req, res)=>{

        let newMovie = req.body;

        db.movies.insert(newMovie, (err, response) =>{
            res.json({
                response
            });
        });
        
    });
}
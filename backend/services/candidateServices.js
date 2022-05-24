const candidateProvider = require('../providers/candidateProvider');

const createServices = (app)=>{

    app.get('/api/users/all', (req, res) => {
        candidateProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });

    app.put('/api/users/update/:id', (req, res)=>{
        let candidate = req.params.id;
        candidateProvider.updateVotes(candidate, (result)=>{
            res.send(result);
        })
    });





}

module.exports.createServices = createServices;
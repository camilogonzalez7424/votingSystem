const db = require('../db/DBConnection');


const getAll = (onresult)=>{
    db.con.query('SELECT * FROM candidatesA00370263 order by id', (err, result) =>{
        if(!err){
            onresult(result);
        }
        

    });


}
/*
const updateVotes = (candidate, onResult)=>{
    console.log(candidate.totalVotes);
    db.con.query("UPDATE candidatesA00370263 SET totalVotes = (('"+candidate.totalVotes+"')+1) WHERE id = ('"+candidate+"')", (err)=>{
        if(!err){
            onResult({result:"OK"});
        }else{
            onResult({result:"ERROR"});
        }

    });
}*/

const updateVotes = (candidate,onResult)=>{

    db.con.query("SELECT totalVotes FROM candidatesA00370263 WHERE id = ('"+candidate+"')"  , function(err,resul){
      
        if(!err){
         
            var myJSON = resul[0].totalVotes;

           let amountNew = myJSON+1;
        db.con.query("UPDATE candidatesA00370263 SET totalVotes = ('"+amountNew+"') WHERE id = ('"+candidate+"')" , (err,result)=>{
            if(!err){
                onResult({result:"OK"});
            }else{
                onResult({result:"ERROR"});
            } 
        });
    }

    });



}


module.exports.getAll = getAll;
module.exports.updateVotes = updateVotes;
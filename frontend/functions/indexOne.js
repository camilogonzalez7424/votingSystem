const candidateContainer = document.getElementById('candidateContainer');




const getCandidatesAPI = async()=>{

   let url = `https://votingprograred.herokuapp.com/api/users/all`;
   let response = await fetch(url, {method:'GET'} );
   let obj = await response.json();
   console.log(obj);

   for(let  i in obj){

       let person = new Candidate(obj[i].id, obj[i].president, obj[i].vicepresident,obj[i].politicalParty,obj[i].photo, obj[i].totalVotes);
       let component = new CandidateComponent(person);
       component.render(candidateContainer);
   }


}


getCandidatesAPI();
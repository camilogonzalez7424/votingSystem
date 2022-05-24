class CandidateComponent{
    
    constructor(candidate){
        this.candidate = candidate;
    }

    render(container){
      /*  let html = `
        
            <div class="card text-center" style="width: 24rem;">
            <img src="${this.candidate.photo}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><b> PRESIDENTE</b><br>${this.candidate.president}</h5>
            <p class="card-subtitle mb-2 text-muted"><b> VICEPRESIDENTE</b><br> ${this.candidate.vicepresident}</p>
            <p class="card-text text-primary"><b> PARTIDO</b><br> ${this.candidate.politicalParty}</p>
            <a href="#" id="button${this.candidate.id}" class="btn btn-primary">VOTAR</a>
            </div>
        </div>
        
        `;*/

        let html = `
            <div class="card">
            <img src="${this.candidate.photo}" class="card-img-top" alt="...">

            <div class="card-details">
            <h4 class="card-title"><b> PRESIDENTE</b><br>${this.candidate.president}</h4>
            <p class="card-subtitle mb-2 text-muted"><b> VICEPRESIDENTE</b><br> ${this.candidate.vicepresident}</p>
            <p class="card-text text-primary"><b> PARTIDO</b><br></p>
            <img src="${this.candidate.politicalParty}" class="card-party-logo">


            </div>
            <button href="#" id="button${this.candidate.id}" class="card-button">VOTAR</button>
            </div>
        `;


        if (this.candidate.president=="VOTO EN BLANCO"){
            html = `
            <div class="card">
           <img src="${this.candidate.photo}" class="card-img-top" alt="...">
           <div class="card-details">
           <h4 class="card-title align-center">VOTAR EN BLANCO</h4>
           </div>
            <button href="#" id="button${this.candidate.id}" class="card-button">VOTAR</button>
        </div>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
           
      
       `;
       }

        let root = document.createElement('div');
        root.innerHTML = html.trim();
        container.appendChild(root.firstChild);

        let button = document.getElementById(`button${this.candidate.id}`);
        button.addEventListener('click', this.action.bind(this));


        /*
        <div class="card">
  <div class="card-details">
    <p class="text-title">Card title</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">More info</button>
</div>
*/

        
    }

    action(event){
   
        event.preventDefault();
        let url = `https://votingprograred.herokuapp.com/api/users/update/${this.candidate.id}`;
        fetch(url, {method:'PUT'})
        .then(response => response.json())

                window.alert('Voto registrado');
                window.location.href = "resultVotes.html";
          
    }

}
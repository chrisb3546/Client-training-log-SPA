class LiftsAdapter{
    constructor(url){
        this.lifts_url = 'http://localhost:3000/lifts'
       
    }
    
    createLift(e){
        e.preventDefault()
        let liftForm = document.querySelector('form')
        let clientId = this.parentNode.id.split('-')[1]
        let liftName = document.getElementById('liftName')
        let liftWeight = document.getElementById('liftWeight')
        let name = liftName.value
        let weight = liftWeight.value
        let client_id = clientId
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name, 
                weight, 
                client_id
            })
        }
    fetch(Lifts_url, configObj)
     .then(resToJson)
     .then(function(lift){
 
     
     displayLifts(lift)
    })
        liftForm.reset()
        
    }

    getLifts(){
        
        fetch(Lifts_url)
        .then(resToJson)
        .then(function(lifts) {
           
            lifts.forEach(function (l){
                let lift = new Lift(l.id, l.name, l.weight, l.client_id)
                displayLifts(lift)
                }
            )}

        )}  


        removeLift(){
            let id = this.parentNode.id.split('-')[1]
            fetch(`${Lifts_url}/${id}`,{
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
                }})
                .then(resToJson)
                .then(lift => {this.parentNode.remove()})
            }
        }

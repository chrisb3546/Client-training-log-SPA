class LiftsAdapter{
    constructor(){
        
       
    }
    
    createLift(e){
        
        e.preventDefault()
        
        let liftForm = document.querySelector('form')
        let client_id = this.parentNode.id.split('-')[1]
        let liftDescription = document.getElementById("liftDescription")
        let description = liftDescription.value
       
        if (liftDescription.value == ""){
            alert("Field Cannot be Empty")
        }
        else{
            let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                description,  
                client_id
            })
            }
            fetch("http://localhost:3000/lifts", configObj)
            .then(resToJson)

            .then(function(lift){
                displayLifts(lift)
            })
            
            liftForm.remove()
        }
    }

    getLifts(){
        
        let clientId = this.id.split(' ')[1]
        fetch(`${Clients_URL}/${clientId}/lifts`)
        .then(resToJson)
        .then(function(lifts) {
           lifts.forEach(function (l){
            let lift = new Lift(l.id, l.description, l.client_id)
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

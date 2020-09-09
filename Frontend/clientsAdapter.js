class ClientsAdapter{
    constructor(url){
        this.Clients_url = 'http://localhost:3000/clients'
       
    }

    

    getClients(){
        fetch(Clients_URL)
        .then(resToJson)
        .then(function(clients){
            clients.forEach(function (c){
                let client = new Client(c.id, c.name)
                displayClients(client)
            })
        })
    }

    createClients(e){
        e.preventDefault()
        debugger
        if (clientName.value == ""){
            alert("Field Cannot be Empty")
    
        }
        else{
        let name = clientName.value
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name
                
            })
        }
        
        fetch(Clients_URL, configObj)
         .then(resToJson)
         .then(function(client){
            
         
         displayClients(client)
        })
        
        clientForm.reset()
    }
    }

    deleteClient(){
        let clientId = this.id.split('-')[1]
        this.parentNode
        
        fetch(`${Clients_URL}/${clientId}`,{
            method: "DELETE",
           })
            .then(res => {
                return res.json()})
                
            .then(client => {
                this.parentNode.remove()})
        }
    
        updateClient(e){
            
            

            let name = document.getElementById('name').value

            // this.parentNode.innerText.split(' ')[0]
            
   
            let configObj = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name 
                        
                })
            }
            fetch(`${Clients_URL}/${clienttId}`, configObj)
            .then(resToJson)
            .then(client=> {
                
               let div = document.getElementById(editingClientId)  
                       
                div.querySelector('h2').innerText = client.name
              
                
                
              
                editing = false 
                editingClienttId = null
                editingClientId = null
                editingClientName = null
               
                submit.innerText = "Add Lift"
                resetForm()
                
              
                
            })
        }

        
}
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

    deleteClient(){
        let clientId = this.id.split('-')[1]
        fetch(`${Clients_URL}/${clientId}`,{
            method: "DELETE",
           })
            .then(res => {
                res.json()})
            .then(client => {this.parentNode.remove()})
        }
    
    

        
}
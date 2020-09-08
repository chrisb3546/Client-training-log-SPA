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

        
}
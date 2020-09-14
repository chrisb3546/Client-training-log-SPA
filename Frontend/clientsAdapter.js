class ClientsAdapter{
    
    
     getClients(){
        main.innerText = ''
        Client.all = []
        fetch(Clients_URL)
        .then(resToJson)
        .then(function(clients){
            clients.forEach(function (c){
                 c = new Client(c.id, c.name)
                displayClients(c)
                 addOptions()
            })
            
        })
           
            
             
        
    }

    createClients(e){
        e.preventDefault()
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
         .then(function(c){
            
         let client = new Client(c.id, c.name)
         displayClients(client)
         addOptions(client)
        
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
            this.parentNode.remove()
            clientsAdapter.getClients()
        })
            
            
        }
    
    updateClient(e){
        
        let name = document.getElementById('name').value
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
        .then(c=> {
            let div = document.getElementById(editingClientId)
            
            div.querySelector('h2').innerText = c.name
            clientsAdapter.getClients()
            editing = false 
            editingClienttId = null
            editingClientId = null
            editingClientName = null
            submit.innerText = "Add Client"
            resetForm()
        })
        
    }

        
}
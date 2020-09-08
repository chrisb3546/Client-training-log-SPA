const Clients_URL = "http://localhost:3000/clients"
const main = document.querySelector('main')
const clientsAdapter = new ClientsAdapter



document.addEventListener('DOMContentLoaded', clientsAdapter.getClients)


function resToJson(res){

    return res.json()
}

// function getClients(){
//     fetch(Clients_URL)
//     .then(resToJson)
//     .then(function(clients){
//         clients.forEach(function (client){
//             displayClients(client)
//     })
//          })
// }


function displayClients(client){
    const clientHeader = document.createElement('h2')
    clientHeader.id = `client-${client.id}`
    clientHeader.className = 'card'
    clientHeader.innerText = client.name
    main.appendChild(clientHeader)
}
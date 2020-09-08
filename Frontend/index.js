const Clients_URL = "http://localhost:3000/clients"
const main = document.querySelector('main')
const clientsAdapter = new ClientsAdapter
const liftsAdapter = new LiftsAdapter
const clientForm = document.getElementById('ClientForm')
const clientName = document.getElementById('name')



document.addEventListener('DOMContentLoaded', clientsAdapter.getClients)
clientForm.addEventListener('submit', clientsAdapter.createClients)


const resToJson = (res) => res.json()

    





function displayClients(client){
    const clientHeader = document.createElement('h2')
    clientHeader.id = `client-${client.id}`
    clientHeader.innerText = client.name
    const delButton = document.createElement('button')
    const addLiftBtn = document.createElement('button')
    addLiftBtn.id = `add-lift ${client.id}`
    addLiftBtn.innerText = "Add Lift"
    delButton.id = `delete-${client.id}`
    delButton.innerText = "Delete"
    main.appendChild(clientHeader)
    clientHeader.appendChild(delButton)
    clientHeader.appendChild(addLiftBtn)
    delButton.addEventListener('click', clientsAdapter.deleteClient)
    addLiftBtn.addEventListener('click', liftsAdapter.createLift)

}


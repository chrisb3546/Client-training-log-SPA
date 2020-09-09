const Clients_URL = "http://localhost:3000/clients"
const Lifts_url = "http://localhost:3000/lifts"
const main = document.querySelector('main')
const clientsAdapter = new ClientsAdapter
const liftsAdapter = new LiftsAdapter
const clientForm = document.getElementById('ClientForm')
const clientName = document.getElementById('name')
const submit = document.getElementById("submit")


document.addEventListener('DOMContentLoaded', clientsAdapter.getClients)

clientForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
   if (editing){
        clientsAdapter.updateClient(e)
    }
    else{
        clientsAdapter.createClients(e)
    }
}



const resToJson = (res) => res.json()

const resetForm = () => clientName.value = " "

const removeForm = (e) =>  e.target.parentElement.remove()





function displayClients(client){
    const div = document.createElement('div')
    div.id = `parent-${client.id}`
    const clientListName = document.createElement('h2')
    clientListName.id = `client-${client.id}`
    clientListName.innerText = `${client.name} `
    const delButton = document.createElement('button')
    const addLiftBtn = document.createElement('button')
    const seeLiftBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit Client'
    editBtn.id = `edit -${client.id}`
    seeLiftBtn.id = `see-lifts ${client.id}`
    seeLiftBtn.innerText = 'View All Lifts'
    addLiftBtn.id = `add-lift ${client.id}`
    addLiftBtn.innerText = "Add Lift"
    delButton.id = `delete-${client.id}`
    delButton.innerText = "Delete"
    main.appendChild(div)
    div.appendChild(clientListName)
    div.appendChild(delButton)
    div.appendChild(addLiftBtn)
    div.appendChild(seeLiftBtn)
    div.appendChild(editBtn)
    delButton.addEventListener('click', clientsAdapter.deleteClient)
    addLiftBtn.addEventListener('click', newLiftForm)
    seeLiftBtn.addEventListener('click', liftsAdapter.getLifts)
    editBtn.addEventListener('click',  editClient)
}

let editing = false 
let editingClienttId = null
let editingClientId = null
let editingClientName = null

function editClient(e){
    editing = true
    editingClientName = this.parentElement.children[0].innerText
    clientName.value = editingClientName
    submit.innerText = "Update Client"
    clienttId = this.id.split('-')[1]
    editingClientId  = this.parentElement.id
}

function newLiftForm(){
    const client = this.parentNode
    let clientId = this.id.split(' ')[1]
    const liftForm = document.createElement('form')
    const closeForm = document.createElement('button')
    closeForm.innerText = "Close Form"
    liftForm.innerHTML = `
    <br> ADD NEW LIFT <br>
    <form class = form id = newLiftForm>
    <label for = "name">Name </label>
    <input type="text"name="name" id="liftName">
    <label for ="weight">Weight</label>
    <input type="integer" name="weight" id="liftWeight">
    <button type="submit" id='submit'> Add Lift</button>
    </form>`
    client.appendChild(liftForm)
    liftForm.appendChild(closeForm)
    liftForm.addEventListener('submit', liftsAdapter.createLift)
    closeForm.addEventListener('click', removeForm)

    

 
}



function displayLifts(lift){
    if (!document.getElementById(`lift-${lift.id}`)){
    const liftHeader = document.createElement('h6')
    liftHeader.innerText = `${lift.name}, ${lift.weight}`
    liftHeader.id = `lift-${lift.id}`
    const delButton = document.createElement('button')
    delButton.innerText = "Delete Lift"
    liftHeader.innerText = `${lift.name}, ${lift.weight}`
    let client = document.getElementById(`client-${lift.client_id}`)
    client.appendChild(liftHeader)
    liftHeader.appendChild(delButton)
    delButton.addEventListener('click', liftsAdapter.removeLift)
    }
}


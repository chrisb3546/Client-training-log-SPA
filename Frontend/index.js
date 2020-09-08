const Clients_URL = "http://localhost:3000/clients"
const Lifts_url = "http://localhost:3000/lifts"
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
    const seeLiftBtn = document.createElement('button')
    seeLiftBtn.id = `see-lifts ${client.id}`
    seeLiftBtn.innerText = 'View All Lifts'
    addLiftBtn.id = `add-lift ${client.id}`
    addLiftBtn.innerText = "Add Lift"
    delButton.id = `delete-${client.id}`
    delButton.innerText = "Delete"
    main.appendChild(clientHeader)
    clientHeader.appendChild(delButton)
    clientHeader.appendChild(addLiftBtn)
    clientHeader.appendChild(seeLiftBtn)
    delButton.addEventListener('click', clientsAdapter.deleteClient)
    addLiftBtn.addEventListener('click', newLiftForm)
    seeLiftBtn.addEventListener('click', liftsAdapter.getLifts)

}

function newLiftForm(){
    const client = this.parentNode
    let clientId = this.id.split(' ')[1]
    const liftForm = document.createElement('form')
    const closeForm = document.createElement('button')
    closeForm.innerText = "Close Form"
    // const pokename  = document.getElementById('name ')
    
    liftForm.innerHTML = `
    <br> ADD NEW LIFT <br>
    
    <form class = form id = newLiftForm>
    <label for = "name">Name </label>
    <input type="text"name="name" id="liftName">
    <label for ="weight">Weight</label>
    <input type="integer" name="weight" id="liftWeight">
    <button type="submit" id='submit'> Add Lift</button>
</form>
`
    client.appendChild(liftForm)
    liftForm.appendChild(closeForm)

    liftForm.addEventListener('submit', liftsAdapter.createLift)
    closeForm.addEventListener('click', removeForm)

    function removeForm(){
        this.parentElement.remove()
    }
 
}

function displayLifts(lift){
    const liftHeader = document.createElement('h6')
    const delButton = document.createElement('button')
    delButton.innerText = "Delete Lift"
    liftHeader.innerText = `${lift.name}, ${lift.weight}`
    let client = document.getElementById(`client-${lift.client_id}`)
    client.appendChild(liftHeader)
    liftHeader.appendChild(delButton)
    delButton.addEventListener('click', liftsAdapter.removeLift)
}


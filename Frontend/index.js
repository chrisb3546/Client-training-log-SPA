

const Clients_URL = "http://localhost:3000/clients"
const Lifts_url = "http://localhost:3000/lifts"
const body = document.querySelector('body')
const main = document.querySelector('main')
const h1 = document.querySelector('h1')
const clientsAdapter = new ClientsAdapter
const liftsAdapter = new LiftsAdapter
const clientForm = document.getElementById('ClientForm')
const clientName = document.getElementById('name')
const submit = document.getElementById("submit")
const ul = document.createElement('ul')
const search = document.getElementById('client-search')
const liftSearch = document.getElementById('lift-search')
let liftHeader;

const select = document.createElement('select')
body.insertBefore(select, main)
// select.options 
// let defaultOpt= document.createElement('option')

// defaultOpt.innerText = "Select "
// select.add(defaultOpt)

let clientsArr = []



document.addEventListener('DOMContentLoaded', () =>{
    
    clientsAdapter.getClients()
    
    
    

})


search.addEventListener('keyup', findClients)
liftSearch.addEventListener( 'keyup', findLifts)

function addOptions(){
    select.innerHTML = " "
    let defaultOpt= document.createElement('option')
    defaultOpt.innerText = "Select "
    select.add(defaultOpt)
    Client.all.forEach(function(cl){
        
    Opt = document.createElement('option')
    Opt.innerText = cl.name 
    select.add(Opt)
    select.addEventListener('change', selectClient)
})
        
}

function selectClient(){
    if (this.value == "Select"){
        main.innerText = ''
        Client.all.forEach(client => displayClients(client))
    } else{
    let chosenClient = this.value
    
    main.innerHTML = ''
    const selClient  = Client.all.filter(function(c){
    return (c.name.includes(chosenClient))
    })

    selClient.forEach(function(cl){
    displayClients(cl)
    })
    }
}
   



function findClients(){
    
    let input = document.getElementById('client-search').value
     main.innerHTML = ''
    

    const filteredClients = Client.all.filter(function(client){ 
        
        return (client.name.includes(input)) 
    })
    
    filteredClients.forEach(function(client){

        displayClients(client)
        
    })
    
    
}

function findLifts (){
    
    let input = document.getElementById('lift-search').value
    

    const filteredLifts = Lift.all.filter(function (lift){
        return (lift.description.includes(input))
    })

    filteredLifts.forEach( function(lift){
        searchedLifts(lift)
    } )


}



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
    const clientUl = document.createElement('ul')
    clientUl.id = `list-${client.id}`
    div.id = `parent-${client.id}`
    const clientListName = document.createElement('h2')
    clientListName.id = `client-${client.id}`
    clientListName.innerHTML = `${client.name} `
    const delButton = document.createElement('button')
    // const addLiftBtn = document.createElement('button')
    // const seeLiftBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit Client'
    editBtn.id = `edit -${client.id}`
    // seeLiftBtn.id = `see-lifts ${client.id}`
    // seeLiftBtn.innerText = 'View All Lifts '
    // addLiftBtn.id = `add-lift ${client.id}`
    // addLiftBtn.innerText = "Add Lift "
    delButton.id = `delete-${client.id}`
    delButton.innerText = "Delete"
    main.appendChild(div)
    div.appendChild(clientListName)
    div.appendChild(clientUl)
    div.appendChild(delButton)
    // div.appendChild(addLiftBtn)
    // div.appendChild(seeLiftBtn)
    div.appendChild(editBtn)
    delButton.addEventListener('click', clientsAdapter.deleteClient)
    // addLiftBtn.addEventListener('click', newLiftForm)
    // seeLiftBtn.addEventListener('click', liftsAdapter.getLifts)
    editBtn.addEventListener('click',  editClient)
    clientListName.addEventListener('click', clientsAdapter.getClient)
    
}

function displayClient(client){
    const div = document.createElement('div')
    const clientUl = document.createElement('ul')
    clientUl.id = `list-${client.id}`
    div.id = `parent-${client.id}`
    const clientListName = document.createElement('h2')
    clientListName.id = `client-${client.id}`
    clientListName.innerHTML = `${client.name} `
    const delButton = document.createElement('button')
    const addLiftBtn = document.createElement('button')
    const seeLiftBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit Client'
    editBtn.id = `edit -${client.id}`
    seeLiftBtn.id = `see-lifts ${client.id}`
    seeLiftBtn.innerText = 'View All Lifts '
    addLiftBtn.id = `add-lift ${client.id}`
    addLiftBtn.innerText = "Add Lift "
    delButton.id = `delete-${client.id}`
    delButton.innerText = "Delete"
    main.appendChild(div)
    div.appendChild(clientListName)
    div.appendChild(clientUl)
    div.appendChild(delButton)
    div.appendChild(addLiftBtn)
    div.appendChild(seeLiftBtn)
    div.appendChild(editBtn)
    delButton.addEventListener('click', clientsAdapter.deleteClient)
    addLiftBtn.addEventListener('click', newLiftForm)
    seeLiftBtn.addEventListener('click', liftsAdapter.getLifts)
    editBtn.addEventListener('click',  editClient)
    clientListName.addEventListener('click', clientsAdapter.getClient)
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
    <br>
     ADD NEW LIFT
    <br>
    <form class=form id=newLiftForm>
    <label for = "description">Description </label>
    <textarea name="description" id="liftDescription"></textarea>
    <button type="submit" id='submit'> Add Lift</button>
     </form>
    `
    client.appendChild(liftForm)
    liftForm.appendChild(closeForm)
    liftForm.addEventListener('submit', liftsAdapter.createLift)
    closeForm.addEventListener('click', removeForm)
}

function searchedLifts (lift){
        let client = document.getElementById(`client-${lift.client_id}`)
        let parent = client.parentElement
        let container = parent.children[1]
        container.innerText = ''
    // if (!document.getElementById(`lift-${lift.id}`)){
        liftHeader = document.createElement('h4')
        
        liftHeader.innerText = `${lift.name}, ${lift.weight}`
        liftHeader.id = `lift-${lift.id}`
        liftHeader.innerText = `${lift.description} `
        const delButton = document.createElement('button')
        delButton.innerText = "Delete Lift"
        const closeLiftsButton = document.createElement('button')
        closeLiftsButton.innerText = "Close Lifts"
        closeLiftsButton.id = `closeButton-${lift.client_id}`
        
        
        container.appendChild(liftHeader)
        liftHeader.appendChild(delButton)
        delButton.addEventListener('click', liftsAdapter.removeLift)
        if (!document.getElementById(`closeButton-${lift.client_id}`)){
            parent.appendChild(closeLiftsButton)
            closeLiftsButton.addEventListener('click', closeLifts)
        }
    
   
    // }
}

function displayLifts(lift){
    if (!document.getElementById(`lift-${lift.id}`)){
        liftHeader = document.createElement('h4')
        liftHeader.innerText = `${lift.name}, ${lift.weight}`
        liftHeader.id = `lift-${lift.id}`
        liftHeader.innerText = `${lift.description} `
        const delButton = document.createElement('button')
        delButton.innerText = "Delete Lift"
        const closeLiftsButton = document.createElement('button')
        closeLiftsButton.innerText = "Close Lifts"
        closeLiftsButton.id = `closeButton-${lift.client_id}`
        let client = document.getElementById(`client-${lift.client_id}`)
        let parent = client.parentElement
        let container = parent.children[1]
        container.appendChild(liftHeader)
        liftHeader.appendChild(delButton)
        delButton.addEventListener('click', liftsAdapter.removeLift)
        if (!document.getElementById(`closeButton-${lift.client_id}`)){
            parent.appendChild(closeLiftsButton)
            closeLiftsButton.addEventListener('click', closeLifts)
        }
    
   
    }

   
}

function closeLifts(container){
    let list = this.parentElement.children[1]
    list.innerText = ""
    this.remove()
    
}


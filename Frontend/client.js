class Client{
    static all =[]
    constructor(id, name){
        this.id = id 
        this.name = name 
        

        Client.all.push(this)
    }

}
class Lift{
    static all =[]
    constructor(id, description, client_id){
        this.id = id 
        this.description = description 
        this.client_id = client_id
    

        Lift.all.push(this)
    }

}
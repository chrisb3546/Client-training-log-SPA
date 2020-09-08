class Lift{
    static all =[]
    constructor(id, name, weight, client_id){
        this.id = id 
        this.name = name 
        this.weight = weight
        this.client_id = client_id

        Lift.all.push(this)
    }

}
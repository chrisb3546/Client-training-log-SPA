class Lift{
    static all =[]
    constructor(id, name, weight, repetitions, rom, date, client_id){
        this.id = id 
        this.name = name 
        this.weight = weight
        this.repetitions = repetitions
        this.rom = rom 
        this.date = date
        this.client_id = client_id

        Lift.all.push(this)
    }

}
class user{
    constructor(name){
        this.name = name;
    }

    set name(value){
        if(value.length < 4){
            console.log('Name is too short');
            return;
        }
        this._name = value;
    }
    get name(){
        return this._name;
    }
}

let a =  new user("Pratham");
console.log(a.name);

a.name = "john";
console.log(a.name);

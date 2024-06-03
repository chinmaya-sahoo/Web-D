class User {
    constructor(name){
        //invoke the setter
        this.name =name;
    }

    get name(){
        return this.name;
    }

    set name(value){
        if(value.length <4){
            alert("name is too short")
            return;
        }
        this._name = value ;
    }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // name is too short

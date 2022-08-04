class parents{
    constructor(){
        this.fatherName = "schwerznegger";
    }
}
class Child extends parents{
    constructor(name){
        super();
    this.name = name;
    }
    // add function
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);
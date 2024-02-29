let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;

    this.getName = function(){
        return this.name;
    };

    this.getAge = function(){
        return this.age;
    };
};

let xemp1 = new EmpDetails('Jhose', 4);
let xemp2 = new EmpDetails('Alvaro', 5);
console.log (xemp1.getName());
console.log (xemp2.getAge());


let EmpDetails1 = function(name, age){
    this.name = name;
    this.age = age;
};


EmpDetails1.prototype.getName = function(){
    return this.name;
};

EmpDetails1.prototype.age = function(){
    return this.name;
};

let emp1 = new EmpDetails('Jhose', 4);
let emp2 = new EmpDetails('Alvaro', 5);
console.log (emp1.getName());
console.log (emp2.getAge());
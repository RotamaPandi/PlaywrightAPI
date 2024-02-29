class Employee{

    setDetails(name, id){
        this.name = name;
        this.id = id;
    }
}

let emp1 = new Employee();
emp1.setDetails('Jhose', 2019);
console.log (emp1.name);
console.log (emp1.id);


class Employee1{

    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}

let empl1 = new Employee1('Alvaro', 2019);
let empl2 = new Employee1('Gavriel', 2019);
console.log (empl1.name);
console.log (empl1.id);

console.log (empl2.name);
console.log (empl2.id);
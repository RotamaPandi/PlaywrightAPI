function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    // this.monthlyBonus = 1000;
    let monthlyBonus = 1000;

    //this.calculateFinalSalary = function(){
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log ('final Salary is : '+finalSalary);
    }

    this.getEmpDetails = function(){
        console.log ('Name : '+this.name+' | Age : '+this.age);
        calculateFinalSalary();
    }
}

let empl = new Employee('Jhose', 19, 2000);
empl.getEmpDetails();
// empl.monthlyBonus = 10000;
// empl.calculateFinalSalary();
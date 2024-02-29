let firstName = 'tama';

/*
typeof => to return the type of a variable
we can use the "typeof" operator to find the data type
of a Javascript variable
*/

console.log (typeof firstName);                     //return string
console.log (typeof 123);                           //return number  
console.log (typeof true);                          //return boolean
console.log (typeof NaN);                           //return boolnumberean
console.log (typeof [1,2,3,4]);                     //return object
console.log (typeof {name:'Tama', age:30});         //return object
console.log (typeof new Date());                    //return object
console.log (typeof null);                          //return object
console.log (typeof function () {});                //return function
console.log (typeof myClass);                       //return indefined



let lastName = new String('pandi');
let num1 = new Number(123);

/*
instanceof => to return true if is an instance of an object type
the "instanceof" operator returns a boolean value that indicates if an object 
is an instance of a particular class
*/

console.log (lastName instanceof String);
console.log (num1 instanceof Number);
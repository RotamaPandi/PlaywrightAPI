let numbers = [1, 2, 3, 4, 5];
console.log (numbers);

let fruits = ['apple', 'banana', 'grape'];
console.log (fruits);

fruits.push('cerry');
console.log (fruits);
console.log (fruits.length);

let x;
for(x in fruits){
    console.log (fruits[x]);
}

for(x of fruits){
    console.log(x);
}
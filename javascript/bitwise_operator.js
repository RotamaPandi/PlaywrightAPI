/*
Go to decimal to binary convert

in this case 
1 = 0001
2 = 0010

logiocal and & (sets each bit to 1 if of both bits are 1)
1 and 1 = 1
0 and 0 = 0
0 and 1 = 0
1 and 0 = 0

for example 

A = 1 = 0001
B = 2 = 0010
and ------------
A & B = 0000 = 0

logiocal or | (sets each bit to 1 if one of two bits is 1)
1 or 1 = 1
0 or 0 = 0
0 or 1 = 1
1 or 0 = 1

for example
A = 1 = 0001
B = 2 = 0010
or ------------
A & B = 0011 = 3 "Go to decimal to binary convert to ensure this value"

logiocal XOR ^ (sets each bit to 1 if only one of two bits is 1)
1 XOR 1 = 0
0 XOR 0 = 0
0 XOR 1 = 1
1 XOR 0 = 1

for example
3 = 0011
5 = 0101
xor ------------
A ^ B = 0110 = 6 "Go to decimal to binary convert to ensure this value"

logiocal NOT ~ (sets each bit to 1 if there a zero)

for example
5  = 00000101
~5 = 11111010 = -6
xor ------------
A ^ B = 0110 = 6 "Go to decimal to binary convert to ensure this value"

<< left shift
for example,
5<<1
    0  1  0  1
      .  .  .   
     .  . .
    1  0 1  0 = 10 "Go to decimal to binary convert to ensure this value"

>> Right shift
for example,
5>>1
*/


let A = 1;
let B = 2;

console.log(A & B);
console.log(A | B);
console.log(3^5);
console.log(~5);
console.log(5>>1);
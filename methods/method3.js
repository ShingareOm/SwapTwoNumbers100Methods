let a = 5;
let b = 10;

console.log("Before swapping: a =", a, "b =", b);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("After swapping: a =", a, "b =", b);

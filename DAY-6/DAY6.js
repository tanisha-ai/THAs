// question1
// isarray
e1=[1, 2, 4, 0]
e2="w3resource"
console.log(Array.isArray(e1))
console.log(Array.isArray(e2))


// question2
// clone an array

a=[1, 2, 4, 0]

b=[1, 2, [4, 0]]

// cloning array a
const a1=a.slice(0);

// cloning array b
const b1=b.slice(0);

console.log(a1);
console.log(b1);

// question 3

function first(array,n){
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
}  
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// question4
// join
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join())
console.log(myColor.join('+'))

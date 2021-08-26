// Take a parameter and return with divided by 5
const dividedBy5=(number)=>{
    const result = number/5;
    return result;
}
/* console.log(dividedBy5(10)); */

// const dividedBy5=(number)=>number/5;
/* console.log(dividedBy5(15)); */

// Take 2 parameter added them by 2 then multiply them

const mathOperation = (number1,number2)=>{
    const sum1=number1+2;
    const sum2=number2+2;
    return sum1*sum2;
};
/* console.log(mathOperation(5,5)); */

// take 3 parameter and then multiply them
const multiply=(number1,number2,number3)=>{
    const result = number1*number2*number3;
    return result;
}
/* console.log(multiply(3,3,3)); */

// map in arrow function
const numbers = [5,10,2,4,1,3,7,0];
const newNumbers = numbers.map(num => num*5);
// console.log(newNumbers); 
const oddNumbers = numbers.filter(number=> number%2!=0);
// console.log(oddNumbers);

// array object with filter method

const products  = [
    {names:"Samsung S8", price : 50000},
    {names:"Xiaomi Redmi Note 8", price :5000},
    {names:"Oppo A15", price : 5000},
    {names:"HTC", price : 30000},
];
const checpProduct = products.filter(product => product.price==5000);
console.log(checpProduct);



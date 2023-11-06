// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
  return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach((number, i) => {
      console.log(`Index ${i} >> ${number}`);
    });
  }
  odds() {
    //return the odd numbers in data
    let oddsNumbers = this.data.filter(item =>
    {return item%2 === 1});
    return oddsNumbers;
  }
  evens() {
    //return the even numbers in data
    let evenNumbers = this.data.filter(item =>
      {return item%2 == 0});
      return evenNumbers;
  }
  sum() {
    //return the sum of the numbers
    let sum = this.data.reduce((x,y) => {return x+y} , 0);
    return sum;
  }
  product() {
    //return the product of the numbers
    let product = this.data.reduce((x,y) => {return x*y} , 1);
    return product;
  }
  greaterThan(target) {
    //return the numbers greater than the target
  }
  howMany(target) {
    //return the count of a given number
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log("There are :" , n1.count() , "Element in the array."); //returns count of numbers
console.log("prints the number along with their indexes:");
n1.printNumbers(); //prints the number along with their indexes
console.log("The odd numbers :" , n1.odds()); //returns odd numbers
console.log("The even numbers :" , n1.evens()); //returns even numbers
console.log("The sum of numbers :" ,n1.sum()); //returns sum of numbers
console.log("The product of numbers :" , n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number

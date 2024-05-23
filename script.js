
//Question 1
const number=[1,2,3,4,5]

const square = () => number.map(num => Math.pow(num,2))


console.log(square());

//Question 2

const scores = (score) =>{
    return score >=90 ? 'A':
           score >=80 ?  'B':
           score >=70 ? 'C':
           score >=60 ? 'D':'F';
}

console.log(scores(92));
console.log(scores(85));
console.log(scores(72));
console.log(scores(66));
console.log(scores(52));

//Question 3
const Car ={
    company:"TATA",
    model:"Punch.ev",
    year:2023
};

function carYear(years){
    Car.year=years;
}



function ModelYear(car){
    const {model,year}=car;
    console.log(`Model:${model},Year: ${year}`);
}

ModelYear(Car);
carYear(2024);
ModelYear(Car);

//Question 4

function isPrime(num){
    if(num<=1) return false;
    if(num == 2) return true;
    if(num%2 ==0) return false;

    for(let i=3;i<=Math.sqrt(num);i+=2){
        if(num % i ==0) return false;
    }
    return true;
}


const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const primeNumber=numbers.filter(isPrime);

console.log(primeNumber);


//Question 5

/*
 "Use case of map"

1) Transforming Data
2) Extracting Specific Properties
3) Formatting Data

 "Use case of filter"

 1) Filtering based on Condition
 2) Removing Unwanted Data
 3) Filtering objects by Property

 "Use case of reduce"

 1) Summing up values
 2) Flattening Arrays
 3) Counting instances of values
*/

//Question 6

async function fetchData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    
}

fetchData();

//Question 7

const person ={
    name: 'John',
    address:'Town street 123',
    contactNumber:'1122334455'
}

const person1={
    name: 'Jack',
    address:'otherTown street321'
}

const phone=person?.contactNumber;
console.log(phone);

const notPhone=person1?.contactNumber;
console.log(notPhone);
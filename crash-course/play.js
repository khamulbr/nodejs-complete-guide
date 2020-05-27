// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// age = 30;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return (
//         'Name is ' + 
//         userName + 
//         ', age is ' + 
//         userAge + 
//         ' and the user has hobbies: ' + 
//         userHasHobby
//     );
// }

// const addRandom = () => 1 + 2;


// const add = (a,b) => a + b;

// console.log(summarizeUser(name, age, hasHobbies));

// console.log(add(1,2));

// console.log(addRandom());

const person = {
    name: 'Alessandro',
    age: 29,
    greet() { 
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;

console.log(name, age);

// person.greet();

// const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

// for (let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);  

// const copiedArray = [...hobbies];
// console.log(copiedArray);  


// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));

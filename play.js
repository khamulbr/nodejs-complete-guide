const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );
}

const addRandom = () => 1 + 2;


const add = (a,b) => a + b;

console.log(summarizeUser(name, age, hasHobbies));

console.log(add(1,2));

console.log(addRandom());
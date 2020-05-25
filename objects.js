const person = {
    name: 'Alessandro',
    age: 29,
    greet() { 
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies){
    console.log(hobby);
}

person.greet();
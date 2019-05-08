// OBJECT DESTRUCTURING

// const person = {
//   name: 'Trey',
//   age: 25,
//   location: {
//     city: 'trash',
//     temp: 80
//   }
// }

// const {name = 'Anon'/* adds default functionality */, age} = person;
// console.log(`${name} is ${age}.`);

// const {temp/* can create a new const variable such as 'temperature' using temp: temperature */, city} = person.location;
// console.log(`It's ${temp} in ${city}`);

/* *********************************************************************/

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self' } = book.publisher;

// console.log(publisherName); // Penguin or set default to Self-Published

/* *********************************************************************/

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Phili', 'Penn', '19147'];
const [street, city, state, zip] = address;
console.log(`you are in ${city} ${state}`);


const item = ['Coffe hot', '2$', '3$', '4$'];
const [drink, , medium, ] = item;

console.log(`A medium ${drink} costs ${medium}`)
console.log("Factory Functions Exercise");

// Example 1: Factory Function with Default Properties
function createBook() {
  return {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180
  };
}

console.log("Example 1: Factory Function with Default Properties");
const defaultBook = createBook();
console.log(defaultBook); // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 }

// TODO 1: Create a factory function named `createPet`
// This function should return an object with default properties:
// - name: 'creole'
// - species: 'Dog'
// - age: 2


// Example 2: Factory Function with Default Properties
function createCar() {
  return {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2010
  };
}

console.log("\nExample 2: Factory Function with Default Properties");
const defaultCar = createCar();
console.log(defaultCar); // Output: { brand: 'Toyota', model: 'Corolla', year: 2010 }

// TODO 2: Create a factory function named `createCity`
// This function should return an object with default properties:
// - name: 'Springfield'
// - population: 30000
// - country: 'USA'


// Example 3: Factory Function with Arguments
function createBookWithDetails(title, author, pages) {
  return {
    title: title,
    author: author,
    pages: pages
  };
}

console.log("\nExample 3: Factory Function with Arguments");
const specificBook = createBookWithDetails('1984', 'George Orwell', 328);
console.log(specificBook); // Output: { title: '1984', author: 'George Orwell', pages: 328 }

// TODO 3: Create a factory function named `createPetWithDetails`
// This function should accept three arguments to set the properties:
// - name
// - species
// - age

function createPetWithDetails(name, species, age){
  return{
  name: name,
  species: species,
  age: age
  };
}

const specificPet = createPetWithDetails('creole', 'dog', 2);
console.log(specificPet);
// Example 4: Factory Function with Arguments
function createCarWithDetails(brand, model, year) {
}

console.log("\nExample 4: Factory Function with Arguments");
const specificCar = createCarWithDetails('Infinitty', 'Model i30', 2022);
console.log(specificCar); // Output: { brand: 'Infinity', model: 'Model i30', year: 2022 }
function createCarWithDetails(brand, model, year) {
  return {
    brand: brand,
    model: model,
    year: year
  };
}



// TODO 4: Create a factory function named `createCityWithDetails`
// This function should accept three arguments to set the properties:
// - name
// - population
// - country


// Example 5: Factory Function with Method
function createPetWithMethod(name, species, age) {
  return {
    name: name,
    species: species,
    age: age,
    celebrateBirthday() {
      this.age += 1;
      console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
    }
  };
}

console.log("\nExample 5: Factory Function with Method");
const myPet = createPetWithMethod('shu shu', 'Dog', 1);
myPet.celebrateBirthday(); // Output: Happy Birthday shu shu! You are now 2 years old.

// TODO 5: Create a factory function named `createCityWithMethod`
// This function should accept three arguments to set the properties:
// - name
// - population
// - country
// Add a method named `changePopulation` that takes a number as an argument and updates the `population` property.


// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };

// function Person({ firstName, age, interest }) {
//   this.firstName = firstName;
//   this.age = age;
//   this.interest = interest;
//   // this.bio = function () {
//   //   console.log(
//   //     `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//   //   );
//   // };
//   // this.greeting = function () {
//   //   console.log(`Привіт, я ${this.firstName}`);
//   // };
// }
// Person.prototype.bio = function () {
//   console.log(
//     `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//   );
// };
// Person.prototype.greeting = function () {
//   console.log(`Привіт, я ${this.firstName}`);
// };

// const person = new Person({ firstName: "Khrystyna", age: 18, interest: "JS" });
// console.log(person);
// person.bio();
// person.greeting();

class Person {
  constructor({ firstName, age, interest }) {
    this.firstName = firstName;
    this.age = age;
    this.interest = interest;
  }
  bio() {
    console.log(
      `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
    );
  }
  greeting() {
    console.log(`Привіт, я ${this.firstName}`);
  }
}
const person = new Person({ firstName: "Khrystyna", age: 18, interest: "JS" });
console.log(person);
person.bio();
person.greeting();

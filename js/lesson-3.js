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

// class Person {
//   constructor({ firstName, age, interest }) {
//     this.firstName = firstName;
//     this.age = age;
//     this.interest = interest;
//   }
//   bio() {
//     console.log(
//       `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//     );
//   }
//   greeting() {
//     console.log(`Привіт, я ${this.firstName}`);
//   }
// }
// const person = new Person({ firstName: "Khrystyna", age: 18, interest: "JS" });
// console.log(person);
// person.bio();
// person.greeting();

// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// class User {
//   constructor({ username, age, numberOfPost }) {
//     this.username = username;
//     this.age = age;
//     this.numberOfPost = numberOfPost;
//   }
//   getInfo() {
//     return `User ${this.username} is ${this.age} years old and has ${this.numberOfPost} posts.`;
//   }
// }

// const user = new User({ username: "Victor", age: 37, numberOfPost: 6 });

// console.log(user);
// console.log(user.getInfo());

// class NewUser extends User {
//   constructor({ username, age, numberOfPost }) {
//     super({ username, age, numberOfPost });
//     this.username = username;
//   }
//   getUser() {
//     return `My name ${this.username}`;
//   }
// }

// const newUser = new NewUser({ username: "Poly", age: 30, numberOfPost: 1 });

// console.log(newUser);
// console.log(newUser.getUser());
// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

class Storage {
  constructor(arr) {
    this.arr = arr;
  }
  getItems() {
    return this.arr;
  }
  addItem(item) {
    this.arr.push(item);
  }
  removeItem(item) {
    const itemIdx = this.arr.indexOf(item);
    if (itemIdx === -1) {
      return;
    } else {
      this.arr.splice(itemIdx, 1);
    }
  }
}

const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
items.addItem("Манго");
items.removeItem("Ківі");
console.log(items);

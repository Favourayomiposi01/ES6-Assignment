class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    console.log(this.name + " is a " + this.type);
  }
}

let dog = new Animal("Bingo", "Dog");
dog.speak(); // Bingo is a Dog
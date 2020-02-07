class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayofStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayofAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayofAnything(["a", "b", "c"]);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printNumbers(arr: number[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

printAnything<string>(["a", "b", "c"]);

//Generic Constraints

interface Printable {
  print(): void;
}

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let item of arr) {
    item.print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);

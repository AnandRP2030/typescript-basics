// type infer
let age = 24; // not possible on implicitany: true

// explicit type
let weight: number = 52;
let myHobby: string = "Anand R P";
let haveLicense: boolean = true;
let hobbies: string[] = ["Chess", "football"];
let salary: number[] = [4000, 7000, 15000, 10000];
let person: { name: string; age: number } = { name: "Anand", age: 24 };

let employeeObj: {
  salary: number;
  name: string;
  age: number;
  isMarried: boolean;
} = {
  salary: 10000,
  name: "Elon Musk",
  age: 55,
  isMarried: false,
};

// union type
let objectNames: string | number = "Laptop";
let favMovies: string | number | boolean = 3;


// enum
enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}
let today: Days = Days.MONDAY;

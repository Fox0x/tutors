

// VARIABLES ==============================================

let value: string = "value";
let value2: number = 2;
let value3: boolean = true;
let value4: object = { "key": "value" };
let value5: null = null;
let value6: undefined = undefined;
let value7: symbol = Symbol("rer");

let value8: any = "value";
value8 = 3;
value8 = [34, 4];
value8 = { "key": "value" };
let value9: string | number = "erre";
value9 = 9;

// Bad case
let value10: any = ["string", 3, { "any": "value" }];

// ARRAYS ===================================================

let array: number[] = [1, 2, 3];
let array2: Array<number> = [1, 23, 4];
let array3: [string, number] = ["one", 2];

// Error case
// let array4: [string, number] = ["one", 2, 34];

let array5: [any] = ["one"];
let array6: any[] = ["one", 2, [4], { "key": "value" }];
let array7: Array<any> = ["one", 2, [4], { "key": "value" }];

// FUNCTIONS ===================================================

const myFunc = (
	name: string = "Unnamed",
	age?: number | string,
	...skills: Array<string>

): string => {

	if (!age) {
		age = 0;
	}
	return name + age + skills.join();
}
const getData = (data: any): any => data;
const voidFunc = (data: any): void => console.log(data);
const multiplyArgsFunc = (o: object | null): void => console.log(o);
const neverFunc1 = (): never => {
	throw new Error("Error message")
}
const neverFunc2 = (): never => {
	while (true) {

	}
};

// ENUMS ===================================================

enum Directions {
	Up,
	Down,
	Left,
	Right,

}

Directions.Up //0
Directions.Right //3
Directions[2] //"Left"


enum Directions2 {
	Up = 1,
	Down = "Down",
	Left = 6,
	Right
}

Directions2.Right //7
Directions2[6] //"Left"

enum links {
	youtube = 'https://www.youtube.com/',
	facebook = 'https://www.facebook.com/'
}


links.youtube //"https://www.youtube.com/"
links.facebook //"https://www.facebook.com/"

// TYPE ===================================================

type Strenh = string;
let myString: Strenh = "amazing"

// BANNED!
type False = boolean;
const True: False = true;


// OBJECTS ===================================================

let user: any = {
	name: "Kirill",
	age: 23
};

let user2: { name: string, age: number, nickName: string } = {
	name: "Kirill",
	age: 23,
	nickName: "Kir"
};

let admin: { name: string, age: number, nickName: string } = {
	name: "Max",
	age: 25,
	nickName: "Mad"
};

// Right version
type Person = {
	name: string,
	age: number,
	nickName?: string,
	getPass?: () => string
};

let rightUser: Person = {
	name: "Kirill",
	age: 23,
	nickName: "Kir"
}

let rightAdmin: Person = {
	name: "Max",
	age: 25,
	nickName: "Mad"
}
//  --- //
let rightUser2: Person = {
	name: "Andrey",
	age: 24,
	nickName: "Rey"
}

let rightAdmin2: Person = {
	name: "Max",
	age: 25,
	getPass(): string {
		return `${this.name}${this.age}`
	}
}

// CLASSES ===================================================

class User1 {

	public name: string;
	private age: number;
	protected nickName: string;
	readonly pass: string;

	constructor(name: string, age: number, nickName: string, pass: string) {
		this.name = name;
		this.age = age;
		this.nickName = nickName;
		this.pass = pass;
	}

	getPass(): string {
		return this.pass;
	}
}

const kirill = new User1("Kirill", 24, "Fox0x", "123qaz")
kirill.getPass() //123qaz

//console.log(kirill.name);
//console.log(kirill.age); - Property 'age' is private and only accessible within class 'User'
//console.log(kirill.nickName); - Property 'nickName' is protected and only accessible within class 'User' and its subclasses
//kirill.pass = "zaq321"; - Cannot assign to 'pass' because it is a read-only property

class TrueUser {
	private age: number = 20;

	static secret = 12345;

	constructor(
		public name: string,

	) { }

	// Setter like function 
	setAge(age: number) {
		this.age = age;
	}

	// Setter
	set myAge(age: number) {
		this.age = age;
	}

	getPass(): string {
		return `${this.name}${TrueUser.secret}`
	}
}

const kirill2 = new TrueUser('Kirill');
kirill2.setAge(23) //kirill2.age = 23
kirill2.myAge = 24 //kirill2.age = 24
kirill2.getPass() // "Kirill12345"

// INHERITANCE ===================================================

class User {
	private nickName: string = "Fox0x";
	static secret = 12345;

	constructor(public name: string, public age: number) { }

	getPass(): string {
		return `${this.name}${User.secret}`
	}
}

class NewUser extends User {
	name: string = "Andrey";

	constructor(age: number) {
		super(name, age)
	}

	getPass(): string {
		return `${this.age}${this.name}${User.secret}`
	}
}

const max = new User("Maxim", 13);
const andrey = new NewUser(32)

console.log(andrey.getPass()) // "32Andrey12345" 

// ABSTRACT CLASSES ===================================================

abstract class AbstractUser {
	constructor(public name: string, public age: number) { }

	greet(): void {
		console.log(this.name);
	}

	abstract getPass(): string;
}

// const abstractChild = new AbstractUser() - Cannot create an instance of an abstract class

class Usr extends AbstractUser {

	getPass = (): string => {
		return "password"
	}

}

// NAMESPACE ===================================================

namespace Utils {
	export const someConst: string = "1dfcf";
	const PI: number = 3.1415;

	export const isEmpty = (data: any): boolean => !data;

};

const PI: number = 3.1415;
// const PI: number = Utils.PI - Property 'PI' does not exist on type 'typeof Utils'
const someConst: string = Utils.someConst;
const isEmpty: boolean = Utils.isEmpty(Utils.someConst)
console.log(isEmpty)

// If its another file Utils.ts. 3 slashes is requrement!!! But modules is better:

/// <reference path="Utils.ts"/>

// !!! Modules like syntax !!!

// File Utils.ts:
// export const someConst1: string = "1dfcf";
// export const isEmpty1 = (data: any): boolean => !data;

// Another file:
// import {someConst1, isEmpty1} from "./Utils"
// const isEmpty = isEmpty1(someConst1)


// TYPE INTERFACE ===================================================
{
	interface User {
		name: string,
		age: number,

	}

	interface UserI {
		name: string,
		age: number,
		gender?: boolean,
		readonly hash?: string,
		[propName: string]: any

	}

	interface PassI {
		getPass(): void;
	}

	class UserWithPass implements UserI, PassI {
		name: string = "Kirill";
		age: number = 25;
		gender: boolean = true;
		trtrt: string = "trtr";
		nununu: number[] = [43];


		getPass(): void {
			console.log(this.name)
		}
	}

	const kirillI = new UserWithPass()
	kirillI.getPass()
}

{
	interface User {
		name: string,
		age: number
	}

	interface Admin extends User {
		getPass(): string;
	}

	class Admin implements Admin {
		name: string = "Kirill";
		age: number = 25;
		getPass() {
			return "password"
		}
	}

	const kirill = new Admin;
	console.log(kirill.getPass())
}
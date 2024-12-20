// // OOPS Using Class

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let obj = new Student("Kailash", 25);
// console.log(obj);

// // OOPS using Function

// function Student2(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let obj2 = new Student2("Ronny", 22);
// console.log(obj2);

// class Car {
//     constructor(nameOfCar, model, engineType) {
//         this.nameOfCar = nameOfCar;
//         this.model = model;
//         this.engineType = engineType;
//     }
//     // getNameOfCar() {
//     //     return 'The Names of Car is '(this.nameOfCar)'';
//     // }
// }
// let bmw = new Car("BMWi7", "BMWi7 Racer", "Diesel");
// let maruti = new Car("Maruti Suzuki", "Suzuki Ultra", "Petrol");
// // console.log(bmw, maruti,);
// console.log(bmw.model,);

// class PwSkills {
//     name = "jaipur Center";
//     getName() {
//     }
// }
// let center = new PwSkills();
// console.log(center.name);

class ATM {
    balance = 10000;
    depositeMoney(amount) {
        this.balance += amount;
    }
    getMoney() {
        console.log(this.balance);

    }
}
const icici = new ATM();
icici.depositeMoney(1500);
icici.getMoney();
console.log(icici);

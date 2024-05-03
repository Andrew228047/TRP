class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}
const worker1 = new Worker('Vitaliy', 'Kosmovckiy', 100, 20);
console.log(worker1.getSalary());

const worker2 = new Worker('Ivan', 'Slopok', 120, 15);
console.log(worker2.getSalary());
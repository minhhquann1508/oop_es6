import Person from "./Person.js";
class Employee extends Person {
    constructor(id, name, address, email, position, workDay, salary) {
        super(id, name, address, email, position)
        this.workDay = workDay;
        this.salary = salary;
        this.total = 0;
    }
    calcSalary() {
        this.total = this.workDay * this.salary;
    }
}
export default Employee;
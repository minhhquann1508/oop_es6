import Person from "./Person.js";
class Customer extends Person {
    constructor(id, name, address, email, position, company, bill, review) {
        super(id, name, address, email, position)
        this.company = company;
        this.bill = bill;
        this.review = review;
    }
}
export default Customer;
import Person from "./Person.js";
class Student extends Person {
    constructor(id, name, address, email, position, math, physic, chemistry, score) {
        super(id, name, address, email, position)
        this.math = math;
        this.physic = physic;
        this.chemistry = chemistry;
        this.score = 0;
    }
    calcScore() {
        this.score = ((Number(this.math) + Number(this.physic) + Number(this.chemistry)) / 3).toFixed(2);
    }
}
export default Student;
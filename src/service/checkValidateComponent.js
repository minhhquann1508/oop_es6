import { correct, failValid, validation } from "../controller/main.js";
//check dữ liệu cơ bản
export const checkSimpleValue = (id, name, address, email, position) => {
    let error = 0;
    if (!validation.checkID(id)) {
        failValid('userId')
        error++;
    }
    else {
        correct('userId')
    }
    if (!validation.checkValid(name, /^[a-zA-ZÀ-ỹ\s]+$/)) {
        failValid('userName')
        error++;
    }
    else {
        correct('userName')
    }
    if (!validation.checkEmpty(address, /^[a-zA-Z0-9\s.-]+$/)) {
        failValid('address')
        error++;
    }
    else {
        correct('address')
    }
    if (!validation.checkValid(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        failValid('email')
        error++;
    }
    else {
        correct('email')
    }
    if (!validation.checkEmpty(position)) {
        failValid('position')
        error++;
    }
    else {
        correct('position')
    }
    if (error != 0) {
        return false;
    }
    else {
        return true;
    }

}
//Check valid score 
export const checkValidScore = (math, physic, chemistry) => {
    let error = 0;
    if (!validation.checkValid(math, /^(10|[0-9])$/)) {
        failValid('math');
        error++;
    }
    else {
        correct('math');
    }
    if (!validation.checkValid(physic, /^(10|[0-9])$/)) {
        failValid('physic');
        error++;
    }
    else {
        correct('physic');
    }
    if (!validation.checkValid(chemistry, /^(10|[0-9])$/)) {
        failValid('chemistry');
        error++;
    }
    else {
        correct('chemistry');
    }
    if (error !== 0) {
        return false;
    }
    else {
        return true;
    }
}

//Check valid teacher
export const checkValidTeacher = (workDay, salary) => {
    let error = 0;
    if (!validation.checkValid(workDay, /^[1-9][0-9]*$/)) {
        failValid('workDay');
        error++;
    }
    else {
        correct('workDay');
    }
    if (!validation.checkValid(salary, /^[1-9][0-9]*$/)) {
        failValid('salary');
        error++;
    }
    else {
        correct('salary');
    }
    if (error !== 0) {
        return false;
    }
    else {
        return true;
    }
}

//check valid customer
export const checkValidCustomer = (company, bill, review) => {
    let error = 0;
    if (!validation.checkEmpty(company)) {
        failValid('company');
        error++;
    }
    else {
        correct('company');
    }
    if (!validation.checkValid(bill, /^[0-9]+$/)) {
        failValid('bill');
        error++;
    }
    else {
        correct('bill');
    }
    if (!validation.checkEmpty(review)) {
        failValid('review');
        error++;
    }
    else {
        correct('review');
    }
    if (error !== 0) {
        return false;
    }
    else {
        return true;
    }
}
import { correct, failValid, validation } from "../controller/main.js";
//check dữ liệu cơ bản
export const checkSimpleValue = (id, name, address, email, position) => {
    let error = 0;
    if (!validation.checkID(id)) {
        showError('userId', 'show');
        failValid('userId')
        error++;
    }
    else {
        showError('userId', 'hide');
        correct('userId')
    }
    if (!validation.checkValid(name, /^[a-zA-ZÀ-ỹ\s]+$/)) {
        showError('userName', 'show');
        failValid('userName')
        error++;
    }
    else {
        showError('userName', 'hide');
        correct('userName')
    }
    if (!validation.checkEmpty(address, /^[a-zA-Z0-9\s.-]+$/)) {
        showError('address', 'show');
        failValid('address')
        error++;
    }
    else {
        showError('address', 'hide');
        correct('address')
    }
    if (!validation.checkValid(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        showError('email', 'show');
        failValid('email')
        error++;
    }
    else {
        showError('email', 'hide');
        correct('email')
    }
    if (!validation.checkEmpty(position)) {
        showError('position', 'show');
        failValid('position')
        error++;
    }
    else {
        showError('position', 'hide');
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
        showError('math', 'show')
        failValid('math');
        error++;
    }
    else {
        showError('math', 'hide')
        correct('math');
    }
    if (!validation.checkValid(physic, /^(10|[0-9])$/)) {
        showError('physic', 'show')
        failValid('physic');
        error++;
    }
    else {
        showError('physic', 'hide')
        correct('physic');
    }
    if (!validation.checkValid(chemistry, /^(10|[0-9])$/)) {
        showError('chemistry', 'show')
        failValid('chemistry');
        error++;
    }
    else {
        showError('chemistry', 'hide')
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
        showError('workDay', 'show');
        failValid('workDay');
        error++;
    }
    else {
        showError('workDay', 'hide');
        correct('workDay');
    }
    if (!validation.checkValid(salary, /^[1-9][0-9]*$/)) {
        showError('salary', 'show');
        failValid('salary');
        error++;
    }
    else {
        showError('salary', 'hide');
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
        showError('company', 'show');
        failValid('company');
        error++;
    }
    else {
        showError('company', 'hide');
        correct('company');
    }
    if (!validation.checkValid(bill, /^[0-9]+$/)) {
        showError('bill', 'show');
        failValid('bill');
        error++;
    }
    else {
        showError('bill', 'hide');
        correct('bill');
    }
    if (!validation.checkEmpty(review)) {
        showError('review', 'show');
        failValid('review');
        error++;
    }
    else {
        showError('review', 'hide');
        correct('review');
    }
    if (error !== 0) {
        return false;
    }
    else {
        return true;
    }
}

const showError = (id, method) => {
    let el = document.getElementById(id);
    let parrent = el.parentElement;
    if (method === 'show') {
        parrent.querySelector('.text-danger').style.display = 'block';
    }
    else {
        parrent.querySelector('.text-danger').style.display = 'none';
    }
}
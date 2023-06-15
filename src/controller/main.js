import getData from "../service/getData.js";
import saveToData from "../service/saveData.js";
import renderTable from "../service/renderTable.js";
import Validation from "../service/validation.js";
import Student from "../module/Student.js";
import Employee from "../module/Employee.js";
import Customer from "../module/Customer.js";
import ListPerson from "../module/ListPerson.js";
import openPopUp from "../service/OpenPopup.js";
import { checkSimpleValue, checkValidScore, checkValidCustomer, checkValidTeacher } from "../service/checkValidateComponent.js";
let list = new ListPerson;
let validation = new Validation

//correct
const correct = (id) => {
    return document.getElementById(id).style.borderColor = 'green';
}

//fail
const failValid = (id) => {
    return document.getElementById(id).style.borderColor = 'red';
}

//Thay đổi form sau khi chọn chức vụ
window.changeUIByPostion = (el) => {
    const value = el.value;
    renderOptional(value)
}

//render khung optional
const renderOptional = (value) => {
    switch (value) {
        case '': {
            document.querySelectorAll('.optional').forEach((option) => {
                option.style.display = 'none';
            })
            break;
        }
        case 'Học sinh': {
            document.querySelectorAll('.optional').forEach((option) => {
                option.style.display = 'none';
            })
            document.getElementById('student').style.display = 'flex';
            break;
        }
        case 'Giáo viên': {
            document.querySelectorAll('.optional').forEach((option) => {
                option.style.display = 'none';
            })
            document.getElementById('teacher').style.display = 'flex';
            break;
        }
        case 'Khách hàng': {
            document.querySelectorAll('.optional').forEach((option) => {
                option.style.display = 'none';
            })
            document.getElementById('customer').style.display = 'flex';
            break;
        }
    }
}

//Thêm nhân viên vào list
document.getElementById('add-btn').onclick = () => {
    checkValidByMethod('add')
}

//Xóa sau khi nhấn nút
document.getElementById('delete-btn').onclick = () => {
    let id = document.getElementById('delete-box').value;
    deletedPerson(id)
}

//Hàm xóa người
window.deletedPerson = (id) => {
    list.deletePerson(id);
    saveToData()
    renderTable(list.list);
}

//Lọc danh sách 
window.filterType = (el) => {
    let value = el.value;
    console.log(value);
    let newList = list.filterType(value);
    renderTable(newList);
}

//Lấy người dùng bằng id 
window.getPerson = (changeId) => {
    let person = list.getPersonByID(changeId)
    const { id, name, address, email, position } = person;
    document.getElementById('popup-btn').click();
    document.getElementById('add-btn').disabled = true;
    document.getElementById('update-btn').disabled = false;
    document.getElementById('userId').disabled = true;
    document.getElementById('userId').value = id;
    document.getElementById('userName').value = name;
    document.getElementById('address').value = address;
    document.getElementById('email').value = email;
    document.getElementById('position').value = position
    switch (position) {
        case 'Học sinh': {
            document.getElementById('math').value = person.math;
            document.getElementById('physic').value = person.physic;
            document.getElementById('chemistry').value = person.chemistry;
            renderOptional(position);
            break;
        }
        case 'Giáo viên': {
            document.getElementById('workDay').value = person.workDay;
            document.getElementById('salary').value = person.salary;
            renderOptional(position);
            break;
        }
        case 'Khách hàng': {
            document.getElementById('company').value = person.company;
            document.getElementById('bill').value = person.bill;
            document.getElementById('review').value = person.review;
            renderOptional(position);
            break;
        }
    }

}

//Lấy thông tin và kiểm tra dữ liệu theo method
const checkValidByMethod = (method) => {
    let id = document.getElementById('userId').value * 1;
    let name = document.getElementById('userName').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let position = document.getElementById('position').value;
    if (checkSimpleValue(id, name, address, email, position)) {
        if (method === 'add') {
            switch (position) {
                case 'Học sinh': {
                    let math = document.getElementById('math').value;
                    let physic = document.getElementById('physic').value;
                    let chemistry = document.getElementById('math').value;
                    if (checkValidScore(math, physic, chemistry)) {
                        let student = new Student(id, name, address, email, position, math, physic, chemistry);
                        student.calcScore();
                        list.addNewPerson(student);
                        break;
                    }
                    else {
                        return;
                    }

                }
                case 'Giáo viên': {
                    let workDay = document.getElementById('workDay').value;
                    let salary = document.getElementById('salary').value;
                    if (checkValidTeacher(workDay, salary)) {
                        let teacher = new Employee(id, name, address, email, position, workDay, salary);
                        teacher.calcSalary();
                        list.addNewPerson(teacher);
                        break;
                    }
                    else {
                        return;
                    }

                }
                case 'Khách hàng': {
                    let company = document.getElementById('company').value;
                    let bill = document.getElementById('bill').value;
                    let review = document.getElementById('review').value;
                    if (checkValidCustomer(company, bill, review)) {
                        let customer = new Customer(id, name, address, email, position, company, bill, review);
                        list.addNewPerson(customer);
                        break;
                    }
                    else {
                        return;
                    }
                }
            }
        }
        if (method === 'update') {
            switch (position) {
                case 'Học sinh': {
                    let math = document.getElementById('math').value;
                    let physic = document.getElementById('physic').value;
                    let chemistry = document.getElementById('chemistry').value;
                    if (checkValidScore(math, physic, chemistry)) {
                        let updateStudent = new Student(id, name, address, email, position, math, physic, chemistry);
                        updateStudent.calcScore();
                        list.updatePersonInfo(updateStudent);
                        break;
                    }
                    else {
                        return;
                    }
                }
                case 'Giáo viên': {
                    let workDay = document.getElementById('workDay').value;
                    let salary = document.getElementById('salary').value;
                    if (checkValidTeacher(workDay, salary)) {
                        let updateTeacher = new Employee(id, name, address, email, position, workDay, salary);
                        updateTeacher.calcSalary();
                        list.updatePersonInfo(updateTeacher);
                        break;
                    }
                    else {
                        return;
                    }
                }
                case 'Khách hàng': {
                    let company = document.getElementById('company').value;
                    let bill = document.getElementById('bill').value;
                    let review = document.getElementById('review').value;
                    if (checkValidCustomer(company, bill, review)) {
                        let updateCustomer = new Customer(id, name, address, email, position, company, bill, review);
                        list.updatePersonInfo(updateCustomer);
                        break;
                    }
                    else {
                        return;
                    }
                }
            }
        }
        saveToData();
        list.sortByName();
        document.getElementById('close-btn').click();
        renderTable(list.list);
    }
    else {
        return;
    }
}
//Cập nhật thông tin 
document.getElementById('update-btn').onclick = () => {
    checkValidByMethod('update');
}

//Hàm mở pop up
document.getElementById('popup-btn').onclick = () => {
    openPopUp();
}

getData(list.list);


export { correct, failValid, list, validation };
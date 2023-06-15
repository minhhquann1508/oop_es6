import { list } from "../controller/main.js";
//Lưu dữ liệu vào localStorage
const saveToData = () => {
    let json = JSON.stringify(list.list);
    localStorage.setItem('listPerson', json);
}
export default saveToData; 
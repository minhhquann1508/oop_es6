import renderTable from "./renderTable.js";
import { list } from "../controller/main.js";
//Láy danh sách người dùng về từ local
const getData = () => {
    let json = localStorage.getItem('listPerson');
    let data = JSON.parse(json);
    if (data !== null) {
        list.list = [...data];
        renderTable(list.list);
    }
}
export default getData;
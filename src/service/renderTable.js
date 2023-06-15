//Render ra danh sách 
const renderTable = (listPerson) => {
    let htmls = listPerson.map((person) => {
        switch (person.position) {
            case 'Học sinh': {
                return `
                    <tr>
                        <td>${person.id}</td>
                        <td>${person.name}</td>
                        <td>${person.email}</td>
                        <td>${person.address}</td>
                        <td>${person.position}</td>
                        <td></td>
                        <td>${person.score}</td>
                        <td>
                        <button onclick="getPerson(${person.id})"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deletedPerson(${person.id})"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `
            }
            case 'Giáo viên': {
                return `
                <tr>
                        <td>${person.id}</td>
                        <td>${person.name}</td>
                        <td>${person.email}</td>
                        <td>${person.address}</td>
                        <td>${person.position}</td>
                        <td>${person.total}</td>
                        <td></td>
                        <td>
                        <button onclick="getPerson(${person.id})"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deletedPerson(${person.id})"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    `
            }
            case 'Khách hàng': {
                return `
                <tr>
                        <td>${person.id}</td>
                        <td>${person.name}</td>
                        <td>${person.email}</td>
                        <td>${person.address}</td>
                        <td>${person.position}</td>
                        <td></td>
                        <td></td>
                        <td>
                        <button onclick="getPerson(${person.id})"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deletedPerson(${person.id})"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    `
            }
        }
    })
    document.getElementById('tableBody').innerHTML = htmls.join('');
}
export default renderTable;
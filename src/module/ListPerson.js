class ListPerson {
    constructor() {
        this.list = [];
    }
    sortByName = () => {
        this.list.sort((personA, personB) => {
            const nameA = personA.name.toUpperCase();
            const nameB = personB.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    }
    addNewPerson = (newPerson) => {
        let index = this.list.findIndex(person => Number(person.id) === Number(newPerson.id));
        if (index !== -1) {
            alert('Id đã tồn tại');
            return;
        }
        this.list.push(newPerson);
    }
    deletePerson = (id) => {
        let index = this.list.findIndex((person) => Number(id) === Number(person.id));
        if (index !== -1) {
            if (confirm("Bạn có chắc muốn xóa nhân sự này ?")) {
                this.list.splice(index, 1);
            }
            return;
        }
        alert('Không tìm thấy id cần xóa');
    }
    filterType = (type) => {
        console.log(this.list);
        if (type === 'all') {
            console.log(this.list);
            return this.list;
        }
        else {
            let newList = this.list.filter((person) => person.position === type);
            console.log(newList);
            if (newList.length === 0) {
                newList = [];
            }
            return newList;
        }
    }
    getPersonByID = (id) => {
        let findingPerson = this.list.find((person) => (person.id).toString() === (id).toString());
        return findingPerson;
    }
    updatePersonInfo = (personUpdate) => {
        let index = this.list.findIndex((person) => Number(person.id) === Number(personUpdate.id))
        if (index !== -1) {
            this.list[index] = personUpdate;
        }
        else {
            alert('Không tìm thấy sinh viên cần update')
        }
    }
}
export default ListPerson;
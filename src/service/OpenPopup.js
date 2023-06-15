const openPopUp = () => {
    document.getElementById('add-btn').disabled = false;
    document.getElementById('update-btn').disabled = true;
    document.getElementById('userId').disabled = false;
    document.getElementById('userId').value = '';
    document.getElementById('userName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('position').value = '';
    document.getElementById('math').value = '';
    document.getElementById('physic').value = '';
    document.getElementById('chemistry').value = '';
    document.getElementById('workDay').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('company').value = '';
    document.getElementById('bill').value = '';
    document.getElementById('review').value = '';
    document.querySelectorAll('.optional').forEach((option) => {
        option.style.display = 'none';
    })
}
export default openPopUp;
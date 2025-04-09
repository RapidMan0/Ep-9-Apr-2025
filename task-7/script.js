function addListItem() {
    const newItem = document.createElement('li');
    newItem.textContent = 'Sa invat';
    const list = document.getElementById('myList');
    list.appendChild(newItem);
}
document.getElementById('addButton').addEventListener('click', addListItem);

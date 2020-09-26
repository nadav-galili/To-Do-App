async function getTOdos() {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    let response = await fetch(apiUrl);
    let toDos = await response.json();
    let items = "";
    // fetching the toDos      
    toDos.forEach((list) => {
        if (`${list.completed}` === "true") {
            items += `<li class="list-group-item">${list.title}<br>completed: Yes</li>`;
        } else {
            items += `<li class="list-group-item">${list.title}<br>completed: No</li>`;
        }
        // adding the todos to the ul
        $('#myList').html(items);
    })
}
getTOdos();

let newItems = "";
let btn = document.getElementById('myBtn');
// getting the name and post from the form
btn.addEventListener("click", function () {
    let name = document.getElementById('fname').value;
    let post = document.getElementById('postBody').value;
    newItems = `<li class="list-group-item">${name}<br>${post}</li>`;
    console.log(newItems);
    $('#myList').prepend(newItems)
});
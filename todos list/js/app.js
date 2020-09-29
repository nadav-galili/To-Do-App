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
const endPoint = "https://jsonplaceholder.typicode.com/todos";

$('#myBtn').on('click', () => {
    if ($('#fname').val() == "") {
        alert("Task must be filled out");
        return false;
    }
    const newPost = {
        userId: 1,
        title: $('#fname').val(),
        body: $("input[type='radio']:checked").val(),
    };
    console.log($('#fname'));

    const endpoint = "https://jsonplaceholder.typicode.com/posts";
    fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(newPost),
        })
        .then((response) => response.json())
        .then((post) => {
            console.log(post);
        });
    console.log(newPost);

    let name = $('#fname').val();
    let completed = $("input[type='radio']:checked").val()
    newItems = `<li class="list-group-item">${name}<br>completed:${completed}</li>`;
    console.log(newItems);
    $('#myList').prepend(newItems)

})
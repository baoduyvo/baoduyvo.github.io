function button_click() {
    let name = document.querySelector('#name').value;
    let result = confirm("I like " + name + ". Do you like me?");
    while (result !== true) {
        result = confirm("I like " + name + ". Do you like me?");
    }
    document.body.className = "bg-heart";
}
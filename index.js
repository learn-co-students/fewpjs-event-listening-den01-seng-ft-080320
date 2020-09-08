function addingEventListener() {
    const input = document.getElementById('input');
    console.log(input)
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });
    
}

addingEventListener()

var elements = document.getElementsByClassName("include");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            element.innerHTML += request.responseText;
        }
    };
    request.open("GET", element.dataset.file);
    request.send();
}
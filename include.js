var elements = document.getElementsByClassName("include");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var dataset = element.dataset;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            switch (dataset.method) {
                case "append":
                    element.innerHTML += request.responseText;
                    break;
                case "prepend":
                    element.innerHTML = request.responseText + element.innerHTML;
                    break;
                default:
                    element.innerHTML = request.responseText;
            }
        }
    };
    request.open("GET", dataset.file);
    request.send();
}

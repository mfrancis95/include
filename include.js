Element.prototype.include = function(file, method, allStatuses) {
    var self = this;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE && (allStatuses || request.status === 200)) {
            switch (method) {
                case "append":
                    self.innerHTML += request.responseText;
                    break;
                case "prepend":
                    self.innerHTML = request.responseText + self.innerHTML;
                    break;
                default:
                    self.innerHTML = request.responseText;
            }
        }
    };
    request.open("GET", file);
    request.send();
};

var elements = document.getElementsByClassName("include");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var dataset = element.dataset;
    element.include(dataset.file, dataset.method, dataset.allStatuses);
}

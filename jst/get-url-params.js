// Function to extract URL parameters
function getURLParameters() {
    var params = {};
    var search = window.location.search.substring(1);
    var keyValuePairs = search.split('&');

    for (var i = 0; i < keyValuePairs.length; i++) {
        var keyValuePair = keyValuePairs[i].split('=');
        var key = decodeURIComponent(keyValuePair[0]);
        var value = decodeURIComponent(keyValuePair[1]);

        params[key] = value;
    }

    return params;
}

function removeHyphens(str) {
    return str.replace(/-/g, ' ');
}

// Usage example
var urlParams = getURLParameters();
const outputElement = document.getElementById("output");

if (urlParams.to == undefined) {
    outputElement.innerText = ""
} else {
    outputElement.innerText = removeHyphens(urlParams.to);
}
function parseQueryStrings() {
  var queryParams = {};

  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");

    queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return queryParams;
}

var quoteButton = document.getElementById("quote-button");
var zipCodeInput = document.getElementById("widget-subscribe-form-email");

var parsedQueryStrings = parseQueryStrings();

quoteButton.addEventListener("click", function (e) {

  var zipCodeString = "?zip_code=" + zipCodeInput.value;

  if (window.location.search.length !== 0) {
    zipCodeString = window.location.search += "&zip_code=" + zipCodeInput.value;
  }

  window.location.replace(
    "http://127.0.0.1:8000/get-a-quote/" + zipCodeString
  );
});

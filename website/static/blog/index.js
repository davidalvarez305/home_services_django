const quoteButton = document.getElementById("quote-button");
const zipCodeInput = document.getElementById("widget-subscribe-form-email");

quoteButton.addEventListener("click", function (e) {
  window.location.replace('http://127.0.0.1:8000/get-a-quote/' + '?zip_code=' + zipCodeInput.value)
});
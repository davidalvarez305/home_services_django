var quoteButton = document.getElementById("quote-button");
var zipCodeInput = document.getElementById("widget-subscribe-form-email");

var qs = new URLSearchParams(window.location.search);

quoteButton.addEventListener("click", function (e) {

  qs.set('zip_code', zipCodeInput.value);
  qs.set('referrer', document.referrer);

  window.location.replace(
    "http://127.0.0.1:8000/get-a-quote/?" + qs.toString()
  );
});

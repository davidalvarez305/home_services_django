var quoteButton = document.getElementById("quote-button");
var zipCodeInput = document.getElementById("widget-subscribe-form-email");

var qs = new URLSearchParams(window.location.search);

function getLeadChannel() {

  // No referrer means the user accessed the website directly
  if (document.referrer.length === "") return "direct";

  // If we get to this point, it means that document.referrer is not null
  // If there's no paid traffic because 'medium' is empty -> it's organic
  if (!qs.get('medium')) return "organic";

  return "paid";
}

quoteButton.addEventListener("click", function (e) {

  qs.set('zip_code', zipCodeInput.value);
  qs.set('referrer', document.referrer);

  window.location.replace(
    "http://127.0.0.1:8000/get-a-quote/?" + qs.toString()
  );
});

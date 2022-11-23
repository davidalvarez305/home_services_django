const quoteButton = document.getElementById("quote-button");
const zipCodeInput = document.getElementById("widget-subscribe-form-email");
const getAQuoteForm = document.getElementById('get-a-quote-form');
const submitFormButton = document.getElementById('quote-submit-button');
const fullName = document.getElementById('template-contactform-name');

quoteButton.addEventListener("click", function (e) {
  window.location.replace('http://127.0.0.1:8000/get-a-quote/' + '?zip_code=' + zipCodeInput.value)
});

getAQuoteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('form submitted');
    console.log('full name: ', fullName.value);
})

submitFormButton.addEventListener('click', function() {
    alert('click form submitted');
});
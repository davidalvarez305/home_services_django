const welcome = document.getElementById("welcome");
const user = document.getElementById("user");

welcome.innerHTML = "Hey!";

const data = JSON.parse(document.getElementById('current').textContent);

user.addEventListener("click", function (e) {
  user.innerHTML = data.name;
});

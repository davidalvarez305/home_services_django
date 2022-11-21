const welcome = document.getElementById("welcome");
const user = document.getElementById("user");

welcome.innerHTML = "Hey!";

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) =>
      res.json().then((data) => {
        user.innerHTML = data.title;
      })
    )
    .catch((err) => console.log(err));
}

const data = JSON.parse(document.getElementById("current").textContent);

user.addEventListener("click", function (e) {
  user.innerHTML = data.name;
});

welcome.addEventListener("click", function (e) {
  fetchData();
});

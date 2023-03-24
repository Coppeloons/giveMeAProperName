const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const body = packData();

  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
});

function packData() {
  const name = document.getElementById("user_name");
  const username = document.getElementById("user_username");
  const password = document.getElementById("user_password");

  return {
    name: name.value,
    username: username.value,
    password: password.value
  };
}

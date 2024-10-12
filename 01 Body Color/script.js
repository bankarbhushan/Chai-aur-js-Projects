const body = document.querySelector("body");
const button = document.querySelectorAll("span");

button.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.id === "red") body.style.backgroundColor = "red";
    if (e.target.id === "blue") body.style.backgroundColor = "blue";
    if (e.target.id === "green") body.style.backgroundColor = e.target.id;
    if (e.target.id === "purple") body.style.backgroundColor = e.target.id;
  });
});

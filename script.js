const boton = document.getElementById("boton");
const nombre = document.getElementById("FormControlInput1");
const apellido = document.getElementById("FormControlInput2");
const correo = document.getElementById("FormControlInput3");

boton.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
});

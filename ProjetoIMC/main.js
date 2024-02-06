let form = document.querySelector(".elements");
let inputweight = document.querySelector("#weight");
let inputheight = document.querySelector("#height");
let modal = document.querySelector(".m1");
let textmodal = document.querySelector(".title");
let inputMascara = document.querySelector(".height");
// form.onsubmit = function (event) {
//   event.preventDefault();
//   let imc = weight / height ** 2;
// };

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  let height = inputheight.value;
  let weight = inputweight.value;
  let imc = weight / height ** 2;
  let resultado = imc * 10000;
  form.classList.add("hide");
  modal.classList.remove("hide");
  textmodal.innerHTML = "Seu IMC é de " + "" + resultado.toFixed(2);
});

const close = document.querySelector("#close");

close.addEventListener("click", function () {
  modal.classList.add("hide");
  form.classList.remove("hide");
  height.value = "";
  weight.value = "";
});

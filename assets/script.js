const decrement = document.querySelectorAll(".menos");
const increment = document.querySelectorAll(".mas");
const qty = document.querySelector(".qty");
const subtotal_element = document.getElementById("subtotal-sum");
const total_element = document.getElementById("total-sum");
const price_element = document.getElementById("price");


var contador = 0;
var subtotal = 0;
var total = 0;
var price = Number.parseFloat(price_element.innerText, "10").toFixed(2);
console.log(price)

decrement.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    if (contador === 0) {
      qty.innerText = contador;
    } else if (contador >= 0) {
      contador -= 1;
      qty.innerText = contador;
      subtotal = contador * price
      subtotal_element.innerText = subtotal;
      total = subtotal;
      total_element.innerText = total;
    }
  });
})

increment.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    contador += 1;
    qty.innerText = contador;
    subtotal = contador*price
    subtotal_element.innerText = subtotal;
    total = subtotal;
    total_element.innerText = total;
  });
});

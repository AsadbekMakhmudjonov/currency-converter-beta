var elConverterForm = document.querySelector(".form");
var elCurrencyType = document.querySelector(".js-currency-type");
var elCurrencySum = document.querySelector(".currency__sum");
var elCurrencyInput =  document.querySelector(".js-currency-input");
// FORM SUBMISSON
elConverterForm.addEventListener("keyup", function (e) {
  e.preventDefault();
  var currencyRate =  Number(elCurrencyType.value);
  var currencyInput = Number(elCurrencyInput.value);
  console.log(typeof(elCurrencyType));
  var currencySum = currencyInput * currencyRate
  elCurrencySum.textContent = currencySum;
})

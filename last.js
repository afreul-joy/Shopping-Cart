function updateInputValue(increase) {
  const input = document.getElementById('phone-number');
  const inputNumber = parseFloat(input.value)
  if(increase==true){
    const valueUpdate = inputNumber + 1;
    input.value = valueUpdate
    const totalPhone = document.getElementById('phone-total')
    totalPhone.innerText = valueUpdate * 1299
  }
  else if(input.value >0) {
    const valueUpdate = inputNumber - 1;
    input.value = valueUpdate;
    const totalPhone = document.getElementById('phone-total')
    totalPhone.innerText = valueUpdate * 1299
  }
  total()
}
function total() {
  const input = document.getElementById('phone-number');
  const inputNumber = parseFloat(input.value)
  const totalPhonePrice = inputNumber * 1299;
  totalPrice = document.getElementById('total-price')
  totalPrice.innerText = totalPhonePrice;
  }

document.getElementById('phone-plus').addEventListener('click', function () {
   updateInputValue(true) 
})

document.getElementById('phone-minus').addEventListener('click',function () {
  // const input = document.getElementById('phone-number');
  // const inputNumber = parseFloat(input.value)
  // const valueUpdate = inputNumber - 1;
  // input.value = valueUpdate;
  updateInputValue(false) 
})
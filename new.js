function updateCaseNumber (isIncreasing) {
  const caseInput = document.getElementById('case-number')
  let caseInputNumber = parseFloat(caseInput.value);
  if (isIncreasing == true) {
    caseInputNumber = caseInputNumber + 1;
  }
  else if (caseInput.value> 0) {
     caseInputNumber  = caseInputNumber - 1;
  }
  caseInput.value = caseInputNumber
  const caseTotal = document.getElementById('case-total')
  caseTotal.innerText = caseInputNumber * 59
}

  // step 4 : 
  function calculation() {
    const caseInput = document.getElementById('case-number')
    const caseInputNumber = parseFloat(caseInput.value)
    const TotalCase = caseInputNumber * 59
    const total_price = document.getElementById('total-price')
    const result = TotalCase + 1278
    total_price.innerText = result;

  }

  // step : 1
document.getElementById('case-plus').addEventListener('click', function () {

  // step : 2
  const caseInput = document.getElementById('case-number')
  const caseInputNumber = parseFloat(caseInput.value);
  const CaseIncrease = caseInputNumber + 1;
  caseInput.value = CaseIncrease;

  // step : 3 
  updateCaseNumber(true)
  calculation()
  
})

document.getElementById('case-minus').addEventListener('click',function () {
  // const caseInput = document.getElementById('case-number')
  // const caseInputNumber = parseFloat(caseInput.value);
  // const CaseIncrease = caseInputNumber - 1;
  // caseInput.value = CaseIncrease;
  updateCaseNumber(false)
  calculation() 
})
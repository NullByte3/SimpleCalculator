let lastButton = null

function plus () {
  lastButton = plus
  var num1 = document.getElementById('n1').value
  var num2 = document.getElementById('n2').value
  var sum = parseFloat(num1) + parseFloat(num2)
  var resultLabel = document.getElementById('result')
  resultLabel.innerHTML =
    'Summa on <strong>' + sum.toLocaleString('en-US') + '</strong>'
}

function minus () {
  lastButton = minus
  var num1 = document.getElementById('n1').value
  var num2 = document.getElementById('n2').value
  var sum = parseFloat(num1) - parseFloat(num2)
  var resultLabel = document.getElementById('result')
  resultLabel.innerHTML =
    'Summa on <strong>' + sum.toLocaleString('en-US') + '</strong>'
}

function divide () {
  lastButton = divide
  var num1 = document.getElementById('n1').value
  var num2 = document.getElementById('n2').value
  var sum = parseFloat(num1) / parseFloat(num2)
  var resultLabel = document.getElementById('result')
  resultLabel.innerHTML =
    'Summa on <strong>' + sum.toLocaleString('en-US') + '</strong>'
}

function multiply () {
  lastButton = multiply
  var num1 = document.getElementById('n1').value
  var num2 = document.getElementById('n2').value
  var sum = parseFloat(num1) * parseFloat(num2)
  var resultLabel = document.getElementById('result')
  resultLabel.innerHTML = 'Summa on ' + sum
}
function clearMath () {
  document.getElementById('n1').value = '0'
  document.getElementById('n2').value = '0'
  var resultLabel = document.getElementById('result')
  resultLabel.innerHTML = 'Summa on ...'
  lastButton = null
}

function last () {
  if (lastButton != null) lastButton()
}

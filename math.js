function math () {
  var num1 = document.getElementById('n1').value
  var num2 = document.getElementById('n2').value
  var sum = parseFloat(num1) + parseFloat(num2)
  var resultLabel = document.getElementById('result')
  resultLabel.innerHTML =
    'Summa on <strong>' + sum.toLocaleString('en-US') + '</strong>'
}

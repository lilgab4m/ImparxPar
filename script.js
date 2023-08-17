document.getElementById("checkButton").addEventListener("click", function() {
    var numberInput = parseInt(document.getElementById("numberInput").value);
    var result = document.getElementById("result");
  
    if (isNaN(numberInput)) {
      result.textContent = "Por favor, digite um número válido.";
    } else {
      result.textContent = numberInput % 2 === 0 ? "O número é par." : "O número é ímpar.";
    }
  });

  
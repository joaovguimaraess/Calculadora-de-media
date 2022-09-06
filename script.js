function media() {
    var notaDoPrimeiroBimestre = parseFloat(document.getElementById("nota1").value);
    var notaDoSegundoBimestre = parseFloat(document.getElementById("nota2").value);
    var notaDoTerceiroBimestre = parseFloat(document.getElementById("nota2").value);
    var notaDoQuartoBimestre = parseFloat(document.getElementById("nota2").value);
    var media = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;
  
    if (media >= 7) {
      alert("Uau! Aprovado com distinção");
    } else if (media == 10) {
      alert("Parabens, aprovado! Media " + media);
    } else {
      alert("Reprovado!");
    }
  }
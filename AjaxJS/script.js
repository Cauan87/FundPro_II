function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var cepMostrar = JSON.parse(xhttp.response)
      document.getElementById("display").innerHTML = cepMostrar.ddd;
      this.responseText;
    }
  };
  xhttp.open("GET", "https://viacep.com.br/ws/60040-531/json/");
  xhttp.send();
}

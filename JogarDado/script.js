function jogarDado(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('input').onchange = func;

function func() {
  let numero = parseInt(document.getElementById('jgd').value);
  let valor = jogarDado(1, numero);
  document.querySelector('#numero').innerHTML = valor;
}


  
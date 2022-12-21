function pegaInput(input){
  input.value = (input.value.toUpperCase());
}

function mouseOver(img){
  let h1 = document.getElementById('quem');
  h1.innerHTML = 'É o Ditto, imitando um Evee';
  h1.style.color = 'blue';
  img.src = 'eh.png';
}

function mouseOut(img){
  document.getElementById('quem').innerHTML = 'Quem é esse Pokemon?'
  img.src = 'qm.png';
}

calc = () => {
  let vA = +document.getElementById('valorA').value.replace(',','.');
  let vB = +document.getElementById('valorB').value.replace(',','.');

  console.log(vA + vB);
}

function clicou(){
  alert('Opa chamou a função');
}

function mudaCss(){
  //pega o elemento que possui o id e joga na variável
  let div = document.getElementById('area');

  
  /**
   * através da variável podemos realizar várias ações
   * 
   * o elemento div, em seu estilo, vai assumir red para cor de fundo
   */
  div.innerHTML = 'OPAAAAAA';
  div.style.color = 'white';
  div.style.backgroundColor = 'red';
  div.style.width = '100%';
  div.style.height = '100px';
}

function mudaCssNovamente(){
  let div = document.getElementById('area');
  div.style.backgroundColor = 'Blue';
  div.style.width = '50%';
  div.style.height = '800px';
}

/**arrow function */

revelaPokemon = (img) => {
  img.src = 'eh.png';
}

function ocultaPokemon(){
  let img = document.getElementById('pokemon');
  img.src = 'qm.png';
}

/**
 * EXEMPLO DE FORMULÁRIO
 * 
 * USANDO GETELEMENTBYID
 */

/**pegar os dados dos inputs, baseados no Id */
function pegaDados(){
  /**criar duas variaveis */
  let nome = document.getElementById('nome').value; //string
  let email = document.getElementById('email').value; //string
  let idade = parseInt(document.getElementById('idade').value); //string

  console.log(nome);
  console.log(email);
  console.log(idade + 100);
}

function getValues(){
  //pegar os dados dos campos
  let vA = parseFloat(document.getElementById('a').value);
  let vB = parseFloat(document.getElementById('b').value);

  //efetuar o calculo
  let media = (vA + vB)/2;

  document.getElementById('result').innerHTML = media;
}

/**
 * EXEMPLO DE FORMULÁRIO
 * 
 * USANDO this
 */

function getDataForm(event){
  // console.log(event.nome.value);
  // console.log(event.email.value);
  // console.log(event.data.value);

  let nome = event.nome.value;
  let email = event.email.value;
  let data = event.data.value;

  console.log(`Dados recebidos:
    Nome: ${nome}
    Email: ${email}
    Data: ${data}
  `);
}
/**
 * criar um form que tenha campos senha, confirme a senha e um botão
 * 
 * ao clicar no botão, aciona uma função que irá receber os dados dos campos, e verificar:
 * 
 * se os dois valores forem diferentes, emitir um console log
 * dizendo senhas não batem
 */

function verifica(event){
  //dados recebidos
  let senha = event.senha.value;
  let confirma = event.confirma.value;

  
  if(senha != confirma){
    // console.log('Senha invalida');

    /**se a senha for invalida, aplicar
     * cor da borda dos 2 campos em red
     */
    event.senha.style.borderColor = 'red';
    event.confirma.style.borderColor = 'red';
  }else{
    event.senha.style.borderColor = 'green';
    event.confirma.style.borderColor = 'green';
  }
}

/**
   * operadores
   * 
   * == - igualdade
   * != - diferente
   * 
   * === - igual e do mesmo tipo
   * !== - diferente e do mesmo tipo
   * 
   */
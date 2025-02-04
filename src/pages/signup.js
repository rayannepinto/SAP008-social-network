import { createNewUser } from '../firebase-services/auth.js';

export const signUpFunction = () => {
  const containerSignUp = document.createElement('section');
  const templateSignUp = `
  <section class='signup-page' id='sign-up'>
      <div class='background-home'> 
        <p class='background-home quote'>
          “Sempre fomos o que os homens disseram que nós éramos. Agora somos nós
          que vamos dizer o que somos.“ — Lygia Fagundes Telles
        </p>
        <img class='img-woman' src='img\\reading.png' alt='Mulher sentada e lendo livro'>
      </div>
      <div class='form-signup' id='signUpForm'>
        <picture>
          <img src='img\\logo.png' class='img-logo' alt='Logo Booknotes'>
        </picture>
        <p class='name-input'>Nome</p>
        <input type='text' class='input-signup' id='nameUser' required placeholder="Nome"> 
        <p class='name-input'>E-mail</p>
        <input type='email' name=email class='input-signup' id='emailUser' required placeholder="E-mail">
        <p class='name-input'>Senha</p>
        <input type='password' name=password class='input-signup' required id='passUser' maxlength='20' placeholder="Senha">
        <button type='submit' class='button-signup' id='buttonSignUp'>Cadastrar e entrar!</button>
        <button type='submit' class='button-back-home' id='backAtHome'>Voltar</button>
      </div>
  </section>   
   
  `;
  containerSignUp.innerHTML = templateSignUp;

  const btnSignUp = containerSignUp.querySelector('#buttonSignUp');

  btnSignUp.addEventListener('click', () => {
    const nameRegst = containerSignUp.querySelector('#nameUser').value;
    const emailRegst = containerSignUp.querySelector('#emailUser').value;
    const passUser = containerSignUp.querySelector('#passUser').value;
    createNewUser(nameRegst, emailRegst, passUser).then((result) => {
      if (result) window.location.hash = '#feed';
    });
  });

  const btnBackHome = containerSignUp.querySelector('#backAtHome');
  btnBackHome.addEventListener('click', () => {
    window.location.assign('/');
  });

  return containerSignUp;
};

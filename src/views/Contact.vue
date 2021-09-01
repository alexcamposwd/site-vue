<template>
  <main>
    <div class="container2">
      <div class="contactInfo">
        <h2>Contatos: </h2>
        <ul>
          <li class="address">
            <span><img src="https://i.imgur.com/edwzrmj.png" alt="icone_localização"></span>
            <span>
              Rua Padre Doutor Ramon Ortiz, 2378<br>
              Morada do Vale - Taubaté - S.P<br>
              12092-330
            </span>
          </li>
          <li class="mail">
            <span><img src="https://i.imgur.com/wfRgKCr.png" alt="icone_email"></span>
            <span>cpcrconstrucoes@gmail.com</span>
          </li>
          <li class="phone">
            <span><img src="https://i.imgur.com/nOsAlUF.png" alt="icone_telefone" ></span>
            <span>+55 12 98125-6787</span>
          </li>
        </ul>
      </div>

      <div class="contactForm">
        <h2>Enviar Mensagem</h2>
        <form class="formBox" method="POST" action="">
          <div class="inputBox w50">
            <input type="text" name="name" maxlength="25" minlength="3" required>
            <span> Nome </span>
          </div>                        
          <div class="inputBox w50">
            <input type="email" name="email" maxlength="50" required>
            <span> Email </span>
          </div>
          <div class="inputBox w50">
            <input type="text" name="phone" maxlength="18"  minlength="10" required>
            <span> Telefone </span>
          </div>                        
          <div class="inputBox w100">
            <textarea cols="50" rows="2" name="message" maxlength="250" required></textarea>
            <span> Digite sua mensagem aqui... </span>
          </div>
          <div class="inputBox w100">
            <input type="submit" value="Enviar">
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Contact',
  
}
</script>

<style scoped>

.container2 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
}

.contactInfo {
  order: 2;
  width: 100%;
  height: auto;
  padding: 20px;
  background: var(--color-green);
}
.contactInfo h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  padding: 10px 0 15px 0;
  color: var(--color-01);
}
.contactInfo ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
}
.contactInfo ul li {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  list-style: none;
}
.address {
  height: 40%;
  padding: 10px 0;
}
.mail, .phone {
  height: 30%;
  padding: 10px 0;
}
.contactInfo ul li img {
  width: 30px;
  filter: invert(1);
  margin-right: 15px;
}
.contactInfo ul li span {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: var(--color-01);
}

.contactForm {
  order: 1;
  width: 100%;
  height: auto;
  padding: 15px;
}
.contactForm h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  padding: 10px 0 22px 0;
  color: var(--color-green);
}
.formBox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
}
.inputBox {
  position: relative;
  margin-bottom: 20px;
}
.inputBox.w50 {
  width: 100%;
}
.inputBox.w100 {
  width: 100%;
  text-align: center;
}
.inputBox input,
.inputBox textarea {
  border: none;
  border-bottom: 1px solid #777;
  color: var(--color-03);
  font-size: 16px;
  outline: none;
  padding: 5px 0;
  resize: none;
  width: 100%;
}
.inputBox textarea {
  height: 100px;
}
.inputBox span {
  font-size: 14px;
  left: 0;
  padding: 5px 0;
  pointer-events: none;
  position: absolute;
  transition: .3s ease;
}
.inputBox input:focus ~ span,
.inputBox input:valid ~ span,
.inputBox textarea:focus ~span,
.inputBox textarea:valid ~ span {
  color: var(--color-green);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  transform: translateY(-20px);
}

.inputBox input[type="submit"] {
  background: var(--color-green);
  border: none;
  color: #fff;
  cursor: pointer;
  max-width: 150px;
  padding: 10px;
}

.inputBox input[type="submit"]:hover {
    background: #0d9450;
}

@media(min-width: 500px) {
  .contactInfo,
  .contactForm {
    width: 85%;
  }
}

@media(min-width: 1000px) {
  .container2 {
    flex-direction: row;
    height: 70vh;
    justify-content: center;
    align-items: center;
  }
  .contactInfo {
    order: 1;
    max-width: 400px;
    height: 400px;
  }
  
  .contactForm {
    order: 2;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 400px;
    justify-content: center;
  }
  
}



</style>

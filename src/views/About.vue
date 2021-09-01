<template>
  <main>
    <div class="about__service-container">
      <div class="about">
        <div class="about__img">
          <img class="about__img-item" id="d01" src="https://i.imgur.com/OUx1wSO.jpg" alt="foto_obra1.jpg" >
        </div>
        <div class="about__txt">
          <h1 class="about__title"> Quem Somos </h1>
          <p class="about__par">
            A CPCR Construções foi fundada com o objetivo de proporcionar aos seus clientes 
            maior comodidade na construção de seus sonhos e investimentos, prestando assessoria 
            total e executando trabalhos com o máximo de qualidade, oferecendo personalização em 
            projetos diferenciados, com estilo e alto padrão de acabamento.
          </p>
          <p class="about__par">
            A CPCR Construções atua no mercado da construção civil (residencial, comercial e industrial) e 
            hoje é reconhecida por seus empreendimentos diferenciados e de alto padrão. É uma empresa sólida 
            e transparente, pautada em princípios éticos de crescimento como responsabilidade social e ambiental.
          </p>
        </div>
      </div>
      <div class="service">
        <div class="service__img">
          <img class="service__img-item" id="d02" src="https://i.imgur.com/uIoWBXU.jpg" alt="foto_obra3.jpg">                
        </div>
        <div class="service__txt">
          <h1 class="service__title">Serviços</h1>                    
          <h3 class="service__subtit">Construção:</h3>
          <p class="service__par"> 
              - Residencial<br>
              - Comercial<br>
              - Industrial<br><br>
          </p>                    
          <h3 class="service__subtit">Reformas:</h3>
          <p class="service__par"> 
              - Alvenaria<br>
              - Hidráulica<br>
              - Elétrica<br>
              - Gesso: liso e acartonado<br>
              - Pisos e revestimentos<br>
              - Pintura<br>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import '../styles/global.css'

export default {
  name: 'About',
  
}
</script>

<style scoped>
 
.about__service-container{
  width: 100%;
  height: auto;
  justify-content: center;
}
.about,
.service {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.about__img,
.service__img {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
}
.about__img-item,
.service__img-item {
  position: relative;
  width: 300px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.about__txt,
.service__txt {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
}
.about__title,
.service__title {
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 25px;
  text-align: center;
  color: var(--color-green);
  padding: 0 0 20px 0;
}
.service__subtit {
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  color: var(--color-green);
  padding: 0 0 10px 0;
}
.about__par,
.service__par {
  width: 90%;
  height: auto;
  font-size: 15px;
  margin-bottom: 15px;
  color: var(--color-green);
  line-height: 22px;
}
.about__img{
  margin-right: 20px;
}

@media (min-width:700px) {

  .about__service-container{
    display: flex;
    flex-wrap: wrap;
  }
  .about__img,
  .service__img {
    width: 40%;
  }
  .about__img-item,
  .service__img-item {
    width: 400px;
  }
  .about__txt,
  .service__txt {
    width: 55%;
    height: 450px;
    align-items: center;
  }
  .about__title,
  .service__title {
    height: 50px;
    font-size: 30px;
    margin-top: 50px;
  }
  .service__subtit {
    width: 50%;
    font-size: 22px;
  }
  .about__par,
  .service__par {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    font-size: 17px;
  }
  .about__img {
    order: 1;
  }
  .about__txt {
    order: 2;
  }
  .service__img {
    order: 4;
  }
  .service__txt {
    order: 3;
  }

  @media(max-width:900px) {
    .about__img{
      margin-right: 30px;
    }
    .about__img-item,
    .service__img-item {
      width: 320px;
    }
    .about__par,
    .service__par {
      font-size: 15px;
    }
  }
}














</style>
<template>
  <div class="home">
    <div class="bg_home">
      <div class="banner_img">
        <img class="logo" width="400" src="../assets/LOGO.png" alt="">
      </div>
      <div class="burbujas">
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
      </div>
    </div>
    <div class="container">
      <div class="title">Ven y conoce nuestra misión, visión y principios</div>
      <div class="row">
        <div class="col-sm-4">
          <p class="texto-1">Click para concer nuestra misión</p>
          <img class="img-1" width="80%" v-b-toggle.collapse-1 src="../assets/mision.png" alt="">
          <b-collapse id="collapse-1">
            <b-card>
              La misión de la institución educativa <strong>"Talentos"</strong> está fundamentada, conceptualizada, en principios, valores y aspectos institucionales plasmados en normas y leyes educativas y pedagógicas, que son el pilar fundamental para humanizar, socializar y educar personas que se deben enfrentar a un entorno de constante camibo en todos sus ámbitos.
              Es nuestra Misión fomentar en los niños y las niñas de preescolar y básica primaria la importancia del <strong>Ser, Saber y Hacer.</strong> Logrando una educación integral propia del entorno.
              Estar al servicio de la ciudadanía pereirana, ser pioneros en el proceso "Educando y Formando".
            </b-card>
          </b-collapse>
        </div>
        <div class="col-sm-4">
          <p class="texto-1">Click para concer nuestra visión</p>
          <img class="img-1" width="80%" v-b-toggle.collapse-2 src="../assets/vision.png" alt="">
          <b-collapse id="collapse-2">
            <b-card>
              La institución educativa <strong>"Talentos"</strong> de carácter privado viene ofreciendo a los grados de preescolar educación personalizada basada en principios, fundamentada en valores.
              Para el año 2020 la institución educativa <strong>"Talentos"</strong> se visiona como el espacio psicopedagógico en donde se desarrollan habilidades, destrezas y conociminetos.
              Seremos reconocidos como una institución que ofrece educación privada y personalizada para los grados de preescolar y básica primaria, siendo punto de apoyo educativo a una muestra representativa de la ciudad de Pereira.
              Nuestro mayor propósito es el de brindar comodidad, bienestar y una adecuada lúdica a los niños que hacen, harán y deseen ser parte de nuestro sueño, para ello se persigue la consecución de un espacio más ameno y que cumpla con las condiciones requeridas por nuestro cliente.
            </b-card>
          </b-collapse>
        </div>
        <div class="col-sm-4">
          <p class="texto-1">Click para concer nuestros principios</p>
          <img class="img-1" width="80%" v-b-toggle.collapse-3 src="../assets/principios.png" alt="">
          <b-collapse id="collapse-3">
            <b-card>
              <li>Autonomía</li>
              <li>Responsabilidad</li>
              <li>Solidaridad</li>
              <li>Integralidad</li>
              <li>Participación</li>
              <li>La lúdica</li>
              <li>Interdisciplinariedad</li>
              <li>Creatividad</li>
            </b-card>
          </b-collapse>

        </div>
      </div>
      <div class="conocenos">
        <div class="title">Nuestras clases</div>
        <div class="row">
          <div class="col-sm-6">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcentroeducativotalento%2Fvideos%2F171745290356393%2F&show_text=0&width=560" width="560" height="308" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <p class="texto-2">Clases de música</p>
          </div>
          <div class="col-sm-6">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcentroeducativotalento%2Fvideos%2F367644314122233%2F&show_text=0&width=560" width="560" height="308" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <p class="texto-2">Actividad recreativa</p>
          </div>
        </div>       
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');

.container{
  padding-top:2em;
}
.conocenos{
  height:80vh;
  padding-top:4em;
  background:url('../assets/2.png');
  background-size: contain;
  
}
.title{
  text-align:center;
  font-family: 'Nerko One', cursive;
  font-size:60px;
}
.texto-1{
  font-size:20px;
  text-align: center;
  color:grey;
}
.texto-2{
  font-size:30px;
  color:black;
  font-family: 'Nerko One', cursive;
}
.bg_home{
  width:100%;
  height:90vh;
  background:linear-gradient(to right, #FA615B, #EDFF5D);
  position: relative;
  display: flex;
  align-items: center;
}
.burbuja{
  width:80px;
  height: 80px;
  border-radius: 50%;
  background:white;
  opacity: .3;
  position:absolute;
  bottom:-150;
  left: 5%;

  animation: burbujas 3s linear infinite;

}

.burbuja:nth-child(1){
  width:80px;
  height: 80px;
  left:5%;
  animation-duration: 3s;
  animation-delay:3s;

}
.burbuja:nth-child(2){
  width:100px;
  height: 100px;
  left:30%;
  animation-duration: 3s;
  animation-delay: 5s;
}
.burbuja:nth-child(3){
  width:60px;
  height: 60px;
  left:20%;
  animation-duration: 3s;
  animation-delay: 1s;
}
.burbuja:nth-child(4){
  width:80px;
  height: 80px;
  left:60%;
  animation-duration: 3s;
  animation-delay: 2s;
}
.burbuja:nth-child(5){
  width:60px;
  height: 60px;
  left:75%;
  animation-duration: 3s;
  animation-delay: 2s;
}
.burbuja:nth-child(6){
  width:30px;
  height: 30px;
  left:85%;
  animation-duration: 3s;
  animation-delay: 5s;
}
.burbuja:nth-child(7){
  width:100px;
  height: 100px;
  left:90%;
  animation-duration: 3s;
  animation-delay:3s;
}
.burbuja:nth-child(8){
  width:80px;
  height: 80px;
  left:35%;
  animation-duration: 3s;
  animation-delay:3s;
}
.burbuja:nth-child(9){
  width:70px;
  height:70px;
  left:55%;
  animation-duration: 3s;
  animation-delay:3s;
}
.burbuja:nth-child(10){
  width:70px;
  height:70px;
  left:10%;
  animation-duration: 3s;
  animation-delay:5s;
}
.burbuja:nth-child(11){
  width:30px;
  height:30px;
  left:25%;
  animation-duration: 3s;
  animation-delay:5s;
}
.burbuja:nth-child(12){
  width:40px;
  height:40px;
  left:15%;
  animation-duration: 3s;
  animation-delay:3.5s;
}
.burbuja:nth-child(13){
  width:30px;
  height:30px;
  left:3%;
  animation-duration: 3s;
  animation-delay:2s;
}
.burbuja:nth-child(14){
  width:50px;
  height:50px;
  left:85%;
  animation-duration: 3s;
  animation-delay:1s;
}
.burbuja:nth-child(15){
  width:30px;
  height:30px;
  left:73%;
  animation-duration: 3s;
  animation-delay:3.5s;
}
.burbuja:nth-child(16){
  width:30px;
  height:30px;
  left:46%;
  animation-duration: 3s;
  animation-delay:3.5s;
}
.burbuja:nth-child(17){
  width:50px;
  height:50px;
  left:50%;
  animation-duration: 3s;
  animation-delay:1s;
}
.banner_img{
  margin-left:auto;
  margin-right:auto;
  animation: movimiento 2.5s linear infinite;
}
.img-1{
  outline: none;
  margin-left:45px;
  }
@keyframes burbujas {
  0%{
    bottom: 0;
    opacity: 0;
  }
  30%{
    transform: translateX(30px);
  }
  50%{
    opacity: .4;
  }
  100%{
    bottom:80vh;
    opacity: 0;
    }
}
@keyframes movimiento{
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(50px);
  }
  100%{
    transform: translateY(0);
  }
}
</style>
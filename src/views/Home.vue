<template>
  <div class="home">
    <img src="../assets/Banner.png" alt="">
    <div class="container">
              <p>Ven y conoce nuestra misión, visión y principios</p>
      <div class="row">
        <div class="col-sm-4">
          <b-button v-b-toggle.collapse-1 class="m-1">Misión</b-button>
          <b-collapse id="collapse-1">
            <b-card>
              La misión de la institución educativa <strong>"Talentos"</strong> está fundamentada, conceptualizada, en principios, valores y aspectos institucionales plasmados en normas y leyes educativas y pedagógicas, que son el pilar fundamental para humanizar, socializar y educar personas que se deben enfrentar a un entorno de constante camibo en todos sus ámbitos.
              Es nuestra Misión fomentar en los niños y las niñas de preescolar y básica primaria la importancia del <strong>Ser, Saber y Hacer.</strong> Logrando una educación integral propia del entorno.
              Estar al servicio de la ciudadanía pereirana, ser pioneros en el proceso "Educando y Formando".
            </b-card>
          </b-collapse>
        </div>
        <div class="col-sm-4">
          <b-button v-b-toggle.collapse-2 class="m-1">Visión</b-button>
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
          <b-button v-b-toggle.collapse-3 class="m-1">Principios</b-button>
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
          </div>
          <div class="col-sm-6">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcentroeducativotalento%2Fvideos%2F367644314122233%2F&show_text=0&width=560" width="560" height="308" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>       
      </div>
      <section class="footer">
        <div class="row">
          <div class="col-sm-4">Siguenos en nuestras redes sociales</div>
          <div class="col-sm-8">Contacto</div>
        </div>
      </section>
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
.container{
  padding-top:2em;
}
.conocenos{
  padding-top:4em;
}
.title{
  text-align:center;
}
.m-1{
  background-color:plum !important;
  border: solid 1px palevioletred !important;
  border-radius:20px !important;
  margin-left:3em;
  font-size:20px !important;
  text-align: center !important;
  &:hover{
    background: palevioletred !important;
  }
}

</style>
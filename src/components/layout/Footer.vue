<template>
    <div class="footer">
        <div class="row">
            <div class="col-sm-4">
                <img width="50%" src="../../assets/LOGO.png" alt="">
            </div>
            <div class="col-sm-4">
                <ul class="datos">
                    <li>
                        <img width="10%" src="../../assets/map.png" alt="">
                        Dosquebradas, Risaralda
                    </li>
                    <li>
                        <img width="10%" src="../../assets/phone.png" alt="">
                        310 8910564
                    </li>
                    <li>
											<img width="10%" src="../../assets/email.png" alt="">
											<a href="jardintalentos76@gmail.com">jardintalentos76@gmail.com</a>
										</li>
                </ul>
            </div>
            <div class="col-sm-4">
							<div class="info-footer">
								<div class="title-footer">
									Preescolar y Básica primaria
								</div>
								<p class="text-footer">
									Danza, artes, música y educación semipersonalizada. Somos centro educativo Talentos: Educando y Formando
								</p>
								<a href="https://www.facebook.com/centroeducativotalento"><img width="15%" src="../../assets/facebook.png" alt=""></a>
								<p>Visitanos en nuestras redes sociales</p>
							</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
.footer{
    background:#E5E5E5;
    height:50vh;
}
a{
	color:black !important;
	text-decoration: none;
	&:hover{
		text-decoration: none;
		color:black;
	}

}
.datos{
	margin-top:50px;
	font-family: 'Nerko One', cursive;
	font-size:20px;
}
.info-footer{
	font-family: 'Nerko One', cursive;
	padding:5px;
}
.title-footer{
	font-size:28px;
}
.text-footer{
	font-size:20px;
}
</style>

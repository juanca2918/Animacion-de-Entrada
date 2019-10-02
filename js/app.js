
$(function() {
  imagenBienvenida();
  animacion();
});

//Animacion con animate
/*function animacion(){
 $("#1").animate({top:"+=100px"},2000, function() {
   $("#2").animate({ right: "+=100px" }, 2000, function() {
       $("#3").animate({left:"+=100px"},2000, function() {
       $("#4").animate({left:"+=200px"},2000);
     });
   });
 });
}*/
//Animacion con animate

function animacionPorCeldas(){
  $("#1").fadein().delay();
  $("#2").fadein().delay();
}

function imagenBienvenida(){
  $(".tableroEncabezado").append("<img src='img/1.jpg' alt='imagen-bienvenido' id='bienvenido' class='bienvenido-css'>");
  $(".tableroLogo").append("<img src='img/2.png' alt='imagen-logo' id='logo' class='logo-css'>");
  $(".tableroFirma").append("<img src='img/3.jpg' alt='imagen-firma' id='firma' class='firma-css'>");
  $(".tableroEscuela").append("<img src='img/4.png' alt='imagen-academia' id='escuela' class='escuela-css'>");
}

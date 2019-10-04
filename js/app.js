
$(function() {

  imagenShow();
  //imagenBienvenida();
  //animacionPorCeldas();
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

/**function animacionPorCeldas(){


  $("#1").fadein("",function(){

  }).animate({
    right:"+=400px",
    height:"300px",
    width:"300px"
  },5000);
}**/


function imagenShow(){
  var welcome= $("<img src='img/1.jpg' alt='imagen-bienvenido' id='bienvenido' class='bienvenido-css' style='display:none;'>");
  var logo= $("<img src='img/2.png' alt='imagen-logo' id='logo' class='logo-css' style='display:none;'>");
  var signal= $("<img src='img/3.jpg' alt='imagen-firma' id='firma' class='firma-css' style='display:none;'>");
  var school= $("<img src='img/4.png' alt='imagen-escuela' id='escuela' class='escuela-css' style='display:none;'>");
  $(".tableroFirma").append(welcome);
  welcome.fadeIn(1000,function(){
    welcome.fadeOut(3000,function(){
      $(".tableroEncabezado").append(welcome);
      welcome.fadeIn(1000,function(){
        $(".tableroFirma").append(logo);
        logo.fadeIn(1000, function(){
          logo.fadeOut(3000, function(){
            $(".tableroLogo").append(logo);
            logo.fadeIn(1000,function(){
              $(".tableroFirma").append(signal);
              signal.fadeIn(1000,function(){
                signal.fadeOut(3000, function(){
                  $(".tableroFirma").append(signal);
                  signal.fadeIn(1000, function(){
                    $(".tableroFirma").append(school);
                    school.fadeIn(1000,function(){
                      school.fadeOut(3000, function(){
                        $(".tableroEscuela").append(school);
                        school.fadeIn(1000);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}


/**$(function() {
  imagenBienvenida();
  animacionPorCeldas();
});**/

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

/**function animacionPorCeldas(){
	var welcome = $("<img src='https://www.unaguas.org/images/icons/water-quality.png' alt='imagen-bienvenido' id='bienvenido' class='bienvenido-css' style='display:none;'>");
  $(".tableroEncabezado").append(welcome);
  welcome.fadeIn(1000);

  $("#1").fadein("",function(){

  }).animate({
    right:"+=400px",
    height:"300px",
    width:"300px"
  },5000);
}**/

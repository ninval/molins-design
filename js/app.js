

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  fade:true
});
	

// =================== BURGER ======================




var navburg = document.querySelector(".bg_nav");
var burg = document.querySelector(".burger_btn")
var logob=document.querySelector(".logo_menu_burg");

burg.addEventListener("click",abrirburger);
	
	function abrirburger(){


navburg .classList.toggle("bg_nav--visible");
logob.style.display="flex";



}

// ======== BOTONES DE NOSOTROS COLOR ================


var info =document.querySelectorAll(".nos_sec");



var links =document.querySelectorAll(".nosotros_boton");
links.forEach (function (ele, index){
	ele.addEventListener ("click", activarseccion);


});

function activarseccion (){

		var contenido = this.getAttribute("href");
			console.log(contenido);
				despintar();
		this.classList.add("nosotros_boton_pintar");
			mostrarcontenido (contenido);



}

function despintar (){

	links.forEach(function(ele){
	ele.classList.remove("nosotros_boton_pintar");
	});




		info.forEach (function (ele) {
		ele.classList.remove("parrafos_visibles");

	});

}




function mostrarcontenido (param) {

	var cont = document.querySelector(param);

	cont.classList.add("parrafos_visibles");


}



//=========CUADRADOS========





var box =document.querySelectorAll(".box");



var checks =document.querySelectorAll(".check");
checks.forEach (function (ele, index){
	ele.addEventListener ("click", activarcheck);


});

function activarcheck (){

	
				quitarcheck();
	this.classList.add("box--checked");



}

function quitarcheck (){

	checks.forEach(function(ele){
	ele.classList.remove("box--checked");
	});





}



//========= SERVICIOS + ========


var desplegable =document.querySelectorAll(".ser-info-desp");

var serv_botones =document.querySelectorAll(".s_more_btn");



serv_botones.forEach (function (ele, index){
	ele.addEventListener ("click",verdesplegable);


});

function verdesplegable (){

		var interior = this.getAttribute("href");
			ocultarinterior();
			console.log(interior);
			mostrarinterior(interior);



}


	
function ocultarinterior (){

	

		desplegable.forEach (function (ele) {
		ele.style.display="none"

	});

}



function mostrarinterior (param) {

	var int = document.querySelector(param);

	int.style.display="block"

}

	

$( document ).ready(function() {


////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// GENERALES /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


///////////////////////  CAMBIAR TEMA  /////////////////////////


$("#wrp-change-theme").click(darkMode);

var themeMode = "l";

function darkMode(){
   let root = document.documentElement;
   let btn = document.querySelector("#btn-change-theme");
   
   if (themeMode == "l") {

   	   themeMode = "d";
   	   root.style.setProperty('--blanco', '#222');
	   root.style.setProperty('--blanco-2', '#333');
	   root.style.setProperty('--blanco-3', '#444');
	   root.style.setProperty('--blanco-4', '#555');
	   root.style.setProperty('--blanco-5', '#666');
	   root.style.setProperty('--gris-oscuro', '#eee');
	   root.style.setProperty('--azul-claro', '#eee');
	   root.style.setProperty('--azul-medio', '#ddd');
	   root.style.setProperty('--azul-oscuro', '#ccc');
	   btn.style.setProperty("float","right");
   } 

   else{
   		themeMode = "l";
   	   root.style.setProperty('--blanco', '#fff');
	   root.style.setProperty('--blanco-2', '#eee');
	   root.style.setProperty('--blanco-3', '#ddd');
	   root.style.setProperty('--blanco-4', '#ccc');
	   root.style.setProperty('--blanco-5', '#bbb');
	   root.style.setProperty('--gris-oscuro', '#333');
	   root.style.setProperty('--azul-claro', '#3A7CA5');
	   root.style.setProperty('--azul-medio', '#2F6690');
	   root.style.setProperty('--azul-oscuro', '#16425B');
	   btn.style.setProperty("float","left");
	   btn.style.setProperty("transition",".3s");
   }
   

   

};





////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// REGISTRO /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



//////////////////////  VALIDAR LONGITUD DE CONTRASEÑA  ////////////////////////


$("#password").keyup(checkLengthPassword);
$("#password").blur(checkLengthPassword);



function checkLengthPassword() {
	var password = $("#password").val();
	var longitudPassword = password.length;

	if (longitudPassword < 6) {
		$("#validacionPassword").html("<span><i class='icon-alert fas fa-exclamation-circle'></i>Debe tener al menos 6 caracteres.</span>");
		val_pass1_registro = "0";
		cambiarPasoRegistro();
	} 

	else{
		$("#validacionPassword").html("<span><i class='icon-check fas fa-check'></i></span>");
		val_pass1_registro = "1";
		cambiarPasoRegistro();
	}
};



//////////////////////  VALIDAR IGUALDAD EN PASSWORDS  /////////////////////////


$("#password").keyup(checkPasswordMatch);
$("#password").blur(checkPasswordMatch);
$("#password2").keyup(checkPasswordMatch2);
$("#password2").blur(checkPasswordMatch2);

var val_pass1_registro = "0";
var val_pass2_registro = "0";


function checkPasswordMatch() {
	var password = $("#password").val();
	var password2 = $("#password2").val();

	if (password != password2 && password != "" && password2 != "") {
		$("#validacionPassword2").html("<span><i class='icon-alert fas fa-exclamation-circle'></i>Las contraseñas no coinciden.</span>");
		val_pass1_registro = "0";
		val_pass2_registro = "0";
		cambiarPasoRegistro();
	} 

	else if(password == password2 && password != "" && password2 != "") {
		$("#validacionPassword2").html("<span><i class='icon-check fas fa-check'></i>Las contraseñas son iguales.</span>");
		val_pass1_registro = "1";
		val_pass2_registro = "1";
		cambiarPasoRegistro();
	}
}

function checkPasswordMatch2() {
	var password = $("#password").val();
	var password2 = $("#password2").val();



	if (password != password2) {
		$("#validacionPassword2").html("<span><i class='icon-alert fas fa-exclamation-circle'></i>Las contraseñas no coinciden.</span>");
		val_pass2_registro = "0";
		val_pass1_registro = "0";
		cambiarPasoRegistro();
	} 

	else if(password == password2 && password != "" && password2 != "") {
		$("#validacionPassword2").html("<span><i class='icon-check fas fa-check'></i></span>");
		val_pass2_registro = "1";
		val_pass1_registro = "1";
		cambiarPasoRegistro();
	}
}



////////////////////////  VALIDAR LONGITUD DE NOMBRE  //////////////////////////


$("#nombre").keyup(checkNombre);
$("#nombre").blur(checkNombre);

var val_nombre_registro = "0";


function checkNombre() {


	var nombre = $("#nombre").val();
	var longitudNombre = nombre.length;

	if (longitudNombre < 3) {
		$("#validacionNombre").html("<span><i class='icon-alert fas fa-exclamation-circle'></i>El nombre debe tener al menos 3 letras.</span>");
		val_nombre_registro = "0";
		cambiarPasoRegistro();
	} 

	else {
		$("#validacionNombre").html("<span><i class='icon-check fas fa-check'></i></span>");
		val_nombre_registro = "1";
		cambiarPasoRegistro();
	}
}


///////////////////////  VALIDAR LONGITUD DE APELLIDO  /////////////////////////


$("#apellido").keyup(checkLengthApellido);
$("#apellido").blur(checkLengthApellido);

var val_apellido_registro = "0";


function checkLengthApellido() {
	var apellido = $("#apellido").val();
	var longitudApellido = apellido.length;

	if (longitudApellido < 3) {
		$("#validacionApellido").html("<span><i class='icon-alert fas fa-exclamation-circle'></i>El apellido debe tener al menos 3 letras.</span>");
		val_apellido_registro = "0";
		cambiarPasoRegistro();
	} 
	

	else {
		$("#validacionApellido").html("<span><i class='icon-check fas fa-check'></i></span>");
		val_apellido_registro = "1";
		cambiarPasoRegistro();
	}
}





///////////////////////////////  VALIDAR EMAIL  ////////////////////////////////

var val_email_registro = "0";

$('#email').blur(checkEmail);
$('#email').keyup(checkEmail);


function checkEmail(){
	var email = $("#email").val();
	var longitudEmail = email.length;

	if (longitudEmail == 0) {
		$("#validacionEmail").html("<i class='icon-alert fas fa-exclamation-circle'></i>Debes ingresar un email.<input id='emailChecker' type='hidden' value='0' name='emailChecker'> ");
		val_email_registro = "0";
		cambiarPasoRegistro();
		
	} 

	else { 
		var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

		if (caract.test(email) == false) {
		$("#validacionEmail").html("<i class='icon-alert fas fa-exclamation-circle'></i>El email ingresado es inválido.<input id='emailChecker' type='hidden' value='0' name='emailChecker'> ");
		val_email_registro = "0";
		cambiarPasoRegistro();
	} 
	

	else {

		$.ajax(

			'check_email.php',
			{method: "GET", //Le indicas el metodo
       		data: {email: email}, //le pasas el archivo con los datos que queres mandar al php
		    success: function(respuesta) {
		   		if (respuesta == 1) {
		   			$("#validacionEmail").html("<i class='icon-alert fas fa-exclamation-circle'></i><span id='mensajeEmail'>El email ya está registrado.</span><input id='emailChecker' type='hidden' value='0' name='emailChecker'> ");
					val_email_registro = "0";
					cambiarPasoRegistro();
		    	} 

		    	else {
		    		$("#validacionEmail").html("<i class='icon-check fas fa-check'></i><span id='mensajeEmail'></span><input id='emailChecker' type='hidden' value='0' name='emailChecker'> ");
					val_email_registro = "1";
					cambiarPasoRegistro();
		    	}
		   	}

		   
		   }
		);

	}



		
	}



};








//////////////////////////  CAMBIAR DE PASO //////////////////////////////
// let btn_siguiente = $('.icon-btn-siguiente');
// btn_siguiente.removeClass('disabled');

function cambiarPasoRegistro(){
	let btn_siguiente = $('#btn-siguiente');

if ($('.btn-siguiente') && 
	$('.btn-anterior') && 
	$('.btn-paso1') && 
	$('.btn-paso2') && 
	$('.wrapper-paso1') && 
	$('.wrapper-paso2') && 
	val_email_registro == "1" &&
	val_nombre_registro == "1" &&
	val_apellido_registro == "1" &&
	val_pass1_registro == "1" &&
	val_pass2_registro == "1"
 ) {

	

	let btn_siguiente = $('#btn-siguiente');
	let btn_anterior = $('.btn-anterior');
	let btn_paso_1 = $('.btn-paso1');
	let btn_paso_2 = $('.btn-paso2');
	let wrapper_paso_1 = $('.wrapper-paso1');
	let wrapper_paso_2 = $('.wrapper-paso2');


	btn_siguiente.removeClass('disabled');
	$('#btn-enviar-registro').attr("disabled", false);


	btn_siguiente.click(function(){
		wrapper_paso_1.addClass('none');
		wrapper_paso_1.removeClass('active');
		wrapper_paso_2.addClass('active');
		wrapper_paso_2.removeClass('none');
		btn_paso_1.addClass('not-focus');
		btn_paso_2.removeClass('focus');
		btn_paso_2.addClass('focus');
		btn_paso_2.removeClass('not-focus');
	});

	btn_paso_1.click(function(){
		wrapper_paso_1.removeClass('none');
		wrapper_paso_1.addClass('active');
		wrapper_paso_2.removeClass('active');
		wrapper_paso_2.addClass('none');
		btn_paso_2.addClass('not-focus');
		btn_paso_2.removeClass('focus');
		btn_paso_1.addClass('focus');
		btn_paso_1.removeClass('not-focus');
	});

	btn_paso_2.click(function(){
		wrapper_paso_1.addClass('none');
		wrapper_paso_1.removeClass('active');
		wrapper_paso_2.addClass('active');
		wrapper_paso_2.removeClass('none');
		btn_paso_1.addClass('not-focus');
		btn_paso_2.removeClass('focus');
		btn_paso_2.addClass('focus');
		btn_paso_2.removeClass('not-focus');
	});

	btn_anterior.click(function(){
		wrapper_paso_1.removeClass('none');
		wrapper_paso_1.addClass('active');
		wrapper_paso_2.removeClass('active');
		wrapper_paso_2.addClass('none');
		btn_paso_2.addClass('not-focus');
		btn_paso_2.removeClass('focus');
		btn_paso_1.addClass('focus');
		btn_paso_1.removeClass('not-focus');
	});

}

else{
	btn_siguiente.addClass('disabled');
	$('#btn-enviar-registro').attr("disabled", true);
}

}



//////////////////////  HABILITAR/DESHABILITAR BOTONES  ///////////////////////









//////////////////////////  MOSTRAR FOTO AL CARGAR  ///////////////////////////









////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// POSTS ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



/////////////////////////////  CARGAR NUEVO POST  /////////////////////////////

// $("#nuevo_post").submit(nuevo_post)


//    function nuevo_post(e){

//    e.preventDefault();
// 	var mensaje = new FormData($("#nuevo_post")[0])

// 	var contenedor = $("#wrapper-loader");
// 	contenedor.css("visibility","visible");
// 	contenedor.css("opacity","1");
	

//    $.ajax({
//             url         : 'posts',
//             type        : 'POST',
//             data        : mensaje, 
//             processData : false,
//             contentType : false,
//             success: function(response)
//             {
            	

//                $("#recarga_posts").load('posts');
//                $("#message").val("");
               	
//                	contenedor.css("visibility","hidden");
// 				contenedor.css("opacity","0");

//                return false;

//             },
//             error : function(response)
//             {
//                 alert(response)
//             }
   
// })

// }



////////////////////////////////  LOADER  //////////////////////////////////////

// window.onload * function(){
// 	var contenedor = $(".wrapper-loader");
// 	contenedor.style.visibility = 'hidden';
// 	contenedor.style.opacity = '0';
// };







////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// CHAT ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//////////////////////////////  NUEVO MENSAJE  /////////////////////////////////

$("#new-msg").submit(nuevo_mensaje);


   function nuevo_mensaje(e){

   e.preventDefault();
	var mensaje = new FormData($("#new-msg")[0])

	var contenedor = $("#wrapper-loader");
	contenedor.css("visibility","visible");
	contenedor.css("opacity","1");
	

   $.ajax({
            url         : 'recargar_mensajes.php',
            type        : 'POST',
            data        : mensaje, 
            processData : false,
            contentType : false,
            success: function(response)
            {
            	
            	console.log(response);
               $("#recargar-mensajes").html(response);
               $("#message").val("");
               	
               	contenedor.css("visibility","hidden");
				contenedor.css("opacity","0");

               return false;

            },
            error : function(response)
            {
                alert(response)
            }
   
})

}



///////////////////////////  MOSTRAR CONVERSACION  /////////////////////////////

$(".conv-contact").click(mostrarConversacion);


   function mostrarConversacion(e){

   e.preventDefault();

   	var idConversacion = $(this).attr("id");
   	var mensaje = {"idConversacion" : idConversacion};
	var contenedor = $("#wrapper-loader");
	contenedor.css("visibility","visible");
	contenedor.css("opacity","1");
	

   $.ajax({
            url         : 'mostrar_conversacion.php',
            type        : 'POST',
            data        : mensaje, 
            // processData : false,
            // contentType : false,
            success: function(response)
            {
            	
            console.log(response);
               $("#conversation").html(response);
               $("#message").val("");
               	
               	contenedor.css("visibility","hidden");
				contenedor.css("opacity","0");


               return false;

            },
            error : function(response)
            {
                alert(response)
            }
   
})

}

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// MENUS ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



////////////////////  Mostrar/ocultar menú con el Toggle  //////////////////////

let toggleNav = $('.icon-toggle');
let exitNav = $('.icon-exit');
let menuNav = $('.menu-toggle');


menuNav.click(function(){
	menuNav.removeClass('active');
	exitNav.removeClass('active');
	toggleNav.addClass('active');
	toggleNav.removeClass('none');
})

toggleNav.click(function(){
	if(menuNav.hasClass('active')){
		menuNav.removeClass('active');
		exitNav.removeClass('active');
		toggleNav.addClass('active');
	} else{
		menuNav.addClass('active');
		exitNav.addClass('active');
		toggleNav.addClass('none');
	};
});

exitNav.click(function(){
	if(menuNav.hasClass('active')){
		menuNav.removeClass('active');
		exitNav.removeClass('active');
		toggleNav.removeClass('none');
	} else{
		menuNav.addClass('active');
		exitNav.addClass('active');
		toggleNav.addClass('none');
	};
});




/////////////////////  Mostrar/ocultar menú del perfil ////////////////////////

if ($('.menu-profile') && 
	$('.btn-menu-profile')
 ) {

let menu_profile = $('.menu-profile');
let btn_menu_profile = $('.btn-menu-profile');


btn_menu_profile.click(function(){
	if(menu_profile.hasClass('active')){
		menu_profile.removeClass('active');
		menu_profile.addClass('none');
	} else{
		menu_profile.addClass('active');
		menu_profile.removeClass('none');
	};
});

};









////////////////////  Mostrar las opciones del MENU IZQUIERDO /////////////////////

if( $("#menu_left_groups") && 
	$(".menu-left-groups-options") && 
	$("#menu_left_meetings") && 
	$(".menu-left-meetings-options") && 
	$("#menu_left_contacts") && 
	$(".menu-left-contacts-options")
	){

	let btn_groups = $("#menu_left_groups");
	let options_groups = $(".menu-left-groups-options");
	let btn_meetings = $("#menu_left_meetings");
	let options_meetings = $(".menu-left-meetings-options");
	let btn_contacts = $("#menu_left_contacts");
	let options_contacts = $(".menu-left-contacts-options");

	btn_groups.click(function(){
		if (options_groups.hasClass('active')) {
			options_groups.removeClass('active');
		}
		else {
			options_groups.addClass('active');
		}	
	});

	

	btn_meetings.click(function(){
		if (options_meetings.hasClass('active')) {
			options_meetings.removeClass('active');
		}
		else {
			options_meetings.addClass('active');
		}	
	});

	

	btn_contacts.click(function(){
		if (options_contacts.hasClass('active')) {
			options_contacts.removeClass('active');
		}
		else {
			options_contacts.addClass('active');
		}	
	});


};

















////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// MODALS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


/////////////////////////  MOSTRAR MODAL NEW GROUP  ////////////////////////////

if ($(".btn-new-group")) {

	let btn_new_group = $(".btn-new-group");
	let modal_new_group = $(".modal-new-group");
	let body_modal = $('.body-modal');
	let modal_exit = $('.modal-exit');

	btn_new_group.click(function(){
		modal_new_group.addClass('active');
		body_modal.addClass('active');
	});

	modal_exit.click(function(){
		modal_new_group.removeClass('active');
		body_modal.removeClass('active');
	});

}



/////////////////////////  MOSTRAR MODAL NEW MSG  ////////////////////////////


// if ($(".post-new")) {
// 	let btn = $(".post-new");
// 	let modal = $("#modal-new-msg");
// 	let body_modal = $('.body-modal');

// 	btn.click(function(){
// 		modal.addClass("active");
// 		body_modal.addClass('active');
// 	});
// }








////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// FILTROS //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




/////////////////  CAMBIAR DE BLOQUE DE DATOS EN EDIT PROFILE  /////////////////

if ($("#profile_edit")) {

let btn_datos_personales = $("#btn_datos_personales");
let btn_datos_contacto = $("#btn_datos_contacto");
let btn_datos_intereses = $("#btn_datos_intereses");
let btn_datos_grupos = $("#btn_datos_grupos");
let btn_datos_proyectos = $("#btn_datos_proyectos");
let btn_datos_configuracion = $("#btn_datos_configuracion");
let datos_personales = $(".datos-personales");
let datos_contacto = $(".datos-contacto");
let datos_proyectos = $(".datos-proyectos");
let datos_grupos = $(".datos-grupos");
let datos_intereses = $(".datos-intereses");
let datos_configuracion = $(".datos-configuracion");

btn_datos_personales.mouseover(function(){
	btn_datos_personales.addClass('filter-active');
	btn_datos_personales.removeClass('filter-none');
	btn_datos_contacto.removeClass('filter-active');
	btn_datos_contacto.addClass('filter-none');
	btn_datos_intereses.removeClass('filter-active');
	btn_datos_intereses.addClass('filter-none');
	btn_datos_grupos.removeClass('filter-active');
	btn_datos_grupos.addClass('filter-none');
	btn_datos_proyectos.removeClass('filter-active');
	btn_datos_proyectos.addClass('filter-none');
	btn_datos_configuracion.removeClass('filter-active');
	btn_datos_configuracion.addClass('filter-none');
	datos_personales.addClass('active');
	datos_personales.removeClass('none');
	datos_contacto.removeClass('active');
	datos_contacto.addClass('none');
	datos_intereses.removeClass('active');
	datos_intereses.addClass('none');
	datos_grupos.removeClass('active');
	datos_grupos.addClass('none');
	datos_proyectos.removeClass('active');
	datos_proyectos.addClass('none');
	datos_configuracion.removeClass('active');
	datos_configuracion.addClass('none');
})

btn_datos_contacto.mouseover(function(){
	btn_datos_personales.removeClass('filter-active');
	btn_datos_personales.addClass('filter-none');
	btn_datos_contacto.addClass('filter-active');
	btn_datos_contacto.removeClass('filter-none');
	btn_datos_intereses.removeClass('filter-active');
	btn_datos_intereses.addClass('filter-none');
	btn_datos_grupos.removeClass('filter-active');
	btn_datos_grupos.addClass('filter-none');
	btn_datos_proyectos.removeClass('filter-active');
	btn_datos_proyectos.addClass('filter-none');
	btn_datos_configuracion.removeClass('filter-active');
	btn_datos_configuracion.addClass('filter-none');
	datos_personales.removeClass('active');
	datos_personales.addClass('none');
	datos_contacto.addClass('active');
	datos_contacto.removeClass('none');
	datos_intereses.removeClass('active');
	datos_intereses.addClass('none');
	datos_grupos.removeClass('active');
	datos_grupos.addClass('none');
	datos_proyectos.removeClass('active');
	datos_proyectos.addClass('none');
	datos_configuracion.removeClass('active');
	datos_configuracion.addClass('none');
})

btn_datos_intereses.mouseover(function(){
	btn_datos_personales.removeClass('filter-active');
	btn_datos_personales.addClass('filter-none');
	btn_datos_contacto.removeClass('filter-active');
	btn_datos_contacto.addClass('filter-none');
	btn_datos_intereses.addClass('filter-active');
	btn_datos_intereses.removeClass('filter-none');
	btn_datos_grupos.removeClass('filter-active');
	btn_datos_grupos.addClass('filter-none');
	btn_datos_proyectos.removeClass('filter-active');
	btn_datos_proyectos.addClass('filter-none');
	btn_datos_configuracion.removeClass('filter-active');
	btn_datos_configuracion.addClass('filter-none');
	datos_personales.removeClass('active');
	datos_personales.addClass('none');
	datos_contacto.removeClass('active');
	datos_contacto.addClass('none');
	datos_intereses.addClass('active');
	datos_intereses.removeClass('none');
	datos_grupos.removeClass('active');
	datos_grupos.addClass('none');
	datos_proyectos.removeClass('active');
	datos_proyectos.addClass('none');
	datos_configuracion.removeClass('active');
	datos_configuracion.addClass('none');
})

btn_datos_grupos.mouseover(function(){
	btn_datos_personales.removeClass('filter-active');
	btn_datos_personales.addClass('filter-none');
	btn_datos_contacto.removeClass('filter-active');
	btn_datos_contacto.addClass('filter-none');
	btn_datos_intereses.removeClass('filter-active');
	btn_datos_intereses.addClass('filter-none');
	btn_datos_grupos.addClass('filter-active');
	btn_datos_grupos.removeClass('filter-none');
	btn_datos_proyectos.removeClass('filter-active');
	btn_datos_proyectos.addClass('filter-none');
	btn_datos_configuracion.removeClass('filter-active');
	btn_datos_configuracion.addClass('filter-none');
	datos_personales.removeClass('active');
	datos_personales.addClass('none');
	datos_contacto.removeClass('active');
	datos_contacto.addClass('none');
	datos_intereses.removeClass('active');
	datos_intereses.addClass('none');
	datos_grupos.addClass('active');
	datos_grupos.removeClass('none');
	datos_proyectos.removeClass('active');
	datos_proyectos.addClass('none');
	datos_configuracion.removeClass('active');
	datos_configuracion.addClass('none');
})

btn_datos_proyectos.mouseover(function(){
	btn_datos_personales.removeClass('filter-active');
	btn_datos_personales.addClass('filter-none');
	btn_datos_contacto.removeClass('filter-active');
	btn_datos_contacto.addClass('filter-none');
	btn_datos_intereses.removeClass('filter-active');
	btn_datos_intereses.addClass('filter-none');
	btn_datos_grupos.removeClass('filter-active');
	btn_datos_grupos.addClass('filter-none');
	btn_datos_proyectos.addClass('filter-active');
	btn_datos_proyectos.removeClass('filter-none');
	btn_datos_configuracion.removeClass('filter-active');
	btn_datos_configuracion.addClass('filter-none');
	datos_personales.removeClass('active');
	datos_personales.addClass('none');
	datos_contacto.removeClass('active');
	datos_contacto.addClass('none');
	datos_intereses.removeClass('active');
	datos_intereses.addClass('none');
	datos_grupos.removeClass('active');
	datos_grupos.addClass('none');
	datos_proyectos.addClass('active');
	datos_proyectos.removeClass('none');
	datos_configuracion.removeClass('active');
	datos_configuracion.addClass('none');
})

btn_datos_configuracion.mouseover(function(){
	btn_datos_personales.removeClass('filter-active');
	btn_datos_personales.addClass('filter-none');
	btn_datos_contacto.removeClass('filter-active');
	btn_datos_contacto.addClass('filter-none');
	btn_datos_intereses.removeClass('filter-active');
	btn_datos_intereses.addClass('filter-none');
	btn_datos_grupos.removeClass('filter-active');
	btn_datos_grupos.addClass('filter-none');
	btn_datos_proyectos.removeClass('filter-active');
	btn_datos_proyectos.addClass('filter-none');
	btn_datos_configuracion.addClass('filter-active');
	btn_datos_configuracion.removeClass('filter-none');
	datos_personales.removeClass('active');
	datos_personales.addClass('none');
	datos_contacto.removeClass('active');
	datos_contacto.addClass('none');
	datos_intereses.removeClass('active');
	datos_intereses.addClass('none');
	datos_grupos.removeClass('active');
	datos_grupos.addClass('none');
	datos_proyectos.removeClass('active');
	datos_proyectos.addClass('none');
	datos_configuracion.addClass('active');
	datos_configuracion.removeClass('none');
})
}



/////////////////  CAMBIAR DE CUADRO DE SERVICIOS EN INDEX ////////////////////


if ($('.btn-servicio-chat') && 
	$('.btn-servicio-redsocial') && 
	$('.btn-servicio-grupos') && 
	$('.btn-servicio-adp') && 
	$('.btn-servicio-dashboard') && 
	$('.servicio-chat') && 
	$('.servicio-redsocial') && 
	$('.servicio-grupos') && 
	$('.servicio-adp') && 
	$('.servicio-dashboard')
 ) {
     

let btn_servicio_chat = $('.btn-servicio-chat');
let btn_servicio_redsocial = $('.btn-servicio-redsocial');
let btn_servicio_grupos = $('.btn-servicio-grupos');
let btn_servicio_adp = $('.btn-servicio-adp');
let btn_servicio_dashboard = $('.btn-servicio-dashboard');

let servicio_chat = $('.servicio-chat');
let servicio_redsocial = $('.servicio-redsocial');
let servicio_grupos = $('.servicio-grupos');
let servicio_adp = $('.servicio-adp');
let servicio_dashboard = $('.servicio-dashboard');



btn_servicio_chat.mouseover(function(){
	servicio_chat.addClass('servicio-active');
	servicio_chat.removeClass('servicio-none');
	servicio_redsocial.removeClass('servicio-active');
	servicio_grupos.removeClass('servicio-active');
	servicio_adp.removeClass('servicio-active');
	servicio_dashboard.removeClass('servicio-active');
});

btn_servicio_redsocial.mouseover(function(){
	servicio_chat.removeClass('servicio-active');
	servicio_chat.addClass('servicio-none');
	servicio_redsocial.addClass('servicio-active');
	servicio_grupos.removeClass('servicio-active');
	servicio_adp.removeClass('servicio-active');
	servicio_dashboard.removeClass('servicio-active');
});

btn_servicio_grupos.mouseover(function(){
	servicio_chat.removeClass('servicio-active');
	servicio_chat.addClass('servicio-none');
	servicio_redsocial.removeClass('servicio-active');
	servicio_grupos.addClass('servicio-active');
	servicio_adp.removeClass('servicio-active');
	servicio_dashboard.removeClass('servicio-active');
});

btn_servicio_adp.mouseover(function(){
	servicio_chat.removeClass('servicio-active');
	servicio_chat.addClass('servicio-none');
	servicio_redsocial.removeClass('servicio-active');
	servicio_grupos.removeClass('servicio-active');
	servicio_adp.addClass('servicio-active');
	servicio_dashboard.removeClass('servicio-active');
});

btn_servicio_dashboard.mouseover(function(){
	servicio_chat.removeClass('servicio-active');
	servicio_chat.addClass('servicio-none');
	servicio_redsocial.removeClass('servicio-active');
	servicio_grupos.removeClass('servicio-active');
	servicio_adp.removeClass('servicio-active');
	servicio_dashboard.addClass('servicio-active');
});

}












/////////////////  CIERRE DEL DOCUMENT.READY ////////////////////

});
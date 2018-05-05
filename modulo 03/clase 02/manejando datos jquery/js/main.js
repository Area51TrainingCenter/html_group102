$("#registro").click(tarearegistro)

function tarearegistro(){
	event.preventDefault();
	// el metodo val() devuelve el valor de los inputs

	var nombre=$("#inp_nombre").val();
	var apellido=$.trim($("#inp_apellidos").val());
	var edad=$.trim($("#inp_edad").val());

	var nombre_sin_espacios=$.trim(nombre);


	if(nombre_sin_espacios!=""){

		if(apellido!=""){
				
				if(edad>0){
					var item=`<article>
								<h2>`+nombre+` `+apellido+`</h2>
								<span>`+edad+`</span>
							  </article>
							`;
							$(".tarjetas").append(item);
							clear_input();
							// dispara registro en BD
				}
				else{
					alert("revisa la edad ingresada")
				}

		}
		else{
			alert("revisa los apellidos ingresados")
		}

	}else{
		// mensaje de error
		alert("revisa los nombres ingresados")

			/*
			*/


	}


	/*if(condicion){
			// ejecutamos esta accion de codigo solo si la condiciòn devuelve verdadero
	}else{
		// ejecutamos esta acciòn de còdigo si la condiciòn develve false
	}*/
}

$("#inp_edad").keypress(function(e){
	var codigo=e.keyCode;
	if(codigo>=48 && codigo<=57){
	}
	else{
		return false;
	}
})



function clear_input(){
	$("#inp_nombre").val("");
	$("#inp_apellidos").val("")
	$("#inp_edad").val("")

}
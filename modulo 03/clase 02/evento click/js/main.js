var ele1=document.getElementById('inicio');
ele1.addEventListener("mouseenter", tarea1);


function tarea1(){
limpiar();
ele1.classList.add("activo");
}

ele1.addEventListener("mouseleave", tarea1b);
function tarea1b(){
limpiar();
}


var ele2=document.getElementById('servicios');
ele2.addEventListener("mouseenter", tarea2);
function tarea2(){
	limpiar();
ele2.classList.add("activo");
}


var ele3=document.getElementById('nosotros');
ele3.addEventListener("mouseenter", tarea3);

function tarea3(){

	limpiar();
	ele3.classList.add("activo");
}

function limpiar(){
	ele1.classList.remove("activo");
	ele2.classList.remove("activo");
	ele3.classList.remove("activo");
}
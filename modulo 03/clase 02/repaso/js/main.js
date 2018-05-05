// var elemento=document.getElementsByTagName('span')
// devuelve un arreglo de elementos con el mismo tag
// [span]
// [span,span,span]

// var elemento=document.getElementById('ingresar_datos')
 // devuelve 1 solo elemento
 // span

// var elemento=document.getElementsClassName('texto');
// devuelve un arreglo de elementos con la misma clase
// [class]
// [class,class,class]


// var elemento document.getQuerySelector('.texto span');
// te devuelve 1
// var elemento=document.getQuerySelectorAll('')
// te devuelve 1 arreglo



var elemento=document.getElementById("ingresar_datos");

elemento.addEventListener("click",tarea)

function tarea(){
	prompt("Ingresa tu nombre");
}
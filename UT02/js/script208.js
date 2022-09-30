let year = prompt("Ingrese su año de nacimiento");

if(year<=1968 && year>=1949){
    alert("Usted pertenece a la generación Baby Boomer!");
}else if(year<=1980 && year>=1969){
    alert("Usted pertenece a la generación X!");
}else if(year<=1993 && year>=1981){
    alert("Usted pertenece a la generación Millenial!");
}else if(year<=2010 && year>=1994){
    alert("Usted pertenece a la generación Z!");
}else if (year<1967 || year>2010){
    alert("No se dispone de información que corresponda a su generación en este momento");
}


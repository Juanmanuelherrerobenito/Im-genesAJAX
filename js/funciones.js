function ocultarMostrar(){
let x=document.getElementsByTagName("h2")[i].style;
let y=document.getElementsByTagName("p")[i].style;
y[i]=style.dispaly.block;
y[i]=style.cursor.hand;
}



function validar(){
let x=document.getElementsByTagName("input")[0].value;
let y=document.getElementsByTagName("input")[1].value;
z=x.length;
if(z<4){
	alert("nombre con menos de cuatro letras");
	document.getElementsByTagName("input")[0].style.backgroundColor: red;

}
else{
	alert("nombre con igual o mas de cuatro letras");
	document.getElementsByTagName("input")[0].style.backgroundColor: green;
}
if(y= %"@"%){
	alert("tiene un @");
	document.getElementsByTagName("input")[1].style.backgroundColor: green;

}
else{
	alert(" no tiene un @");
	document.getElementsByTagName("input")[1].style.backgroundColor: red;
}
if(z>4 && y=%"@"%){
	alert("“Querido "+x+" , me pondré en contacto contigo en el email "+y);
}
else{
	alert("error");
}
}

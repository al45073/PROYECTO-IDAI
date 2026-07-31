function cotizar(){

let nombre=document.getElementById("nombre").value;

let precio=parseFloat(document.getElementById("producto").value);

let cantidad=parseInt(document.getElementById("cantidad").value);

let subtotal=precio*cantidad;

let iva=subtotal*0.16;

let total=subtotal+iva;

document.getElementById("resultado").innerHTML=

"Cliente: "+nombre+
"<br>Subtotal: $"+subtotal.toFixed(2)+
"<br>IVA: $"+iva.toFixed(2)+
"<br><strong>Total: $"+total.toFixed(2)+"</strong>";

}
function realizarOperacion (operacion, a, b)
{
	if(operacion=='1')
	{
		alert('La suma de ' + a + ' + ' + b + ' = ' + (parseInt(a) + parseInt(b)));
	}
	else if(operacion == '2')
	{
		alert('La resta de ' + a + ' - ' + b + ' = ' + (parseInt(a) - parseInt(b)));
	}
	else if(operacion == '3')
	{
		alert('La multiplicación de ' + a + ' X ' + b + ' = ' + (parseInt(a) * parseInt(b)));
	}
	else if(operacion == '4')
	{
		alert('La división de ' + a + ' / ' + b + ' = ' + (parseFloat(a) / parseFloat(b)));
	}
	else
	{
		alert(operacion + " NO ES UNA OPCIÓN DEL MENÚ")
	}
}

var operacion = prompt("Ingresa el número de la operación que quieras relizar\n\n1.- Suma\n2.- Resta\n3.- Multiplicación\n4.-División");
var a = prompt("Dame el primer número");
var b = prompt("Dame el segundo número");
realizarOperacion(operacion, a, b);
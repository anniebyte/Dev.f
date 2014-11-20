function funcionMenu()
{
	var operacion = prompt("Ingresa el número de la operación que quieras relizar\n\n1.- Suma\n2.- Resta\n3.- Multiplicación\n4.-División");
	var a = prompt("Dame el primer número");
	var b = prompt("Dame el segundo número");
	if(operacion=='1')
	{
		funcionSuma(a,b)
	}
	else if(operacion == '2')
	{
		funcionResta(a,b)
	}
	else if(operacion == '3')
	{
		funcionMultiplacacion(a,b)
	}
	else if(operacion == '4')
	{
		funcionDivision(a,b)
	}
	else
	{
		alert(operacion + " NO ES UNA OPCIÓN DEL MENÚ")
	}
}

function funcionSuma(a,b)
{
	alert('La suma de ' + a + ' + ' + b + ' = ' + (parseInt(a) + parseInt(b)));
}
function funcionResta(a,b)
{
	alert('La resta de ' + a + ' - ' + b + ' = ' + (parseInt(a) - parseInt(b)));
}
function funcionMultiplacacion(a,b)
{
	alert('La multiplicación de ' + a + ' X ' + b + ' = ' + (parseInt(a) * parseInt(b)));
}
function funcionDivision(a,b)
{
	alert('La división de ' + a + ' / ' + b + ' = ' + (parseFloat(a) / parseFloat(b)));
}

funcionMenu()
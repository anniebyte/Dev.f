function validarNumero (numero)
{
	if(numero % 2 == 0)
	{
		alert(numero + " es par");
	}
	else
	{
		alert(numero + " es impar");
	}
}

var numero = prompt("Hola, dame un número");
validarNumero(numero);
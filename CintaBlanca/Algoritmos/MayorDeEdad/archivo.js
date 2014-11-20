function validarEdad (edad)
{
	if(edad < 18)
	{
		alert("Tienes " + edad + " años. Eres menor de edad");
	}
	else
	{
		alert("Tienes " + edad + " años. Eres mayor de edad");
	}
}

var edad = prompt("Hola, ¿Cuál es tu edad?");
validarEdad(edad);
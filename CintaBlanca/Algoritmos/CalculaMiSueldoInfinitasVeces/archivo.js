function calcularSueldo (costoHora, horasTrabajadas)
{
	alert("Te mereces un sueldo de: " + (costoHora*horasTrabajadas) + " :D");
}

var respuesta = true;
while(respuesta)
{
	var costoHora = prompt("Hey! ¿Cuánto vale tu hora de trabajo en pesos?");
	var horasTrabajadas = prompt("Y... ¿Cuántas horas has trabajado?");
	calcularSueldo(costoHora, horasTrabajadas);
	respuesta = confirm("¿Quieres calcular el sueldo de otra persona?")
}
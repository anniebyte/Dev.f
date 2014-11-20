function sumarHastaCero ()
{
	var numeros = [];
	suma = 0;
	do{
		var numero = prompt("Dame un numero, sí es cero lo te daré la suma de todos los anteriores, si no sólo lo agregaré a la suma");
		numeros.push(numero)
	}while(numero != 0)
	for(i = 0; i < numeros.length; i++)
	{
		suma += parseInt(numeros[i]);
	}
	alert("La suma de " + numeros + " es = " + suma);
}

sumarHastaCero();
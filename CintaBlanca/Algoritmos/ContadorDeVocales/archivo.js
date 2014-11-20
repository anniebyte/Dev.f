function contarVocales (palabra)
{
	var vocales = 0;
	for(i = 0; i < palabra.length; i++)
	{
		l = palabra[i];
		if(l=='a'||l=='e'||l=='i'||l=='o'||l=='u')
		{
			vocales ++;
		}
	}
	alert(palabra + " tiene " + vocales + " vocales");
}

var palabra = prompt("Sí me das una palabra te puedo decir cuántas vocales tiene")
contarVocales(palabra);
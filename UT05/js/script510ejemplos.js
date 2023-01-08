
let regexp = /pattern/flags;
//el g seria un flag, va despues de la segunda barra.
let cadena = 'aaaaabbaaabababa';

let er = /a+/g;

cadena.match(/a+/); //sino tiene flag g devuelve la primera ocurrencia
cadena.match(/a+/g); //todas las ocurrencias
cadena.match(/a+/gi); 

'abbab'.replace(/a+/,"X");   //si no he puesto la g solo la primera coincidencia
'abbab'.replace(/a+/g,"X");

'abbab'.replace(/a+/g,'$&');



"abcbde".replace(/[ab]+/g,"'$&'");  //o la a o la b

/a+/.test("sdsdjsjda");     //true


"1982FSF".match(/\d\d\d\d\w\w\w/);
"Dia 25 de julio de 1982".match(/ .. /g);

`los ciclos de 'DAW' Y 'DAM'`.match(/'.*'/); //asi no serviria
`los ciclos de 'DAW' Y 'DAM'`.match(/'[^']+'/);
//búsqueda perezosa
`los ciclos de 'DAW' Y 'DAM'`.match(/'.+?'/g);  //busca la coincidencia minima


//grupos de captura
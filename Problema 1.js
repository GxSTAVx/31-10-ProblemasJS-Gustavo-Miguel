var segundos_totais = parseInt(prompt("Coloque o número de segundos totais"));

var horas = parseInt(segundos_totais / 3600);
var minutos = parseInt((segundos_totais - horas * 3600)/60); 
var segundos = parseInt(segundos_totais - horas * 3600 - minutos * 60); 

console.log(horas + "H : " + minutos + "M : " + segundos + "S");

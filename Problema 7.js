random = Math.floor(Math.random() * 43) + 1;
for(var i=1; i <= 44; i++ ){
	
	console.log(i);
	
	if(i == random){
		console.log("Estou entre " + (i) + " e " + (i+1) ) ;
	}
}

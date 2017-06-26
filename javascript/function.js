function multiplication(n){
for(var i=1;i<10;i++)
{
	console.log(i*n);
}
}

multiplication(5);
multiplication.call(null,8);

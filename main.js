var a=[1,2,3,4,5];

var x=a.reverse(function(perval,val,ind){

	return perval+val+ind*2.5;
}
	
);console.log(x);
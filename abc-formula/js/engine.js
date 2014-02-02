console.log("You like to take a look under the hood? Source-code (including Python) is available here: https://github.com/renzowesterbeek/quadratic_formula");

function calculate() {
	
	// Stores all values
    var A = abcform.a.value;
    var B = abcform.b.value;
    var C = abcform.c.value;
	
	var D = (B)*(B)-4*A*C;
	var sqrtD = Math.sqrt(D);
	
	var X1 = (-B-sqrtD)/(2*A);
	var X2 = (-B+sqrtD)/(2*A);
	
	// Checks Discriminant
	if(D < 0){
		console.log("There is no solution...");
		document.getElementById("output1").innerHTML="There is no solution...";
		document.getElementById("output2").innerHTML="";
	}
	else if(D === 0){
		console.log("X =", X1);
		document.getElementById("output1").innerHTML="X = " + X1;
		document.getElementById("output2").innerHTML="";
	}
	else{
		console.log("Discriminant =", D);
		console.log("X = " + X1 + " or X= " + X2);
		document.getElementById("output1").innerHTML="Discriminant = " + D;
		document.getElementById("output2").innerHTML="X = " + X1 + " or X = " + X2;
	}
}
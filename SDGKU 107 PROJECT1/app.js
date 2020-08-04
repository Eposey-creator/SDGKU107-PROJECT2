function test(){
    var name="Your Name";
    var weight= 130;
    var age=30;
    console.log(name);

    if(age>60){
        console.log("you're still young")
    }
    else{
        console.log("you're getting older")
    }

}

//arrays

var shoes=[];
shoes.push('sandles');
shoes.push('sneakers');
shoes.push('boots');
shoes.push('heels');

console.log('shoes');

//print shoes in reverse order
for(let j=shoes.lenght-1; j>=0; j--){

    console.log(shoes[j]);
}


function init(){
    console.log("Hello NodeJS")
    
    test();
}

  /////////////////////// random math pratice///////////
// functions and constants
math.round(math.e, 16);
console.log(math.round);

math.atan2(8, -3) / math.pi;
console.log(math.atan2);  

math.log(5000, 5); 
console.log(math.log);

math.sqrt(-8);                       
math.derivative('x^6 + x', 'x');      
math.pow([[-5, 7], [3, 1]], 2);
     

// expressions
math.evaluate('1.2 * (2 + 10.5)');    
math.evaluate('21.7 cm to inch') ;    
math.evaluate('sin(80 deg) ^ 2');    
math.evaluate('9 / 3 + 2i') ;        
math.evaluate('det([-1, 2; 3, 1])') ; 

// display an even or odd number

if ( num % 60 == 2) {
	alert(' This is An Even Number');
}else{
	alert('THis is An Odd Number');
}
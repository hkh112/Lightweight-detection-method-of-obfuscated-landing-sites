var fs = require('fs');
var similarity = require( 'compute-cosine-similarity' );
var Tokenizer = require('node-vntokenizer');
var tokenizer = new Tokenizer();

var tokens = new Array();
var tokens_ave = new Array();
var tokens_sum;
var num;
var vec;

for(i=26; i<=150; i++){
	tokens.push(fs.readFileSync('/home/lab15/esprima_fun/dataset/ob2_vector_nor/ob2_' + i + '.nor').toString().split(","));
	//console.log(tokens);
}

for(i=0; i<=16; i++){
	tokens_sum = 0;
	num = 0;
	for(j=0; j<=124; j++){
		vec = parseFloat(tokens[j][i]);
		if(vec != 0){
			tokens_sum += vec;
			num++;
		}
	}
	tokens_ave.push(tokens_sum / num);
}

fs.writeFileSync('/home/lab15/esprima_fun/dataset/representative_token/ob2.token', tokens_ave , {flag: 'a'});
console.log(tokens_ave);
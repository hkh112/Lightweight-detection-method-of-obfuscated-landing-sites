var fs = require('fs');
var similarity = require( 'compute-cosine-similarity' );
var Tokenizer = require('node-vntokenizer');
var tokenizer = new Tokenizer();

var tokens;
var x = fs.readFileSync('/home/lab15/esprima_fun/dataset/representative_token/ob2.token').toString().split(",");
var j = 26;
var z = 126;

for(i=1; i<=25; i++){
	var y = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob2_vector_nor/ob2_'+ i +'.nor').toString().split(",");
	var s = similarity( x, y );
/*
	if(i<=25){
		tokens = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_refine/ob_benign_'+ (j++) +'.refine');
	}else{
		tokens = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_refine/ob_mal_'+ (z++) +'.refine');
	}

	tokens = tokenizer.tokenize(tokens.toString().toLowerCase());
	tokens = parseInt(tokens.length);
	console.log("token"+ i +"number => " + tokens);
*/

	fs.writeFileSync('/home/lab15/esprima_fun/dataset/token_result/token_result2', 'ob2_' + i + '.token , ' + s + '\n', {flag: 'a'});
	//console.log('num' + i + 'similarity: ' + s);
	//console.log('num' + i + 'similarity: ' + s / tokens * 100);
}
var fs = require('fs');
var Tokenizer = require('node-vntokenizer');
var tokenizer = new Tokenizer();

var tokens;
var token_num;
var vec_array = new Array();

for(i=1;i<=150;i++){

	if(i<=25){
		tokens = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_refine/ob_benign_' + (i+75) + '.refine');
		tokens = tokenizer.tokenize(tokens.toString().toLowerCase());
		token_num = parseInt(tokens.length);
		//token_num = tokens.toString().length;
		console.log(token_num);

		vec_array = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob4_vector_set/ob4_' + i + '.vec');
		vec_array = vec_array.toString().split(",");

		console.log(vec_array);

		for(j=0; j<vec_array.length; j++){
			vec_array[j] = vec_array[j] / token_num;
			console.log(vec_array[j]);
		}

		fs.writeFile('/home/lab15/esprima_fun/dataset/ob4_vector_nor/ob4_' + i + '.nor', vec_array, null);		

		console.log("complete" + i);
	}
	else{
		tokens = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_refine/ob_mal_' + (i+350) + '.refine');
		tokens = tokenizer.tokenize(tokens.toString().toLowerCase());
		token_num = parseInt(tokens.length);
		//token_num = tokens.toString().length;
		console.log(token_num);

		vec_array = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob4_vector_set/ob4_' + i + '.vec');
		vec_array = vec_array.toString().split(",");

		console.log(vec_array);

		for(j=0; j<vec_array.length; j++){
			vec_array[j] = vec_array[j] / token_num;
			console.log(vec_array[j]);
		}

		fs.writeFile('/home/lab15/esprima_fun/dataset/ob4_vector_nor/ob4_' + i + '.nor', vec_array, null);				

		console.log("complete" + i);
	}
}
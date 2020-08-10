var fs = require('fs');

var file_num = 2000;
var write_file_num = 0;

for(i=1; i<=file_num; i++){
	var filename = "benign_" + i;
	
	try{
		js_file = fs.readFileSync('/home/lab15/esprima_fun/dataset/benign_1000files/' + filename);
	}catch(exception){
		continue;
	}


	fs.writeFileSync('/home/lab15/esprima_fun/dataset/benign_1000files2/benign_' + (++write_file_num), js_file);

	console.log(filename + " complete");
}
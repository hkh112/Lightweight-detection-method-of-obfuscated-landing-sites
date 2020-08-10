var starttime = new Date().getTime();
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

var write_file_num = 0;
var exception_num = 0;
//var file_num = 187493;
//var file_num = 1000;
//var file_num = 100;
var file_num = 500;

for(i=1; i<=file_num; i++){
	//var filename = "benign_" + i;
	var filename = "ob_mal_" + i;
	
	//js_file = fs.readFileSync('/home/lab15/esprima_fun/dataset/webpages/' + filename);
	js_file = fs.readFileSync('/home/insung/esprima_fun/dataset/ob_malicious_500files/' + filename);

	try{
		var ast = esprima.parse(js_file);
	}catch(exception){
		exception_num++;
		console.log("exception occurred ---" + exception_num + "---");
		console.log(exception);

		continue;
	}

	ast_Structure = JSON.stringify(ast, null, 4);
	//fs.writeFileSync('/home/lab15/esprima_fun/dataset/webpages_structure/benign_' + (++write_file_num) + '.ast', ast_Structure);
	//fs.writeFileSync('/home/lab15/esprima_fun/dataset/webpages/benign_' + (write_file_num), js_file);
	fs.writeFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_structure/ob_mal_' + (++write_file_num) + '.ast', ast_Structure);
	//fs.writeFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files/ob_benign_' + (write_file_num), js_file);


	console.log(filename + " complete");
}
console.log(exception_num);

var endtime = new Date().getTime();
var processtime = endtime - starttime;
console.log("processing time : " + processtime);
//for(i=(file_num-exception_num+1); i<=file_num; i++){
//	fs.unlinkSync('/home/lab15/esprima_fun/dataset/ob_benign_100files/ob_benign_' + i);	
//}

var fs = require('fs');
var estraverse = require('estraverse');

//var file_num = 1000;
var file_num = 100;
//var file_num = 500;

for(i=1; i<=file_num; i++){
	//var filename = "ob_mal_full" + i + ".ast";
	//var filename = "benign_full" + i + ".ast";
	var filename = "ob_benign_full" + i + ".ast";
	var mini_ast = "";

	//var ast = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_structure_full/' + filename);
	//var ast = fs.readFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_structure_full/' + filename);
	var ast = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_structure_full/' + filename);
	ast = JSON.parse(ast);

	estraverse.traverse(ast, {
	    enter: function (node, parent) {
	    	if (node.name == 'eval' || node.name == 'replace' || node.name == 'fromCharCode' || node.name == 'charCodeAt' || node.name == 'document' || node.name == 'write' || node.name == 'unescape')
	    		mini_ast += JSON.stringify(node);
	    	//	console.log(node);
	    	if (node.type == 'WhileStatement' || node.type == 'ForStatement')
	    		mini_ast += JSON.stringify(node);
	    	//	console.log(node);
	    }
	});

	//console.log(mini_ast);
	//fs.writeFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_ministructure/ob_mal_' + i + '.ast', mini_ast);
	//fs.writeFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_ministructure/benign_' + i + '.ast', mini_ast);
	fs.writeFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_ministructure/ob_benign_' + i + '.ast', mini_ast);
	console.log(i + " Mini_AST is made");
}
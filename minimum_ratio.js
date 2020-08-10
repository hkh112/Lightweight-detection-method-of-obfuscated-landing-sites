var fs = require('fs');
var estraverse = require('estraverse');

for(i=1; i<=500; i++){
	var filename = "ob_mal_full" + i + ".ast";
	var variable_num = 0;
	var structure_num = 0;

	var ast = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_structure_full/' + filename);
	ast = JSON.parse(ast);

	estraverse.traverse(ast, {
	    enter: function (node, parent) {
	    	if (node.type == 'Identifier' || node.type == 'Literal' || node.type == 'EmptyStatement' || node.type == 'DebuggerStatement' || node.type == 'ThisExpression' || node.type == 'FunctionExpression' || node.type == 'NewExpression'){
	    		variable_num += 1;
	    	}else{
	    		structure_num += 1;
	    	}
	    }
	});
	fs.writeFileSync('/home/lab15/esprima_fun/dataset/minimum_ratio_result/result', i + ",structure_num," + structure_num + ",variable_num," + variable_num + ",ratio," + variable_num/(structure_num+variable_num) + '\n', {flag: 'a'});
	//console.log(i + ",structure_num," + structure_num + ",variable_num," + variable_num + ",ratio," + variable_num/(structure_num+variable_num));
	console.log(i+"complete");
}
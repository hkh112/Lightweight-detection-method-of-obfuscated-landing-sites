var starttime = new Date().getTime();
var fs = require('fs');
var simhash = require('node-simhash');

var sim_array = new Array();

ast1 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_ministructure/ob_mal_126.ast');

for(i=1;i<=100;i++){
	ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_ministructure/ob_benign_'+ i +'.ast');
	//ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_structure/ob_benign_'+ i +'.ast');
	//ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_ministructure/ob_mal_'+ i +'.ast');
	
	similiarity = simhash.compare(ast1, ast2);



	//if(similiarity > 0.9){
		sim_array.push("ob_mal_" + i + ".ast => " + similiarity);

		fs.writeFileSync('/home/lab15/esprima_fun/dataset/simhash_result/simhash_result2_mini_ob_benign', 'ob_benign_' + i + '.ast , ' + similiarity + '\n', {flag: 'a'});
		console.log("ob_mal_" + i + ".ast => " + similiarity);
	//	continue;
	//}

	//console.log("benign_" + i + ".ast => " + similiarity);
}

console.log(sim_array);
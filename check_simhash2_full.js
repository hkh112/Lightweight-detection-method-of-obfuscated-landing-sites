//var starttime = new Date().getTime();
var fs = require('fs');
var simhash = require('node-simhash');

var sim_array = new Array();

ast1 = fs.readFileSync('/home/lab15/esprima_fun/dataset/representative_structure/ob_mal_full126.ast');

for(i=1;i<=500;i++){
	//ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_structure_full/benign_full'+ i +'.ast');
	//ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_structure_full/ob_benign_full'+ i +'.ast');
	ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_structure_full/ob_mal_full'+ i +'.ast');

	similiarity = simhash.compare(ast1, ast2);



	//if(similiarity > 0.9){
		sim_array.push("ob_mal_full" + i + ".ast => " + similiarity);

		fs.writeFileSync('/home/lab15/esprima_fun/dataset/simhash_result/simhash_result2_full', similiarity + '\n', {flag: 'a'});
		console.log("ob_mal_full" + i + ".ast => " + similiarity);
	//	continue;
	//}

	//console.log("benign_" + i + ".ast => " + similiarity);
}

//console.log(sim_array);

//var endtime = new Date().getTime();
//var processtime = endtime - starttime;
//console.log("processing time : " + processtime);
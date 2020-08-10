var starttime = new Date().getTime();
var fs = require('fs');
var simhash = require('node-simhash');

var sim_array = new Array();

ast1 = fs.readFileSync('/home/lab15/esprima_fun/dataset/representative_structure/ob1.ast');

for(i=1;i<=500;i++){

	//ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_structure/benign_'+ i +'.ast');
	//ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_structure/ob_benign_'+ i +'.ast');
	ast2 = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_structure/ob_mal_'+ i +'.ast');

	similiarity = simhash.compare(ast1, ast2);

	var endtime = new Date().getTime();
	var processtime = endtime - starttime;
	console.log("processing time : " + processtime);


	//if(similiarity > 0.9){
		//sim_array.push("benign_" + i + ".ast => " + similiarity);

		fs.writeFileSync('/home/lab15/esprima_fun/dataset/simhash_result/simhash_result1_timegraph', 'ob_mal_' + i + '.ast , ' + processtime + '\n', {flag: 'a'});
		console.log("ob_mal_" + i + ".ast => " + similiarity);
	//	continue;
	//}

	//console.log("benign_" + i + ".ast => " + similiarity);
}

//console.log(sim_array);
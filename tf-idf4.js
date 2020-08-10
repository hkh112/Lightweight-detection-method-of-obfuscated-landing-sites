var fs = require('fs');
var TfIdf = require('node-tfidf');
var tfidf = new TfIdf();


/*
for(num=1;num<=1000;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_token/benign_' + num + '.token');
}
*/
for(num=76;num<=100;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_refine/ob_benign_' + num + '.refine');
}
for(num=376;num<=500;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_refine/ob_mal_' + num + '.refine');
}


tfidf.addDocument(['qapkrv','v{rg','vgzv','qpa','nclewceg','kdpcog','ukfvj','jgkejv','qv{ng','tkqk`knkv{','jkffgl','rmqkvkml','c`qmnwvg','ngdv','vmr','`mpfgp','upkvg']);

console.log("@@@@@@@@@@@@@@@@@@ start @@@@@@@@@@@@@@@@@@");
tfidf.tfidfs(['qapkrv','v{rg','vgzv','qpa','nclewceg','kdpcog','ukfvj','jgkejv','qv{ng','tkqk`knkv{','jkffgl','rmqkvkml','c`qmnwvg','ngdv','vmr','`mpfgp','upkvg'], function(i, measure) {

	fs.writeFile('/home/lab15/esprima_fun/dataset/ob4_vector_set_log/ob4_' + (i+1) + '.vec', measure, null);
	console.log('=======================document #' + (i+1) + ' is ' + measure);

});

//console.log(tfidf.listTerms(5));
//console.log(tfidf.listTerms(6));

//console.log(tfidf.tfidf('ĐHQG-HCM', 0));
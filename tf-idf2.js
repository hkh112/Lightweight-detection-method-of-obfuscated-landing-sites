var fs = require('fs');
var TfIdf = require('node-tfidf');
var tfidf = new TfIdf();


/*
for(num=1;num<=1000;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_token/benign_' + num + '.token');
}
*/
for(num=26;num<=50;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_refine/ob_benign_' + num + '.refine');
}
for(num=126;num<=250;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_refine/ob_mal_' + num + '.refine');
}


tfidf.addDocument(['tdsjqu','uzqf','ufyu','tsd','mbohvbhf','jgsbnf','xjeui','ifjhiu','tuzmf','wjtjcjmjuz','ijeefo','qptjujpo','bctpmvuf','mfgu','upq','cpsefs','xsjuf']);

console.log("@@@@@@@@@@@@@@@@@@ start @@@@@@@@@@@@@@@@@@");
tfidf.tfidfs(['tdsjqu','uzqf','ufyu','tsd','mbohvbhf','jgsbnf','xjeui','ifjhiu','tuzmf','wjtjcjmjuz','ijeefo','qptjujpo','bctpmvuf','mfgu','upq','cpsefs','xsjuf'], function(i, measure) {

	fs.writeFile('/home/lab15/esprima_fun/dataset/ob2_vector_set_log/ob2_' + (i+1) + '.vec', measure, null);
	console.log('=======================document #' + (i+1) + ' is ' + measure);

});

//console.log(tfidf.listTerms(5));
//console.log(tfidf.listTerms(6));

//console.log(tfidf.tfidf('ĐHQG-HCM', 0));
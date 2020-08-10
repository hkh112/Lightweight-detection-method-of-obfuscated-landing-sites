var fs = require('fs');
var TfIdf = require('node-tfidf');
var tfidf = new TfIdf();

/*
for(num=1;num<=1000;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_token/benign_' + num + '.token');
}
*/
for(num=1;num<=100;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_token/ob_benign_' + num + '.token');
}
for(num=1;num<=500;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_token/ob_mal_' + num + '.token');
}


tfidf.addDocument(['script','type','text','javascript','src','http','language','iframe','width','height','frameborder','style','visibility','hidden','position','absolute','left','top','border','document','write','writeln','tdsjqu','uzqf','ufyu','kbwbtdsjqu','tsd','iuuq','mbohvbhf','jgsbnf','xjeui','ifjhiu','gsbnfcpsefs','tuzmf','wjtjcjmjuz','ijeefo','qptjujpo','bctpmvuf','mfgu','upq','cpsefs','epdvnfou','xsjuf','xsjufmo','qapkrv','v{rg','vgzv','hctcqapkrv','qpa','jvvr','nclewceg','kdpcog','ukfvj','jgkejv','dpcog`mpfgp','qv{ng','tkqk`knkv{','jkffgl','rmqkvkml','c`qmnwvg','ngdv','vmr','`mpfgp','fmawoglv','upkvg','upkvgnl']);

console.log("@@@@@@@@@@@@@@@@@@ start @@@@@@@@@@@@@@@@@@");
tfidf.tfidfs(['script','type','text','javascript','src','http','language','iframe','width','height','frameborder','style','visibility','hidden','position','absolute','left','top','border','document','write','writeln','tdsjqu','uzqf','ufyu','kbwbtdsjqu','tsd','iuuq','mbohvbhf','jgsbnf','xjeui','ifjhiu','gsbnfcpsefs','tuzmf','wjtjcjmjuz','ijeefo','qptjujpo','bctpmvuf','mfgu','upq','cpsefs','epdvnfou','xsjuf','xsjufmo','qapkrv','v{rg','vgzv','hctcqapkrv','qpa','jvvr','nclewceg','kdpcog','ukfvj','jgkejv','dpcog`mpfgp','qv{ng','tkqk`knkv{','jkffgl','rmqkvkml','c`qmnwvg','ngdv','vmr','`mpfgp','fmawoglv','upkvg','upkvgnl'], function(i, measure) {

	fs.writeFile('/home/lab15/esprima_fun/dataset/vector_set/token' + (i+1) + '.vec', measure, null);
	console.log('=======================document #' + (i+1) + ' is ' + measure);

});

//console.log(tfidf.listTerms(5));
//console.log(tfidf.listTerms(6));

//console.log(tfidf.tfidf('ĐHQG-HCM', 0));

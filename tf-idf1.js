var starttime = new Date().getTime();

var fs = require('fs');
var TfIdf = require('node-tfidf');
var tfidf = new TfIdf();


/*
for(num=1;num<=1000;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_token/benign_' + num + '.token');
}
*/
for(num=1;num<=25;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_refine/ob_benign_' + num + '.refine');
}
for(num=1;num<=125;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_refine/ob_mal_' + num + '.refine');
}


tfidf.addDocument(['script','type','text','src','language','iframe','width','height','style','visibility','hidden','position','absolute','left','top','border','write']);

console.log("@@@@@@@@@@@@@@@@@@ start @@@@@@@@@@@@@@@@@@");
tfidf.tfidfs(['script','type','text','src','language','iframe','width','height','style','visibility','hidden','position','absolute','left','top','border','write'], function(i, measure) {

	fs.writeFile('/home/lab15/esprima_fun/dataset/ob1_vector_set_log/ob1_' + (i+1) + '.vec', measure, null);
	console.log('=======================document #' + (i+1) + ' is ' + measure);

});

var endtime = new Date().getTime();
var processtime = endtime - starttime;
console.log("processing time : " + processtime);


//console.log(tfidf.listTerms(5));
//console.log(tfidf.listTerms(6));

//console.log(tfidf.tfidf('ĐHQG-HCM', 0));
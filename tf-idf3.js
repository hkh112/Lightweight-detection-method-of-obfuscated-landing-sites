var fs = require('fs');
var TfIdf = require('node-tfidf');
var tfidf = new TfIdf();


/*
for(num=1;num<=1000;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/benign_1000files_token/benign_' + num + '.token');
}
*/
for(num=51;num<=75;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_refine/ob_benign_' + num + '.refine');
}
for(num=251;num<=375;num++){
	tfidf.addFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_refine/ob_mal_' + num + '.refine');
}


tfidf.addDocument(['%73%63%72%69%70%74','%74%79%70%65','%74%65%78%74','%73%72%63','%6c%61%6e%67%75%61%67%65','%69%66%72%61%6d%65','%77%69%64%74%68','%68%65%69%67%68%74','%73%74%79%6c%65','%76%69%73%69%62%69%6c%69%74%79','%68%69%64%64%65%6e','%70%6f%73%69%74%69%6f%6e','%61%62%73%6f%6c%75%74%65','%6c%65%66%74','%74%6f%70','%62%6f%72%64%65%72','%77%72%69%74%65']);

console.log("@@@@@@@@@@@@@@@@@@ start @@@@@@@@@@@@@@@@@@");
tfidf.tfidfs(['%73%63%72%69%70%74','%74%79%70%65','%74%65%78%74','%73%72%63','%6c%61%6e%67%75%61%67%65','%69%66%72%61%6d%65','%77%69%64%74%68','%68%65%69%67%68%74','%73%74%79%6c%65','%76%69%73%69%62%69%6c%69%74%79','%68%69%64%64%65%6e','%70%6f%73%69%74%69%6f%6e','%61%62%73%6f%6c%75%74%65','%6c%65%66%74','%74%6f%70','%62%6f%72%64%65%72','%77%72%69%74%65'], function(i, measure) {

	fs.writeFile('/home/lab15/esprima_fun/dataset/ob3_vector_set_log/ob3_' + (i+1) + '.vec', measure, null);
	console.log('=======================document #' + (i+1) + ' is ' + measure);

});

//console.log(tfidf.listTerms(5));
//console.log(tfidf.listTerms(6));

//console.log(tfidf.tfidf('ĐHQG-HCM', 0));
var fs = require('fs');

var vector = new Array();
var token_average;
var num;

for(i=1; i<=150; i++){
	vector = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob3_vector_set_log/ob3_' + i + '.vec');
	vector = vector.toString().split(",");
	console.log(vector);

	token_average = 0;	
	num = 0;
	for(j=0; j<vector.length; j++){
		if(vector[j] != 0){
			token_average += parseFloat(vector[j]);
			num++;
		}
	}
	console.log(token_average + " / " + num);

	token_average = token_average / num;
	console.log(token_average);

	fs.writeFileSync('/home/lab15/esprima_fun/dataset/token_average_result_log/token_average_result_log3', 'ob3_' + i + '.ave , ' + token_average + '\n', {flag: 'a'});
	console.log("complete" + i);
}
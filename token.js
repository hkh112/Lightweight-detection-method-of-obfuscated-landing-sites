var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

var total="";

for(i=1;i<=100;i++){
    var filename = "ob_benign_" + i;
    var ast = esprima.parse(fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files/' + filename));
    //var ast = esprima.parse(fs.readFileSync('/home/lab15/esprima_fun/dataset/benign_1000files/' + filename));
    //var ast = esprima.parse(fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files/' + filename));

    estraverse.traverse(ast, {
      enter: function(node){
        if (node.type === 'Identifier'){
        	total += node.name;
        }
        if (node.type === 'AssignmentExpression'){
            total += node.operator;
        }
        if (node.type === 'BinaryExpression'){
            total += node.operator; 
        }
        if (node.type === 'Literal'){
            total += node.raw; 
            //if (node.regex != undefined){
            //	total += node.regex;
            //}
        }
        if (node.type === 'UnaryExpression'){
            total += node.operator;
        }
        if (node.type === 'UpdateExpression'){
            total += node.operator;
        }
        if (node.type === 'LogicalExpression'){
            total += node.operator;
        } 
      }
    });
    //total = total.substring(10).replace(/\"/g, "\'");
    
    fs.writeFile('/home/lab15/esprima_fun/dataset/ob_benign_100files_token/' +filename+ '.token', total, null);
    //fs.writeFile('/home/lab15/esprima_fun/dataset/benign_1000files_token/' +filename+ '.token', total, null);
    //fs.writeFile('/home/lab15/esprima_fun/dataset/ob_malicious_500files_token/' +filename+ '.token', total, null);
    total = "";
    console.log('Processing : ', filename);
}
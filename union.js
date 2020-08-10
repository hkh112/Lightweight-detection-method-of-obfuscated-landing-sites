var fs = require('fs');

Array.prototype.union = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};


for(i=1; i<9; i++){
  if(i == 1){
    token1 = fs.readFileSync('/home/lab15/esprima_fun/token/packer' + i +'.token');
  }
  else{
    token1 = fs.readFileSync('/home/lab15/esprima_fun/union/packer' + (i-1) + '.union');  
  }
  token2 = fs.readFileSync('/home/lab15/esprima_fun/token/packer' + (i+1) + ".token");

  var array1 = token1.toString().split(",");
  var array2 = token2.toString().split(",");

  // Merges both arrays and gets union items
  var array3 = array1.concat(array2).union(); 
  console.log(array3);

  fs.writeFileSync('/home/lab15/esprima_fun/union/packer' + i + '.union', array3, null);
}
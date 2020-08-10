var fs = require('fs');

var reg_token = [/script/gi,/type/gi,/text/gi,/src/gi,/http/gi,/language/gi,/iframe/gi,/width/gi,/height/gi,/style/gi,/visibility/gi,/hidden/gi,/position/gi,/absolute/gi,/left/gi,/top/gi,/border/gi,/document/gi,/write/gi,/tdsjqu/gi,/uzqf/gi,/ufyu/gi,/tsd/gi,/iuuq/gi,/mbohvbhf/gi,/jgsbnf/gi,/xjeui/gi,/ifjhiu/gi,/tuzmf/gi,/wjtjcjmjuz/gi,/ijeefo/gi,/qptjujpo/gi,/bctpmvuf/gi,/mfgu/gi,/upq/gi,/cpsefs/gi,/epdvnfou/gi,/xsjuf/gi,/%73%63%72%69%70%74/gi,/%74%79%70%65/gi,/%74%65%78%74/gi,/%73%72%63/gi,/%68%74%74%70/gi,/%6C%61%6E%67%75%61%67%65/gi,/%69%66%72%61%6D%65/gi,/%77%69%64%74%68/gi,/%68%65%69%67%68%74/gi,/%73%74%79%6C%65/gi,/%76%69%73%69%62%69%6C%69%74%79/gi,/%68%69%64%64%65%6E/gi,/%70%6F%73%69%74%69%6F%6E/gi,/%61%62%73%6F%6C%75%74%65/gi,/%6C%65%66%74/gi,/%74%6F%70/gi,/%62%6F%72%64%65%72/gi,/%64%6F%63%75%6D%65%6E%74/gi,/%77%72%69%74%65/gi,/qapkrv/gi,/v{rg/gi,/vgzv/gi,/qpa/gi,/jvvr/gi,/nclewceg/gi,/kdpcog/gi,/ukfvj/gi,/jgkejv/gi,/qv{ng/gi,/tkqk`knkv{/gi,/jkffgl/gi,/rmqkvkml/gi,/c`qmnwvg/gi,/ngdv/gi,/vmr/gi,/`mpfgp/gi,/fmawoglv/gi,/upkvg/gi];
var token = ['script','type','text','src','http','language','iframe','width','height','style','visibility','hidden','position','absolute','left','top','border','document','write','tdsjqu','uzqf','ufyu','tsd','iuuq','mbohvbhf','jgsbnf','xjeui','ifjhiu','tuzmf','wjtjcjmjuz','ijeefo','qptjujpo','bctpmvuf','mfgu','upq','cpsefs','epdvnfou','xsjuf','%73%63%72%69%70%74','%74%79%70%65','%74%65%78%74','%73%72%63','%68%74%74%70','%6C%61%6E%67%75%61%67%65','%69%66%72%61%6D%65','%77%69%64%74%68','%68%65%69%67%68%74','%73%74%79%6C%65','%76%69%73%69%62%69%6C%69%74%79','%68%69%64%64%65%6E','%70%6F%73%69%74%69%6F%6E','%61%62%73%6F%6C%75%74%65','%6C%65%66%74','%74%6F%70','%62%6F%72%64%65%72','%64%6F%63%75%6D%65%6E%74','%77%72%69%74%65','qapkrv','v{rg','vgzv','qpa','jvvr','nclewceg','kdpcog','ukfvj','jgkejv','qv{ng','tkqk`knkv{','jkffgl','rmqkvkml','c`qmnwvg','ngdv','vmr','`mpfgp','fmawoglv','upkvg'];


for(i=1;i<=100;i++){
    var filename = "ob_benign_" + i;
    //var filename = "ob_mal_" + i;
    
    var ast = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_benign_100files_token/' + filename + '.token');
    //var ast = fs.readFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_token/' + filename + '.token');

    
    for(j=0; j<reg_token.length; j++){
        ast = ast.toString().replace(reg_token[j], " " + token[j] + " ");
    }
    
    
    fs.writeFile('/home/lab15/esprima_fun/dataset/ob_benign_100files_refine/' +filename+ '.refine', ast, null);
    //fs.writeFileSync('/home/lab15/esprima_fun/dataset/ob_malicious_500files_refine/' +filename+ '.refine', ast, null);
    console.log('Processing : ', filename);
}

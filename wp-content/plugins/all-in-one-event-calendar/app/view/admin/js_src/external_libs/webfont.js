define( function() {
	;(function(window,document,undefined){
		var i=void 0,j=!0,m=null,n=!1;function p(a){return function(){return this[a]}}var q;function r(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}};function s(a){this.L=a;this.ca=i}s.prototype.createElement=function(a,c,b){a=this.L.createElement(a);if(c)for(var d in c)if(c.hasOwnProperty(d))if("style"==d){var e=a,f=c[d];aa(this)?e.setAttribute("style",f):e.style.cssText=f}else a.setAttribute(d,c[d]);b&&a.appendChild(this.L.createTextNode(b));return a};function t(a,c,b){a=a.L.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}
		function ba(a){function c(){document.body?a():setTimeout(c,0)}c()}function w(a,c){return a.createElement("link",{rel:"stylesheet",href:c})}function x(a,c){return a.createElement("script",{src:c})}function y(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")}
		function z(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,f=b.length;e<f;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}function ca(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return j;return n}function aa(a){if(a.ca===i){var c=a.L.createElement("p");c.innerHTML='<a style="top:1px;">w</a>';a.ca=/top/.test(c.getElementsByTagName("a")[0].getAttribute("style"))}return a.ca};function A(a,c,b,d,e,f,g,k){this.Ea=a;this.Ka=c;this.ra=b;this.qa=d;this.Ha=e;this.Ga=f;this.pa=g;this.La=k}q=A.prototype;q.getName=p("Ea");q.ya=p("Ka");q.W=p("ra");q.va=p("qa");q.wa=p("Ha");q.xa=p("Ga");q.ua=p("pa");q.D=p("La");function B(a,c){this.a=a;this.k=c}var da=new A("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",i,n);
		B.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")){a=C(this);var c=D(this),b=E(this.a,/(MSIE [\d\w\.]+)/,1);if(""!=b){var d=b.split(" "),b=d[0],d=d[1],e=F(d),f=F(c);a=new A(b,d,b,d,a,c,G(this.k),"Windows"==a&&6<=e||"Windows Phone"==a&&8<=f)}else a=new A("MSIE","Unknown","MSIE","Unknown",a,c,G(this.k),n)}else if(-1!=this.a.indexOf("Opera"))a:if(c=a="Unknown",b=E(this.a,/(Presto\/[\d\w\.]+)/,1),""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=E(this.a,
		/rv:([^\)]+)/,1),""!=b&&(c=b)),-1!=this.a.indexOf("Opera Mini/"))b=E(this.a,/Opera Mini\/([\d\.]+)/,1),""==b&&(b="Unknown"),a=new A("OperaMini",b,a,c,C(this),D(this),G(this.k),n);else{if(-1!=this.a.indexOf("Version/")&&(b=E(this.a,/Version\/([\d\.]+)/,1),""!=b)){a=new A("Opera",b,a,c,C(this),D(this),G(this.k),10<=F(b));break a}b=E(this.a,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new A("Opera",b,a,c,C(this),D(this),G(this.k),10<=F(b)):new A("Opera","Unknown",a,c,C(this),D(this),G(this.k),n)}else-1!=this.a.indexOf("AppleWebKit")?
		(a=C(this),c=D(this),b=E(this.a,/AppleWebKit\/([\d\.\+]+)/,1),""==b&&(b="Unknown"),d="Unknown",-1!=this.a.indexOf("Chrome")||-1!=this.a.indexOf("CrMo")||-1!=this.a.indexOf("CriOS")?d="Chrome":-1!=this.a.indexOf("Safari")?d="Safari":-1!=this.a.indexOf("AdobeAIR")&&(d="AdobeAIR"),e="Unknown",-1!=this.a.indexOf("Version/")?e=E(this.a,/Version\/([\d\.\w]+)/,1):"Chrome"==d?e=E(this.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==d&&(e=E(this.a,/AdobeAIR\/([\d\.]+)/,1)),f=n,"AdobeAIR"==d?(f=E(e,/\d+\.(\d+)/,
		1),f=2<F(e)||2==F(e)&&5<=parseInt(f,10)):(f=E(b,/\d+\.(\d+)/,1),f=526<=F(b)||525<=F(b)&&13<=parseInt(f,10)),a=new A(d,e,"AppleWebKit",b,a,c,G(this.k),f)):-1!=this.a.indexOf("Gecko")?(c=a="Unknown",d=n,-1!=this.a.indexOf("Firefox")?(a="Firefox",b=E(this.a,/Firefox\/([\d\w\.]+)/,1),""!=b&&(d=E(b,/\d+\.(\d+)/,1),c=b,d=""!=b&&3<=F(b)&&5<=parseInt(d,10))):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),b=E(this.a,/rv:([^\)]+)/,1),""==b?b="Unknown":d||(d=F(b),e=parseInt(E(b,/\d+\.(\d+)/,1),10),f=parseInt(E(b,
		/\d+\.\d+\.(\d+)/,1),10),d=1<d||1==d&&9<e||1==d&&9==e&&2<=f||b.match(/1\.9\.1b[123]/)!=m||b.match(/1\.9\.1\.[\d\.]+/)!=m),a=new A(a,c,"Gecko",b,C(this),D(this),G(this.k),d)):a=da;return a};function C(a){var c=E(a.a,/(iPod|iPad|iPhone|Android|Windows Phone)/,1);if(""!=c)return c;a=E(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
		function D(a){var c=E(a.a,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=E(a.a,/Windows Phone( OS)? ([^;)]+)/,2)))return c;if(c=E(a.a,/(iPhone )?OS ([\d_]+)/,2))return c;return(a=E(a.a,/Linux ([i\d]+)/,1))?a:"Unknown"}function F(a){a=E(a,/(\d+)/,1);return""!=a?parseInt(a,10):-1}function E(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function G(a){if(a.documentMode)return a.documentMode};function ea(a,c,b){this.c=a;this.g=c;this.da=b;this.m="wf";this.j=new fa("-")}function ha(a){y(a.g,a.j.e(a.m,"loading"));H(a,"loading")}function I(a){z(a.g,a.j.e(a.m,"loading"));ca(a.g,a.j.e(a.m,"active"))||y(a.g,a.j.e(a.m,"inactive"));H(a,"inactive")}function H(a,c,b,d){if(a.da[c])a.da[c](b,d)};function ia(){this.ja={}}function ja(a,c){var b=[],d;for(d in c)if(c.hasOwnProperty(d)){var e=a.ja[d];e&&b.push(e(c[d]))}return b};function J(a,c,b,d,e,f){this.c=c;this.H=b;this.u=d;this.A=e;this.C=f;this.V=0;"AppleWebKit"===a.W()?(a=this.c.createElement("style",m,"@font-face{font-family:'__webfontloader_test__';src:url(data:application/x-font-woff;base64,) format('woff'),url(data:font/truetype;base64,) format('truetype');}"),c=new K(this.c,this.u,"iii"),t(this.c,"head",a),L(c,"monospace"),M(c),b=c.h().width,L(c,"'__webfontloader_test__', monospace, sans-serif"),b=b!==c.h().width,a.parentNode&&a.parentNode.removeChild(a),c.remove(),
		a=b):a=n;this.K=a;this.ma=this.ia=n}J.prototype.watch=function(a,c,b,d,e){for(var f=a.length,g=0;g<f;g++){var k=a[g];c[k]||(c[k]=["n4"]);this.V+=c[k].length}e&&(this.ia=e);for(g=0;g<f;g++)for(var k=a[g],e=c[k],l=b[k],h=0,o=e.length;h<o;h++){var u=e[h],v=this.H,S=k,ga=u;y(v.g,v.j.e(v.m,S,ga,"loading"));H(v,"fontloading",S,ga);v=r(this,this.sa);S=r(this,this.ta);(new d(v,S,this.c,this.u,this.A,this.C,k,u,this.K,l)).start()}};
		J.prototype.sa=function(a,c){var b=this.H;z(b.g,b.j.e(b.m,a,c,"loading"));z(b.g,b.j.e(b.m,a,c,"inactive"));y(b.g,b.j.e(b.m,a,c,"active"));H(b,"fontactive",a,c);this.ma=j;ka(this)};J.prototype.ta=function(a,c){var b=this.H;z(b.g,b.j.e(b.m,a,c,"loading"));ca(b.g,b.j.e(b.m,a,c,"active"))||y(b.g,b.j.e(b.m,a,c,"inactive"));H(b,"fontinactive",a,c);ka(this)};
		function ka(a){0==--a.V&&a.ia&&(a.ma?(a=a.H,z(a.g,a.j.e(a.m,"loading")),z(a.g,a.j.e(a.m,"inactive")),y(a.g,a.j.e(a.m,"active")),H(a,"active")):I(a.H))};function N(a,c,b,d,e,f,g,k,l,h){this.G=a;this.P=c;this.c=b;this.u=d;this.A=e;this.C=f;this.N=g;this.p=k;this.I=h||"BESbswy";this.K=l;this.S=this.R=m;this.s=new K(this.c,this.u,this.I);M(this.s);L(this.s,"arial,'URW Gothic L',sans-serif",this.p);this.Z=this.s.h();this.t=new K(this.c,this.u,this.I);M(this.t);L(this.t,"Georgia,'Century Schoolbook L',serif",this.p);this.$=this.t.h()}
		N.prototype.start=function(){this.aa=this.C();L(this.s,this.N+",arial,'URW Gothic L',sans-serif",this.p);this.K&&(this.R=this.s.h());L(this.t,this.N+",Georgia,'Century Schoolbook L',serif",this.p);this.K&&(this.S=this.t.h());this.U()};function O(a,c){return!!a&&!!c&&a.width===c.width&&a.height===c.height}
		N.prototype.U=function(){var a=this.s.h(),c=this.t.h();this.K?this.R&&this.S?5E3<=this.C()-this.aa?O(a,this.R)&&O(c,this.S)?P(this,this.G):P(this,this.P):O(a,this.R)&&O(c,this.S)?Q(this):O(a,this.Z)&&O(c,this.$)?P(this,this.P):P(this,this.G):Q(this):5E3<=this.C()-this.aa?P(this,this.P):O(a,this.Z)&&O(c,this.$)?Q(this):P(this,this.G)};function Q(a){a.A(function(a,b){return function(){b.call(a)}}(a,a.U),25)}function P(a,c){a.s.remove();a.t.remove();c(a.N,a.p)};function K(a,c,b){this.c=a;this.u=c;this.I=b;this.Da=new la;this.B=new R;this.M=this.c.createElement("span",{},this.I)}function L(a,c,b){var d=a.c,e=a.M,b=a.B.expand(b||""),a="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+a.Da.quote(c)+";"+b;aa(d)?e.setAttribute("style",a):e.style.cssText=a}function M(a){t(a.c,"body",a.M)}K.prototype.h=function(){return this.u.h(this.M)};
		K.prototype.remove=function(){var a=this.M;a.parentNode&&a.parentNode.removeChild(a)};function T(a,c,b,d,e){this.c=a;this.ea=c;this.g=b;this.A=d;this.a=e;this.X=this.Y=0}T.prototype.v=function(a,c){this.ea.ja[a]=c};T.prototype.load=function(a){var c=new ea(this.c,this.g,a);this.a.D()?ma(this,c,a):I(c)};T.prototype.za=function(a,c,b,d){var e=a.fa?a.fa():N;d?a.load(r(this,this.Fa,c,b,e)):(a=0==--this.Y,this.X--,a&&(0==this.X?I(c):ha(c)),b.watch([],{},{},e,a))};
		T.prototype.Fa=function(a,c,b,d,e,f){var g=0==--this.Y;g&&ha(a);this.A(r(this,function(a,b,c,d,e,f){a.watch(b,c||{},d||{},e,f)},c,d,e,f,b,g))};function ma(a,c,b){b=ja(a.ea,b);a.X=a.Y=b.length;for(var d=new J(a.a,a.c,c,{h:function(a){return{width:a.offsetWidth,height:a.offsetHeight}}},a.A,function(){return(new Date).getTime()}),e=0,f=b.length;e<f;e++){var g=b[e];g.F(a.a,r(a,a.za,g,c,d))}};function fa(a){this.Aa=a||"-"}fa.prototype.e=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Aa)};function la(){this.la="'"}la.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.la+d+this.la)}return c.join(",")};function R(){this.Q=na;this.q=oa}var na=["font-style","font-weight"],oa={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};function U(a,c,b){this.ga=a;this.Ia=c;this.q=b}U.prototype.compact=function(a,c){for(var b=0;b<this.q.length;b++)if(c==this.q[b][1]){a[this.ga]=this.q[b][0];break}};
		U.prototype.expand=function(a,c){for(var b=0;b<this.q.length;b++)if(c==this.q[b][0]){a[this.ga]=this.Ia+":"+this.q[b][1];break}};R.prototype.compact=function(a){for(var c=["n","4"],a=a.split(";"),b=0,d=a.length;b<d;b++){var e=a[b].replace(/\s+/g,"").split(":");if(2==e.length){var f=e[1];a:{for(var e=e[0],g=0;g<this.Q.length;g++)if(e==this.Q[g]){e=new U(g,e,this.q[e]);break a}e=m}e&&e.compact(c,f)}}return c.join("")};
		R.prototype.expand=function(a){if(2!=a.length)return m;for(var c=[m,m],b=0,d=this.Q.length;b<d;b++){var e=this.Q[b];(new U(b,e,this.q[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":m};var V=window.WebFont=function(){var a=(new B(navigator.userAgent,document)).parse();return new T(new s(document),new ia,document.documentElement,function(a,b){setTimeout(a,b)},a)}();V.load=V.load;V.addModule=V.v;A.prototype.getName=A.prototype.getName;A.prototype.getVersion=A.prototype.ya;A.prototype.getEngine=A.prototype.W;A.prototype.getEngineVersion=A.prototype.va;A.prototype.getPlatform=A.prototype.wa;A.prototype.getPlatformVersion=A.prototype.xa;A.prototype.getDocumentMode=A.prototype.ua;
		A.prototype.isSupportingWebFont=A.prototype.D;function pa(a,c){this.c=a;this.d=c}var qa={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"};pa.prototype.F=function(a,c){return c(a.D())};
		pa.prototype.load=function(a){var c,b;t(this.c,"head",w(this.c,("https:"==document.location.protocol?"https:":"http:")+"//webfonts.fontslive.com/css/"+this.d.key+".css"));var d=this.d.families,e,f;e=[];f={};for(var g=0,k=d.length;g<k;g++){b=b=c=i;b=d[g].split(":");c=b[0];if(b[1]){b=b[1].split(",");for(var l=[],h=0,o=b.length;h<o;h++){var u=b[h];if(u){var v=qa[u];l.push(v?v:u)}}b=l}else b=["n4"];e.push(c);f[c]=b}a(e,f)};V.v("ascender",function(a){return new pa(new s(document),a)});function W(a,c,b){this.o=a;this.c=c;this.d=b;this.f=[];this.w={};this.B=new R}W.prototype.J=function(a){return("https:"==this.o.location.protocol?"https:":"http:")+(this.d.api||"//f.fontdeck.com/s/css/js/")+this.o.document.location.hostname+"/"+a+".js"};
		W.prototype.F=function(a,c){var b=this.d.id,d=this;b?(this.o.__webfontfontdeckmodule__||(this.o.__webfontfontdeckmodule__={}),this.o.__webfontfontdeckmodule__[b]=function(a,b){for(var g=0,k=b.fonts.length;g<k;++g){var l=b.fonts[g];d.f.push(l.name);d.w[l.name]=[d.B.compact("font-weight:"+l.weight+";font-style:"+l.style)]}c(a)},t(this.c,"head",x(this.c,this.J(b)))):c(j)};W.prototype.load=function(a){a(this.f,this.w)};V.v("fontdeck",function(a){return new W(window,new s(document),a)});function X(a,c,b,d,e){this.o=a;this.a=c;this.c=b;this.k=d;this.d=e;this.f=[];this.w={}}X.prototype.F=function(a,c){var b=this,d=b.d.projectId;if(d){var e=x(b.c,b.J(d));e.id="__MonotypeAPIScript__"+d;e.onreadystatechange=function(a){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=m,e.onload(a)};e.onload=function(){if(b.o["__mti_fntLst"+d]){var e=b.o["__mti_fntLst"+d]();if(e&&e.length){var g;for(g=0;g<e.length;g++)b.f.push(e[g].fontfamily)}}c(a.D())};t(this.c,"head",e)}else c(j)};
		X.prototype.J=function(a){var c=this.protocol(),b=(this.d.api||"fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+b+"/"+a+".js"};X.prototype.load=function(a){a(this.f,this.w)};X.prototype.protocol=function(){var a=["http:","https:"],c=a[0];if(this.k&&this.k.location&&this.k.location.protocol)for(var b=0,b=0;b<a.length;b++)if(this.k.location.protocol===a[b])return this.k.location.protocol;return c};
		V.v("monotype",function(a){var c=(new B(navigator.userAgent,document)).parse();return new X(window,c,new s(document),document,a)});function Y(a,c,b){this.o=a;this.c=c;this.d=b;this.f=[];this.w={}}Y.prototype.J=function(a){var c="https:"==window.location.protocol?"https:":"http:";return(this.d.api||c+"//use.typekit.com")+"/"+a+".js"};Y.prototype.F=function(a,c){var b=this.d.id,d=this.d,e=this;b?(this.o.__webfonttypekitmodule__||(this.o.__webfonttypekitmodule__={}),this.o.__webfonttypekitmodule__[b]=function(b){b(a,d,function(a,b,d){e.f=b;e.w=d;c(a)})},t(this.c,"head",x(this.c,this.J(b)))):c(j)};
		Y.prototype.load=function(a){a(this.f,this.w)};V.v("typekit",function(a){return new Y(window,new s(document),a)});function ra(a,c){this.c=a;this.d=c}ra.prototype.load=function(a){for(var c=this.d.urls||[],b=this.d.families||[],d=0,e=c.length;d<e;d++)t(this.c,"head",w(this.c,c[d]));a(b)};ra.prototype.F=function(a,c){return c(a.D())};V.v("custom",function(a){return new ra(new s(document),a)});function Z(a,c,b,d,e,f,g,k,l,h){Z.Ja.call(this,a,c,b,d,e,f,g,k,l,h);a=["Times New Roman","Arial","Times","Sans","Serif"];c=a.length;b={};d=new K(this.c,this.u,this.I);M(d);L(d,a[0],this.p);b[d.h().width]=j;for(e=1;e<c;e++)f=a[e],L(d,f,this.p),b[d.h().width]=j,"4"!=this.p[1]&&(L(d,f,this.p[0]+"4"),b[d.h().width]=j);d.remove();this.z=b;this.oa=n;this.Ba=this.Z;this.Ca=this.$}(function(a,c){function b(){}b.prototype=a.prototype;c.prototype=new b;c.Ja=a;c.Ma=a.prototype})(N,Z);
		var sa={Arimo:j,Cousine:j,Tinos:j};Z.prototype.U=function(){var a=this.s.h(),c=this.t.h();!this.oa&&a.width==c.width&&this.z[a.width]&&(this.z={},this.oa=this.z[a.width]=j);(this.Ba.width!=a.width||this.Ca.width!=c.width)&&!this.z[a.width]&&!this.z[c.width]?P(this,this.G):5E3<=this.C()-this.aa?this.z[a.width]&&this.z[c.width]&&sa[this.N]?P(this,this.G):P(this,this.P):Q(this)};function ta(a){this.T=a?a:("https:"==window.location.protocol?"https:":"http:")+ua;this.f=[];this.ba=[]}var ua="//fonts.googleapis.com/css";ta.prototype.e=function(){if(0==this.f.length)throw Error("No fonts to load !");if(-1!=this.T.indexOf("kit="))return this.T;for(var a=this.f.length,c=[],b=0;b<a;b++)c.push(this.f[b].replace(/ /g,"+"));a=this.T+"?family="+c.join("%7C");0<this.ba.length&&(a+="&subset="+this.ba.join(","));return a};function va(a){this.f=a;this.ka=[];this.na={};this.O={};this.B=new R}
		var wa={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},xa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ya={i:"i",italic:"i",n:"n",normal:"n"},za=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
		va.prototype.parse=function(){for(var a=this.f.length,c=0;c<a;c++){var b=this.f[c].split(":"),d=b[0].replace(/\+/g," "),e=["n4"];if(2<=b.length){var f;var g=b[1];f=[];if(g)for(var g=g.split(","),k=g.length,l=0;l<k;l++){var h;h=g[l];if(h.match(/^[\w]+$/))if(h=za.exec(h.toLowerCase()),h==m)h="";else{var o=i;o=h[1];if(o==m)o="4";else var u=xa[o],o=u?u:isNaN(o)?"4":o.substr(0,1);h=(h=this.B.expand([h[2]==m?"n":ya[h[2]],o].join("")))?this.B.compact(h):m}else h="";h&&f.push(h)}0<f.length&&(e=f);3==b.length&&
		(b=b[2],f=[],b=!b?f:b.split(","),0<b.length&&(b=wa[b[0]])&&(this.O[d]=b))}this.O[d]||(b=wa[d])&&(this.O[d]=b);this.ka.push(d);this.na[d]=e}};function $(a,c,b){this.a=a;this.c=c;this.d=b}$.prototype.F=function(a,c){c(a.D())};$.prototype.fa=function(){return"AppleWebKit"==this.a.W()?Z:N};$.prototype.load=function(a){"MSIE"==this.a.getName()&&this.d.blocking!=j?ba(r(this,this.ha,a)):this.ha(a)};
		$.prototype.ha=function(a){for(var c=this.c,b=new ta(this.d.api),d=this.d.families,e=d.length,f=0;f<e;f++){var g=d[f].split(":");3==g.length&&b.ba.push(g.pop());var k="";2==g.length&&""!=g[1]&&(k=":");b.f.push(g.join(k))}d=new va(d);d.parse();t(c,"head",w(c,b.e()));a(d.ka,d.na,d.O)};V.v("google",function(a){var c=(new B(navigator.userAgent,document)).parse();return new $(c,new s(document),a)});window.WebFontConfig&&V.load(window.WebFontConfig);
		})(this,document);
} );
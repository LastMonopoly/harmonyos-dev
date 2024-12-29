function re(r,o){for(var i=0;i<o.length;i++){const e=o[i];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}function oe(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var z={},Q,Bt;function ie(){return Bt||(Bt=1,Q=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Q}var $={},_={},At;function U(){if(At)return _;At=1;let r;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return _.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17},_.getSymbolTotalCodewords=function(e){return o[e]},_.getBCHDigit=function(i){let e=0;for(;i!==0;)e++,i>>>=1;return e},_.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');r=e},_.isKanjiModeEnabled=function(){return typeof r<"u"},_.toSJIS=function(e){return r(e)},_}var W={},Rt;function yt(){return Rt||(Rt=1,function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function o(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+i)}}r.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},r.from=function(e,t){if(r.isValid(e))return e;try{return o(e)}catch{return t}}}(W)),W}var Z,Tt;function ue(){if(Tt)return Z;Tt=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(o){const i=Math.floor(o/8);return(this.buffer[i]>>>7-o%8&1)===1},put:function(o,i){for(let e=0;e<i;e++)this.putBit((o>>>i-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),o&&(this.buffer[i]|=128>>>this.length%8),this.length++}},Z=r,Z}var X,Pt;function se(){if(Pt)return X;Pt=1;function r(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}return r.prototype.set=function(o,i,e,t){const n=o*this.size+i;this.data[n]=e,t&&(this.reservedBit[n]=!0)},r.prototype.get=function(o,i){return this.data[o*this.size+i]},r.prototype.xor=function(o,i,e){this.data[o*this.size+i]^=e},r.prototype.isReserved=function(o,i){return this.reservedBit[o*this.size+i]},X=r,X}var x={},It;function ae(){return It||(It=1,function(r){const o=U().getSymbolSize;r.getRowColCoords=function(e){if(e===1)return[];const t=Math.floor(e/7)+2,n=o(e),u=n===145?26:Math.ceil((n-13)/(2*t-2))*2,a=[n-7];for(let s=1;s<t-1;s++)a[s]=a[s-1]-u;return a.push(6),a.reverse()},r.getPositions=function(e){const t=[],n=r.getRowColCoords(e),u=n.length;for(let a=0;a<u;a++)for(let s=0;s<u;s++)a===0&&s===0||a===0&&s===u-1||a===u-1&&s===0||t.push([n[a],n[s]]);return t}}(x)),x}var tt={},Nt;function ce(){if(Nt)return tt;Nt=1;const r=U().getSymbolSize,o=7;return tt.getPositions=function(e){const t=r(e);return[[0,0],[t-o,0],[0,t-o]]},tt}var et={},Mt;function fe(){return Mt||(Mt=1,function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const o={N1:3,N2:3,N3:40,N4:10};r.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0},r.getPenaltyN1=function(t){const n=t.size;let u=0,a=0,s=0,c=null,d=null;for(let p=0;p<n;p++){a=s=0,c=d=null;for(let h=0;h<n;h++){let f=t.get(p,h);f===c?a++:(a>=5&&(u+=o.N1+(a-5)),c=f,a=1),f=t.get(h,p),f===d?s++:(s>=5&&(u+=o.N1+(s-5)),d=f,s=1)}a>=5&&(u+=o.N1+(a-5)),s>=5&&(u+=o.N1+(s-5))}return u},r.getPenaltyN2=function(t){const n=t.size;let u=0;for(let a=0;a<n-1;a++)for(let s=0;s<n-1;s++){const c=t.get(a,s)+t.get(a,s+1)+t.get(a+1,s)+t.get(a+1,s+1);(c===4||c===0)&&u++}return u*o.N2},r.getPenaltyN3=function(t){const n=t.size;let u=0,a=0,s=0;for(let c=0;c<n;c++){a=s=0;for(let d=0;d<n;d++)a=a<<1&2047|t.get(c,d),d>=10&&(a===1488||a===93)&&u++,s=s<<1&2047|t.get(d,c),d>=10&&(s===1488||s===93)&&u++}return u*o.N3},r.getPenaltyN4=function(t){let n=0;const u=t.data.length;for(let s=0;s<u;s++)n+=t.data[s];return Math.abs(Math.ceil(n*100/u/5)-10)*o.N4};function i(e,t,n){switch(e){case r.Patterns.PATTERN000:return(t+n)%2===0;case r.Patterns.PATTERN001:return t%2===0;case r.Patterns.PATTERN010:return n%3===0;case r.Patterns.PATTERN011:return(t+n)%3===0;case r.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2===0;case r.Patterns.PATTERN101:return t*n%2+t*n%3===0;case r.Patterns.PATTERN110:return(t*n%2+t*n%3)%2===0;case r.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}r.applyMask=function(t,n){const u=n.size;for(let a=0;a<u;a++)for(let s=0;s<u;s++)n.isReserved(s,a)||n.xor(s,a,i(t,s,a))},r.getBestMask=function(t,n){const u=Object.keys(r.Patterns).length;let a=0,s=1/0;for(let c=0;c<u;c++){n(c),r.applyMask(c,t);const d=r.getPenaltyN1(t)+r.getPenaltyN2(t)+r.getPenaltyN3(t)+r.getPenaltyN4(t);r.applyMask(c,t),d<s&&(s=d,a=c)}return a}}(et)),et}var O={},bt;function $t(){if(bt)return O;bt=1;const r=yt(),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return O.getBlocksCount=function(t,n){switch(n){case r.L:return o[(t-1)*4+0];case r.M:return o[(t-1)*4+1];case r.Q:return o[(t-1)*4+2];case r.H:return o[(t-1)*4+3];default:return}},O.getTotalCodewordsCount=function(t,n){switch(n){case r.L:return i[(t-1)*4+0];case r.M:return i[(t-1)*4+1];case r.Q:return i[(t-1)*4+2];case r.H:return i[(t-1)*4+3];default:return}},O}var nt={},K={},St;function le(){if(St)return K;St=1;const r=new Uint8Array(512),o=new Uint8Array(256);return function(){let e=1;for(let t=0;t<255;t++)r[t]=e,o[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),K.log=function(e){if(e<1)throw new Error("log("+e+")");return o[e]},K.exp=function(e){return r[e]},K.mul=function(e,t){return e===0||t===0?0:r[o[e]+o[t]]},K}var Lt;function de(){return Lt||(Lt=1,function(r){const o=le();r.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let u=0;u<e.length;u++)for(let a=0;a<t.length;a++)n[u+a]^=o.mul(e[u],t[a]);return n},r.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const u=n[0];for(let s=0;s<t.length;s++)n[s]^=o.mul(t[s],u);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},r.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let n=0;n<e;n++)t=r.mul(t,new Uint8Array([1,o.exp(n)]));return t}}(nt)),nt}var rt,Dt;function ge(){if(Dt)return rt;Dt=1;const r=de();function o(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}return o.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=r.mod(t,this.genPoly),u=this.degree-n.length;if(u>0){const a=new Uint8Array(this.degree);return a.set(n,u),a}return n},rt=o,rt}var ot={},it={},ut={},qt;function Wt(){return qt||(qt=1,ut.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}),ut}var L={},vt;function Zt(){if(vt)return L;vt=1;const r="[0-9]+",o="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(i,"g"),L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),L.BYTE=new RegExp(e,"g"),L.NUMERIC=new RegExp(r,"g"),L.ALPHANUMERIC=new RegExp(o,"g");const t=new RegExp("^"+i+"$"),n=new RegExp("^"+r+"$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return L.testKanji=function(s){return t.test(s)},L.testNumeric=function(s){return n.test(s)},L.testAlphanumeric=function(s){return u.test(s)},L}var _t;function F(){return _t||(_t=1,function(r){const o=Wt(),i=Zt();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(n,u){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!o.isValid(u))throw new Error("Invalid version: "+u);return u>=1&&u<10?n.ccBits[0]:u<27?n.ccBits[1]:n.ccBits[2]},r.getBestModeForData=function(n){return i.testNumeric(n)?r.NUMERIC:i.testAlphanumeric(n)?r.ALPHANUMERIC:i.testKanji(n)?r.KANJI:r.BYTE},r.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},r.isValid=function(n){return n&&n.bit&&n.ccBits};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}r.from=function(n,u){if(r.isValid(n))return n;try{return e(n)}catch{return u}}}(it)),it}var Ut;function he(){return Ut||(Ut=1,function(r){const o=U(),i=$t(),e=yt(),t=F(),n=Wt(),u=7973,a=o.getBCHDigit(u);function s(h,f,I){for(let N=1;N<=40;N++)if(f<=r.getCapacity(N,I,h))return N}function c(h,f){return t.getCharCountIndicator(h,f)+4}function d(h,f){let I=0;return h.forEach(function(N){const b=c(N.mode,f);I+=b+N.getBitsLength()}),I}function p(h,f){for(let I=1;I<=40;I++)if(d(h,I)<=r.getCapacity(I,f,t.MIXED))return I}r.from=function(f,I){return n.isValid(f)?parseInt(f,10):I},r.getCapacity=function(f,I,N){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof N>"u"&&(N=t.BYTE);const b=o.getSymbolTotalCodewords(f),R=i.getTotalCodewordsCount(f,I),M=(b-R)*8;if(N===t.MIXED)return M;const T=M-c(N,f);switch(N){case t.NUMERIC:return Math.floor(T/10*3);case t.ALPHANUMERIC:return Math.floor(T/11*2);case t.KANJI:return Math.floor(T/13);case t.BYTE:default:return Math.floor(T/8)}},r.getBestVersionForData=function(f,I){let N;const b=e.from(I,e.M);if(Array.isArray(f)){if(f.length>1)return p(f,b);if(f.length===0)return 1;N=f[0]}else N=f;return s(N.mode,N.getLength(),b)},r.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let I=f<<12;for(;o.getBCHDigit(I)-a>=0;)I^=u<<o.getBCHDigit(I)-a;return f<<12|I}}(ot)),ot}var st={},Ft;function me(){if(Ft)return st;Ft=1;const r=U(),o=1335,i=21522,e=r.getBCHDigit(o);return st.getEncodedBits=function(n,u){const a=n.bit<<3|u;let s=a<<10;for(;r.getBCHDigit(s)-e>=0;)s^=o<<r.getBCHDigit(s)-e;return(a<<10|s)^i},st}var at={},ct,kt;function we(){if(kt)return ct;kt=1;const r=F();function o(i){this.mode=r.NUMERIC,this.data=i.toString()}return o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,n,u;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),u=parseInt(n,10),e.put(u,10);const a=this.data.length-t;a>0&&(n=this.data.substr(t),u=parseInt(n,10),e.put(u,a*3+1))},ct=o,ct}var ft,zt;function ye(){if(zt)return ft;zt=1;const r=F(),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=r.ALPHANUMERIC,this.data=e}return i.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let u=o.indexOf(this.data[n])*45;u+=o.indexOf(this.data[n+1]),t.put(u,11)}this.data.length%2&&t.put(o.indexOf(this.data[n]),6)},ft=i,ft}var lt,Vt;function Ce(){if(Vt)return lt;Vt=1;const r=F();function o(i){this.mode=r.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}return o.getBitsLength=function(e){return e*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(i){for(let e=0,t=this.data.length;e<t;e++)i.put(this.data[e],8)},lt=o,lt}var dt,Kt;function Ee(){if(Kt)return dt;Kt=1;const r=F(),o=U();function i(e){this.mode=r.KANJI,this.data=e}return i.getBitsLength=function(t){return t*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=o.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},dt=i,dt}var gt={exports:{}},Ht;function pe(){return Ht||(Ht=1,function(r){var o={single_source_shortest_paths:function(i,e,t){var n={},u={};u[e]=0;var a=o.PriorityQueue.make();a.push(e,0);for(var s,c,d,p,h,f,I,N,b;!a.empty();){s=a.pop(),c=s.value,p=s.cost,h=i[c]||{};for(d in h)h.hasOwnProperty(d)&&(f=h[d],I=p+f,N=u[d],b=typeof u[d]>"u",(b||N>I)&&(u[d]=I,a.push(d,I),n[d]=c))}if(typeof t<"u"&&typeof u[t]>"u"){var R=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(R)}return n},extract_shortest_path_from_predecessor_list:function(i,e){for(var t=[],n=e;n;)t.push(n),i[n],n=i[n];return t.reverse(),t},find_path:function(i,e,t){var n=o.single_source_shortest_paths(i,e,t);return o.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(i){var e=o.PriorityQueue,t={},n;i=i||{};for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t.queue=[],t.sorter=i.sorter||e.default_sorter,t},default_sorter:function(i,e){return i.cost-e.cost},push:function(i,e){var t={value:i,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=o}(gt)),gt.exports}var Ot;function Be(){return Ot||(Ot=1,function(r){const o=F(),i=we(),e=ye(),t=Ce(),n=Ee(),u=Zt(),a=U(),s=pe();function c(R){return unescape(encodeURIComponent(R)).length}function d(R,M,T){const B=[];let S;for(;(S=R.exec(T))!==null;)B.push({data:S[0],index:S.index,mode:M,length:S[0].length});return B}function p(R){const M=d(u.NUMERIC,o.NUMERIC,R),T=d(u.ALPHANUMERIC,o.ALPHANUMERIC,R);let B,S;return a.isKanjiModeEnabled()?(B=d(u.BYTE,o.BYTE,R),S=d(u.KANJI,o.KANJI,R)):(B=d(u.BYTE_KANJI,o.BYTE,R),S=[]),M.concat(T,B,S).sort(function(C,y){return C.index-y.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function h(R,M){switch(M){case o.NUMERIC:return i.getBitsLength(R);case o.ALPHANUMERIC:return e.getBitsLength(R);case o.KANJI:return n.getBitsLength(R);case o.BYTE:return t.getBitsLength(R)}}function f(R){return R.reduce(function(M,T){const B=M.length-1>=0?M[M.length-1]:null;return B&&B.mode===T.mode?(M[M.length-1].data+=T.data,M):(M.push(T),M)},[])}function I(R){const M=[];for(let T=0;T<R.length;T++){const B=R[T];switch(B.mode){case o.NUMERIC:M.push([B,{data:B.data,mode:o.ALPHANUMERIC,length:B.length},{data:B.data,mode:o.BYTE,length:B.length}]);break;case o.ALPHANUMERIC:M.push([B,{data:B.data,mode:o.BYTE,length:B.length}]);break;case o.KANJI:M.push([B,{data:B.data,mode:o.BYTE,length:c(B.data)}]);break;case o.BYTE:M.push([{data:B.data,mode:o.BYTE,length:c(B.data)}])}}return M}function N(R,M){const T={},B={start:{}};let S=["start"];for(let g=0;g<R.length;g++){const C=R[g],y=[];for(let l=0;l<C.length;l++){const A=C[l],m=""+g+l;y.push(m),T[m]={node:A,lastCount:0},B[m]={};for(let E=0;E<S.length;E++){const w=S[E];T[w]&&T[w].node.mode===A.mode?(B[w][m]=h(T[w].lastCount+A.length,A.mode)-h(T[w].lastCount,A.mode),T[w].lastCount+=A.length):(T[w]&&(T[w].lastCount=A.length),B[w][m]=h(A.length,A.mode)+4+o.getCharCountIndicator(A.mode,M))}}S=y}for(let g=0;g<S.length;g++)B[S[g]].end=0;return{map:B,table:T}}function b(R,M){let T;const B=o.getBestModeForData(R);if(T=o.from(M,B),T!==o.BYTE&&T.bit<B.bit)throw new Error('"'+R+'" cannot be encoded with mode '+o.toString(T)+`.
 Suggested mode is: `+o.toString(B));switch(T===o.KANJI&&!a.isKanjiModeEnabled()&&(T=o.BYTE),T){case o.NUMERIC:return new i(R);case o.ALPHANUMERIC:return new e(R);case o.KANJI:return new n(R);case o.BYTE:return new t(R)}}r.fromArray=function(M){return M.reduce(function(T,B){return typeof B=="string"?T.push(b(B,null)):B.data&&T.push(b(B.data,B.mode)),T},[])},r.fromString=function(M,T){const B=p(M,a.isKanjiModeEnabled()),S=I(B),g=N(S,T),C=s.find_path(g.map,"start","end"),y=[];for(let l=1;l<C.length-1;l++)y.push(g.table[C[l]].node);return r.fromArray(f(y))},r.rawSplit=function(M){return r.fromArray(p(M,a.isKanjiModeEnabled()))}}(at)),at}var jt;function Ae(){if(jt)return $;jt=1;const r=U(),o=yt(),i=ue(),e=se(),t=ae(),n=ce(),u=fe(),a=$t(),s=ge(),c=he(),d=me(),p=F(),h=Be();function f(g,C){const y=g.size,l=n.getPositions(C);for(let A=0;A<l.length;A++){const m=l[A][0],E=l[A][1];for(let w=-1;w<=7;w++)if(!(m+w<=-1||y<=m+w))for(let P=-1;P<=7;P++)E+P<=-1||y<=E+P||(w>=0&&w<=6&&(P===0||P===6)||P>=0&&P<=6&&(w===0||w===6)||w>=2&&w<=4&&P>=2&&P<=4?g.set(m+w,E+P,!0,!0):g.set(m+w,E+P,!1,!0))}}function I(g){const C=g.size;for(let y=8;y<C-8;y++){const l=y%2===0;g.set(y,6,l,!0),g.set(6,y,l,!0)}}function N(g,C){const y=t.getPositions(C);for(let l=0;l<y.length;l++){const A=y[l][0],m=y[l][1];for(let E=-2;E<=2;E++)for(let w=-2;w<=2;w++)E===-2||E===2||w===-2||w===2||E===0&&w===0?g.set(A+E,m+w,!0,!0):g.set(A+E,m+w,!1,!0)}}function b(g,C){const y=g.size,l=c.getEncodedBits(C);let A,m,E;for(let w=0;w<18;w++)A=Math.floor(w/3),m=w%3+y-8-3,E=(l>>w&1)===1,g.set(A,m,E,!0),g.set(m,A,E,!0)}function R(g,C,y){const l=g.size,A=d.getEncodedBits(C,y);let m,E;for(m=0;m<15;m++)E=(A>>m&1)===1,m<6?g.set(m,8,E,!0):m<8?g.set(m+1,8,E,!0):g.set(l-15+m,8,E,!0),m<8?g.set(8,l-m-1,E,!0):m<9?g.set(8,15-m-1+1,E,!0):g.set(8,15-m-1,E,!0);g.set(l-8,8,1,!0)}function M(g,C){const y=g.size;let l=-1,A=y-1,m=7,E=0;for(let w=y-1;w>0;w-=2)for(w===6&&w--;;){for(let P=0;P<2;P++)if(!g.isReserved(A,w-P)){let v=!1;E<C.length&&(v=(C[E]>>>m&1)===1),g.set(A,w-P,v),m--,m===-1&&(E++,m=7)}if(A+=l,A<0||y<=A){A-=l,l=-l;break}}}function T(g,C,y){const l=new i;y.forEach(function(P){l.put(P.mode.bit,4),l.put(P.getLength(),p.getCharCountIndicator(P.mode,g)),P.write(l)});const A=r.getSymbolTotalCodewords(g),m=a.getTotalCodewordsCount(g,C),E=(A-m)*8;for(l.getLengthInBits()+4<=E&&l.put(0,4);l.getLengthInBits()%8!==0;)l.putBit(0);const w=(E-l.getLengthInBits())/8;for(let P=0;P<w;P++)l.put(P%2?17:236,8);return B(l,g,C)}function B(g,C,y){const l=r.getSymbolTotalCodewords(C),A=a.getTotalCodewordsCount(C,y),m=l-A,E=a.getBlocksCount(C,y),w=l%E,P=E-w,v=Math.floor(l/E),V=Math.floor(m/E),te=V+1,Ct=v-V,ee=new s(Ct);let j=0;const H=new Array(E),Et=new Array(E);let J=0;const ne=new Uint8Array(g.buffer);for(let k=0;k<E;k++){const G=k<P?V:te;H[k]=ne.slice(j,j+G),Et[k]=ee.encode(H[k]),j+=G,J=Math.max(J,G)}const Y=new Uint8Array(l);let pt=0,D,q;for(D=0;D<J;D++)for(q=0;q<E;q++)D<H[q].length&&(Y[pt++]=H[q][D]);for(D=0;D<Ct;D++)for(q=0;q<E;q++)Y[pt++]=Et[q][D];return Y}function S(g,C,y,l){let A;if(Array.isArray(g))A=h.fromArray(g);else if(typeof g=="string"){let v=C;if(!v){const V=h.rawSplit(g);v=c.getBestVersionForData(V,y)}A=h.fromString(g,v||40)}else throw new Error("Invalid data");const m=c.getBestVersionForData(A,y);if(!m)throw new Error("The amount of data is too big to be stored in a QR Code");if(!C)C=m;else if(C<m)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+m+`.
`);const E=T(C,y,A),w=r.getSymbolSize(C),P=new e(w);return f(P,C),I(P),N(P,C),R(P,y,0),C>=7&&b(P,C),M(P,E),isNaN(l)&&(l=u.getBestMask(P,R.bind(null,P,y))),u.applyMask(l,P),R(P,y,l),{modules:P,version:C,errorCorrectionLevel:y,maskPattern:l,segments:A}}return $.create=function(C,y){if(typeof C>"u"||C==="")throw new Error("No input text");let l=o.M,A,m;return typeof y<"u"&&(l=o.from(y.errorCorrectionLevel,o.M),A=c.from(y.version),m=u.from(y.maskPattern),y.toSJISFunc&&r.setToSJISFunction(y.toSJISFunc)),S(C,A,l,m)},$}var ht={},mt={},Jt;function Xt(){return Jt||(Jt=1,function(r){function o(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let e=i.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+i);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(n){return[n,n]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}r.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,u=e.scale||4;return{width:n,scale:n?4:u,margin:t,color:{dark:o(e.color.dark||"#000000ff"),light:o(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},r.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},r.getImageWidth=function(e,t){const n=r.getScale(e,t);return Math.floor((e+t.margin*2)*n)},r.qrToImageData=function(e,t,n){const u=t.modules.size,a=t.modules.data,s=r.getScale(u,n),c=Math.floor((u+n.margin*2)*s),d=n.margin*s,p=[n.color.light,n.color.dark];for(let h=0;h<c;h++)for(let f=0;f<c;f++){let I=(h*c+f)*4,N=n.color.light;if(h>=d&&f>=d&&h<c-d&&f<c-d){const b=Math.floor((h-d)/s),R=Math.floor((f-d)/s);N=p[a[b*u+R]?1:0]}e[I++]=N.r,e[I++]=N.g,e[I++]=N.b,e[I]=N.a}}}(mt)),mt}var Yt;function Re(){return Yt||(Yt=1,function(r){const o=Xt();function i(t,n,u){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=u,n.width=u,n.style.height=u+"px",n.style.width=u+"px"}function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(n,u,a){let s=a,c=u;typeof s>"u"&&(!u||!u.getContext)&&(s=u,u=void 0),u||(c=e()),s=o.getOptions(s);const d=o.getImageWidth(n.modules.size,s),p=c.getContext("2d"),h=p.createImageData(d,d);return o.qrToImageData(h.data,n,s),i(p,c,d),p.putImageData(h,0,0),c},r.renderToDataURL=function(n,u,a){let s=a;typeof s>"u"&&(!u||!u.getContext)&&(s=u,u=void 0),s||(s={});const c=r.render(n,u,s),d=s.type||"image/png",p=s.rendererOpts||{};return c.toDataURL(d,p.quality)}}(ht)),ht}var wt={},Gt;function Te(){if(Gt)return wt;Gt=1;const r=Xt();function o(t,n){const u=t.a/255,a=n+'="'+t.hex+'"';return u<1?a+" "+n+'-opacity="'+u.toFixed(2).slice(1)+'"':a}function i(t,n,u){let a=t+n;return typeof u<"u"&&(a+=" "+u),a}function e(t,n,u){let a="",s=0,c=!1,d=0;for(let p=0;p<t.length;p++){const h=Math.floor(p%n),f=Math.floor(p/n);!h&&!c&&(c=!0),t[p]?(d++,p>0&&h>0&&t[p-1]||(a+=c?i("M",h+u,.5+f+u):i("m",s,0),s=0,c=!1),h+1<n&&t[p+1]||(a+=i("h",d),d=0)):s++}return a}return wt.render=function(n,u,a){const s=r.getOptions(u),c=n.modules.size,d=n.modules.data,p=c+s.margin*2,h=s.color.light.a?"<path "+o(s.color.light,"fill")+' d="M0 0h'+p+"v"+p+'H0z"/>':"",f="<path "+o(s.color.dark,"stroke")+' d="'+e(d,c,s.margin)+'"/>',I='viewBox="0 0 '+p+" "+p+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+I+' shape-rendering="crispEdges">'+h+f+`</svg>
`;return typeof a=="function"&&a(null,b),b},wt}var Qt;function Pe(){if(Qt)return z;Qt=1;const r=ie(),o=Ae(),i=Re(),e=Te();function t(n,u,a,s,c){const d=[].slice.call(arguments,1),p=d.length,h=typeof d[p-1]=="function";if(!h&&!r())throw new Error("Callback required as last argument");if(h){if(p<2)throw new Error("Too few arguments provided");p===2?(c=a,a=u,u=s=void 0):p===3&&(u.getContext&&typeof c>"u"?(c=s,s=void 0):(c=s,s=a,a=u,u=void 0))}else{if(p<1)throw new Error("Too few arguments provided");return p===1?(a=u,u=s=void 0):p===2&&!u.getContext&&(s=a,a=u,u=void 0),new Promise(function(f,I){try{const N=o.create(a,s);f(n(N,u,s))}catch(N){I(N)}})}try{const f=o.create(a,s);c(null,n(f,u,s))}catch(f){c(f)}}return z.create=o.create,z.toCanvas=t.bind(null,i.render),z.toDataURL=t.bind(null,i.renderToDataURL),z.toString=t.bind(null,function(n,u,a){return e.render(n,a)}),z}var xt=Pe();const Ie=oe(xt),Ne=re({__proto__:null,default:Ie},[xt]);export{Ne as b};

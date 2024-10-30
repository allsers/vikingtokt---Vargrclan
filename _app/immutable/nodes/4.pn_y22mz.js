import{s as Be,n as We,o as Ke,e as Ve}from"../chunks/scheduler.CDyYx_c2.js";import{S as $e,i as Qe,e as ae,c as oe,a as ye,d as V,o as Z,g as Ie,h as N,C as Ze,t as Te,s as ke,b as Ae,f as be,j as De,u as Ye,y as Ge,z as et,v as tt,w as rt,n as st,l as nt,x as it,A as at}from"../chunks/index.C65EYENI.js";import{f as ot}from"../chunks/index.BZziZH50.js";import"../chunks/paths.MVZkHR0A.js";import{e as Ue}from"../chunks/each.D6YF6ztN.js";var ut=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lt(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}function ht(_){if(_.__esModule)return _;var l=_.default;if(typeof l=="function"){var g=function n(){return this instanceof n?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};g.prototype=l.prototype}else g={};return Object.defineProperty(g,"__esModule",{value:!0}),Object.keys(_).forEach(function(n){var d=Object.getOwnPropertyDescriptor(_,n);Object.defineProperty(g,n,d.get?d:{enumerable:!0,get:function(){return _[n]}})}),g}var Je={exports:{}};const ft={},dt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),ct=ht(dt);/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(_,l){(function(g,n){_.exports=n()})(ut,function g(){var n=function(){return typeof self<"u"?self:typeof window<"u"?window:typeof n<"u"?n:{}}();function d(){var t=n.URL||n.webkitURL||null,e=g.toString();return a.BLOB_URL||(a.BLOB_URL=t.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",e,")();"],{type:"text/javascript"})))}var c=!n.document&&!!n.postMessage,S=n.IS_PAPA_WORKER||!1,m={},I=0,a={};if(a.parse=B,a.unparse=Q,a.RECORD_SEP="",a.UNIT_SEP="",a.BYTE_ORDER_MARK="\uFEFF",a.BAD_DELIMITERS=["\r",`
`,'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!c&&!!n.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=1024*1024*10,a.RemoteChunkSize=1024*1024*5,a.DefaultDelimiter=",",a.Parser=Ee,a.ParserHandle=L,a.NetworkStreamer=ee,a.FileStreamer=re,a.StringStreamer=se,a.ReadableStreamStreamer=ue,typeof PAPA_BROWSER_CONTEXT>"u"&&(a.DuplexStreamStreamer=H),n.jQuery){var O=n.jQuery;O.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(s){var h=O(this).prop("tagName").toUpperCase()==="INPUT"&&O(this).attr("type").toLowerCase()==="file"&&n.FileReader;if(!h||!this.files||this.files.length===0)return!0;for(var k=0;k<this.files.length;k++)r.push({file:this.files[k],inputElem:this,instanceConfig:O.extend({},e)})}),i(),this;function i(){if(r.length===0){x(t.complete)&&t.complete();return}var s=r[0];if(x(t.before)){var h=t.before(s.file,s.inputElem);if(typeof h=="object")if(h.action==="abort"){o("AbortError",s.file,s.inputElem,h.reason);return}else if(h.action==="skip"){v();return}else typeof h.config=="object"&&(s.instanceConfig=O.extend(s.instanceConfig,h.config));else if(h==="skip"){v();return}}var k=s.instanceConfig.complete;s.instanceConfig.complete=function(u){x(k)&&k(u,s.file,s.inputElem),v()},a.parse(s.file,s.instanceConfig)}function o(s,h,k,u){x(t.error)&&t.error({name:s},h,k,u)}function v(){r.splice(0,1),i()}}}S&&(n.onmessage=Xe);function B(t,e){e=e||{};var r=e.dynamicTyping||!1;if(x(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=x(e.transform)?e.transform:!1,e.worker&&a.WORKERS_SUPPORTED){var i=Ce();i.userStep=e.step,i.userChunk=e.chunk,i.userComplete=e.complete,i.userError=e.error,e.step=x(e.step),e.chunk=x(e.chunk),e.complete=x(e.complete),e.error=x(e.error),delete e.worker,i.postMessage({input:t,config:e,workerId:i.id});return}var o=null;if(t===a.NODE_STREAM_INPUT&&typeof PAPA_BROWSER_CONTEXT>"u")return o=new H(e),o.getStream();return typeof t=="string"?(t=v(t),e.download?o=new ee(e):o=new se(e)):t.readable===!0&&x(t.read)&&x(t.on)?o=new ue(e):(n.File&&t instanceof File||t instanceof Object)&&(o=new re(e)),o.stream(t);function v(s){return s.charCodeAt(0)===65279?s.slice(1):s}}function Q(t,e){var r=!1,i=!0,o=",",v=`\r
`,s='"',h=s+s,k=!1,u=null,X=!1;le();var p=new RegExp(de(s),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return W(null,t,k);if(typeof t[0]=="object")return W(u||Object.keys(t[0]),t,k)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||u),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),!Array.isArray(t.data[0])&&typeof t.data[0]!="object"&&(t.data=[t.data])),W(t.fields||[],t.data||[],k);throw new Error("Unable to serialize unrecognized input");function le(){if(typeof e=="object"){if(typeof e.delimiter=="string"&&!a.BAD_DELIMITERS.filter(function(b){return e.delimiter.indexOf(b)!==-1}).length&&(o=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),(typeof e.skipEmptyLines=="boolean"||typeof e.skipEmptyLines=="string")&&(k=e.skipEmptyLines),typeof e.newline=="string"&&(v=e.newline),typeof e.quoteChar=="string"&&(s=e.quoteChar),typeof e.header=="boolean"&&(i=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");u=e.columns}e.escapeChar!==void 0&&(h=e.escapeChar+s),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(X=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}}function W(b,A,P){var w="";typeof b=="string"&&(b=JSON.parse(b)),typeof A=="string"&&(A=JSON.parse(A));var Y=Array.isArray(b)&&b.length>0,M=!Array.isArray(A[0]);if(Y&&i){for(var ne=0;ne<b.length;ne++)ne>0&&(w+=o),w+=y(b[ne],ne);A.length>0&&(w+=v)}for(var $=0;$<A.length;$++){var pe=Y?b.length:A[$].length,me=!1,ie=Y?Object.keys(A[$]).length===0:A[$].length===0;if(P&&!Y&&(me=P==="greedy"?A[$].join("").trim()==="":A[$].length===1&&A[$][0].length===0),P==="greedy"&&Y){for(var f=[],E=0;E<pe;E++){var j=M?b[E]:E;f.push(A[$][j])}me=f.join("").trim()===""}if(!me){for(var R=0;R<pe;R++){R>0&&!ie&&(w+=o);var T=Y&&M?b[R]:R;w+=y(A[$][T],R)}$<A.length-1&&(!P||pe>0&&!ie)&&(w+=v)}}return w}function y(b,A){if(typeof b>"u"||b===null)return"";if(b.constructor===Date)return JSON.stringify(b).slice(1,25);var P=!1;X&&typeof b=="string"&&X.test(b)&&(b="'"+b,P=!0);var w=b.toString().replace(p,h);return P=P||r===!0||typeof r=="function"&&r(b,A)||Array.isArray(r)&&r[A]||ce(w,a.BAD_DELIMITERS)||w.indexOf(o)>-1||w.charAt(0)===" "||w.charAt(w.length-1)===" ",P?s+w+s:w}function ce(b,A){for(var P=0;P<A.length;P++)if(b.indexOf(A[P])>-1)return!0;return!1}}function K(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},e.call(this,t),this.parseChunk=function(r,i){if(this.isFirstChunk&&x(this._config.beforeFirstChunk)){var o=this._config.beforeFirstChunk(r);o!==void 0&&(r=o)}this.isFirstChunk=!1,this._halted=!1;var v=this._partialLine+r;this._partialLine="";var s=this._handle.parse(v,this._baseIndex,!this._finished);if(this._handle.paused()||this._handle.aborted()){this._halted=!0;return}var h=s.meta.cursor;this._finished||(this._partialLine=v.substring(h-this._baseIndex),this._baseIndex=h),s&&s.data&&(this._rowCount+=s.data.length);var k=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(S)n.postMessage({results:s,workerId:a.WORKER_ID,finished:k});else if(x(this._config.chunk)&&!i){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted()){this._halted=!0;return}s=void 0,this._completeResults=void 0}return!this._config.step&&!this._config.chunk&&(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),!this._completed&&k&&x(this._config.complete)&&(!s||!s.meta.aborted)&&(this._config.complete(this._completeResults,this._input),this._completed=!0),!k&&(!s||!s.meta.paused)&&this._nextChunk(),s},this._sendError=function(r){x(this._config.error)?this._config.error(r):S&&this._config.error&&n.postMessage({workerId:a.WORKER_ID,error:r,finished:!1})};function e(r){var i=Se(r);i.chunkSize=parseInt(i.chunkSize),!r.step&&!r.chunk&&(i.chunkSize=null),this._handle=new L(i),this._handle.streamer=this,this._config=i}}function ee(t){t=t||{},t.chunkSize||(t.chunkSize=a.RemoteChunkSize),K.call(this,t);var e;c?this._nextChunk=function(){this._readChunk(),this._chunkLoaded()}:this._nextChunk=function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished){this._chunkLoaded();return}if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),c||(e.onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!c),this._config.downloadRequestHeaders){var i=this._config.downloadRequestHeaders;for(var o in i)e.setRequestHeader(o,i[o])}if(this._config.chunkSize){var v=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+v)}try{e.send(this._config.downloadRequestBody)}catch(s){this._chunkError(s.message)}c&&e.status===0&&this._chunkError()},this._chunkLoaded=function(){if(e.readyState===4){if(e.status<200||e.status>=400){this._chunkError();return}this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=r(e),this.parseChunk(e.responseText)}},this._chunkError=function(i){var o=e.statusText||i;this._sendError(new Error(o))};function r(i){var o=i.getResponseHeader("Content-Range");return o===null?-1:parseInt(o.substring(o.lastIndexOf("/")+1))}}ee.prototype=Object.create(K.prototype),ee.prototype.constructor=ee;function re(t){t=t||{},t.chunkSize||(t.chunkSize=a.LocalChunkSize),K.call(this,t);var e,r,i=typeof FileReader<"u";this.stream=function(o){this._input=o,r=o.slice||o.webkitSlice||o.mozSlice,i?(e=new FileReader,e.onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){!this._finished&&(!this._config.preview||this._rowCount<this._config.preview)&&this._readChunk()},this._readChunk=function(){var o=this._input;if(this._config.chunkSize){var v=Math.min(this._start+this._config.chunkSize,this._input.size);o=r.call(o,this._start,v)}var s=e.readAsText(o,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(o){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(o.target.result)},this._chunkError=function(){this._sendError(e.error)}}re.prototype=Object.create(K.prototype),re.prototype.constructor=re;function se(t){t=t||{},K.call(this,t);var e;this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r=this._config.chunkSize,i;return r?(i=e.substring(0,r),e=e.substring(r)):(i=e,e=""),this._finished=!e,this.parseChunk(i)}}}se.prototype=Object.create(se.prototype),se.prototype.constructor=se;function ue(t){t=t||{},K.call(this,t);var e=[],r=!0,i=!1;this.pause=function(){K.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){K.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(o){this._input=o,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=J(function(o){try{e.push(typeof o=="string"?o:o.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(v){this._streamError(v)}},this),this._streamError=J(function(o){this._streamCleanUp(),this._sendError(o)},this),this._streamEnd=J(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=J(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}ue.prototype=Object.create(K.prototype),ue.prototype.constructor=ue;function H(t){var e=ct.Duplex,r=Se(t),i=!0,o=!1,v=[],s=null;this._onCsvData=function(h){var k=h.data;!s.push(k)&&!this._handle.paused()&&this._handle.pause()},this._onCsvComplete=function(){s.push(null)},r.step=J(this._onCsvData,this),r.complete=J(this._onCsvComplete,this),K.call(this,r),this._nextChunk=function(){o&&v.length===1&&(this._finished=!0),v.length?v.shift()():i=!0},this._addToParseQueue=function(h,k){v.push(J(function(){if(this.parseChunk(typeof h=="string"?h:h.toString(r.encoding)),x(k))return k()},this)),i&&(i=!1,this._nextChunk())},this._onRead=function(){this._handle.paused()&&this._handle.resume()},this._onWrite=function(h,k,u){this._addToParseQueue(h,u)},this._onWriteComplete=function(){o=!0,this._addToParseQueue("")},this.getStream=function(){return s},s=new e({readableObjectMode:!0,decodeStrings:!1,read:J(this._onRead,this),write:J(this._onWrite,this)}),s.once("finish",J(this._onWriteComplete,this))}typeof PAPA_BROWSER_CONTEXT>"u"&&(H.prototype=Object.create(K.prototype),H.prototype.constructor=H);function L(t){var e=Math.pow(2,53),r=-e,i=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,o=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,v=this,s=0,h=0,k,u,X=!1,p=!1,le,W=[],y={data:[],errors:[],meta:{}};if(x(t.step)){var ce=t.step;t.step=function(f){if(y=f,w())P();else{if(P(),y.data.length===0)return;s+=f.data.length,t.preview&&s>t.preview?u.abort():(y.data=y.data[0],ce(y,v))}}}this.parse=function(f,E,j){var R=t.quoteChar||'"';if(t.newline||(t.newline=me(f,R)),le=!1,t.delimiter)x(t.delimiter)&&(t.delimiter=t.delimiter(f),y.meta.delimiter=t.delimiter);else{var T=pe(f,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);T.successful?t.delimiter=T.bestDelimiter:(le=!0,t.delimiter=a.DefaultDelimiter),y.meta.delimiter=t.delimiter}var D=Se(t);return t.preview&&t.header&&D.preview++,k=f,u=new Ee(D),y=u.parse(k,E,j),P(),X?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return X},this.pause=function(){X=!0,u.abort(),k=x(t.chunk)?"":k.substring(u.getCharIndex())},this.resume=function(){v.streamer._halted?(X=!1,v.streamer.parseChunk(k,!0)):setTimeout(v.resume,3)},this.aborted=function(){return p},this.abort=function(){p=!0,u.abort(),y.meta.aborted=!0,x(t.complete)&&t.complete(y),k=""};function b(f){return t.skipEmptyLines==="greedy"?f.join("").trim()==="":f.length===1&&f[0].length===0}function A(f){if(i.test(f)){var E=parseFloat(f);if(E>r&&E<e)return!0}return!1}function P(){return y&&le&&(ie("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),le=!1),t.skipEmptyLines&&(y.data=y.data.filter(function(f){return!b(f)})),w()&&Y(),$()}function w(){return t.header&&W.length===0}function Y(){if(!y)return;function f(j,R){x(t.transformHeader)&&(j=t.transformHeader(j,R)),W.push(j)}if(Array.isArray(y.data[0])){for(var E=0;w()&&E<y.data.length;E++)y.data[E].forEach(f);y.data.splice(0,1)}else y.data.forEach(f)}function M(f){return t.dynamicTypingFunction&&t.dynamicTyping[f]===void 0&&(t.dynamicTyping[f]=t.dynamicTypingFunction(f)),(t.dynamicTyping[f]||t.dynamicTyping)===!0}function ne(f,E){return M(f)?E==="true"||E==="TRUE"?!0:E==="false"||E==="FALSE"?!1:A(E)?parseFloat(E):o.test(E)?new Date(E):E===""?null:E:E}function $(){if(!y||!t.header&&!t.dynamicTyping&&!t.transform)return y;function f(j,R){var T=t.header?{}:[],D;for(D=0;D<j.length;D++){var q=D,F=j[D];t.header&&(q=D>=W.length?"__parsed_extra":W[D]),t.transform&&(F=t.transform(F,q)),F=ne(q,F),q==="__parsed_extra"?(T[q]=T[q]||[],T[q].push(F)):T[q]=F}return t.header&&(D>W.length?ie("FieldMismatch","TooManyFields","Too many fields: expected "+W.length+" fields but parsed "+D,h+R):D<W.length&&ie("FieldMismatch","TooFewFields","Too few fields: expected "+W.length+" fields but parsed "+D,h+R)),T}var E=1;return!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(f),E=y.data.length):y.data=f(y.data,0),t.header&&y.meta&&(y.meta.fields=W),h+=E,y}function pe(f,E,j,R,T){var D,q,F,he;T=T||[",","	","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var U=0;U<T.length;U++){var z=T[U],_e=0,C=0,we=0;F=void 0;for(var ge=new Ee({comments:R,delimiter:z,newline:E,preview:10}).parse(f),ve=0;ve<ge.data.length;ve++){if(j&&b(ge.data[ve])){we++;continue}var fe=ge.data[ve].length;if(C+=fe,typeof F>"u"){F=fe;continue}else fe>0&&(_e+=Math.abs(fe-F),F=fe)}ge.data.length>0&&(C/=ge.data.length-we),(typeof q>"u"||_e<=q)&&(typeof he>"u"||C>he)&&C>1.99&&(q=_e,D=z,he=C)}return t.delimiter=D,{successful:!!D,bestDelimiter:D}}function me(f,E){f=f.substring(0,1024*1024);var j=new RegExp(de(E)+"([^]*?)"+de(E),"gm");f=f.replace(j,"");var R=f.split("\r"),T=f.split(`
`),D=T.length>1&&T[0].length<R[0].length;if(R.length===1||D)return`
`;for(var q=0,F=0;F<R.length;F++)R[F][0]===`
`&&q++;return q>=R.length/2?`\r
`:"\r"}function ie(f,E,j,R){var T={type:f,code:E,message:j};R!==void 0&&(T.row=R),y.errors.push(T)}}function de(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ee(t){t=t||{};var e=t.delimiter,r=t.newline,i=t.comments,o=t.step,v=t.preview,s=t.fastMode,h;t.quoteChar===void 0||t.quoteChar===null?h='"':h=t.quoteChar;var k=h;if(t.escapeChar!==void 0&&(k=t.escapeChar),(typeof e!="string"||a.BAD_DELIMITERS.indexOf(e)>-1)&&(e=","),i===e)throw new Error("Comment character same as delimiter");i===!0?i="#":(typeof i!="string"||a.BAD_DELIMITERS.indexOf(i)>-1)&&(i=!1),r!==`
`&&r!=="\r"&&r!==`\r
`&&(r=`
`);var u=0,X=!1;this.parse=function(p,le,W){if(typeof p!="string")throw new Error("Input must be a string");var y=p.length,ce=e.length,b=r.length,A=i.length,P=x(o);u=0;var w=[],Y=[],M=[],ne=0;if(!p)return G();if(t.header&&!le){var $=p.split(r)[0],pe=$.split(e),me="_",ie=[],f={},E=!1;for(var j in pe){var R=pe[j];x(t.transformHeader)&&(R=t.transformHeader(R,j));var T=R,D=f[R]||0;for(D>0&&(E=!0,T=R+me+D),f[R]=D+1;ie.includes(T);)T=T+me+D;ie.push(T)}if(E){var q=p.split(r);q[0]=ie.join(e),p=q.join(r)}}if(s||s!==!1&&p.indexOf(h)===-1){for(var F=p.split(r),he=0;he<F.length;he++){if(M=F[he],u+=M.length,he!==F.length-1)u+=r.length;else if(W)return G();if(!(i&&M.substring(0,A)===i)){if(P){if(w=[],Oe(M.split(e)),xe(),X)return G()}else Oe(M.split(e));if(v&&he>=v)return w=w.slice(0,v),G(!0)}}return G()}for(var U=p.indexOf(e,u),z=p.indexOf(r,u),_e=new RegExp(de(k)+de(h),"g"),C=p.indexOf(h,u);;){if(p[u]===h){for(C=u,u++;;){if(C=p.indexOf(h,C+1),C===-1)return W||Y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:w.length,index:u}),Pe();if(C===y-1){var we=p.substring(u,C).replace(_e,h);return Pe(we)}if(h===k&&p[C+1]===k){C++;continue}if(!(h!==k&&C!==0&&p[C-1]===k)){U!==-1&&U<C+1&&(U=p.indexOf(e,C+1)),z!==-1&&z<C+1&&(z=p.indexOf(r,C+1));var ge=z===-1?U:Math.min(U,z),ve=je(ge);if(p.substr(C+1+ve,ce)===e){M.push(p.substring(u,C).replace(_e,h)),u=C+1+ve+ce,p[C+1+ve+ce]!==h&&(C=p.indexOf(h,u)),U=p.indexOf(e,u),z=p.indexOf(r,u);break}var fe=je(z);if(p.substring(C+1+fe,C+1+fe+b)===r){if(M.push(p.substring(u,C).replace(_e,h)),ze(C+1+fe+b),U=p.indexOf(e,u),C=p.indexOf(h,u),P&&(xe(),X))return G();if(v&&w.length>=v)return G(!0);break}Y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:w.length,index:u}),C++}}continue}if(i&&M.length===0&&p.substring(u,u+A)===i){if(z===-1)return G();u=z+b,z=p.indexOf(r,u),U=p.indexOf(e,u);continue}if(U!==-1&&(U<z||z===-1)){M.push(p.substring(u,U)),u=U+ce,U=p.indexOf(e,u);continue}if(z!==-1){if(M.push(p.substring(u,z)),ze(z+b),P&&(xe(),X))return G();if(v&&w.length>=v)return G(!0);continue}break}return Pe();function Oe(te){w.push(te),ne=u}function je(te){var qe=0;if(te!==-1){var Fe=p.substring(C+1,te);Fe&&Fe.trim()===""&&(qe=Fe.length)}return qe}function Pe(te){return W||(typeof te>"u"&&(te=p.substring(u)),M.push(te),u=y,Oe(M),P&&xe()),G()}function ze(te){u=te,Oe(M),M=[],z=p.indexOf(r,u)}function G(te){return{data:w,errors:Y,meta:{delimiter:e,linebreak:r,aborted:X,truncated:!!te,cursor:ne+(le||0)}}}function xe(){o(G()),w=[],Y=[]}},this.abort=function(){X=!0},this.getCharIndex=function(){return u}}function Ce(){if(!a.WORKERS_SUPPORTED)return!1;var t=d(),e=new n.Worker(t);return e.onmessage=Re,e.id=I++,m[e.id]=e,e}function Re(t){var e=t.data,r=m[e.workerId],i=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var o=function(){i=!0,Le(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},v={abort:o,pause:Me,resume:Me};if(x(r.userStep)){for(var s=0;s<e.results.data.length&&(r.userStep({data:e.results.data[s],errors:e.results.errors,meta:e.results.meta},v),!i);s++);delete e.results}else x(r.userChunk)&&(r.userChunk(e.results,v,e.file),delete e.results)}e.finished&&!i&&Le(e.workerId,e.results)}function Le(t,e){var r=m[t];x(r.userComplete)&&r.userComplete(e),r.terminate(),delete m[t]}function Me(){throw new Error("Not implemented.")}function Xe(t){var e=t.data;if(typeof a.WORKER_ID>"u"&&e&&(a.WORKER_ID=e.workerId),typeof e.input=="string")n.postMessage({workerId:a.WORKER_ID,results:a.parse(e.input,e.config),finished:!0});else if(n.File&&e.input instanceof File||e.input instanceof Object){var r=a.parse(e.input,e.config);r&&n.postMessage({workerId:a.WORKER_ID,results:r,finished:!0})}}function Se(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=Se(t[r]);return e}function J(t,e){return function(){t.apply(e,arguments)}}function x(t){return typeof t=="function"}return a})})(Je);var pt=Je.exports;const mt=lt(pt),vt=!0,yt="https://raw.githubusercontent.com/Greco1899/scrape_ufc_stats/main/ufc_event_details.csv";async function _t(_){const g=await(await _(yt)).text();return new Promise((n,d)=>{mt.parse(g,{header:!0,complete:c=>{const S=c.data.slice(0,15).map(m=>{const[I,a]=m.EVENT.split(": ");return{event:I,fighters:a,location:m.LOCATION,date:m.DATE}});n(S)},error:c=>{d(c)}})})}const gt=async({fetch:_})=>{try{return{data:{events:await _t(_)}}}catch(l){return console.error("Error fetching or processing CSV:",l),{data:{events:[]}}}},At=Object.freeze(Object.defineProperty({__proto__:null,load:gt,prerender:vt},Symbol.toStringTag,{value:"Module"}));function He(_,l,g){const n=_.slice();return n[2]=l[g],n}function Ne(_){let l,g,n=_[2].event+"",d,c,S,m=_[2].fighters+"",I,a,O,B=_[2].date+"",Q,K,ee,re=_[2].location+"",se,ue;return{c(){l=ae("li"),g=ae("p"),d=Te(n),c=ke(),S=ae("p"),I=Te(m),a=ke(),O=ae("p"),Q=Te(B),K=ke(),ee=ae("p"),se=Te(re),ue=ke(),this.h()},l(H){l=oe(H,"LI",{id:!0});var L=ye(l);g=oe(L,"P",{id:!0});var de=ye(g);d=Ae(de,n),de.forEach(V),c=be(L),S=oe(L,"P",{id:!0});var Ee=ye(S);I=Ae(Ee,m),Ee.forEach(V),a=be(L),O=oe(L,"P",{id:!0});var Ce=ye(O);Q=Ae(Ce,B),Ce.forEach(V),K=be(L),ee=oe(L,"P",{id:!0});var Re=ye(ee);se=Ae(Re,re),Re.forEach(V),ue=be(L),L.forEach(V),this.h()},h(){Z(g,"id","event"),Z(S,"id","fighters"),Z(O,"id","date"),Z(ee,"id","location"),Z(l,"id","card")},m(H,L){Ie(H,l,L),N(l,g),N(g,d),N(l,c),N(l,S),N(S,I),N(l,a),N(l,O),N(O,Q),N(l,K),N(l,ee),N(ee,se),N(l,ue)},p(H,L){L&1&&n!==(n=H[2].event+"")&&De(d,n),L&1&&m!==(m=H[2].fighters+"")&&De(I,m),L&1&&B!==(B=H[2].date+"")&&De(Q,B),L&1&&re!==(re=H[2].location+"")&&De(se,re)},d(H){H&&V(l)}}}function Et(_){let l,g,n=Ue(_[0]),d=[];for(let c=0;c<n.length;c+=1)d[c]=Ne(He(_,n,c));return{c(){l=ae("div"),g=ae("ol");for(let c=0;c<d.length;c+=1)d[c].c();this.h()},l(c){l=oe(c,"DIV",{id:!0,class:!0});var S=ye(l);g=oe(S,"OL",{id:!0,class:!0});var m=ye(g);for(let I=0;I<d.length;I+=1)d[I].l(m);m.forEach(V),S.forEach(V),this.h()},h(){Z(g,"id","eventsHTML"),Z(g,"class","svelte-zj0h6y"),Z(l,"id","cardsContainer"),Z(l,"class","svelte-zj0h6y")},m(c,S){Ie(c,l,S),N(l,g);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(g,null)},p(c,[S]){if(S&1){n=Ue(c[0]);let m;for(m=0;m<n.length;m+=1){const I=He(c,n,m);d[m]?d[m].p(I,S):(d[m]=Ne(I),d[m].c(),d[m].m(g,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=n.length}},i:We,o:We,d(c){c&&V(l),Ze(d,c)}}}function kt(_,l,g){let n,{data:d}=l;return Ke(()=>{const c=document.getElementById("section1");c&&(c.style.height="300vh");const S=document.getElementById("eventsHTML");S&&(S.style.opacity="0"),S&&(S.style.transition="opacity 0.35s",S.style.opacity="1"),c&&(c.style.height="auto")}),_.$$set=c=>{"data"in c&&g(1,d=c.data)},_.$$.update=()=>{_.$$.dirty&2&&g(0,n=d.data.events)},[n,d]}class bt extends $e{constructor(l){super(),Qe(this,l,kt,Et,Be,{data:1})}}function Ct(_){let l,g,n,d,c="UFC Events",S,m,I,a;return I=new bt({props:{data:_[0]}}),{c(){l=ae("meta"),g=ke(),n=ae("div"),d=ae("h1"),d.textContent=c,m=ke(),Ye(I.$$.fragment),this.h()},l(O){const B=Ge("svelte-17938xx",document.head);l=oe(B,"META",{name:!0,content:!0}),B.forEach(V),g=be(O),n=oe(O,"DIV",{id:!0,class:!0});var Q=ye(n);d=oe(Q,"H1",{class:!0,"data-svelte-h":!0}),et(d)!=="svelte-qqiki"&&(d.textContent=c),m=be(Q),tt(I.$$.fragment,Q),Q.forEach(V),this.h()},h(){document.title="UFC",Z(l,"name","description"),Z(l,"content","About this app"),Z(d,"class","svelte-smh1px"),Z(n,"id","section1"),Z(n,"class","svelte-smh1px")},m(O,B){N(document.head,l),Ie(O,g,B),Ie(O,n,B),N(n,d),N(n,m),rt(I,n,null),a=!0},p(O,[B]){const Q={};B&1&&(Q.data=O[0]),I.$set(Q)},i(O){a||(O&&(S||Ve(()=>{S=at(d,ot,{y:-50,duration:500}),S.start()})),st(I.$$.fragment,O),a=!0)},o(O){nt(I.$$.fragment,O),a=!1},d(O){O&&(V(g),V(n)),V(l),it(I)}}}function Rt(_,l,g){let{data:n}=l;return Ke(async()=>{}),_.$$set=d=>{"data"in d&&g(0,n=d.data)},[n]}class Dt extends $e{constructor(l){super(),Qe(this,l,Rt,Ct,Be,{data:0})}}export{Dt as component,At as universal};

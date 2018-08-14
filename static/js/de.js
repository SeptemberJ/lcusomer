/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(a4,au){var aO=[];
var O=aO.slice;
var ay=aO.concat;
var w=aO.push;
var bT=aO.indexOf;
var ab={};
var x=ab.toString;
var J=ab.hasOwnProperty;
var C={};
var ah="1.11.2",bH=function(e,i){return new bH.fn.init(e,i)
},D=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bR=/^-ms-/,aV=/-([\da-z])/gi,N=function(e,i){return i.toUpperCase()
};
bH.fn=bH.prototype={jquery:ah,constructor:bH,selector:"",length:0,toArray:function(){return O.call(this)
},get:function(e){return e!=null?(e<0?this[e+this.length]:this[e]):O.call(this)
},pushStack:function(e){var i=bH.merge(this.constructor(),e);
i.prevObject=this;
i.context=this.context;
return i
},each:function(i,e){return bH.each(this,i,e)
},map:function(e){return this.pushStack(bH.map(this,function(b6,b5){return e.call(b6,b5,b6)
}))
},slice:function(){return this.pushStack(O.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(b6){var e=this.length,b5=+b6+(b6<0?e:0);
return this.pushStack(b5>=0&&b5<e?[this[b5]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:w,sort:aO.sort,splice:aO.splice};
bH.extend=bH.fn.extend=function(){var e,ca,b5,b6,cd,cb,b9=arguments[0]||{},b8=1,b7=arguments.length,cc=false;
if(typeof b9==="boolean"){cc=b9;
b9=arguments[b8]||{};
b8++
}if(typeof b9!=="object"&&!bH.isFunction(b9)){b9={}
}if(b8===b7){b9=this;
b8--
}for(;
b8<b7;
b8++){if((cd=arguments[b8])!=null){for(b6 in cd){e=b9[b6];
b5=cd[b6];
if(b9===b5){continue
}if(cc&&b5&&(bH.isPlainObject(b5)||(ca=bH.isArray(b5)))){if(ca){ca=false;
cb=e&&bH.isArray(e)?e:[]
}else{cb=e&&bH.isPlainObject(e)?e:{}
}b9[b6]=bH.extend(cc,cb,b5)
}else{if(b5!==undefined){b9[b6]=b5
}}}}}return b9
};
bH.extend({expando:"jQuery"+(ah+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)
},noop:function(){},isFunction:function(e){return bH.type(e)==="function"
},isArray:Array.isArray||function(e){return bH.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !bH.isArray(e)&&(e-parseFloat(e)+1)>=0
},isEmptyObject:function(i){var e;
for(e in i){return false
}return true
},isPlainObject:function(b6){var i;
if(!b6||bH.type(b6)!=="object"||b6.nodeType||bH.isWindow(b6)){return false
}try{if(b6.constructor&&!J.call(b6,"constructor")&&!J.call(b6.constructor.prototype,"isPrototypeOf")){return false
}}catch(b5){return false
}if(C.ownLast){for(i in b6){return J.call(b6,i)
}}for(i in b6){}return i===undefined||J.call(b6,i)
},type:function(e){if(e==null){return e+""
}return typeof e==="object"||typeof e==="function"?ab[x.call(e)]||"object":typeof e
},globalEval:function(e){if(e&&bH.trim(e)){(a4.execScript||function(i){a4["eval"].call(a4,i)
})(e)
}},camelCase:function(e){return e.replace(bR,"ms-").replace(aV,N)
},nodeName:function(i,e){return i.nodeName&&i.nodeName.toLowerCase()===e.toLowerCase()
},each:function(b9,ca,b5){var b8,b6=0,b7=b9.length,e=ac(b9);
if(b5){if(e){for(;
b6<b7;
b6++){b8=ca.apply(b9[b6],b5);
if(b8===false){break
}}}else{for(b6 in b9){b8=ca.apply(b9[b6],b5);
if(b8===false){break
}}}}else{if(e){for(;
b6<b7;
b6++){b8=ca.call(b9[b6],b6,b9[b6]);
if(b8===false){break
}}}else{for(b6 in b9){b8=ca.call(b9[b6],b6,b9[b6]);
if(b8===false){break
}}}}return b9
},trim:function(e){return e==null?"":(e+"").replace(D,"")
},makeArray:function(e,b5){var i=b5||[];
if(e!=null){if(ac(Object(e))){bH.merge(i,typeof e==="string"?[e]:e)
}else{w.call(i,e)
}}return i
},inArray:function(b7,b5,b6){var e;
if(b5){if(bT){return bT.call(b5,b7,b6)
}e=b5.length;
b6=b6?b6<0?Math.max(0,e+b6):b6:0;
for(;
b6<e;
b6++){if(b6 in b5&&b5[b6]===b7){return b6
}}}return -1
},merge:function(b8,b6){var e=+b6.length,b5=0,b7=b8.length;
while(b5<e){b8[b7++]=b6[b5++]
}if(e!==e){while(b6[b5]!==undefined){b8[b7++]=b6[b5++]
}}b8.length=b7;
return b8
},grep:function(e,cb,b8){var ca,b7=[],b5=0,b6=e.length,b9=!b8;
for(;
b5<b6;
b5++){ca=!cb(e[b5],b5);
if(ca!==b9){b7.push(e[b5])
}}return b7
},map:function(b6,cb,e){var ca,b8=0,b9=b6.length,b5=ac(b6),b7=[];
if(b5){for(;
b8<b9;
b8++){ca=cb(b6[b8],b8,e);
if(ca!=null){b7.push(ca)
}}}else{for(b8 in b6){ca=cb(b6[b8],b8,e);
if(ca!=null){b7.push(ca)
}}}return ay.apply([],b7)
},guid:1,proxy:function(b7,b6){var e,b5,i;
if(typeof b6==="string"){i=b7[b6];
b6=b7;
b7=i
}if(!bH.isFunction(b7)){return undefined
}e=O.call(arguments,2);
b5=function(){return b7.apply(b6||this,e.concat(O.call(arguments)))
};
b5.guid=b7.guid=b7.guid||bH.guid++;
return b5
},now:function(){return +(new Date())
},support:C});
bH.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b5,e){ab["[object "+e+"]"]=e.toLowerCase()
});
function ac(b5){var i=b5.length,e=bH.type(b5);
if(e==="function"||bH.isWindow(b5)){return false
}if(b5.nodeType===1&&i){return true
}return e==="array"||i===0||typeof i==="number"&&i>0&&(i-1) in b5
}var m=
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function(dd){var cx,dg,cm,cG,cJ,ch,cV,df,dl,cH,cW,cY,cB,cn,c7,c2,de,cd,cE,c9="sizzle"+1*new Date(),cI=dd.document,dh=0,c3=0,b8=cz(),c8=cz(),cF=cz(),cD=function(i,e){if(i===e){cW=true
}return 0
},cP=1<<31,cN=({}).hasOwnProperty,db=[],dc=db.pop,cL=db.push,b6=db.push,cl=db.slice,cc=function(dp,dn){var dm=0,e=dp.length;
for(;
dm<e;
dm++){if(dp[dm]===dn){return dm
}}return -1
},b7="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",co="[\\x20\\t\\r\\n\\f]",b5="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cK=b5.replace("w","w#"),c5="\\["+co+"*("+b5+")(?:"+co+"*([*^$|!~]?=)"+co+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+cK+"))|)"+co+"*\\]",cj=":("+b5+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+c5+")*)|.*)\\)|)",ct=new RegExp(co+"+","g"),cq=new RegExp("^"+co+"+|((?:^|[^\\\\])(?:\\\\.)*)"+co+"+$","g"),cu=new RegExp("^"+co+"*,"+co+"*"),cA=new RegExp("^"+co+"*([>+~]|"+co+")"+co+"*"),cs=new RegExp("="+co+"*([^\\]'\"]*?)"+co+"*\\]","g"),cR=new RegExp(cj),cT=new RegExp("^"+cK+"$"),c1={ID:new RegExp("^#("+b5+")"),CLASS:new RegExp("^\\.("+b5+")"),TAG:new RegExp("^("+b5.replace("w","w*")+")"),ATTR:new RegExp("^"+c5),PSEUDO:new RegExp("^"+cj),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+co+"*(even|odd|(([+-]|)(\\d*)n|)"+co+"*(?:([+-]|)"+co+"*(\\d+)|))"+co+"*\\)|)","i"),bool:new RegExp("^(?:"+b7+")$","i"),needsContext:new RegExp("^"+co+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+co+"*((?:-\\d)?\\d*)"+co+"*\\)|)(?=[^-]|$)","i")},cb=/^(?:input|select|textarea|button)$/i,ck=/^h\d$/i,cO=/^[^{]+\{\s*\[native \w/,cQ=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,c0=/[+~]/,cM=/'|\\/g,cr=new RegExp("\\\\([\\da-f]{1,6}"+co+"?|("+co+")|.)","ig"),c4=function(e,dn,i){var dm="0x"+dn-65536;
return dm!==dm||i?dn:dm<0?String.fromCharCode(dm+65536):String.fromCharCode(dm>>10|55296,dm&1023|56320)
},dk=function(){cY()
};
try{b6.apply((db=cl.call(cI.childNodes)),cI.childNodes);
db[cI.childNodes.length].nodeType
}catch(cC){b6={apply:db.length?function(i,e){cL.apply(i,cl.call(e))
}:function(dp,dn){var e=dp.length,dm=0;
while((dp[e++]=dn[dm++])){}dp.length=e-1
}}
}function cv(du,dm,dy,dA){var dz,dr,ds,dw,dx,dq,dp,e,dn,dv;
if((dm?dm.ownerDocument||dm:cI)!==cB){cY(dm)
}dm=dm||cB;
dy=dy||[];
dw=dm.nodeType;
if(typeof du!=="string"||!du||dw!==1&&dw!==9&&dw!==11){return dy
}if(!dA&&c7){if(dw!==11&&(dz=cQ.exec(du))){if((ds=dz[1])){if(dw===9){dr=dm.getElementById(ds);
if(dr&&dr.parentNode){if(dr.id===ds){dy.push(dr);
return dy
}}else{return dy
}}else{if(dm.ownerDocument&&(dr=dm.ownerDocument.getElementById(ds))&&cE(dm,dr)&&dr.id===ds){dy.push(dr);
return dy
}}}else{if(dz[2]){b6.apply(dy,dm.getElementsByTagName(du));
return dy
}else{if((ds=dz[3])&&dg.getElementsByClassName){b6.apply(dy,dm.getElementsByClassName(ds));
return dy
}}}}if(dg.qsa&&(!c2||!c2.test(du))){e=dp=c9;
dn=dm;
dv=dw!==1&&du;
if(dw===1&&dm.nodeName.toLowerCase()!=="object"){dq=ch(du);
if((dp=dm.getAttribute("id"))){e=dp.replace(cM,"\\$&")
}else{dm.setAttribute("id",e)
}e="[id='"+e+"'] ";
dx=dq.length;
while(dx--){dq[dx]=e+cg(dq[dx])
}dn=c0.test(du)&&cS(dm.parentNode)||dm;
dv=dq.join(",")
}if(dv){try{b6.apply(dy,dn.querySelectorAll(dv));
return dy
}catch(dt){}finally{if(!dp){dm.removeAttribute("id")
}}}}}return df(du.replace(cq,"$1"),dm,dy,dA)
}function cz(){var i=[];
function e(dm,dn){if(i.push(dm+" ")>cm.cacheLength){delete e[i.shift()]
}return(e[dm+" "]=dn)
}return e
}function ci(e){e[c9]=true;
return e
}function ce(i){var dn=cB.createElement("div");
try{return !!i(dn)
}catch(dm){return false
}finally{if(dn.parentNode){dn.parentNode.removeChild(dn)
}dn=null
}}function di(dm,dp){var e=dm.split("|"),dn=dm.length;
while(dn--){cm.attrHandle[e[dn]]=dp
}}function b9(i,e){var dn=e&&i,dm=dn&&i.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||cP)-(~i.sourceIndex||cP);
if(dm){return dm
}if(dn){while((dn=dn.nextSibling)){if(dn===e){return -1
}}}return i?1:-1
}function cw(e){return function(dm){var i=dm.nodeName.toLowerCase();
return i==="input"&&dm.type===e
}
}function ca(e){return function(dm){var i=dm.nodeName.toLowerCase();
return(i==="input"||i==="button")&&dm.type===e
}
}function c6(e){return ci(function(i){i=+i;
return ci(function(dm,dr){var dp,dn=e([],dm.length,i),dq=dn.length;
while(dq--){if(dm[(dp=dn[dq])]){dm[dp]=!(dr[dp]=dm[dp])
}}})
})
}function cS(e){return e&&typeof e.getElementsByTagName!=="undefined"&&e
}dg=cv.support={};
cJ=cv.isXML=function(e){var i=e&&(e.ownerDocument||e).documentElement;
return i?i.nodeName!=="HTML":false
};
cY=cv.setDocument=function(dm){var e,i,dn=dm?dm.ownerDocument||dm:cI;
if(dn===cB||dn.nodeType!==9||!dn.documentElement){return cB
}cB=dn;
cn=dn.documentElement;
i=dn.defaultView;
if(i&&i!==i.top){if(i.addEventListener){i.addEventListener("unload",dk,false)
}else{if(i.attachEvent){i.attachEvent("onunload",dk)
}}}c7=!cJ(dn);
dg.attributes=ce(function(dp){dp.className="i";
return !dp.getAttribute("className")
});
dg.getElementsByTagName=ce(function(dp){dp.appendChild(dn.createComment(""));
return !dp.getElementsByTagName("*").length
});
dg.getElementsByClassName=cO.test(dn.getElementsByClassName);
dg.getById=ce(function(dp){cn.appendChild(dp).id=c9;
return !dn.getElementsByName||!dn.getElementsByName(c9).length
});
if(dg.getById){cm.find.ID=function(dr,dq){if(typeof dq.getElementById!=="undefined"&&c7){var dp=dq.getElementById(dr);
return dp&&dp.parentNode?[dp]:[]
}};
cm.filter.ID=function(dq){var dp=dq.replace(cr,c4);
return function(dr){return dr.getAttribute("id")===dp
}
}
}else{delete cm.find.ID;
cm.filter.ID=function(dq){var dp=dq.replace(cr,c4);
return function(ds){var dr=typeof ds.getAttributeNode!=="undefined"&&ds.getAttributeNode("id");
return dr&&dr.value===dp
}
}
}cm.find.TAG=dg.getElementsByTagName?function(dp,dq){if(typeof dq.getElementsByTagName!=="undefined"){return dq.getElementsByTagName(dp)
}else{if(dg.qsa){return dq.querySelectorAll(dp)
}}}:function(dp,dt){var du,ds=[],dr=0,dq=dt.getElementsByTagName(dp);
if(dp==="*"){while((du=dq[dr++])){if(du.nodeType===1){ds.push(du)
}}return ds
}return dq
};
cm.find.CLASS=dg.getElementsByClassName&&function(dq,dp){if(c7){return dp.getElementsByClassName(dq)
}};
de=[];
c2=[];
if((dg.qsa=cO.test(dn.querySelectorAll))){ce(function(dp){cn.appendChild(dp).innerHTML="<a id='"+c9+"'></a><select id='"+c9+"-\f]' msallowcapture=''><option selected=''></option></select>";
if(dp.querySelectorAll("[msallowcapture^='']").length){c2.push("[*^$]="+co+"*(?:''|\"\")")
}if(!dp.querySelectorAll("[selected]").length){c2.push("\\["+co+"*(?:value|"+b7+")")
}if(!dp.querySelectorAll("[id~="+c9+"-]").length){c2.push("~=")
}if(!dp.querySelectorAll(":checked").length){c2.push(":checked")
}if(!dp.querySelectorAll("a#"+c9+"+*").length){c2.push(".#.+[+~]")
}});
ce(function(dq){var dp=dn.createElement("input");
dp.setAttribute("type","hidden");
dq.appendChild(dp).setAttribute("name","D");
if(dq.querySelectorAll("[name=d]").length){c2.push("name"+co+"*[*^$|!~]?=")
}if(!dq.querySelectorAll(":enabled").length){c2.push(":enabled",":disabled")
}dq.querySelectorAll("*,:x");
c2.push(",.*:")
})
}if((dg.matchesSelector=cO.test((cd=cn.matches||cn.webkitMatchesSelector||cn.mozMatchesSelector||cn.oMatchesSelector||cn.msMatchesSelector)))){ce(function(dp){dg.disconnectedMatch=cd.call(dp,"div");
cd.call(dp,"[s!='']:x");
de.push("!=",cj)
})
}c2=c2.length&&new RegExp(c2.join("|"));
de=de.length&&new RegExp(de.join("|"));
e=cO.test(cn.compareDocumentPosition);
cE=e||cO.test(cn.contains)?function(dq,dp){var ds=dq.nodeType===9?dq.documentElement:dq,dr=dp&&dp.parentNode;
return dq===dr||!!(dr&&dr.nodeType===1&&(ds.contains?ds.contains(dr):dq.compareDocumentPosition&&dq.compareDocumentPosition(dr)&16))
}:function(dq,dp){if(dp){while((dp=dp.parentNode)){if(dp===dq){return true
}}}return false
};
cD=e?function(dq,dp){if(dq===dp){cW=true;
return 0
}var dr=!dq.compareDocumentPosition-!dp.compareDocumentPosition;
if(dr){return dr
}dr=(dq.ownerDocument||dq)===(dp.ownerDocument||dp)?dq.compareDocumentPosition(dp):1;
if(dr&1||(!dg.sortDetached&&dp.compareDocumentPosition(dq)===dr)){if(dq===dn||dq.ownerDocument===cI&&cE(cI,dq)){return -1
}if(dp===dn||dp.ownerDocument===cI&&cE(cI,dp)){return 1
}return cH?(cc(cH,dq)-cc(cH,dp)):0
}return dr&4?-1:1
}:function(dq,dp){if(dq===dp){cW=true;
return 0
}var dw,dt=0,dv=dq.parentNode,ds=dp.parentNode,dr=[dq],du=[dp];
if(!dv||!ds){return dq===dn?-1:dp===dn?1:dv?-1:ds?1:cH?(cc(cH,dq)-cc(cH,dp)):0
}else{if(dv===ds){return b9(dq,dp)
}}dw=dq;
while((dw=dw.parentNode)){dr.unshift(dw)
}dw=dp;
while((dw=dw.parentNode)){du.unshift(dw)
}while(dr[dt]===du[dt]){dt++
}return dt?b9(dr[dt],du[dt]):dr[dt]===cI?-1:du[dt]===cI?1:0
};
return dn
};
cv.matches=function(i,e){return cv(i,null,null,e)
};
cv.matchesSelector=function(dm,dp){if((dm.ownerDocument||dm)!==cB){cY(dm)
}dp=dp.replace(cs,"='$1']");
if(dg.matchesSelector&&c7&&(!de||!de.test(dp))&&(!c2||!c2.test(dp))){try{var i=cd.call(dm,dp);
if(i||dg.disconnectedMatch||dm.document&&dm.document.nodeType!==11){return i
}}catch(dn){}}return cv(dp,cB,null,[dm]).length>0
};
cv.contains=function(e,i){if((e.ownerDocument||e)!==cB){cY(e)
}return cE(e,i)
};
cv.attr=function(dm,e){if((dm.ownerDocument||dm)!==cB){cY(dm)
}var i=cm.attrHandle[e.toLowerCase()],dn=i&&cN.call(cm.attrHandle,e.toLowerCase())?i(dm,e,!c7):undefined;
return dn!==undefined?dn:dg.attributes||!c7?dm.getAttribute(e):(dn=dm.getAttributeNode(e))&&dn.specified?dn.value:null
};
cv.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
cv.uniqueSort=function(dn){var dp,dq=[],e=0,dm=0;
cW=!dg.detectDuplicates;
cH=!dg.sortStable&&dn.slice(0);
dn.sort(cD);
if(cW){while((dp=dn[dm++])){if(dp===dn[dm]){e=dq.push(dm)
}}while(e--){dn.splice(dq[e],1)
}}cH=null;
return dn
};
cG=cv.getText=function(dq){var dp,dm="",dn=0,e=dq.nodeType;
if(!e){while((dp=dq[dn++])){dm+=cG(dp)
}}else{if(e===1||e===9||e===11){if(typeof dq.textContent==="string"){return dq.textContent
}else{for(dq=dq.firstChild;
dq;
dq=dq.nextSibling){dm+=cG(dq)
}}}else{if(e===3||e===4){return dq.nodeValue
}}}return dm
};
cm=cv.selectors={cacheLength:50,createPseudo:ci,match:c1,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cr,c4);
e[3]=(e[3]||e[4]||e[5]||"").replace(cr,c4);
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1].slice(0,3)==="nth"){if(!e[3]){cv.error(e[0])
}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));
e[5]=+((e[7]+e[8])||e[3]==="odd")
}else{if(e[3]){cv.error(e[0])
}}return e
},PSEUDO:function(i){var e,dm=!i[6]&&i[2];
if(c1.CHILD.test(i[0])){return null
}if(i[3]){i[2]=i[4]||i[5]||""
}else{if(dm&&cR.test(dm)&&(e=ch(dm,true))&&(e=dm.indexOf(")",dm.length-e)-dm.length)){i[0]=i[0].slice(0,e);
i[2]=dm.slice(0,e)
}}return i.slice(0,3)
}},filter:{TAG:function(i){var e=i.replace(cr,c4).toLowerCase();
return i==="*"?function(){return true
}:function(dm){return dm.nodeName&&dm.nodeName.toLowerCase()===e
}
},CLASS:function(e){var i=b8[e+" "];
return i||(i=new RegExp("(^|"+co+")"+e+"("+co+"|$)"))&&b8(e,function(dm){return i.test(typeof dm.className==="string"&&dm.className||typeof dm.getAttribute!=="undefined"&&dm.getAttribute("class")||"")
})
},ATTR:function(dm,i,e){return function(dp){var dn=cv.attr(dp,dm);
if(dn==null){return i==="!="
}if(!i){return true
}dn+="";
return i==="="?dn===e:i==="!="?dn!==e:i==="^="?e&&dn.indexOf(e)===0:i==="*="?e&&dn.indexOf(e)>-1:i==="$="?e&&dn.slice(-e.length)===e:i==="~="?(" "+dn.replace(ct," ")+" ").indexOf(e)>-1:i==="|="?dn===e||dn.slice(0,e.length+1)===e+"-":false
}
},CHILD:function(i,dp,dn,dq,dm){var ds=i.slice(0,3)!=="nth",e=i.slice(-4)!=="last",dr=dp==="of-type";
return dq===1&&dm===0?function(dt){return !!dt.parentNode
}:function(dz,dx,dC){var dt,dF,dA,dE,dB,dw,dy=ds!==e?"nextSibling":"previousSibling",dD=dz.parentNode,dv=dr&&dz.nodeName.toLowerCase(),du=!dC&&!dr;
if(dD){if(ds){while(dy){dA=dz;
while((dA=dA[dy])){if(dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1){return false
}}dw=dy=i==="only"&&!dw&&"nextSibling"
}return true
}dw=[e?dD.firstChild:dD.lastChild];
if(e&&du){dF=dD[c9]||(dD[c9]={});
dt=dF[i]||[];
dB=dt[0]===dh&&dt[1];
dE=dt[0]===dh&&dt[2];
dA=dB&&dD.childNodes[dB];
while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if(dA.nodeType===1&&++dE&&dA===dz){dF[i]=[dh,dB,dE];
break
}}}else{if(du&&(dt=(dz[c9]||(dz[c9]={}))[i])&&dt[0]===dh){dE=dt[1]
}else{while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if((dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1)&&++dE){if(du){(dA[c9]||(dA[c9]={}))[i]=[dh,dE]
}if(dA===dz){break
}}}}}dE-=dm;
return dE===dq||(dE%dq===0&&dE/dq>=0)
}}
},PSEUDO:function(dn,dm){var e,i=cm.pseudos[dn]||cm.setFilters[dn.toLowerCase()]||cv.error("unsupported pseudo: "+dn);
if(i[c9]){return i(dm)
}if(i.length>1){e=[dn,dn,"",dm];
return cm.setFilters.hasOwnProperty(dn.toLowerCase())?ci(function(dr,dt){var dq,dp=i(dr,dm),ds=dp.length;
while(ds--){dq=cc(dr,dp[ds]);
dr[dq]=!(dt[dq]=dp[ds])
}}):function(dp){return i(dp,0,e)
}
}return i
}},pseudos:{not:ci(function(e){var i=[],dm=[],dn=cV(e.replace(cq,"$1"));
return dn[c9]?ci(function(dq,dv,dt,dr){var du,dp=dn(dq,null,dr,[]),ds=dq.length;
while(ds--){if((du=dp[ds])){dq[ds]=!(dv[ds]=du)
}}}):function(dr,dq,dp){i[0]=dr;
dn(i,null,dp,dm);
i[0]=null;
return !dm.pop()
}
}),has:ci(function(e){return function(i){return cv(e,i).length>0
}
}),contains:ci(function(e){e=e.replace(cr,c4);
return function(i){return(i.textContent||i.innerText||cG(i)).indexOf(e)>-1
}
}),lang:ci(function(e){if(!cT.test(e||"")){cv.error("unsupported lang: "+e)
}e=e.replace(cr,c4).toLowerCase();
return function(dm){var i;
do{if((i=c7?dm.lang:dm.getAttribute("xml:lang")||dm.getAttribute("lang"))){i=i.toLowerCase();
return i===e||i.indexOf(e+"-")===0
}}while((dm=dm.parentNode)&&dm.nodeType===1);
return false
}
}),target:function(e){var i=dd.location&&dd.location.hash;
return i&&i.slice(1)===e.id
},root:function(e){return e===cn
},focus:function(e){return e===cB.activeElement&&(!cB.hasFocus||cB.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var i=e.nodeName.toLowerCase();
return(i==="input"&&!!e.checked)||(i==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeType<6){return false
}}return true
},parent:function(e){return !cm.pseudos.empty(e)
},header:function(e){return ck.test(e.nodeName)
},input:function(e){return cb.test(e.nodeName)
},button:function(i){var e=i.nodeName.toLowerCase();
return e==="input"&&i.type==="button"||e==="button"
},text:function(i){var e;
return i.nodeName.toLowerCase()==="input"&&i.type==="text"&&((e=i.getAttribute("type"))==null||e.toLowerCase()==="text")
},first:c6(function(){return[0]
}),last:c6(function(e,i){return[i-1]
}),eq:c6(function(e,dm,i){return[i<0?i+dm:i]
}),even:c6(function(e,dn){var dm=0;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),odd:c6(function(e,dn){var dm=1;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),lt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
--dm>=0;
){e.push(dm)
}return e
}),gt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
++dm<dp;
){e.push(dm)
}return e
})}};
cm.pseudos.nth=cm.pseudos.eq;
for(cx in {radio:true,checkbox:true,file:true,password:true,image:true}){cm.pseudos[cx]=cw(cx)
}for(cx in {submit:true,reset:true}){cm.pseudos[cx]=ca(cx)
}function cU(){}cU.prototype=cm.filters=cm.pseudos;
cm.setFilters=new cU();
ch=cv.tokenize=function(dp,du){var i,dq,ds,dt,dr,dm,e,dn=c8[dp+" "];
if(dn){return du?0:dn.slice(0)
}dr=dp;
dm=[];
e=cm.preFilter;
while(dr){if(!i||(dq=cu.exec(dr))){if(dq){dr=dr.slice(dq[0].length)||dr
}dm.push((ds=[]))
}i=false;
if((dq=cA.exec(dr))){i=dq.shift();
ds.push({value:i,type:dq[0].replace(cq," ")});
dr=dr.slice(i.length)
}for(dt in cm.filter){if((dq=c1[dt].exec(dr))&&(!e[dt]||(dq=e[dt](dq)))){i=dq.shift();
ds.push({value:i,type:dt,matches:dq});
dr=dr.slice(i.length)
}}if(!i){break
}}return du?dr.length:dr?cv.error(dp):c8(dp,dm).slice(0)
};
function cg(dp){var dn=0,dm=dp.length,e="";
for(;
dn<dm;
dn++){e+=dp[dn].value
}return e
}function cp(dp,dm,dn){var e=dm.dir,dq=dn&&e==="parentNode",i=c3++;
return dm.first?function(dt,ds,dr){while((dt=dt[e])){if(dt.nodeType===1||dq){return dp(dt,ds,dr)
}}}:function(dv,dt,ds){var dw,du,dr=[dh,i];
if(ds){while((dv=dv[e])){if(dv.nodeType===1||dq){if(dp(dv,dt,ds)){return true
}}}}else{while((dv=dv[e])){if(dv.nodeType===1||dq){du=dv[c9]||(dv[c9]={});
if((dw=du[e])&&dw[0]===dh&&dw[1]===i){return(dr[2]=dw[2])
}else{du[e]=dr;
if((dr[2]=dp(dv,dt,ds))){return true
}}}}}}
}function dj(e){return e.length>1?function(dq,dp,dm){var dn=e.length;
while(dn--){if(!e[dn](dq,dp,dm)){return false
}}return true
}:e[0]
}function cy(dm,dq,dp){var dn=0,e=dq.length;
for(;
dn<e;
dn++){cv(dm,dq[dn],dp)
}return dp
}function cZ(e,dm,dn,dp,ds){var dq,dv=[],dr=0,dt=e.length,du=dm!=null;
for(;
dr<dt;
dr++){if((dq=e[dr])){if(!dn||dn(dq,dp,ds)){dv.push(dq);
if(du){dm.push(dr)
}}}}return dv
}function cf(dm,i,dp,dn,dq,e){if(dn&&!dn[c9]){dn=cf(dn)
}if(dq&&!dq[c9]){dq=cf(dq,e)
}return ci(function(dB,dy,dt,dA){var dD,dz,dv,du=[],dC=[],ds=dy.length,dr=dB||cy(i||"*",dt.nodeType?[dt]:dt,[]),dw=dm&&(dB||!i)?cZ(dr,du,dm,dt,dA):dr,dx=dp?dq||(dB?dm:ds||dn)?[]:dy:dw;
if(dp){dp(dw,dx,dt,dA)
}if(dn){dD=cZ(dx,dC);
dn(dD,[],dt,dA);
dz=dD.length;
while(dz--){if((dv=dD[dz])){dx[dC[dz]]=!(dw[dC[dz]]=dv)
}}}if(dB){if(dq||dm){if(dq){dD=[];
dz=dx.length;
while(dz--){if((dv=dx[dz])){dD.push((dw[dz]=dv))
}}dq(null,(dx=[]),dD,dA)
}dz=dx.length;
while(dz--){if((dv=dx[dz])&&(dD=dq?cc(dB,dv):du[dz])>-1){dB[dD]=!(dy[dD]=dv)
}}}}else{dx=cZ(dx===dy?dx.splice(ds,dx.length):dx);
if(dq){dq(null,dy,dx,dA)
}else{b6.apply(dy,dx)
}}})
}function da(ds){var dm,dq,dn,dr=ds.length,dv=cm.relative[ds[0].type],dw=dv||cm.relative[" "],dp=dv?1:0,dt=cp(function(i){return i===dm
},dw,true),du=cp(function(i){return cc(dm,i)>-1
},dw,true),e=[function(dz,dy,dx){var i=(!dv&&(dx||dy!==dl))||((dm=dy).nodeType?dt(dz,dy,dx):du(dz,dy,dx));
dm=null;
return i
}];
for(;
dp<dr;
dp++){if((dq=cm.relative[ds[dp].type])){e=[cp(dj(e),dq)]
}else{dq=cm.filter[ds[dp].type].apply(null,ds[dp].matches);
if(dq[c9]){dn=++dp;
for(;
dn<dr;
dn++){if(cm.relative[ds[dn].type]){break
}}return cf(dp>1&&dj(e),dp>1&&cg(ds.slice(0,dp-1).concat({value:ds[dp-2].type===" "?"*":""})).replace(cq,"$1"),dq,dp<dn&&da(ds.slice(dp,dn)),dn<dr&&da((ds=ds.slice(dn))),dn<dr&&cg(ds))
}e.push(dq)
}}return dj(e)
}function cX(dn,dm){var e=dm.length>0,dp=dn.length>0,i=function(dz,dt,dy,dx,dC){var du,dv,dA,dE=0,dw="0",dq=dz&&[],dF=[],dD=dl,ds=dz||dp&&cm.find.TAG("*",dC),dr=(dh+=dD==null?1:Math.random()||0.1),dB=ds.length;
if(dC){dl=dt!==cB&&dt
}for(;
dw!==dB&&(du=ds[dw])!=null;
dw++){if(dp&&du){dv=0;
while((dA=dn[dv++])){if(dA(du,dt,dy)){dx.push(du);
break
}}if(dC){dh=dr
}}if(e){if((du=!dA&&du)){dE--
}if(dz){dq.push(du)
}}}dE+=dw;
if(e&&dw!==dE){dv=0;
while((dA=dm[dv++])){dA(dq,dF,dt,dy)
}if(dz){if(dE>0){while(dw--){if(!(dq[dw]||dF[dw])){dF[dw]=dc.call(dx)
}}}dF=cZ(dF)
}b6.apply(dx,dF);
if(dC&&!dz&&dF.length>0&&(dE+dm.length)>1){cv.uniqueSort(dx)
}}if(dC){dh=dr;
dl=dD
}return dq
};
return e?ci(i):i
}cV=cv.compile=function(e,dn){var dp,dm=[],dr=[],dq=cF[e+" "];
if(!dq){if(!dn){dn=ch(e)
}dp=dn.length;
while(dp--){dq=da(dn[dp]);
if(dq[c9]){dm.push(dq)
}else{dr.push(dq)
}}dq=cF(e,cX(dr,dm));
dq.selector=e
}return dq
};
df=cv.select=function(dn,e,dp,ds){var dq,dv,dm,dw,dt,du=typeof dn==="function"&&dn,dr=!ds&&ch((dn=du.selector||dn));
dp=dp||[];
if(dr.length===1){dv=dr[0]=dr[0].slice(0);
if(dv.length>2&&(dm=dv[0]).type==="ID"&&dg.getById&&e.nodeType===9&&c7&&cm.relative[dv[1].type]){e=(cm.find.ID(dm.matches[0].replace(cr,c4),e)||[])[0];
if(!e){return dp
}else{if(du){e=e.parentNode
}}dn=dn.slice(dv.shift().value.length)
}dq=c1.needsContext.test(dn)?0:dv.length;
while(dq--){dm=dv[dq];
if(cm.relative[(dw=dm.type)]){break
}if((dt=cm.find[dw])){if((ds=dt(dm.matches[0].replace(cr,c4),c0.test(dv[0].type)&&cS(e.parentNode)||e))){dv.splice(dq,1);
dn=ds.length&&cg(dv);
if(!dn){b6.apply(dp,ds);
return dp
}break
}}}}(du||cV(dn,dr))(ds,e,!c7,dp,c0.test(dn)&&cS(e.parentNode)||e);
return dp
};
dg.sortStable=c9.split("").sort(cD).join("")===c9;
dg.detectDuplicates=!!cW;
cY();
dg.sortDetached=ce(function(e){return e.compareDocumentPosition(cB.createElement("div"))&1
});
if(!ce(function(e){e.innerHTML="<a href='#'></a>";
return e.firstChild.getAttribute("href")==="#"
})){di("type|href|height|width",function(i,e,dm){if(!dm){return i.getAttribute(e,e.toLowerCase()==="type"?1:2)
}})
}if(!dg.attributes||!ce(function(e){e.innerHTML="<input/>";
e.firstChild.setAttribute("value","");
return e.firstChild.getAttribute("value")===""
})){di("value",function(i,e,dm){if(!dm&&i.nodeName.toLowerCase()==="input"){return i.defaultValue
}})
}if(!ce(function(e){return e.getAttribute("disabled")==null
})){di(b7,function(i,e,dn){var dm;
if(!dn){return i[e]===true?e.toLowerCase():(dm=i.getAttributeNode(e))&&dm.specified?dm.value:null
}})
}return cv
})(a4);
bH.find=m;
bH.expr=m.selectors;
bH.expr[":"]=bH.expr.pseudos;
bH.unique=m.uniqueSort;
bH.text=m.getText;
bH.isXMLDoc=m.isXML;
bH.contains=m.contains;
var z=bH.expr.match.needsContext;
var a=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var aK=/^.[^:#\[\.,]*$/;
function aQ(b5,e,i){if(bH.isFunction(e)){return bH.grep(b5,function(b7,b6){return !!e.call(b7,b6,b7)!==i
})
}if(e.nodeType){return bH.grep(b5,function(b6){return(b6===e)!==i
})
}if(typeof e==="string"){if(aK.test(e)){return bH.filter(e,b5,i)
}e=bH.filter(e,b5)
}return bH.grep(b5,function(b6){return(bH.inArray(b6,e)>=0)!==i
})
}bH.filter=function(b6,e,b5){var i=e[0];
if(b5){b6=":not("+b6+")"
}return e.length===1&&i.nodeType===1?bH.find.matchesSelector(i,b6)?[i]:[]:bH.find.matches(b6,bH.grep(e,function(b7){return b7.nodeType===1
}))
};
bH.fn.extend({find:function(b5){var b8,b7=[],b6=this,e=b6.length;
if(typeof b5!=="string"){return this.pushStack(bH(b5).filter(function(){for(b8=0;
b8<e;
b8++){if(bH.contains(b6[b8],this)){return true
}}}))
}for(b8=0;
b8<e;
b8++){bH.find(b5,b6[b8],b7)
}b7=this.pushStack(e>1?bH.unique(b7):b7);
b7.selector=this.selector?this.selector+" "+b5:b5;
return b7
},filter:function(e){return this.pushStack(aQ(this,e||[],false))
},not:function(e){return this.pushStack(aQ(this,e||[],true))
},is:function(e){return !!aQ(this,typeof e==="string"&&z.test(e)?bH(e):e||[],false).length
}});
var y,n=a4.document,bs=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,bU=bH.fn.init=function(e,b5){var i,b6;
if(!e){return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){i=[null,e,null]
}else{i=bs.exec(e)
}if(i&&(i[1]||!b5)){if(i[1]){b5=b5 instanceof bH?b5[0]:b5;
bH.merge(this,bH.parseHTML(i[1],b5&&b5.nodeType?b5.ownerDocument||b5:n,true));
if(a.test(i[1])&&bH.isPlainObject(b5)){for(i in b5){if(bH.isFunction(this[i])){this[i](b5[i])
}else{this.attr(i,b5[i])
}}}return this
}else{b6=n.getElementById(i[2]);
if(b6&&b6.parentNode){if(b6.id!==i[2]){return y.find(e)
}this.length=1;
this[0]=b6
}this.context=n;
this.selector=e;
return this
}}else{if(!b5||b5.jquery){return(b5||y).find(e)
}else{return this.constructor(b5).find(e)
}}}else{if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}else{if(bH.isFunction(e)){return typeof y.ready!=="undefined"?y.ready(e):e(bH)
}}}if(e.selector!==undefined){this.selector=e.selector;
this.context=e.context
}return bH.makeArray(e,this)
};
bU.prototype=bH.fn;
y=bH(n);
var bu=/^(?:parents|prev(?:Until|All))/,by={children:true,contents:true,next:true,prev:true};
bH.extend({dir:function(b5,i,b7){var e=[],b6=b5[i];
while(b6&&b6.nodeType!==9&&(b7===undefined||b6.nodeType!==1||!bH(b6).is(b7))){if(b6.nodeType===1){e.push(b6)
}b6=b6[i]
}return e
},sibling:function(b5,i){var e=[];
for(;
b5;
b5=b5.nextSibling){if(b5.nodeType===1&&b5!==i){e.push(b5)
}}return e
}});
bH.fn.extend({has:function(b7){var b6,b5=bH(b7,this),e=b5.length;
return this.filter(function(){for(b6=0;
b6<e;
b6++){if(bH.contains(this,b5[b6])){return true
}}})
},closest:function(b8,b7){var b9,b6=0,b5=this.length,e=[],ca=z.test(b8)||typeof b8!=="string"?bH(b8,b7||this.context):0;
for(;
b6<b5;
b6++){for(b9=this[b6];
b9&&b9!==b7;
b9=b9.parentNode){if(b9.nodeType<11&&(ca?ca.index(b9)>-1:b9.nodeType===1&&bH.find.matchesSelector(b9,b8))){e.push(b9);
break
}}}return this.pushStack(e.length>1?bH.unique(e):e)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof e==="string"){return bH.inArray(this[0],bH(e))
}return bH.inArray(e.jquery?e[0]:e,this)
},add:function(e,i){return this.pushStack(bH.unique(bH.merge(this.get(),bH(e,i))))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
function aX(i,e){do{i=i[e]
}while(i&&i.nodeType!==1);
return i
}bH.each({parent:function(i){var e=i.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bH.dir(e,"parentNode")
},parentsUntil:function(b5,e,b6){return bH.dir(b5,"parentNode",b6)
},next:function(e){return aX(e,"nextSibling")
},prev:function(e){return aX(e,"previousSibling")
},nextAll:function(e){return bH.dir(e,"nextSibling")
},prevAll:function(e){return bH.dir(e,"previousSibling")
},nextUntil:function(b5,e,b6){return bH.dir(b5,"nextSibling",b6)
},prevUntil:function(b5,e,b6){return bH.dir(b5,"previousSibling",b6)
},siblings:function(e){return bH.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bH.sibling(e.firstChild)
},contents:function(e){return bH.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bH.merge([],e.childNodes)
}},function(e,i){bH.fn[e]=function(b7,b5){var b6=bH.map(this,i,b7);
if(e.slice(-5)!=="Until"){b5=b7
}if(b5&&typeof b5==="string"){b6=bH.filter(b5,b6)
}if(this.length>1){if(!by[e]){b6=bH.unique(b6)
}if(bu.test(e)){b6=b6.reverse()
}}return this.pushStack(b6)
}
});
var aE=(/\S+/g);
var b1={};
function ae(i){var e=b1[i]={};
bH.each(i.match(aE)||[],function(b6,b5){e[b5]=true
});
return e
}bH.Callbacks=function(cd){cd=typeof cd==="string"?(b1[cd]||ae(cd)):bH.extend({},cd);
var b7,b6,e,b8,b9,b5,ca=[],cb=!cd.once&&[],i=function(ce){b6=cd.memory&&ce;
e=true;
b9=b5||0;
b5=0;
b8=ca.length;
b7=true;
for(;
ca&&b9<b8;
b9++){if(ca[b9].apply(ce[0],ce[1])===false&&cd.stopOnFalse){b6=false;
break
}}b7=false;
if(ca){if(cb){if(cb.length){i(cb.shift())
}}else{if(b6){ca=[]
}else{cc.disable()
}}}},cc={add:function(){if(ca){var cf=ca.length;
(function ce(cg){bH.each(cg,function(ci,ch){var cj=bH.type(ch);
if(cj==="function"){if(!cd.unique||!cc.has(ch)){ca.push(ch)
}}else{if(ch&&ch.length&&cj!=="string"){ce(ch)
}}})
})(arguments);
if(b7){b8=ca.length
}else{if(b6){b5=cf;
i(b6)
}}}return this
},remove:function(){if(ca){bH.each(arguments,function(cg,ce){var cf;
while((cf=bH.inArray(ce,ca,cf))>-1){ca.splice(cf,1);
if(b7){if(cf<=b8){b8--
}if(cf<=b9){b9--
}}}})
}return this
},has:function(ce){return ce?bH.inArray(ce,ca)>-1:!!(ca&&ca.length)
},empty:function(){ca=[];
b8=0;
return this
},disable:function(){ca=cb=b6=undefined;
return this
},disabled:function(){return !ca
},lock:function(){cb=undefined;
if(!b6){cc.disable()
}return this
},locked:function(){return !cb
},fireWith:function(cf,ce){if(ca&&(!e||cb)){ce=ce||[];
ce=[cf,ce.slice?ce.slice():ce];
if(b7){cb.push(ce)
}else{i(ce)
}}return this
},fire:function(){cc.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return cc
};
bH.extend({Deferred:function(b5){var i=[["resolve","done",bH.Callbacks("once memory"),"resolved"],["reject","fail",bH.Callbacks("once memory"),"rejected"],["notify","progress",bH.Callbacks("memory")]],b6="pending",b7={state:function(){return b6
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b8=arguments;
return bH.Deferred(function(b9){bH.each(i,function(cb,ca){var cc=bH.isFunction(b8[cb])&&b8[cb];
e[ca[1]](function(){var cd=cc&&cc.apply(this,arguments);
if(cd&&bH.isFunction(cd.promise)){cd.promise().done(b9.resolve).fail(b9.reject).progress(b9.notify)
}else{b9[ca[0]+"With"](this===b7?b9.promise():this,cc?[cd]:arguments)
}})
});
b8=null
}).promise()
},promise:function(b8){return b8!=null?bH.extend(b8,b7):b7
}},e={};
b7.pipe=b7.then;
bH.each(i,function(b9,b8){var cb=b8[2],ca=b8[3];
b7[b8[1]]=cb.add;
if(ca){cb.add(function(){b6=ca
},i[b9^1][2].disable,i[2][2].lock)
}e[b8[0]]=function(){e[b8[0]+"With"](this===e?b7:this,arguments);
return this
};
e[b8[0]+"With"]=cb.fireWith
});
b7.promise(e);
if(b5){b5.call(e,e)
}return e
},when:function(b8){var b6=0,ca=O.call(arguments),e=ca.length,b5=e!==1||(b8&&bH.isFunction(b8.promise))?e:0,cd=b5===1?b8:bH.Deferred(),b7=function(cf,cg,ce){return function(i){cg[cf]=this;
ce[cf]=arguments.length>1?O.call(arguments):i;
if(ce===cc){cd.notifyWith(cg,ce)
}else{if(!(--b5)){cd.resolveWith(cg,ce)
}}}
},cc,b9,cb;
if(e>1){cc=new Array(e);
b9=new Array(e);
cb=new Array(e);
for(;
b6<e;
b6++){if(ca[b6]&&bH.isFunction(ca[b6].promise)){ca[b6].promise().done(b7(b6,cb,ca)).fail(cd.reject).progress(b7(b6,b9,cc))
}else{--b5
}}}if(!b5){cd.resolveWith(cb,ca)
}return cd.promise()
}});
var aj;
bH.fn.ready=function(e){bH.ready.promise().done(e);
return this
};
bH.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){bH.readyWait++
}else{bH.ready(true)
}},ready:function(e){if(e===true?--bH.readyWait:bH.isReady){return
}if(!n.body){return setTimeout(bH.ready)
}bH.isReady=true;
if(e!==true&&--bH.readyWait>0){return
}aj.resolveWith(n,[bH]);
if(bH.fn.triggerHandler){bH(n).triggerHandler("ready");
bH(n).off("ready")
}}});
function bl(){if(n.addEventListener){n.removeEventListener("DOMContentLoaded",bY,false);
a4.removeEventListener("load",bY,false)
}else{n.detachEvent("onreadystatechange",bY);
a4.detachEvent("onload",bY)
}}function bY(){if(n.addEventListener||event.type==="load"||n.readyState==="complete"){bl();
bH.ready()
}}bH.ready.promise=function(b7){if(!aj){aj=bH.Deferred();
if(n.readyState==="complete"){setTimeout(bH.ready)
}else{if(n.addEventListener){n.addEventListener("DOMContentLoaded",bY,false);
a4.addEventListener("load",bY,false)
}else{n.attachEvent("onreadystatechange",bY);
a4.attachEvent("onload",bY);
var b6=false;
try{b6=a4.frameElement==null&&n.documentElement
}catch(b5){}if(b6&&b6.doScroll){(function i(){if(!bH.isReady){try{b6.doScroll("left")
}catch(b8){return setTimeout(i,50)
}bl();
bH.ready()
}})()
}}}}return aj.promise(b7)
};
var aB=typeof undefined;
var bg;
for(bg in bH(C)){break
}C.ownLast=bg!=="0";
C.inlineBlockNeedsLayout=false;
bH(function(){var b5,b6,e,i;
e=n.getElementsByTagName("body")[0];
if(!e||!e.style){return
}b6=n.createElement("div");
i=n.createElement("div");
i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
e.appendChild(i).appendChild(b6);
if(typeof b6.style.zoom!==aB){b6.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
C.inlineBlockNeedsLayout=b5=b6.offsetWidth===3;
if(b5){e.style.zoom=1
}}e.removeChild(i)
});
(function(){var b5=n.createElement("div");
if(C.deleteExpando==null){C.deleteExpando=true;
try{delete b5.test
}catch(i){C.deleteExpando=false
}}b5=null
})();
bH.acceptData=function(b5){var i=bH.noData[(b5.nodeName+" ").toLowerCase()],e=+b5.nodeType||1;
return e!==1&&e!==9?false:!i||i!==true&&b5.getAttribute("classid")===i
};
var bx=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aP=/([A-Z])/g;
function bz(b6,b5,b7){if(b7===undefined&&b6.nodeType===1){var i="data-"+b5.replace(aP,"-$1").toLowerCase();
b7=b6.getAttribute(i);
if(typeof b7==="string"){try{b7=b7==="true"?true:b7==="false"?false:b7==="null"?null:+b7+""===b7?+b7:bx.test(b7)?bH.parseJSON(b7):b7
}catch(b8){}bH.data(b6,b5,b7)
}else{b7=undefined
}}return b7
}function P(i){var e;
for(e in i){if(e==="data"&&bH.isEmptyObject(i[e])){continue
}if(e!=="toJSON"){return false
}}return true
}function bb(b6,i,b8,b7){if(!bH.acceptData(b6)){return
}var ca,b9,cb=bH.expando,cc=b6.nodeType,e=cc?bH.cache:b6,b5=cc?b6[cb]:b6[cb]&&cb;
if((!b5||!e[b5]||(!b7&&!e[b5].data))&&b8===undefined&&typeof i==="string"){return
}if(!b5){if(cc){b5=b6[cb]=aO.pop()||bH.guid++
}else{b5=cb
}}if(!e[b5]){e[b5]=cc?{}:{toJSON:bH.noop}
}if(typeof i==="object"||typeof i==="function"){if(b7){e[b5]=bH.extend(e[b5],i)
}else{e[b5].data=bH.extend(e[b5].data,i)
}}b9=e[b5];
if(!b7){if(!b9.data){b9.data={}
}b9=b9.data
}if(b8!==undefined){b9[bH.camelCase(i)]=b8
}if(typeof i==="string"){ca=b9[i];
if(ca==null){ca=b9[bH.camelCase(i)]
}}else{ca=b9
}return ca
}function aa(b8,b6,e){if(!bH.acceptData(b8)){return
}var ca,b7,b9=b8.nodeType,b5=b9?bH.cache:b8,cb=b9?b8[bH.expando]:bH.expando;
if(!b5[cb]){return
}if(b6){ca=e?b5[cb]:b5[cb].data;
if(ca){if(!bH.isArray(b6)){if(b6 in ca){b6=[b6]
}else{b6=bH.camelCase(b6);
if(b6 in ca){b6=[b6]
}else{b6=b6.split(" ")
}}}else{b6=b6.concat(bH.map(b6,bH.camelCase))
}b7=b6.length;
while(b7--){delete ca[b6[b7]]
}if(e?!P(ca):!bH.isEmptyObject(ca)){return
}}}if(!e){delete b5[cb].data;
if(!P(b5[cb])){return
}}if(b9){bH.cleanData([b8],true)
}else{if(C.deleteExpando||b5!=b5.window){delete b5[cb]
}else{b5[cb]=null
}}}bH.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){e=e.nodeType?bH.cache[e[bH.expando]]:e[bH.expando];
return !!e&&!P(e)
},data:function(i,e,b5){return bb(i,e,b5)
},removeData:function(i,e){return aa(i,e)
},_data:function(i,e,b5){return bb(i,e,b5,true)
},_removeData:function(i,e){return aa(i,e,true)
}});
bH.fn.extend({data:function(b7,ca){var b6,b5,b9,b8=this[0],e=b8&&b8.attributes;
if(b7===undefined){if(this.length){b9=bH.data(b8);
if(b8.nodeType===1&&!bH._data(b8,"parsedAttrs")){b6=e.length;
while(b6--){if(e[b6]){b5=e[b6].name;
if(b5.indexOf("data-")===0){b5=bH.camelCase(b5.slice(5));
bz(b8,b5,b9[b5])
}}}bH._data(b8,"parsedAttrs",true)
}}return b9
}if(typeof b7==="object"){return this.each(function(){bH.data(this,b7)
})
}return arguments.length>1?this.each(function(){bH.data(this,b7,ca)
}):b8?bz(b8,b7,bH.data(b8,b7)):undefined
},removeData:function(e){return this.each(function(){bH.removeData(this,e)
})
}});
bH.extend({queue:function(b5,i,b6){var e;
if(b5){i=(i||"fx")+"queue";
e=bH._data(b5,i);
if(b6){if(!e||bH.isArray(b6)){e=bH._data(b5,i,bH.makeArray(b6))
}else{e.push(b6)
}}return e||[]
}},dequeue:function(b8,b7){b7=b7||"fx";
var i=bH.queue(b8,b7),b9=i.length,b6=i.shift(),e=bH._queueHooks(b8,b7),b5=function(){bH.dequeue(b8,b7)
};
if(b6==="inprogress"){b6=i.shift();
b9--
}if(b6){if(b7==="fx"){i.unshift("inprogress")
}delete e.stop;
b6.call(b8,b5,e)
}if(!b9&&e){e.empty.fire()
}},_queueHooks:function(b5,i){var e=i+"queueHooks";
return bH._data(b5,e)||bH._data(b5,e,{empty:bH.Callbacks("once memory").add(function(){bH._removeData(b5,i+"queue");
bH._removeData(b5,e)
})})
}});
bH.fn.extend({queue:function(e,i){var b5=2;
if(typeof e!=="string"){i=e;
e="fx";
b5--
}if(arguments.length<b5){return bH.queue(this[0],e)
}return i===undefined?this:this.each(function(){var b6=bH.queue(this,e,i);
bH._queueHooks(this,e);
if(e==="fx"&&b6[0]!=="inprogress"){bH.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bH.dequeue(this,e)
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b6,ca){var b5,b7=1,cb=bH.Deferred(),b9=this,e=this.length,b8=function(){if(!(--b7)){cb.resolveWith(b9,[b9])
}};
if(typeof b6!=="string"){ca=b6;
b6=undefined
}b6=b6||"fx";
while(e--){b5=bH._data(b9[e],b6+"queueHooks");
if(b5&&b5.empty){b7++;
b5.empty.add(b8)
}}b8();
return cb.promise(ca)
}});
var aD=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var bS=["Top","Right","Bottom","Left"];
var R=function(i,e){i=e||i;
return bH.css(i,"display")==="none"||!bH.contains(i.ownerDocument,i)
};
var aA=bH.access=function(e,b9,cb,ca,b7,cd,cc){var b6=0,b5=e.length,b8=cb==null;
if(bH.type(cb)==="object"){b7=true;
for(b6 in cb){bH.access(e,b9,b6,cb[b6],true,cd,cc)
}}else{if(ca!==undefined){b7=true;
if(!bH.isFunction(ca)){cc=true
}if(b8){if(cc){b9.call(e,ca);
b9=null
}else{b8=b9;
b9=function(ce,i,cf){return b8.call(bH(ce),cf)
}
}}if(b9){for(;
b6<b5;
b6++){b9(e[b6],cb,cc?ca:ca.call(e[b6],b6,b9(e[b6],cb)))
}}}}return b7?e:b8?b9.call(e):b5?b9(e[0],cb):cd
};
var aL=(/^(?:checkbox|radio)$/i);
(function(){var i=n.createElement("input"),b7=n.createElement("div"),b5=n.createDocumentFragment();
b7.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
C.leadingWhitespace=b7.firstChild.nodeType===3;
C.tbody=!b7.getElementsByTagName("tbody").length;
C.htmlSerialize=!!b7.getElementsByTagName("link").length;
C.html5Clone=n.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
i.type="checkbox";
i.checked=true;
b5.appendChild(i);
C.appendChecked=i.checked;
b7.innerHTML="<textarea>x</textarea>";
C.noCloneChecked=!!b7.cloneNode(true).lastChild.defaultValue;
b5.appendChild(b7);
b7.innerHTML="<input type='radio' checked='checked' name='t'/>";
C.checkClone=b7.cloneNode(true).cloneNode(true).lastChild.checked;
C.noCloneEvent=true;
if(b7.attachEvent){b7.attachEvent("onclick",function(){C.noCloneEvent=false
});
b7.cloneNode(true).click()
}if(C.deleteExpando==null){C.deleteExpando=true;
try{delete b7.test
}catch(b6){C.deleteExpando=false
}}})();
(function(){var b5,e,b6=n.createElement("div");
for(b5 in {submit:true,change:true,focusin:true}){e="on"+b5;
if(!(C[b5+"Bubbles"]=e in a4)){b6.setAttribute(e,"t");
C[b5+"Bubbles"]=b6.attributes[e].expando===false
}}b6=null
})();
var bF=/^(?:input|select|textarea)$/i,a5=/^key/,bL=/^(?:mouse|pointer|contextmenu)|click/,bB=/^(?:focusinfocus|focusoutblur)$/,bw=/^([^.]*)(?:\.(.+)|)$/;
function T(){return true
}function Y(){return false
}function al(){try{return n.activeElement
}catch(e){}}bH.event={global:{},add:function(b7,cc,ch,b9,b8){var ca,ci,cj,b5,ce,cb,cg,b6,cf,e,i,cd=bH._data(b7);
if(!cd){return
}if(ch.handler){b5=ch;
ch=b5.handler;
b8=b5.selector
}if(!ch.guid){ch.guid=bH.guid++
}if(!(ci=cd.events)){ci=cd.events={}
}if(!(cb=cd.handle)){cb=cd.handle=function(ck){return typeof bH!==aB&&(!ck||bH.event.triggered!==ck.type)?bH.event.dispatch.apply(cb.elem,arguments):undefined
};
cb.elem=b7
}cc=(cc||"").match(aE)||[""];
cj=cc.length;
while(cj--){ca=bw.exec(cc[cj])||[];
cf=i=ca[1];
e=(ca[2]||"").split(".").sort();
if(!cf){continue
}ce=bH.event.special[cf]||{};
cf=(b8?ce.delegateType:ce.bindType)||cf;
ce=bH.event.special[cf]||{};
cg=bH.extend({type:cf,origType:i,data:b9,handler:ch,guid:ch.guid,selector:b8,needsContext:b8&&bH.expr.match.needsContext.test(b8),namespace:e.join(".")},b5);
if(!(b6=ci[cf])){b6=ci[cf]=[];
b6.delegateCount=0;
if(!ce.setup||ce.setup.call(b7,b9,e,cb)===false){if(b7.addEventListener){b7.addEventListener(cf,cb,false)
}else{if(b7.attachEvent){b7.attachEvent("on"+cf,cb)
}}}}if(ce.add){ce.add.call(b7,cg);
if(!cg.handler.guid){cg.handler.guid=ch.guid
}}if(b8){b6.splice(b6.delegateCount++,0,cg)
}else{b6.push(cg)
}bH.event.global[cf]=true
}b7=null
},remove:function(b6,cc,cj,b7,cb){var b9,cg,ca,b8,ci,ch,ce,b5,cf,e,i,cd=bH.hasData(b6)&&bH._data(b6);
if(!cd||!(ch=cd.events)){return
}cc=(cc||"").match(aE)||[""];
ci=cc.length;
while(ci--){ca=bw.exec(cc[ci])||[];
cf=i=ca[1];
e=(ca[2]||"").split(".").sort();
if(!cf){for(cf in ch){bH.event.remove(b6,cf+cc[ci],cj,b7,true)
}continue
}ce=bH.event.special[cf]||{};
cf=(b7?ce.delegateType:ce.bindType)||cf;
b5=ch[cf]||[];
ca=ca[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");
b8=b9=b5.length;
while(b9--){cg=b5[b9];
if((cb||i===cg.origType)&&(!cj||cj.guid===cg.guid)&&(!ca||ca.test(cg.namespace))&&(!b7||b7===cg.selector||b7==="**"&&cg.selector)){b5.splice(b9,1);
if(cg.selector){b5.delegateCount--
}if(ce.remove){ce.remove.call(b6,cg)
}}}if(b8&&!b5.length){if(!ce.teardown||ce.teardown.call(b6,e,cd.handle)===false){bH.removeEvent(b6,cf,cd.handle)
}delete ch[cf]
}}if(bH.isEmptyObject(ch)){delete cd.handle;
bH._removeData(b6,"events")
}},trigger:function(b5,cc,b8,cj){var cd,b7,ch,ci,cf,cb,ca,b9=[b8||n],cg=J.call(b5,"type")?b5.type:b5,b6=J.call(b5,"namespace")?b5.namespace.split("."):[];
ch=cb=b8=b8||n;
if(b8.nodeType===3||b8.nodeType===8){return
}if(bB.test(cg+bH.event.triggered)){return
}if(cg.indexOf(".")>=0){b6=cg.split(".");
cg=b6.shift();
b6.sort()
}b7=cg.indexOf(":")<0&&"on"+cg;
b5=b5[bH.expando]?b5:new bH.Event(cg,typeof b5==="object"&&b5);
b5.isTrigger=cj?2:3;
b5.namespace=b6.join(".");
b5.namespace_re=b5.namespace?new RegExp("(^|\\.)"+b6.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b5.result=undefined;
if(!b5.target){b5.target=b8
}cc=cc==null?[b5]:bH.makeArray(cc,[b5]);
cf=bH.event.special[cg]||{};
if(!cj&&cf.trigger&&cf.trigger.apply(b8,cc)===false){return
}if(!cj&&!cf.noBubble&&!bH.isWindow(b8)){ci=cf.delegateType||cg;
if(!bB.test(ci+cg)){ch=ch.parentNode
}for(;
ch;
ch=ch.parentNode){b9.push(ch);
cb=ch
}if(cb===(b8.ownerDocument||n)){b9.push(cb.defaultView||cb.parentWindow||a4)
}}ca=0;
while((ch=b9[ca++])&&!b5.isPropagationStopped()){b5.type=ca>1?ci:cf.bindType||cg;
cd=(bH._data(ch,"events")||{})[b5.type]&&bH._data(ch,"handle");
if(cd){cd.apply(ch,cc)
}cd=b7&&ch[b7];
if(cd&&cd.apply&&bH.acceptData(ch)){b5.result=cd.apply(ch,cc);
if(b5.result===false){b5.preventDefault()
}}}b5.type=cg;
if(!cj&&!b5.isDefaultPrevented()){if((!cf._default||cf._default.apply(b9.pop(),cc)===false)&&bH.acceptData(b8)){if(b7&&b8[cg]&&!bH.isWindow(b8)){cb=b8[b7];
if(cb){b8[b7]=null
}bH.event.triggered=cg;
try{b8[cg]()
}catch(ce){}bH.event.triggered=undefined;
if(cb){b8[b7]=cb
}}}}return b5.result
},dispatch:function(e){e=bH.event.fix(e);
var b8,b9,cd,b5,b7,cc=[],cb=O.call(arguments),b6=(bH._data(this,"events")||{})[e.type]||[],ca=bH.event.special[e.type]||{};
cb[0]=e;
e.delegateTarget=this;
if(ca.preDispatch&&ca.preDispatch.call(this,e)===false){return
}cc=bH.event.handlers.call(this,e,b6);
b8=0;
while((b5=cc[b8++])&&!e.isPropagationStopped()){e.currentTarget=b5.elem;
b7=0;
while((cd=b5.handlers[b7++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(cd.namespace)){e.handleObj=cd;
e.data=cd.data;
b9=((bH.event.special[cd.origType]||{}).handle||cd.handler).apply(b5.elem,cb);
if(b9!==undefined){if((e.result=b9)===false){e.preventDefault();
e.stopPropagation()
}}}}}if(ca.postDispatch){ca.postDispatch.call(this,e)
}return e.result
},handlers:function(e,b6){var b5,cb,b9,b8,ca=[],b7=b6.delegateCount,cc=e.target;
if(b7&&cc.nodeType&&(!e.button||e.type!=="click")){for(;
cc!=this;
cc=cc.parentNode||this){if(cc.nodeType===1&&(cc.disabled!==true||e.type!=="click")){b9=[];
for(b8=0;
b8<b7;
b8++){cb=b6[b8];
b5=cb.selector+" ";
if(b9[b5]===undefined){b9[b5]=cb.needsContext?bH(b5,this).index(cc)>=0:bH.find(b5,this,null,[cc]).length
}if(b9[b5]){b9.push(cb)
}}if(b9.length){ca.push({elem:cc,handlers:b9})
}}}}if(b7<b6.length){ca.push({elem:this,handlers:b6.slice(b7)})
}return ca
},fix:function(b7){if(b7[bH.expando]){return b7
}var b5,ca,b9,b6=b7.type,e=b7,b8=this.fixHooks[b6];
if(!b8){this.fixHooks[b6]=b8=bL.test(b6)?this.mouseHooks:a5.test(b6)?this.keyHooks:{}
}b9=b8.props?this.props.concat(b8.props):this.props;
b7=new bH.Event(e);
b5=b9.length;
while(b5--){ca=b9[b5];
b7[ca]=e[ca]
}if(!b7.target){b7.target=e.srcElement||n
}if(b7.target.nodeType===3){b7.target=b7.target.parentNode
}b7.metaKey=!!b7.metaKey;
return b8.filter?b8.filter(b7,e):b7
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(i,e){if(i.which==null){i.which=e.charCode!=null?e.charCode:e.keyCode
}return i
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b6,b5){var e,b7,b8,i=b5.button,b9=b5.fromElement;
if(b6.pageX==null&&b5.clientX!=null){b7=b6.target.ownerDocument||n;
b8=b7.documentElement;
e=b7.body;
b6.pageX=b5.clientX+(b8&&b8.scrollLeft||e&&e.scrollLeft||0)-(b8&&b8.clientLeft||e&&e.clientLeft||0);
b6.pageY=b5.clientY+(b8&&b8.scrollTop||e&&e.scrollTop||0)-(b8&&b8.clientTop||e&&e.clientTop||0)
}if(!b6.relatedTarget&&b9){b6.relatedTarget=b9===b6.target?b5.toElement:b9
}if(!b6.which&&i!==undefined){b6.which=(i&1?1:(i&2?3:(i&4?2:0)))
}return b6
}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==al()&&this.focus){try{this.focus();
return false
}catch(i){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===al()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(bH.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}},_default:function(e){return bH.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result
}}}},simulate:function(b5,b7,b6,i){var b8=bH.extend(new bH.Event(),b6,{type:b5,isSimulated:true,originalEvent:{}});
if(i){bH.event.trigger(b8,null,b7)
}else{bH.event.dispatch.call(b7,b8)
}if(b8.isDefaultPrevented()){b6.preventDefault()
}}};
bH.removeEvent=n.removeEventListener?function(i,e,b5){if(i.removeEventListener){i.removeEventListener(e,b5,false)
}}:function(b5,i,b6){var e="on"+i;
if(b5.detachEvent){if(typeof b5[e]===aB){b5[e]=null
}b5.detachEvent(e,b6)
}};
bH.Event=function(i,e){if(!(this instanceof bH.Event)){return new bH.Event(i,e)
}if(i&&i.type){this.originalEvent=i;
this.type=i.type;
this.isDefaultPrevented=i.defaultPrevented||i.defaultPrevented===undefined&&i.returnValue===false?T:Y
}else{this.type=i
}if(e){bH.extend(this,e)
}this.timeStamp=i&&i.timeStamp||bH.now();
this[bH.expando]=true
};
bH.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var i=this.originalEvent;
this.isDefaultPrevented=T;
if(!i){return
}if(i.preventDefault){i.preventDefault()
}else{i.returnValue=false
}},stopPropagation:function(){var i=this.originalEvent;
this.isPropagationStopped=T;
if(!i){return
}if(i.stopPropagation){i.stopPropagation()
}i.cancelBubble=true
},stopImmediatePropagation:function(){var i=this.originalEvent;
this.isImmediatePropagationStopped=T;
if(i&&i.stopImmediatePropagation){i.stopImmediatePropagation()
}this.stopPropagation()
}};
bH.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(i,e){bH.event.special[i]={delegateType:e,bindType:e,handle:function(b7){var b5,b9=this,b8=b7.relatedTarget,b6=b7.handleObj;
if(!b8||(b8!==b9&&!bH.contains(b9,b8))){b7.type=b6.origType;
b5=b6.handler.apply(this,arguments);
b7.type=e
}return b5
}}
});
if(!C.submitBubbles){bH.event.special.submit={setup:function(){if(bH.nodeName(this,"form")){return false
}bH.event.add(this,"click._submit keypress._submit",function(b6){var b5=b6.target,i=bH.nodeName(b5,"input")||bH.nodeName(b5,"button")?b5.form:undefined;
if(i&&!bH._data(i,"submitBubbles")){bH.event.add(i,"submit._submit",function(e){e._submit_bubble=true
});
bH._data(i,"submitBubbles",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bH.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bH.nodeName(this,"form")){return false
}bH.event.remove(this,"._submit")
}}
}if(!C.changeBubbles){bH.event.special.change={setup:function(){if(bF.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bH.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bH.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bH.event.simulate("change",this,e,true)
})
}return false
}bH.event.add(this,"beforeactivate._change",function(b5){var i=b5.target;
if(bF.test(i.nodeName)&&!bH._data(i,"changeBubbles")){bH.event.add(i,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bH.event.simulate("change",this.parentNode,e,true)
}});
bH._data(i,"changeBubbles",true)
}})
},handle:function(i){var e=i.target;
if(this!==e||i.isSimulated||i.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return i.handleObj.handler.apply(this,arguments)
}},teardown:function(){bH.event.remove(this,"._change");
return !bF.test(this.nodeName)
}}
}if(!C.focusinBubbles){bH.each({focus:"focusin",blur:"focusout"},function(b5,e){var i=function(b6){bH.event.simulate(e,b6.target,bH.event.fix(b6),true)
};
bH.event.special[e]={setup:function(){var b7=this.ownerDocument||this,b6=bH._data(b7,e);
if(!b6){b7.addEventListener(b5,i,true)
}bH._data(b7,e,(b6||0)+1)
},teardown:function(){var b7=this.ownerDocument||this,b6=bH._data(b7,e)-1;
if(!b6){b7.removeEventListener(b5,i,true);
bH._removeData(b7,e)
}else{bH._data(b7,e,b6)
}}}
})
}bH.fn.extend({on:function(b5,e,b8,b7,i){var b6,b9;
if(typeof b5==="object"){if(typeof e!=="string"){b8=b8||e;
e=undefined
}for(b6 in b5){this.on(b6,e,b8,b5[b6],i)
}return this
}if(b8==null&&b7==null){b7=e;
b8=e=undefined
}else{if(b7==null){if(typeof e==="string"){b7=b8;
b8=undefined
}else{b7=b8;
b8=e;
e=undefined
}}}if(b7===false){b7=Y
}else{if(!b7){return this
}}if(i===1){b9=b7;
b7=function(ca){bH().off(ca);
return b9.apply(this,arguments)
};
b7.guid=b9.guid||(b9.guid=bH.guid++)
}return this.each(function(){bH.event.add(this,b5,b7,b8,e)
})
},one:function(i,e,b6,b5){return this.on(i,e,b6,b5,1)
},off:function(b5,e,b7){var i,b6;
if(b5&&b5.preventDefault&&b5.handleObj){i=b5.handleObj;
bH(b5.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler);
return this
}if(typeof b5==="object"){for(b6 in b5){this.off(b6,e,b5[b6])
}return this
}if(e===false||typeof e==="function"){b7=e;
e=undefined
}if(b7===false){b7=Y
}return this.each(function(){bH.event.remove(this,b5,b7,e)
})
},trigger:function(e,i){return this.each(function(){bH.event.trigger(e,i,this)
})
},triggerHandler:function(e,b5){var i=this[0];
if(i){return bH.event.trigger(e,b5,i,true)
}}});
function A(e){var b5=d.split("|"),i=e.createDocumentFragment();
if(i.createElement){while(b5.length){i.createElement(b5.pop())
}}return i
}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aC=/ jQuery\d+="(?:null|\d+)"/g,L=new RegExp("<(?:"+d+")[\\s/>]","i"),b4=/^\s+/,aG=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,o=/<([\w:]+)/,bZ=/<tbody/i,K=/<|&#?\w+;/,am=/<(?:script|style|link)/i,bV=/checked\s*(?:[^=]|=\s*.checked.)/i,bA=/^$|\/(?:java|ecma)script/i,aq=/^true\/(.*)/,aN=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,V={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:C.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aS=A(n),k=aS.appendChild(n.createElement("div"));
V.optgroup=V.option;
V.tbody=V.tfoot=V.colgroup=V.caption=V.thead;
V.th=V.td;
function l(b7,e){var b5,b8,b6=0,b9=typeof b7.getElementsByTagName!==aB?b7.getElementsByTagName(e||"*"):typeof b7.querySelectorAll!==aB?b7.querySelectorAll(e||"*"):undefined;
if(!b9){for(b9=[],b5=b7.childNodes||b7;
(b8=b5[b6])!=null;
b6++){if(!e||bH.nodeName(b8,e)){b9.push(b8)
}else{bH.merge(b9,l(b8,e))
}}}return e===undefined||e&&bH.nodeName(b7,e)?bH.merge([b7],b9):b9
}function bX(e){if(aL.test(e.type)){e.defaultChecked=e.checked
}}function a2(i,e){return bH.nodeName(i,"table")&&bH.nodeName(e.nodeType!==11?e:e.firstChild,"tr")?i.getElementsByTagName("tbody")[0]||i.appendChild(i.ownerDocument.createElement("tbody")):i
}function t(e){e.type=(bH.find.attr(e,"type")!==null)+"/"+e.type;
return e
}function be(i){var e=aq.exec(i.type);
if(e){i.type=e[1]
}else{i.removeAttribute("type")
}return i
}function bt(e,b6){var b7,b5=0;
for(;
(b7=e[b5])!=null;
b5++){bH._data(b7,"globalEval",!b6||bH._data(b6[b5],"globalEval"))
}}function ar(cb,b5){if(b5.nodeType!==1||!bH.hasData(cb)){return
}var b8,b7,e,ca=bH._data(cb),b9=bH._data(b5,ca),b6=ca.events;
if(b6){delete b9.handle;
b9.events={};
for(b8 in b6){for(b7=0,e=b6[b8].length;
b7<e;
b7++){bH.event.add(b5,b8,b6[b8][b7])
}}}if(b9.data){b9.data=bH.extend({},b9.data)
}}function S(b7,i){var b8,b6,b5;
if(i.nodeType!==1){return
}b8=i.nodeName.toLowerCase();
if(!C.noCloneEvent&&i[bH.expando]){b5=bH._data(i);
for(b6 in b5.events){bH.removeEvent(i,b6,b5.handle)
}i.removeAttribute(bH.expando)
}if(b8==="script"&&i.text!==b7.text){t(i).text=b7.text;
be(i)
}else{if(b8==="object"){if(i.parentNode){i.outerHTML=b7.outerHTML
}if(C.html5Clone&&(b7.innerHTML&&!bH.trim(i.innerHTML))){i.innerHTML=b7.innerHTML
}}else{if(b8==="input"&&aL.test(b7.type)){i.defaultChecked=i.checked=b7.checked;
if(i.value!==b7.value){i.value=b7.value
}}else{if(b8==="option"){i.defaultSelected=i.selected=b7.defaultSelected
}else{if(b8==="input"||b8==="textarea"){i.defaultValue=b7.defaultValue
}}}}}}bH.extend({clone:function(b5,b7,e){var b9,b6,cc,b8,ca,cb=bH.contains(b5.ownerDocument,b5);
if(C.html5Clone||bH.isXMLDoc(b5)||!L.test("<"+b5.nodeName+">")){cc=b5.cloneNode(true)
}else{k.innerHTML=b5.outerHTML;
k.removeChild(cc=k.firstChild)
}if((!C.noCloneEvent||!C.noCloneChecked)&&(b5.nodeType===1||b5.nodeType===11)&&!bH.isXMLDoc(b5)){b9=l(cc);
ca=l(b5);
for(b8=0;
(b6=ca[b8])!=null;
++b8){if(b9[b8]){S(b6,b9[b8])
}}}if(b7){if(e){ca=ca||l(b5);
b9=b9||l(cc);
for(b8=0;
(b6=ca[b8])!=null;
b8++){ar(b6,b9[b8])
}}else{ar(b5,cc)
}}b9=l(cc,"script");
if(b9.length>0){bt(b9,!cb&&l(b5,"script"))
}b9=ca=b6=null;
return cc
},buildFragment:function(b5,b7,cc,ch){var cd,b9,cb,cg,ci,cf,b6,ca=b5.length,b8=A(b7),e=[],ce=0;
for(;
ce<ca;
ce++){b9=b5[ce];
if(b9||b9===0){if(bH.type(b9)==="object"){bH.merge(e,b9.nodeType?[b9]:b9)
}else{if(!K.test(b9)){e.push(b7.createTextNode(b9))
}else{cg=cg||b8.appendChild(b7.createElement("div"));
ci=(o.exec(b9)||["",""])[1].toLowerCase();
b6=V[ci]||V._default;
cg.innerHTML=b6[1]+b9.replace(aG,"<$1></$2>")+b6[2];
cd=b6[0];
while(cd--){cg=cg.lastChild
}if(!C.leadingWhitespace&&b4.test(b9)){e.push(b7.createTextNode(b4.exec(b9)[0]))
}if(!C.tbody){b9=ci==="table"&&!bZ.test(b9)?cg.firstChild:b6[1]==="<table>"&&!bZ.test(b9)?cg:0;
cd=b9&&b9.childNodes.length;
while(cd--){if(bH.nodeName((cf=b9.childNodes[cd]),"tbody")&&!cf.childNodes.length){b9.removeChild(cf)
}}}bH.merge(e,cg.childNodes);
cg.textContent="";
while(cg.firstChild){cg.removeChild(cg.firstChild)
}cg=b8.lastChild
}}}}if(cg){b8.removeChild(cg)
}if(!C.appendChecked){bH.grep(l(e,"input"),bX)
}ce=0;
while((b9=e[ce++])){if(ch&&bH.inArray(b9,ch)!==-1){continue
}cb=bH.contains(b9.ownerDocument,b9);
cg=l(b8.appendChild(b9),"script");
if(cb){bt(cg)
}if(cc){cd=0;
while((b9=cg[cd++])){if(bA.test(b9.type||"")){cc.push(b9)
}}}}cg=null;
return b8
},cleanData:function(b5,cd){var b7,cc,b6,b8,b9=0,ce=bH.expando,e=bH.cache,ca=C.deleteExpando,cb=bH.event.special;
for(;
(b7=b5[b9])!=null;
b9++){if(cd||bH.acceptData(b7)){b6=b7[ce];
b8=b6&&e[b6];
if(b8){if(b8.events){for(cc in b8.events){if(cb[cc]){bH.event.remove(b7,cc)
}else{bH.removeEvent(b7,cc,b8.handle)
}}}if(e[b6]){delete e[b6];
if(ca){delete b7[ce]
}else{if(typeof b7.removeAttribute!==aB){b7.removeAttribute(ce)
}else{b7[ce]=null
}}aO.push(b6)
}}}}}});
bH.fn.extend({text:function(e){return aA(this,function(i){return i===undefined?bH.text(this):this.empty().append((this[0]&&this[0].ownerDocument||n).createTextNode(i))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a2(this,e);
i.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a2(this,e);
i.insertBefore(e,i.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)
}})
},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)
}})
},remove:function(e,b8){var b7,b5=e?bH.filter(e,this):this,b6=0;
for(;
(b7=b5[b6])!=null;
b6++){if(!b8&&b7.nodeType===1){bH.cleanData(l(b7))
}if(b7.parentNode){if(b8&&bH.contains(b7.ownerDocument,b7)){bt(l(b7,"script"))
}b7.parentNode.removeChild(b7)
}}return this
},empty:function(){var b5,e=0;
for(;
(b5=this[e])!=null;
e++){if(b5.nodeType===1){bH.cleanData(l(b5,false))
}while(b5.firstChild){b5.removeChild(b5.firstChild)
}if(b5.options&&bH.nodeName(b5,"select")){b5.options.length=0
}}return this
},clone:function(i,e){i=i==null?false:i;
e=e==null?i:e;
return this.map(function(){return bH.clone(this,i,e)
})
},html:function(e){return aA(this,function(b8){var b7=this[0]||{},b6=0,b5=this.length;
if(b8===undefined){return b7.nodeType===1?b7.innerHTML.replace(aC,""):undefined
}if(typeof b8==="string"&&!am.test(b8)&&(C.htmlSerialize||!L.test(b8))&&(C.leadingWhitespace||!b4.test(b8))&&!V[(o.exec(b8)||["",""])[1].toLowerCase()]){b8=b8.replace(aG,"<$1></$2>");
try{for(;
b6<b5;
b6++){b7=this[b6]||{};
if(b7.nodeType===1){bH.cleanData(l(b7,false));
b7.innerHTML=b8
}}b7=0
}catch(b9){}}if(b7){this.empty().append(b8)
}},null,e,arguments.length)
},replaceWith:function(){var e=arguments[0];
this.domManip(arguments,function(i){e=this.parentNode;
bH.cleanData(l(this));
if(e){e.replaceChild(i,this)
}});
return e&&(e.length||e.nodeType)?this:this.remove()
},detach:function(e){return this.remove(e,true)
},domManip:function(cc,ch){cc=ay.apply([],cc);
var ca,b6,e,b8,cf,cb,b9=0,b7=this.length,ce=this,cg=b7-1,cd=cc[0],b5=bH.isFunction(cd);
if(b5||(b7>1&&typeof cd==="string"&&!C.checkClone&&bV.test(cd))){return this.each(function(ci){var i=ce.eq(ci);
if(b5){cc[0]=cd.call(this,ci,i.html())
}i.domManip(cc,ch)
})
}if(b7){cb=bH.buildFragment(cc,this[0].ownerDocument,false,this);
ca=cb.firstChild;
if(cb.childNodes.length===1){cb=ca
}if(ca){b8=bH.map(l(cb,"script"),t);
e=b8.length;
for(;
b9<b7;
b9++){b6=cb;
if(b9!==cg){b6=bH.clone(b6,true,true);
if(e){bH.merge(b8,l(b6,"script"))
}}ch.call(this[b9],b6,b9)
}if(e){cf=b8[b8.length-1].ownerDocument;
bH.map(b8,be);
for(b9=0;
b9<e;
b9++){b6=b8[b9];
if(bA.test(b6.type||"")&&!bH._data(b6,"globalEval")&&bH.contains(cf,b6)){if(b6.src){if(bH._evalUrl){bH._evalUrl(b6.src)
}}else{bH.globalEval((b6.text||b6.textContent||b6.innerHTML||"").replace(aN,""))
}}}}cb=ca=null
}}return this
}});
bH.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){bH.fn[e]=function(b5){var b6,b8=0,b7=[],ca=bH(b5),b9=ca.length-1;
for(;
b8<=b9;
b8++){b6=b8===b9?this:this.clone(true);
bH(ca[b8])[i](b6);
w.apply(b7,b6.get())
}return this.pushStack(b7)
}
});
var aH,bk={};
function a3(e,b7){var i,b5=bH(b7.createElement(e)).appendTo(b7.body),b6=a4.getDefaultComputedStyle&&(i=a4.getDefaultComputedStyle(b5[0]))?i.display:bH.css(b5[0],"display");
b5.detach();
return b6
}function aZ(b5){var i=n,e=bk[b5];
if(!e){e=a3(b5,i);
if(e==="none"||!e){aH=(aH||bH("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
i=(aH[0].contentWindow||aH[0].contentDocument).document;
i.write();
i.close();
e=a3(b5,i);
aH.detach()
}bk[b5]=e
}return e
}(function(){var e;
C.shrinkWrapBlocks=function(){if(e!=null){return e
}e=false;
var b6,i,b5;
i=n.getElementsByTagName("body")[0];
if(!i||!i.style){return
}b6=n.createElement("div");
b5=n.createElement("div");
b5.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
i.appendChild(b5).appendChild(b6);
if(typeof b6.style.zoom!==aB){b6.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
b6.appendChild(n.createElement("div")).style.width="5px";
e=b6.offsetWidth!==3
}i.removeChild(b5);
return e
}
})();
var aY=(/^margin/);
var X=new RegExp("^("+aD+")(?!px)[a-z%]+$","i");
var bp,F,bn=/^(top|right|bottom|left)$/;
if(a4.getComputedStyle){bp=function(e){if(e.ownerDocument.defaultView.opener){return e.ownerDocument.defaultView.getComputedStyle(e,null)
}return a4.getComputedStyle(e,null)
};
F=function(ca,i,b9){var b7,b6,b8,e,b5=ca.style;
b9=b9||bp(ca);
e=b9?b9.getPropertyValue(i)||b9[i]:undefined;
if(b9){if(e===""&&!bH.contains(ca.ownerDocument,ca)){e=bH.style(ca,i)
}if(X.test(e)&&aY.test(i)){b7=b5.width;
b6=b5.minWidth;
b8=b5.maxWidth;
b5.minWidth=b5.maxWidth=b5.width=e;
e=b9.width;
b5.width=b7;
b5.minWidth=b6;
b5.maxWidth=b8
}}return e===undefined?e:e+""
}
}else{if(n.documentElement.currentStyle){bp=function(e){return e.currentStyle
};
F=function(b9,b6,b8){var ca,i,e,b5,b7=b9.style;
b8=b8||bp(b9);
b5=b8?b8[b6]:undefined;
if(b5==null&&b7&&b7[b6]){b5=b7[b6]
}if(X.test(b5)&&!bn.test(b6)){ca=b7.left;
i=b9.runtimeStyle;
e=i&&i.left;
if(e){i.left=b9.currentStyle.left
}b7.left=b6==="fontSize"?"1em":b5;
b5=b7.pixelLeft+"px";
b7.left=ca;
if(e){i.left=e
}}return b5===undefined?b5:b5+""||"auto"
}
}}function a6(e,i){return{get:function(){var b5=e();
if(b5==null){return
}if(b5){delete this.get;
return
}return(this.get=i).apply(this,arguments)
}}
}(function(){var ca,b8,b6,b9,b5,b7,i;
ca=n.createElement("div");
ca.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
b6=ca.getElementsByTagName("a")[0];
b8=b6&&b6.style;
if(!b8){return
}b8.cssText="float:left;opacity:.5";
C.opacity=b8.opacity==="0.5";
C.cssFloat=!!b8.cssFloat;
ca.style.backgroundClip="content-box";
ca.cloneNode(true).style.backgroundClip="";
C.clearCloneStyle=ca.style.backgroundClip==="content-box";
C.boxSizing=b8.boxSizing===""||b8.MozBoxSizing===""||b8.WebkitBoxSizing==="";
bH.extend(C,{reliableHiddenOffsets:function(){if(b7==null){e()
}return b7
},boxSizingReliable:function(){if(b5==null){e()
}return b5
},pixelPosition:function(){if(b9==null){e()
}return b9
},reliableMarginRight:function(){if(i==null){e()
}return i
}});
function e(){var ce,cb,cc,cd;
cb=n.getElementsByTagName("body")[0];
if(!cb||!cb.style){return
}ce=n.createElement("div");
cc=n.createElement("div");
cc.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
cb.appendChild(cc).appendChild(ce);
ce.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
b9=b5=false;
i=true;
if(a4.getComputedStyle){b9=(a4.getComputedStyle(ce,null)||{}).top!=="1%";
b5=(a4.getComputedStyle(ce,null)||{width:"4px"}).width==="4px";
cd=ce.appendChild(n.createElement("div"));
cd.style.cssText=ce.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
cd.style.marginRight=cd.style.width="0";
ce.style.width="1px";
i=!parseFloat((a4.getComputedStyle(cd,null)||{}).marginRight);
ce.removeChild(cd)
}ce.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cd=ce.getElementsByTagName("td");
cd[0].style.cssText="margin:0;border:0;padding:0;display:none";
b7=cd[0].offsetHeight===0;
if(b7){cd[0].style.display="";
cd[1].style.display="none";
b7=cd[0].offsetHeight===0
}cb.removeChild(cc)
}})();
bH.swap=function(b8,b7,b9,b6){var b5,i,e={};
for(i in b7){e[i]=b8.style[i];
b8.style[i]=b7[i]
}b5=b9.apply(b8,b6||[]);
for(i in b7){b8.style[i]=e[i]
}return b5
};
var bi=/alpha\([^)]*\)/i,aT=/opacity\s*=\s*([^)]*)/,G=/^(none|table(?!-c[ea]).+)/,ba=new RegExp("^("+aD+")(.*)$","i"),U=new RegExp("^([+-])=("+aD+")","i"),bd={position:"absolute",visibility:"hidden",display:"block"},bC={letterSpacing:"0",fontWeight:"400"},av=["Webkit","O","Moz","ms"];
function c(b7,b5){if(b5 in b7){return b5
}var b8=b5.charAt(0).toUpperCase()+b5.slice(1),e=b5,b6=av.length;
while(b6--){b5=av[b6]+b8;
if(b5 in b7){return b5
}}return e
}function r(b9,e){var ca,b7,b8,i=[],b5=0,b6=b9.length;
for(;
b5<b6;
b5++){b7=b9[b5];
if(!b7.style){continue
}i[b5]=bH._data(b7,"olddisplay");
ca=b7.style.display;
if(e){if(!i[b5]&&ca==="none"){b7.style.display=""
}if(b7.style.display===""&&R(b7)){i[b5]=bH._data(b7,"olddisplay",aZ(b7.nodeName))
}}else{b8=R(b7);
if(ca&&ca!=="none"||!b8){bH._data(b7,"olddisplay",b8?ca:bH.css(b7,"display"))
}}}for(b5=0;
b5<b6;
b5++){b7=b9[b5];
if(!b7.style){continue
}if(!e||b7.style.display==="none"||b7.style.display===""){b7.style.display=e?i[b5]||"":"none"
}}return b9
}function aM(e,b5,b6){var i=ba.exec(b5);
return i?Math.max(0,i[1]-(b6||0))+(i[2]||"px"):b5
}function aw(b8,b5,e,ca,b7){var b6=e===(ca?"border":"content")?4:b5==="width"?1:0,b9=0;
for(;
b6<4;
b6+=2){if(e==="margin"){b9+=bH.css(b8,e+bS[b6],true,b7)
}if(ca){if(e==="content"){b9-=bH.css(b8,"padding"+bS[b6],true,b7)
}if(e!=="margin"){b9-=bH.css(b8,"border"+bS[b6]+"Width",true,b7)
}}else{b9+=bH.css(b8,"padding"+bS[b6],true,b7);
if(e!=="padding"){b9+=bH.css(b8,"border"+bS[b6]+"Width",true,b7)
}}}return b9
}function u(b7,i,e){var b6=true,b8=i==="width"?b7.offsetWidth:b7.offsetHeight,b5=bp(b7),b9=C.boxSizing&&bH.css(b7,"boxSizing",false,b5)==="border-box";
if(b8<=0||b8==null){b8=F(b7,i,b5);
if(b8<0||b8==null){b8=b7.style[i]
}if(X.test(b8)){return b8
}b6=b9&&(C.boxSizingReliable()||b8===b7.style[i]);
b8=parseFloat(b8)||0
}return(b8+aw(b7,i,e||(b9?"border":"content"),b6,b5))+"px"
}bH.extend({cssHooks:{opacity:{get:function(b5,i){if(i){var e=F(b5,"opacity");
return e===""?"1":e
}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":C.cssFloat?"cssFloat":"styleFloat"},style:function(b6,b5,cc,b7){if(!b6||b6.nodeType===3||b6.nodeType===8||!b6.style){return
}var ca,cb,cd,b8=bH.camelCase(b5),i=b6.style;
b5=bH.cssProps[b8]||(bH.cssProps[b8]=c(i,b8));
cd=bH.cssHooks[b5]||bH.cssHooks[b8];
if(cc!==undefined){cb=typeof cc;
if(cb==="string"&&(ca=U.exec(cc))){cc=(ca[1]+1)*ca[2]+parseFloat(bH.css(b6,b5));
cb="number"
}if(cc==null||cc!==cc){return
}if(cb==="number"&&!bH.cssNumber[b8]){cc+="px"
}if(!C.clearCloneStyle&&cc===""&&b5.indexOf("background")===0){i[b5]="inherit"
}if(!cd||!("set" in cd)||(cc=cd.set(b6,cc,b7))!==undefined){try{i[b5]=cc
}catch(b9){}}}else{if(cd&&"get" in cd&&(ca=cd.get(b6,false,b7))!==undefined){return ca
}return i[b5]
}},css:function(b9,b7,i,b8){var b6,ca,e,b5=bH.camelCase(b7);
b7=bH.cssProps[b5]||(bH.cssProps[b5]=c(b9.style,b5));
e=bH.cssHooks[b7]||bH.cssHooks[b5];
if(e&&"get" in e){ca=e.get(b9,true,i)
}if(ca===undefined){ca=F(b9,b7,b8)
}if(ca==="normal"&&b7 in bC){ca=bC[b7]
}if(i===""||i){b6=parseFloat(ca);
return i===true||bH.isNumeric(b6)?b6||0:ca
}return ca
}});
bH.each(["height","width"],function(b5,e){bH.cssHooks[e]={get:function(b7,b6,i){if(b6){return G.test(bH.css(b7,"display"))&&b7.offsetWidth===0?bH.swap(b7,bd,function(){return u(b7,e,i)
}):u(b7,e,i)
}},set:function(b7,b8,i){var b6=i&&bp(b7);
return aM(b7,b8,i?aw(b7,e,i,C.boxSizing&&bH.css(b7,"boxSizing",false,b6)==="border-box",b6):0)
}}
});
if(!C.opacity){bH.cssHooks.opacity={get:function(i,e){return aT.test((e&&i.currentStyle?i.currentStyle.filter:i.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b7,b8){var b6=b7.style,i=b7.currentStyle,e=bH.isNumeric(b8)?"alpha(opacity="+b8*100+")":"",b5=i&&i.filter||b6.filter||"";
b6.zoom=1;
if((b8>=1||b8==="")&&bH.trim(b5.replace(bi,""))===""&&b6.removeAttribute){b6.removeAttribute("filter");
if(b8===""||i&&!i.filter){return
}}b6.filter=bi.test(b5)?b5.replace(bi,e):b5+" "+e
}}
}bH.cssHooks.marginRight=a6(C.reliableMarginRight,function(i,e){if(e){return bH.swap(i,{display:"inline-block"},F,[i,"marginRight"])
}});
bH.each({margin:"",padding:"",border:"Width"},function(e,i){bH.cssHooks[e+i]={expand:function(b7){var b6=0,b5={},b8=typeof b7==="string"?b7.split(" "):[b7];
for(;
b6<4;
b6++){b5[e+bS[b6]+i]=b8[b6]||b8[b6-2]||b8[0]
}return b5
}};
if(!aY.test(e)){bH.cssHooks[e+i].set=aM
}});
bH.fn.extend({css:function(e,i){return aA(this,function(b9,b6,ca){var b8,b5,cb={},b7=0;
if(bH.isArray(b6)){b8=bp(b9);
b5=b6.length;
for(;
b7<b5;
b7++){cb[b6[b7]]=bH.css(b9,b6[b7],false,b8)
}return cb
}return ca!==undefined?bH.style(b9,b6,ca):bH.css(b9,b6)
},e,i,arguments.length>1)
},show:function(){return r(this,true)
},hide:function(){return r(this)
},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()
}return this.each(function(){if(R(this)){bH(this).show()
}else{bH(this).hide()
}})
}});
function I(b5,i,b7,e,b6){return new I.prototype.init(b5,i,b7,e,b6)
}bH.Tween=I;
I.prototype={constructor:I,init:function(b6,i,b8,e,b7,b5){this.elem=b6;
this.prop=b8;
this.easing=b7||"swing";
this.options=i;
this.start=this.now=this.cur();
this.end=e;
this.unit=b5||(bH.cssNumber[b8]?"":"px")
},cur:function(){var e=I.propHooks[this.prop];
return e&&e.get?e.get(this):I.propHooks._default.get(this)
},run:function(b5){var i,e=I.propHooks[this.prop];
if(this.options.duration){this.pos=i=bH.easing[this.easing](b5,this.options.duration*b5,0,1,this.options.duration)
}else{this.pos=i=b5
}this.now=(this.end-this.start)*i+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{I.propHooks._default.set(this)
}return this
}};
I.prototype.init.prototype=I.prototype;
I.propHooks={_default:{get:function(i){var e;
if(i.elem[i.prop]!=null&&(!i.elem.style||i.elem.style[i.prop]==null)){return i.elem[i.prop]
}e=bH.css(i.elem,i.prop,"");
return !e||e==="auto"?0:e
},set:function(e){if(bH.fx.step[e.prop]){bH.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bH.cssProps[e.prop]]!=null||bH.cssHooks[e.prop])){bH.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bH.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bH.fx=I.prototype.init;
bH.fx.step={};
var M,ad,bQ=/^(?:toggle|show|hide)$/,bI=new RegExp("^(?:([+-])=|)("+aD+")([a-z%]*)$","i"),bO=/queueHooks$/,aF=[h],a1={"*":[function(e,b9){var cb=this.createTween(e,b9),b7=cb.cur(),b6=bI.exec(b9),ca=b6&&b6[3]||(bH.cssNumber[e]?"":"px"),i=(bH.cssNumber[e]||ca!=="px"&&+b7)&&bI.exec(bH.css(cb.elem,e)),b5=1,b8=20;
if(i&&i[3]!==ca){ca=ca||i[3];
b6=b6||[];
i=+b7||1;
do{b5=b5||".5";
i=i/b5;
bH.style(cb.elem,e,i+ca)
}while(b5!==(b5=cb.cur()/b7)&&b5!==1&&--b8)
}if(b6){i=cb.start=+i||+b7||0;
cb.unit=ca;
cb.end=b6[1]?i+(b6[1]+1)*b6[2]:+b6[2]
}return cb
}]};
function bm(){setTimeout(function(){M=undefined
});
return(M=bH.now())
}function bG(b6,b8){var b7,e={height:b6},b5=0;
b8=b8?1:0;
for(;
b5<4;
b5+=2-b8){b7=bS[b5];
e["margin"+b7]=e["padding"+b7]=b6
}if(b8){e.opacity=e.width=b6
}return e
}function bc(b7,b9,b6){var i,b8=(a1[b9]||[]).concat(a1["*"]),e=0,b5=b8.length;
for(;
e<b5;
e++){if((i=b8[e].call(b6,b9,b7))){return i
}}}function h(b6,cb,e){var b5,ce,b8,ch,ci,cf,ca,cd,b7=this,cc={},i=b6.style,b9=b6.nodeType&&R(b6),cg=bH._data(b6,"fxshow");
if(!e.queue){ci=bH._queueHooks(b6,"fx");
if(ci.unqueued==null){ci.unqueued=0;
cf=ci.empty.fire;
ci.empty.fire=function(){if(!ci.unqueued){cf()
}}
}ci.unqueued++;
b7.always(function(){b7.always(function(){ci.unqueued--;
if(!bH.queue(b6,"fx").length){ci.empty.fire()
}})
})
}if(b6.nodeType===1&&("height" in cb||"width" in cb)){e.overflow=[i.overflow,i.overflowX,i.overflowY];
ca=bH.css(b6,"display");
cd=ca==="none"?bH._data(b6,"olddisplay")||aZ(b6.nodeName):ca;
if(cd==="inline"&&bH.css(b6,"float")==="none"){if(!C.inlineBlockNeedsLayout||aZ(b6.nodeName)==="inline"){i.display="inline-block"
}else{i.zoom=1
}}}if(e.overflow){i.overflow="hidden";
if(!C.shrinkWrapBlocks()){b7.always(function(){i.overflow=e.overflow[0];
i.overflowX=e.overflow[1];
i.overflowY=e.overflow[2]
})
}}for(b5 in cb){ce=cb[b5];
if(bQ.exec(ce)){delete cb[b5];
b8=b8||ce==="toggle";
if(ce===(b9?"hide":"show")){if(ce==="show"&&cg&&cg[b5]!==undefined){b9=true
}else{continue
}}cc[b5]=cg&&cg[b5]||bH.style(b6,b5)
}else{ca=undefined
}}if(!bH.isEmptyObject(cc)){if(cg){if("hidden" in cg){b9=cg.hidden
}}else{cg=bH._data(b6,"fxshow",{})
}if(b8){cg.hidden=!b9
}if(b9){bH(b6).show()
}else{b7.done(function(){bH(b6).hide()
})
}b7.done(function(){var cj;
bH._removeData(b6,"fxshow");
for(cj in cc){bH.style(b6,cj,cc[cj])
}});
for(b5 in cc){ch=bc(b9?cg[b5]:0,b5,b7);
if(!(b5 in cg)){cg[b5]=ch.start;
if(b9){ch.end=ch.start;
ch.start=b5==="width"||b5==="height"?1:0
}}}}else{if((ca==="none"?aZ(b6.nodeName):ca)==="inline"){i.display=ca
}}}function an(b6,b8){var b5,i,b9,b7,e;
for(b5 in b6){i=bH.camelCase(b5);
b9=b8[i];
b7=b6[b5];
if(bH.isArray(b7)){b9=b7[1];
b7=b6[b5]=b7[0]
}if(b5!==i){b6[i]=b7;
delete b6[b5]
}e=bH.cssHooks[i];
if(e&&"expand" in e){b7=e.expand(b7);
delete b6[i];
for(b5 in b7){if(!(b5 in b6)){b6[b5]=b7[b5];
b8[b5]=b9
}}}else{b8[i]=b9
}}}function f(b5,b9,cc){var cd,e,b8=0,i=aF.length,cb=bH.Deferred().always(function(){delete b7.elem
}),b7=function(){if(e){return false
}var cj=M||bm(),cg=Math.max(0,b6.startTime+b6.duration-cj),ce=cg/b6.duration||0,ci=1-ce,cf=0,ch=b6.tweens.length;
for(;
cf<ch;
cf++){b6.tweens[cf].run(ci)
}cb.notifyWith(b5,[b6,ci,cg]);
if(ci<1&&ch){return cg
}else{cb.resolveWith(b5,[b6]);
return false
}},b6=cb.promise({elem:b5,props:bH.extend({},b9),opts:bH.extend(true,{specialEasing:{}},cc),originalProperties:b9,originalOptions:cc,startTime:M||bm(),duration:cc.duration,tweens:[],createTween:function(cg,ce){var cf=bH.Tween(b5,b6.opts,cg,ce,b6.opts.specialEasing[cg]||b6.opts.easing);
b6.tweens.push(cf);
return cf
},stop:function(cf){var ce=0,cg=cf?b6.tweens.length:0;
if(e){return this
}e=true;
for(;
ce<cg;
ce++){b6.tweens[ce].run(1)
}if(cf){cb.resolveWith(b5,[b6,cf])
}else{cb.rejectWith(b5,[b6,cf])
}return this
}}),ca=b6.props;
an(ca,b6.opts.specialEasing);
for(;
b8<i;
b8++){cd=aF[b8].call(b6,b5,ca,b6.opts);
if(cd){return cd
}}bH.map(ca,bc,b6);
if(bH.isFunction(b6.opts.start)){b6.opts.start.call(b5,b6)
}bH.fx.timer(bH.extend(b7,{elem:b5,anim:b6,queue:b6.opts.queue}));
return b6.progress(b6.opts.progress).done(b6.opts.done,b6.opts.complete).fail(b6.opts.fail).always(b6.opts.always)
}bH.Animation=bH.extend(f,{tweener:function(i,b7){if(bH.isFunction(i)){b7=i;
i=["*"]
}else{i=i.split(" ")
}var b6,e=0,b5=i.length;
for(;
e<b5;
e++){b6=i[e];
a1[b6]=a1[b6]||[];
a1[b6].unshift(b7)
}},prefilter:function(i,e){if(e){aF.unshift(i)
}else{aF.push(i)
}}});
bH.speed=function(b5,b6,i){var e=b5&&typeof b5==="object"?bH.extend({},b5):{complete:i||!i&&b6||bH.isFunction(b5)&&b5,duration:b5,easing:i&&b6||b6&&!bH.isFunction(b6)&&b6};
e.duration=bH.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bH.fx.speeds?bH.fx.speeds[e.duration]:bH.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bH.isFunction(e.old)){e.old.call(this)
}if(e.queue){bH.dequeue(this,e.queue)
}};
return e
};
bH.fn.extend({fadeTo:function(e,b6,b5,i){return this.filter(R).css("opacity",0).show().end().animate({opacity:b6},e,b5,i)
},animate:function(b9,b6,b8,b7){var b5=bH.isEmptyObject(b9),e=bH.speed(b6,b8,b7),i=function(){var ca=f(this,bH.extend({},b9),e);
if(b5||bH._data(this,"finish")){ca.stop(true)
}};
i.finish=i;
return b5||e.queue===false?this.each(i):this.queue(e.queue,i)
},stop:function(b5,i,e){var b6=function(b7){var b8=b7.stop;
delete b7.stop;
b8(e)
};
if(typeof b5!=="string"){e=i;
i=b5;
b5=undefined
}if(i&&b5!==false){this.queue(b5||"fx",[])
}return this.each(function(){var ca=true,b7=b5!=null&&b5+"queueHooks",b9=bH.timers,b8=bH._data(this);
if(b7){if(b8[b7]&&b8[b7].stop){b6(b8[b7])
}}else{for(b7 in b8){if(b8[b7]&&b8[b7].stop&&bO.test(b7)){b6(b8[b7])
}}}for(b7=b9.length;
b7--;
){if(b9[b7].elem===this&&(b5==null||b9[b7].queue===b5)){b9[b7].anim.stop(e);
ca=false;
b9.splice(b7,1)
}}if(ca||!e){bH.dequeue(this,b5)
}})
},finish:function(e){if(e!==false){e=e||"fx"
}return this.each(function(){var b6,b9=bH._data(this),b5=b9[e+"queue"],i=b9[e+"queueHooks"],b8=bH.timers,b7=b5?b5.length:0;
b9.finish=true;
bH.queue(this,e,[]);
if(i&&i.stop){i.stop.call(this,true)
}for(b6=b8.length;
b6--;
){if(b8[b6].elem===this&&b8[b6].queue===e){b8[b6].anim.stop(true);
b8.splice(b6,1)
}}for(b6=0;
b6<b7;
b6++){if(b5[b6]&&b5[b6].finish){b5[b6].finish.call(this)
}}delete b9.finish
})
}});
bH.each(["toggle","show","hide"],function(b5,e){var b6=bH.fn[e];
bH.fn[e]=function(i,b8,b7){return i==null||typeof i==="boolean"?b6.apply(this,arguments):this.animate(bG(e,true),i,b8,b7)
}
});
bH.each({slideDown:bG("show"),slideUp:bG("hide"),slideToggle:bG("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){bH.fn[e]=function(b5,b7,b6){return this.animate(i,b5,b7,b6)
}
});
bH.timers=[];
bH.fx.tick=function(){var b6,b5=bH.timers,e=0;
M=bH.now();
for(;
e<b5.length;
e++){b6=b5[e];
if(!b6()&&b5[e]===b6){b5.splice(e--,1)
}}if(!b5.length){bH.fx.stop()
}M=undefined
};
bH.fx.timer=function(e){bH.timers.push(e);
if(e()){bH.fx.start()
}else{bH.timers.pop()
}};
bH.fx.interval=13;
bH.fx.start=function(){if(!ad){ad=setInterval(bH.fx.tick,bH.fx.interval)
}};
bH.fx.stop=function(){clearInterval(ad);
ad=null
};
bH.fx.speeds={slow:600,fast:200,_default:400};
bH.fn.delay=function(i,e){i=bH.fx?bH.fx.speeds[i]||i:i;
e=e||"fx";
return this.queue(e,function(b6,b5){var b7=setTimeout(b6,i);
b5.stop=function(){clearTimeout(b7)
}
})
};
(function(){var b5,b7,e,i,b6;
b7=n.createElement("div");
b7.setAttribute("className","t");
b7.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
i=b7.getElementsByTagName("a")[0];
e=n.createElement("select");
b6=e.appendChild(n.createElement("option"));
b5=b7.getElementsByTagName("input")[0];
i.style.cssText="top:1px";
C.getSetAttribute=b7.className!=="t";
C.style=/top/.test(i.getAttribute("style"));
C.hrefNormalized=i.getAttribute("href")==="/a";
C.checkOn=!!b5.value;
C.optSelected=b6.selected;
C.enctype=!!n.createElement("form").enctype;
e.disabled=true;
C.optDisabled=!b6.disabled;
b5=n.createElement("input");
b5.setAttribute("value","");
C.input=b5.getAttribute("value")==="";
b5.value="t";
b5.setAttribute("type","radio");
C.radioValue=b5.value==="t"
})();
var ak=/\r/g;
bH.fn.extend({val:function(b6){var e,i,b7,b5=this[0];
if(!arguments.length){if(b5){e=bH.valHooks[b5.type]||bH.valHooks[b5.nodeName.toLowerCase()];
if(e&&"get" in e&&(i=e.get(b5,"value"))!==undefined){return i
}i=b5.value;
return typeof i==="string"?i.replace(ak,""):i==null?"":i
}return
}b7=bH.isFunction(b6);
return this.each(function(b8){var b9;
if(this.nodeType!==1){return
}if(b7){b9=b6.call(this,b8,bH(this).val())
}else{b9=b6
}if(b9==null){b9=""
}else{if(typeof b9==="number"){b9+=""
}else{if(bH.isArray(b9)){b9=bH.map(b9,function(ca){return ca==null?"":ca+""
})
}}}e=bH.valHooks[this.type]||bH.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,b9,"value")===undefined){this.value=b9
}})
}});
bH.extend({valHooks:{option:{get:function(e){var i=bH.find.attr(e,"value");
return i!=null?i:bH.trim(bH.text(e))
}},select:{get:function(e){var ca,b6,cc=e.options,b8=e.selectedIndex,b7=e.type==="select-one"||b8<0,cb=b7?null:[],b9=b7?b8+1:cc.length,b5=b8<0?b9:b7?b8:0;
for(;
b5<b9;
b5++){b6=cc[b5];
if((b6.selected||b5===b8)&&(C.optDisabled?!b6.disabled:b6.getAttribute("disabled")===null)&&(!b6.parentNode.disabled||!bH.nodeName(b6.parentNode,"optgroup"))){ca=bH(b6).val();
if(b7){return ca
}cb.push(ca)
}}return cb
},set:function(b9,ca){var cb,b8,b6=b9.options,e=bH.makeArray(ca),b7=b6.length;
while(b7--){b8=b6[b7];
if(bH.inArray(bH.valHooks.option.get(b8),e)>=0){try{b8.selected=cb=true
}catch(b5){b8.scrollHeight
}}else{b8.selected=false
}}if(!cb){b9.selectedIndex=-1
}return b6
}}}});
bH.each(["radio","checkbox"],function(){bH.valHooks[this]={set:function(e,i){if(bH.isArray(i)){return(e.checked=bH.inArray(bH(e).val(),i)>=0)
}}};
if(!C.checkOn){bH.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value
}
}});
var a9,b2,bN=bH.expr.attrHandle,ap=/^(?:checked|selected)$/i,bM=C.getSetAttribute,bE=C.input;
bH.fn.extend({attr:function(e,i){return aA(this,bH.attr,e,i,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bH.removeAttr(this,e)
})
}});
bH.extend({attr:function(b7,b6,b8){var e,b5,i=b7.nodeType;
if(!b7||i===3||i===8||i===2){return
}if(typeof b7.getAttribute===aB){return bH.prop(b7,b6,b8)
}if(i!==1||!bH.isXMLDoc(b7)){b6=b6.toLowerCase();
e=bH.attrHooks[b6]||(bH.expr.match.bool.test(b6)?b2:a9)
}if(b8!==undefined){if(b8===null){bH.removeAttr(b7,b6)
}else{if(e&&"set" in e&&(b5=e.set(b7,b8,b6))!==undefined){return b5
}else{b7.setAttribute(b6,b8+"");
return b8
}}}else{if(e&&"get" in e&&(b5=e.get(b7,b6))!==null){return b5
}else{b5=bH.find.attr(b7,b6);
return b5==null?undefined:b5
}}},removeAttr:function(b6,b8){var e,b7,b5=0,b9=b8&&b8.match(aE);
if(b9&&b6.nodeType===1){while((e=b9[b5++])){b7=bH.propFix[e]||e;
if(bH.expr.match.bool.test(e)){if(bE&&bM||!ap.test(e)){b6[b7]=false
}else{b6[bH.camelCase("default-"+e)]=b6[b7]=false
}}else{bH.attr(b6,e,"")
}b6.removeAttribute(bM?e:b7)
}}},attrHooks:{type:{set:function(e,i){if(!C.radioValue&&i==="radio"&&bH.nodeName(e,"input")){var b5=e.value;
e.setAttribute("type",i);
if(b5){e.value=b5
}return i
}}}}});
b2={set:function(i,b5,e){if(b5===false){bH.removeAttr(i,e)
}else{if(bE&&bM||!ap.test(e)){i.setAttribute(!bM&&bH.propFix[e]||e,e)
}else{i[bH.camelCase("default-"+e)]=i[e]=true
}}return e
}};
bH.each(bH.expr.match.bool.source.match(/\w+/g),function(b6,b5){var e=bN[b5]||bH.find.attr;
bN[b5]=bE&&bM||!ap.test(b5)?function(b8,b7,ca){var i,b9;
if(!ca){b9=bN[b7];
bN[b7]=i;
i=e(b8,b7,ca)!=null?b7.toLowerCase():null;
bN[b7]=b9
}return i
}:function(b7,i,b8){if(!b8){return b7[bH.camelCase("default-"+i)]?i.toLowerCase():null
}}
});
if(!bE||!bM){bH.attrHooks.value={set:function(i,b5,e){if(bH.nodeName(i,"input")){i.defaultValue=b5
}else{return a9&&a9.set(i,b5,e)
}}}
}if(!bM){a9={set:function(b5,b6,i){var e=b5.getAttributeNode(i);
if(!e){b5.setAttributeNode((e=b5.ownerDocument.createAttribute(i)))
}e.value=b6+="";
if(i==="value"||b6===b5.getAttribute(i)){return b6
}}};
bN.id=bN.name=bN.coords=function(b5,i,b6){var e;
if(!b6){return(e=b5.getAttributeNode(i))&&e.value!==""?e.value:null
}};
bH.valHooks.button={get:function(b5,i){var e=b5.getAttributeNode(i);
if(e&&e.specified){return e.value
}},set:a9.set};
bH.attrHooks.contenteditable={set:function(i,b5,e){a9.set(i,b5===""?false:b5,e)
}};
bH.each(["width","height"],function(b5,e){bH.attrHooks[e]={set:function(i,b6){if(b6===""){i.setAttribute(e,"auto");
return b6
}}}
})
}if(!C.style){bH.attrHooks.style={get:function(e){return e.style.cssText||undefined
},set:function(e,i){return(e.style.cssText=i+"")
}}
}var aI=/^(?:input|select|textarea|button|object)$/i,E=/^(?:a|area)$/i;
bH.fn.extend({prop:function(e,i){return aA(this,bH.prop,e,i,arguments.length>1)
},removeProp:function(e){e=bH.propFix[e]||e;
return this.each(function(){try{this[e]=undefined;
delete this[e]
}catch(i){}})
}});
bH.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(b8,b6,b9){var b5,e,b7,i=b8.nodeType;
if(!b8||i===3||i===8||i===2){return
}b7=i!==1||!bH.isXMLDoc(b8);
if(b7){b6=bH.propFix[b6]||b6;
e=bH.propHooks[b6]
}if(b9!==undefined){return e&&"set" in e&&(b5=e.set(b8,b9,b6))!==undefined?b5:(b8[b6]=b9)
}else{return e&&"get" in e&&(b5=e.get(b8,b6))!==null?b5:b8[b6]
}},propHooks:{tabIndex:{get:function(i){var e=bH.find.attr(i,"tabindex");
return e?parseInt(e,10):aI.test(i.nodeName)||E.test(i.nodeName)&&i.href?0:-1
}}}});
if(!C.hrefNormalized){bH.each(["href","src"],function(b5,e){bH.propHooks[e]={get:function(i){return i.getAttribute(e,4)
}}
})
}if(!C.optSelected){bH.propHooks.selected={get:function(i){var e=i.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}}
}bH.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bH.propFix[this.toLowerCase()]=this
});
if(!C.enctype){bH.propFix.enctype="encoding"
}var bK=/[\t\r\n\f]/g;
bH.fn.extend({addClass:function(cc){var b6,b5,cd,ca,b7,e,b8=0,b9=this.length,cb=typeof cc==="string"&&cc;
if(bH.isFunction(cc)){return this.each(function(i){bH(this).addClass(cc.call(this,i,this.className))
})
}if(cb){b6=(cc||"").match(aE)||[];
for(;
b8<b9;
b8++){b5=this[b8];
cd=b5.nodeType===1&&(b5.className?(" "+b5.className+" ").replace(bK," "):" ");
if(cd){b7=0;
while((ca=b6[b7++])){if(cd.indexOf(" "+ca+" ")<0){cd+=ca+" "
}}e=bH.trim(cd);
if(b5.className!==e){b5.className=e
}}}}return this
},removeClass:function(cc){var b6,b5,cd,ca,b7,e,b8=0,b9=this.length,cb=arguments.length===0||typeof cc==="string"&&cc;
if(bH.isFunction(cc)){return this.each(function(i){bH(this).removeClass(cc.call(this,i,this.className))
})
}if(cb){b6=(cc||"").match(aE)||[];
for(;
b8<b9;
b8++){b5=this[b8];
cd=b5.nodeType===1&&(b5.className?(" "+b5.className+" ").replace(bK," "):"");
if(cd){b7=0;
while((ca=b6[b7++])){while(cd.indexOf(" "+ca+" ")>=0){cd=cd.replace(" "+ca+" "," ")
}}e=cc?bH.trim(cd):"";
if(b5.className!==e){b5.className=e
}}}}return this
},toggleClass:function(b5,e){var i=typeof b5;
if(typeof e==="boolean"&&i==="string"){return e?this.addClass(b5):this.removeClass(b5)
}if(bH.isFunction(b5)){return this.each(function(b6){bH(this).toggleClass(b5.call(this,b6,this.className,e),e)
})
}return this.each(function(){if(i==="string"){var b8,b7=0,b6=bH(this),b9=b5.match(aE)||[];
while((b8=b9[b7++])){if(b6.hasClass(b8)){b6.removeClass(b8)
}else{b6.addClass(b8)
}}}else{if(i===aB||i==="boolean"){if(this.className){bH._data(this,"__className__",this.className)
}this.className=this.className||b5===false?"":bH._data(this,"__className__")||""
}}})
},hasClass:function(e){var b7=" "+e+" ",b6=0,b5=this.length;
for(;
b6<b5;
b6++){if(this[b6].nodeType===1&&(" "+this[b6].className+" ").replace(bK," ").indexOf(b7)>=0){return true
}}return false
}});
bH.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b5,e){bH.fn[e]=function(b6,i){return arguments.length>0?this.on(e,null,b6,i):this.trigger(e)
}
});
bH.fn.extend({hover:function(e,i){return this.mouseenter(e).mouseleave(i||e)
},bind:function(e,b5,i){return this.on(e,null,b5,i)
},unbind:function(e,i){return this.off(e,null,i)
},delegate:function(e,i,b6,b5){return this.on(i,e,b6,b5)
},undelegate:function(e,i,b5){return arguments.length===1?this.off(e,"**"):this.off(i,e||"**",b5)
}});
var bo=bH.now();
var bP=(/\?/);
var a0=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
bH.parseJSON=function(e){if(a4.JSON&&a4.JSON.parse){return a4.JSON.parse(e+"")
}var b6,b5=null,i=bH.trim(e+"");
return i&&!bH.trim(i.replace(a0,function(b9,b7,b8,ca){if(b6&&b7){b5=0
}if(b5===0){return b9
}b6=b8||b7;
b5+=!ca-!b8;
return""
}))?(Function("return "+i))():bH.error("Invalid JSON: "+e)
};
bH.parseXML=function(b6){var i,b5;
if(!b6||typeof b6!=="string"){return null
}try{if(a4.DOMParser){b5=new DOMParser();
i=b5.parseFromString(b6,"text/xml")
}else{i=new ActiveXObject("Microsoft.XMLDOM");
i.async="false";
i.loadXML(b6)
}}catch(b7){i=undefined
}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){bH.error("Invalid XML: "+b6)
}return i
};
var b3,Z,ao=/#.*$/,Q=/([?&])_=[^&]*/,ag=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,B=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,q=/^(?:GET|HEAD)$/,aJ=/^\/\//,aU=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,v={},a8={},aW="*/".concat("*");
try{Z=location.href
}catch(bh){Z=n.createElement("a");
Z.href="";
Z=Z.href
}b3=aU.exec(Z.toLowerCase())||[];
function bJ(e){return function(b8,b9){if(typeof b8!=="string"){b9=b8;
b8="*"
}var b5,b6=0,b7=b8.toLowerCase().match(aE)||[];
if(bH.isFunction(b9)){while((b5=b7[b6++])){if(b5.charAt(0)==="+"){b5=b5.slice(1)||"*";
(e[b5]=e[b5]||[]).unshift(b9)
}else{(e[b5]=e[b5]||[]).push(b9)
}}}}
}function p(e,b5,b9,b6){var i={},b7=(e===a8);
function b8(ca){var cb;
i[ca]=true;
bH.each(e[ca]||[],function(cd,cc){var ce=cc(b5,b9,b6);
if(typeof ce==="string"&&!b7&&!i[ce]){b5.dataTypes.unshift(ce);
b8(ce);
return false
}else{if(b7){return !(cb=ce)
}}});
return cb
}return b8(b5.dataTypes[0])||!i["*"]&&b8("*")
}function s(b5,b6){var e,i,b7=bH.ajaxSettings.flatOptions||{};
for(i in b6){if(b6[i]!==undefined){(b7[i]?b5:(e||(e={})))[i]=b6[i]
}}if(e){bH.extend(true,b5,e)
}return b5
}function g(cb,ca,b7){var e,b6,b5,b8,i=cb.contents,b9=cb.dataTypes;
while(b9[0]==="*"){b9.shift();
if(b6===undefined){b6=cb.mimeType||ca.getResponseHeader("Content-Type")
}}if(b6){for(b8 in i){if(i[b8]&&i[b8].test(b6)){b9.unshift(b8);
break
}}}if(b9[0] in b7){b5=b9[0]
}else{for(b8 in b7){if(!b9[0]||cb.converters[b8+" "+b9[0]]){b5=b8;
break
}if(!e){e=b8
}}b5=b5||e
}if(b5){if(b5!==b9[0]){b9.unshift(b5)
}return b7[b5]
}}function af(cf,b7,cc,b5){var i,ca,cd,b8,b6,ce={},cb=cf.dataTypes.slice();
if(cb[1]){for(cd in cf.converters){ce[cd.toLowerCase()]=cf.converters[cd]
}}ca=cb.shift();
while(ca){if(cf.responseFields[ca]){cc[cf.responseFields[ca]]=b7
}if(!b6&&b5&&cf.dataFilter){b7=cf.dataFilter(b7,cf.dataType)
}b6=ca;
ca=cb.shift();
if(ca){if(ca==="*"){ca=b6
}else{if(b6!=="*"&&b6!==ca){cd=ce[b6+" "+ca]||ce["* "+ca];
if(!cd){for(i in ce){b8=i.split(" ");
if(b8[1]===ca){cd=ce[b6+" "+b8[0]]||ce["* "+b8[0]];
if(cd){if(cd===true){cd=ce[i]
}else{if(ce[i]!==true){ca=b8[0];
cb.unshift(b8[1])
}}break
}}}}if(cd!==true){if(cd&&cf["throws"]){b7=cd(b7)
}else{try{b7=cd(b7)
}catch(b9){return{state:"parsererror",error:cd?b9:"No conversion from "+b6+" to "+ca}
}}}}}}}return{state:"success",data:b7}
}bH.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Z,type:"GET",isLocal:B.test(b3[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aW,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":bH.parseJSON,"text xml":bH.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(i,e){return e?s(s(i,bH.ajaxSettings),e):s(bH.ajaxSettings,i)
},ajaxPrefilter:bJ(v),ajaxTransport:bJ(a8),ajax:function(b9,b6){if(typeof b9==="object"){b6=b9;
b9=undefined
}b6=b6||{};
var ci,ck,ca,cp,ce,b5,cl,b7,cd=bH.ajaxSetup({},b6),cr=cd.context||cd,cg=cd.context&&(cr.nodeType||cr.jquery)?bH(cr):bH.event,cq=bH.Deferred(),cn=bH.Callbacks("once memory"),cb=cd.statusCode||{},ch={},co={},b8=0,cc="canceled",cj={readyState:0,getResponseHeader:function(i){var e;
if(b8===2){if(!b7){b7={};
while((e=ag.exec(cp))){b7[e[1].toLowerCase()]=e[2]
}}e=b7[i.toLowerCase()]
}return e==null?null:e
},getAllResponseHeaders:function(){return b8===2?cp:null
},setRequestHeader:function(i,cs){var e=i.toLowerCase();
if(!b8){i=co[e]=co[e]||i;
ch[i]=cs
}return this
},overrideMimeType:function(e){if(!b8){cd.mimeType=e
}return this
},statusCode:function(i){var e;
if(i){if(b8<2){for(e in i){cb[e]=[cb[e],i[e]]
}}else{cj.always(i[cj.status])
}}return this
},abort:function(i){var e=i||cc;
if(cl){cl.abort(e)
}cf(0,e);
return this
}};
cq.promise(cj).complete=cn.add;
cj.success=cj.done;
cj.error=cj.fail;
cd.url=((b9||cd.url||Z)+"").replace(ao,"").replace(aJ,b3[1]+"//");
cd.type=b6.method||b6.type||cd.method||cd.type;
cd.dataTypes=bH.trim(cd.dataType||"*").toLowerCase().match(aE)||[""];
if(cd.crossDomain==null){ci=aU.exec(cd.url.toLowerCase());
cd.crossDomain=!!(ci&&(ci[1]!==b3[1]||ci[2]!==b3[2]||(ci[3]||(ci[1]==="http:"?"80":"443"))!==(b3[3]||(b3[1]==="http:"?"80":"443"))))
}if(cd.data&&cd.processData&&typeof cd.data!=="string"){cd.data=bH.param(cd.data,cd.traditional)
}p(v,cd,b6,cj);
if(b8===2){return cj
}b5=bH.event&&cd.global;
if(b5&&bH.active++===0){bH.event.trigger("ajaxStart")
}cd.type=cd.type.toUpperCase();
cd.hasContent=!q.test(cd.type);
ca=cd.url;
if(!cd.hasContent){if(cd.data){ca=(cd.url+=(bP.test(ca)?"&":"?")+cd.data);
delete cd.data
}if(cd.cache===false){cd.url=Q.test(ca)?ca.replace(Q,"$1_="+bo++):ca+(bP.test(ca)?"&":"?")+"_="+bo++
}}if(cd.ifModified){if(bH.lastModified[ca]){cj.setRequestHeader("If-Modified-Since",bH.lastModified[ca])
}if(bH.etag[ca]){cj.setRequestHeader("If-None-Match",bH.etag[ca])
}}if(cd.data&&cd.hasContent&&cd.contentType!==false||b6.contentType){cj.setRequestHeader("Content-Type",cd.contentType)
}cj.setRequestHeader("Accept",cd.dataTypes[0]&&cd.accepts[cd.dataTypes[0]]?cd.accepts[cd.dataTypes[0]]+(cd.dataTypes[0]!=="*"?", "+aW+"; q=0.01":""):cd.accepts["*"]);
for(ck in cd.headers){cj.setRequestHeader(ck,cd.headers[ck])
}if(cd.beforeSend&&(cd.beforeSend.call(cr,cj,cd)===false||b8===2)){return cj.abort()
}cc="abort";
for(ck in {success:1,error:1,complete:1}){cj[ck](cd[ck])
}cl=p(a8,cd,b6,cj);
if(!cl){cf(-1,"No Transport")
}else{cj.readyState=1;
if(b5){cg.trigger("ajaxSend",[cj,cd])
}if(cd.async&&cd.timeout>0){ce=setTimeout(function(){cj.abort("timeout")
},cd.timeout)
}try{b8=1;
cl.send(ch,cf)
}catch(cm){if(b8<2){cf(-1,cm)
}else{throw cm
}}}function cf(cv,i,cw,ct){var e,cz,cx,cu,cy,cs=i;
if(b8===2){return
}b8=2;
if(ce){clearTimeout(ce)
}cl=undefined;
cp=ct||"";
cj.readyState=cv>0?4:0;
e=cv>=200&&cv<300||cv===304;
if(cw){cu=g(cd,cj,cw)
}cu=af(cd,cu,cj,e);
if(e){if(cd.ifModified){cy=cj.getResponseHeader("Last-Modified");
if(cy){bH.lastModified[ca]=cy
}cy=cj.getResponseHeader("etag");
if(cy){bH.etag[ca]=cy
}}if(cv===204||cd.type==="HEAD"){cs="nocontent"
}else{if(cv===304){cs="notmodified"
}else{cs=cu.state;
cz=cu.data;
cx=cu.error;
e=!cx
}}}else{cx=cs;
if(cv||!cs){cs="error";
if(cv<0){cv=0
}}}cj.status=cv;
cj.statusText=(i||cs)+"";
if(e){cq.resolveWith(cr,[cz,cs,cj])
}else{cq.rejectWith(cr,[cj,cs,cx])
}cj.statusCode(cb);
cb=undefined;
if(b5){cg.trigger(e?"ajaxSuccess":"ajaxError",[cj,cd,e?cz:cx])
}cn.fireWith(cr,[cj,cs]);
if(b5){cg.trigger("ajaxComplete",[cj,cd]);
if(!(--bH.active)){bH.event.trigger("ajaxStop")
}}}return cj
},getJSON:function(e,i,b5){return bH.get(e,i,b5,"json")
},getScript:function(e,i){return bH.get(e,undefined,i,"script")
}});
bH.each(["get","post"],function(e,b5){bH[b5]=function(i,b7,b8,b6){if(bH.isFunction(b7)){b6=b6||b8;
b8=b7;
b7=undefined
}return bH.ajax({url:i,type:b5,dataType:b6,data:b7,success:b8})
}
});
bH._evalUrl=function(e){return bH.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})
};
bH.fn.extend({wrapAll:function(e){if(bH.isFunction(e)){return this.each(function(b5){bH(this).wrapAll(e.call(this,b5))
})
}if(this[0]){var i=bH(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){i.insertBefore(this[0])
}i.map(function(){var b5=this;
while(b5.firstChild&&b5.firstChild.nodeType===1){b5=b5.firstChild
}return b5
}).append(this)
}return this
},wrapInner:function(e){if(bH.isFunction(e)){return this.each(function(b5){bH(this).wrapInner(e.call(this,b5))
})
}return this.each(function(){var i=bH(this),b5=i.contents();
if(b5.length){b5.wrapAll(e)
}else{i.append(e)
}})
},wrap:function(e){var i=bH.isFunction(e);
return this.each(function(b5){bH(this).wrapAll(i?e.call(this,b5):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bH.nodeName(this,"body")){bH(this).replaceWith(this.childNodes)
}}).end()
}});
bH.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||(!C.reliableHiddenOffsets()&&((e.style&&e.style.display)||bH.css(e,"display"))==="none")
};
bH.expr.filters.visible=function(e){return !bH.expr.filters.hidden(e)
};
var bv=/%20/g,aR=/\[\]$/,W=/\r?\n/g,b=/^(?:submit|button|image|reset|file)$/i,at=/^(?:input|select|textarea|keygen)/i;
function j(b5,b7,i,b6){var e;
if(bH.isArray(b7)){bH.each(b7,function(b9,b8){if(i||aR.test(b5)){b6(b5,b8)
}else{j(b5+"["+(typeof b8==="object"?b9:"")+"]",b8,i,b6)
}})
}else{if(!i&&bH.type(b7)==="object"){for(e in b7){j(b5+"["+e+"]",b7[e],i,b6)
}}else{b6(b5,b7)
}}}bH.param=function(e,b5){var b6,i=[],b7=function(b8,b9){b9=bH.isFunction(b9)?b9():(b9==null?"":b9);
i[i.length]=encodeURIComponent(b8)+"="+encodeURIComponent(b9)
};
if(b5===undefined){b5=bH.ajaxSettings&&bH.ajaxSettings.traditional
}if(bH.isArray(e)||(e.jquery&&!bH.isPlainObject(e))){bH.each(e,function(){b7(this.name,this.value)
})
}else{for(b6 in e){j(b6,e[b6],b5,b7)
}}return i.join("&").replace(bv,"+")
};
bH.fn.extend({serialize:function(){return bH.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=bH.prop(this,"elements");
return e?bH.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!bH(this).is(":disabled")&&at.test(this.nodeName)&&!b.test(e)&&(this.checked||!aL.test(e))
}).map(function(e,b5){var b6=bH(this).val();
return b6==null?null:bH.isArray(b6)?bH.map(b6,function(i){return{name:b5.name,value:i.replace(W,"\r\n")}
}):{name:b5.name,value:b6.replace(W,"\r\n")}
}).get()
}});
bH.ajaxSettings.xhr=a4.ActiveXObject!==undefined?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&bD()||bf()
}:bD;
var az=0,ai={},ax=bH.ajaxSettings.xhr();
if(a4.attachEvent){a4.attachEvent("onunload",function(){for(var e in ai){ai[e](undefined,true)
}})
}C.cors=!!ax&&("withCredentials" in ax);
ax=C.ajax=!!ax;
if(ax){bH.ajaxTransport(function(e){if(!e.crossDomain||C.cors){var i;
return{send:function(b8,b5){var b6,b7=e.xhr(),b9=++az;
b7.open(e.type,e.url,e.async,e.username,e.password);
if(e.xhrFields){for(b6 in e.xhrFields){b7[b6]=e.xhrFields[b6]
}}if(e.mimeType&&b7.overrideMimeType){b7.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b8["X-Requested-With"]){b8["X-Requested-With"]="XMLHttpRequest"
}for(b6 in b8){if(b8[b6]!==undefined){b7.setRequestHeader(b6,b8[b6]+"")
}}b7.send((e.hasContent&&e.data)||null);
i=function(cc,cb){var ca,cf,cd;
if(i&&(cb||b7.readyState===4)){delete ai[b9];
i=undefined;
b7.onreadystatechange=bH.noop;
if(cb){if(b7.readyState!==4){b7.abort()
}}else{cd={};
ca=b7.status;
if(typeof b7.responseText==="string"){cd.text=b7.responseText
}try{cf=b7.statusText
}catch(ce){cf=""
}if(!ca&&e.isLocal&&!e.crossDomain){ca=cd.text?200:404
}else{if(ca===1223){ca=204
}}}}if(cd){b5(ca,cf,cd,b7.getAllResponseHeaders())
}};
if(!e.async){i()
}else{if(b7.readyState===4){setTimeout(i)
}else{b7.onreadystatechange=ai[b9]=i
}}},abort:function(){if(i){i(undefined,true)
}}}
}})
}function bD(){try{return new a4.XMLHttpRequest()
}catch(i){}}function bf(){try{return new a4.ActiveXObject("Microsoft.XMLHTTP")
}catch(i){}}bH.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bH.globalEval(e);
return e
}}});
bH.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bH.ajaxTransport("script",function(b5){if(b5.crossDomain){var e,i=n.head||bH("head")[0]||n.documentElement;
return{send:function(b6,b7){e=n.createElement("script");
e.async=true;
if(b5.scriptCharset){e.charset=b5.scriptCharset
}e.src=b5.url;
e.onload=e.onreadystatechange=function(b9,b8){if(b8||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(e.parentNode){e.parentNode.removeChild(e)
}e=null;
if(!b8){b7(200,"success")
}}};
i.insertBefore(e,i.firstChild)
},abort:function(){if(e){e.onload(undefined,true)
}}}
}});
var br=[],a7=/(=)\?(?=&|$)|\?\?/;
bH.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=br.pop()||(bH.expando+"_"+(bo++));
this[e]=true;
return e
}});
bH.ajaxPrefilter("json jsonp",function(b6,e,b7){var b9,i,b5,b8=b6.jsonp!==false&&(a7.test(b6.url)?"url":typeof b6.data==="string"&&!(b6.contentType||"").indexOf("application/x-www-form-urlencoded")&&a7.test(b6.data)&&"data");
if(b8||b6.dataTypes[0]==="jsonp"){b9=b6.jsonpCallback=bH.isFunction(b6.jsonpCallback)?b6.jsonpCallback():b6.jsonpCallback;
if(b8){b6[b8]=b6[b8].replace(a7,"$1"+b9)
}else{if(b6.jsonp!==false){b6.url+=(bP.test(b6.url)?"&":"?")+b6.jsonp+"="+b9
}}b6.converters["script json"]=function(){if(!b5){bH.error(b9+" was not called")
}return b5[0]
};
b6.dataTypes[0]="json";
i=a4[b9];
a4[b9]=function(){b5=arguments
};
b7.always(function(){a4[b9]=i;
if(b6[b9]){b6.jsonpCallback=e.jsonpCallback;
br.push(b9)
}if(b5&&bH.isFunction(i)){i(b5[0])
}b5=i=undefined
});
return"script"
}});
bH.parseHTML=function(b7,b5,b6){if(!b7||typeof b7!=="string"){return null
}if(typeof b5==="boolean"){b6=b5;
b5=false
}b5=b5||n;
var i=a.exec(b7),e=!b6&&[];
if(i){return[b5.createElement(i[1])]
}i=bH.buildFragment([b7],b5,e);
if(e&&e.length){bH(e).remove()
}return bH.merge([],i.childNodes)
};
var b0=bH.fn.load;
bH.fn.load=function(b6,b9,ca){if(typeof b6!=="string"&&b0){return b0.apply(this,arguments)
}var e,b5,b7,i=this,b8=b6.indexOf(" ");
if(b8>=0){e=bH.trim(b6.slice(b8,b6.length));
b6=b6.slice(0,b8)
}if(bH.isFunction(b9)){ca=b9;
b9=undefined
}else{if(b9&&typeof b9==="object"){b7="POST"
}}if(i.length>0){bH.ajax({url:b6,type:b7,dataType:"html",data:b9}).done(function(cb){b5=arguments;
i.html(e?bH("<div>").append(bH.parseHTML(cb)).find(e):cb)
}).complete(ca&&function(cc,cb){i.each(ca,b5||[cc.responseText,cb,cc])
})
}return this
};
bH.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b5){bH.fn[b5]=function(i){return this.on(b5,i)
}
});
bH.expr.filters.animated=function(e){return bH.grep(bH.timers,function(i){return e===i.elem
}).length
};
var bW=a4.document.documentElement;
function bq(e){return bH.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bH.offset={setOffset:function(b6,cg,ca){var cc,b9,e,b7,b5,ce,cf,cb=bH.css(b6,"position"),b8=bH(b6),cd={};
if(cb==="static"){b6.style.position="relative"
}b5=b8.offset();
e=bH.css(b6,"top");
ce=bH.css(b6,"left");
cf=(cb==="absolute"||cb==="fixed")&&bH.inArray("auto",[e,ce])>-1;
if(cf){cc=b8.position();
b7=cc.top;
b9=cc.left
}else{b7=parseFloat(e)||0;
b9=parseFloat(ce)||0
}if(bH.isFunction(cg)){cg=cg.call(b6,ca,b5)
}if(cg.top!=null){cd.top=(cg.top-b5.top)+b7
}if(cg.left!=null){cd.left=(cg.left-b5.left)+b9
}if("using" in cg){cg.using.call(b6,cd)
}else{b8.css(cd)
}}};
bH.fn.extend({offset:function(i){if(arguments.length){return i===undefined?this:this.each(function(b9){bH.offset.setOffset(this,i,b9)
})
}var e,b8,b6={top:0,left:0},b5=this[0],b7=b5&&b5.ownerDocument;
if(!b7){return
}e=b7.documentElement;
if(!bH.contains(e,b5)){return b6
}if(typeof b5.getBoundingClientRect!==aB){b6=b5.getBoundingClientRect()
}b8=bq(b7);
return{top:b6.top+(b8.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b6.left+(b8.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}
},position:function(){if(!this[0]){return
}var b5,b6,e={top:0,left:0},i=this[0];
if(bH.css(i,"position")==="fixed"){b6=i.getBoundingClientRect()
}else{b5=this.offsetParent();
b6=this.offset();
if(!bH.nodeName(b5[0],"html")){e=b5.offset()
}e.top+=bH.css(b5[0],"borderTopWidth",true);
e.left+=bH.css(b5[0],"borderLeftWidth",true)
}return{top:b6.top-e.top-bH.css(i,"marginTop",true),left:b6.left-e.left-bH.css(i,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||bW;
while(e&&(!bH.nodeName(e,"html")&&bH.css(e,"position")==="static")){e=e.offsetParent
}return e||bW
})
}});
bH.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b5,i){var e=/Y/.test(i);
bH.fn[b5]=function(b6){return aA(this,function(b7,ca,b9){var b8=bq(b7);
if(b9===undefined){return b8?(i in b8)?b8[i]:b8.document.documentElement[ca]:b7[ca]
}if(b8){b8.scrollTo(!e?b9:bH(b8).scrollLeft(),e?b9:bH(b8).scrollTop())
}else{b7[ca]=b9
}},b5,b6,arguments.length,null)
}
});
bH.each(["top","left"],function(e,b5){bH.cssHooks[b5]=a6(C.pixelPosition,function(b6,i){if(i){i=F(b6,b5);
return X.test(i)?bH(b6).position()[b5]+"px":i
}})
});
bH.each({Height:"height",Width:"width"},function(e,i){bH.each({padding:"inner"+e,content:i,"":"outer"+e},function(b5,b6){bH.fn[b6]=function(ca,b9){var b8=arguments.length&&(b5||typeof ca!=="boolean"),b7=b5||(ca===true||b9===true?"margin":"border");
return aA(this,function(cc,cb,cd){var ce;
if(bH.isWindow(cc)){return cc.document.documentElement["client"+e]
}if(cc.nodeType===9){ce=cc.documentElement;
return Math.max(cc.body["scroll"+e],ce["scroll"+e],cc.body["offset"+e],ce["offset"+e],ce["client"+e])
}return cd===undefined?bH.css(cc,cb,b7):bH.style(cc,cb,cd,b7)
},i,b8?ca:undefined,b8,null)
}
})
});
bH.fn.size=function(){return this.length
};
bH.fn.andSelf=bH.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return bH
})
}var bj=a4.jQuery,H=a4.$;
bH.noConflict=function(e){if(a4.$===bH){a4.$=H
}if(e&&a4.jQuery===bH){a4.jQuery=bj
}return bH
};
if(typeof au===aB){a4.jQuery=a4.$=bH
}return bH
}));
jQuery.uaMatch=function(b){b=b.toLowerCase();
var a=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
};
if(!jQuery.browser){matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){browser[matched.browser]=true;
browser.version=matched.version
}if(browser.chrome){browser.webkit=true
}else{if(browser.webkit){browser.safari=true
}}jQuery.browser=browser
}window.Granite=window.Granite||{};
Granite.Sling={SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html"};
(function(a,b){a.Util=(function(){var c={patchText:function(f,e){if(e){if(!b.isArray(e)){f=f.replace("{0}",e)
}else{for(var d=0;
d<e.length;
d++){f=f.replace(("{"+d+"}"),e[d])
}}}return f
},getTopWindow:function(){var e=window;
if(this.iFrameTopWindow){return this.iFrameTopWindow
}try{while(e.parent&&e!==e.parent&&e.parent.location.href){e=e.parent
}}catch(d){}return e
},setIFrameMode:function(d){this.iFrameTopWindow=d||window
},applyDefaults:function(){var f,h=arguments[0]||{};
for(var e=1;
e<arguments.length;
e++){f=arguments[e];
for(var d in f){var g=f[d];
if(f.hasOwnProperty(d)&&g){if(typeof g==="object"&&!(g instanceof Array)){h[d]=c.applyDefaults(h[d],g)
}else{if(g instanceof Array){h[d]=g.slice(0)
}else{h[d]=g
}}}}}return h
},getKeyCode:function(d){return d.keyCode?d.keyCode:d.which
}};
return c
}())
}(Granite,jQuery));
(function(Granite,util,sling,$){Granite.HTTP=(function(){var contextPath=null,SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs).*\.js(\?.*)?$/,ENCODE_PATH_REGEXP=/[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,loginRedirected=false,self={};
self.getSchemeAndAuthority=function(url){var end;
try{if(url.indexOf("://")==-1){return""
}end=url.indexOf("/",url.indexOf("://")+3);
return(end==-1)?url:url.substring(0,end)
}catch(e){return""
}};
self.getContextPath=function(){return contextPath
};
self.detectContextPath=function(){try{if(window.CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){contextPath=result[1];
return
}}contextPath=""
}}catch(e){}};
self.externalize=function(url){try{if(url.indexOf("/")==0&&contextPath&&url.indexOf(contextPath+"/")!=0){url=contextPath+url
}}catch(e){}return url
};
self.internalize=function(url,doc){if(url.charAt(0)=="/"){if(contextPath===url){return""
}else{if(contextPath&&url.indexOf(contextPath+"/")==0){return url.substring(contextPath.length)
}else{return url
}}}if(!doc){doc=document
}var docHost=self.getSchemeAndAuthority(doc.location.href);
var urlHost=self.getSchemeAndAuthority(url);
if(docHost==urlHost){return url.substring(urlHost.length+(contextPath?contextPath.length:0))
}else{return url
}};
self.getPath=function(url){if(!url){if(window.CQURLInfo&&CQURLInfo.requestPath){return CQURLInfo.requestPath
}else{url=window.location.pathname
}}else{url=self.removeParameters(url);
url=self.removeAnchor(url)
}url=self.internalize(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!=-1){url=url.substring(0,i)
}return url
};
self.removeAnchor=function(url){if(url.indexOf("#")!=-1){return url.substring(0,url.indexOf("#"))
}return url
};
self.removeParameters=function(url){if(url.indexOf("?")!=-1){return url.substring(0,url.indexOf("?"))
}return url
};
self.encodePathOfURI=function(url){var parts,delim;
if(url.indexOf("?")!=-1){parts=url.split("?");
delim="?"
}else{if(url.indexOf("#")!=-1){parts=url.split("#");
delim="#"
}else{parts=[url]
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=self.encodePath(parts[0])
}return parts.join(delim)
};
self.encodePath=function(path){path=encodeURI(path).replace(/%5B/g,"[").replace(/%5D/g,"]");
path=path.replace(/\+/g,"%2B");
path=path.replace(/\?/g,"%3F");
path=path.replace(/;/g,"%3B");
path=path.replace(/#/g,"%23");
path=path.replace(/=/g,"%3D");
path=path.replace(/\$/g,"%24");
path=path.replace(/,/g,"%2C");
path=path.replace(/'/g,"%27");
path=path.replace(/"/g,"%22");
return path
};
self.handleLoginRedirect=function(){if(!loginRedirected){loginRedirected=true;
alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
var l=util.getTopWindow().document.location;
l.href=self.externalize(sling.LOGIN_URL)+"?resource="+encodeURIComponent(l.pathname+l.search+l.hash)
}};
self.getXhrHook=function(url,method,params){method=method||"GET";
if(window.G_XHR_HOOK&&$.isFunction(G_XHR_HOOK)){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
};
self.eval=function(response){if(typeof response!="object"){response=$.ajax({url:response,type:"get",async:false})
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
};
return self
}())
}(Granite,Granite.Util,Granite.Sling,jQuery));
(function(document,Granite,util,http,$){Granite.I18n=(function(){var dicts={},urlPrefix="/libs/cq/i18n/dict.",urlSuffix=".json",manualLocale=undefined,pseudoTranslations=false,languages=null,self={},manualDictionary=false,getDictionaryUrl=function(locale){if(manualDictionary){return urlPrefix+locale+urlSuffix
}var dictionarySrc=$("html").attr("data-i18n-dictionary-src");
if(!dictionarySrc){return urlPrefix+locale+urlSuffix
}return dictionarySrc.replace("{locale}",encodeURIComponent(locale)).replace("{+locale}",locale)
};
self.LOCALE_DEFAULT="en";
self.PSEUDO_LANGUAGE="zz";
self.PSEUDO_PATTERN_KEY="_pseudoPattern_";
self.init=function(config){config=config||{};
this.setLocale(config.locale);
this.setUrlPrefix(config.urlPrefix);
this.setUrlSuffix(config.urlSuffix)
};
self.setLocale=function(locale){if(!locale){return
}manualLocale=locale
};
self.getLocale=function(){if($.isFunction(manualLocale)){manualLocale=manualLocale()
}return manualLocale||document.documentElement.lang||self.LOCALE_DEFAULT
};
self.setUrlPrefix=function(prefix){if(!prefix){return
}urlPrefix=prefix;
manualDictionary=true
};
self.setUrlSuffix=function(suffix){if(!suffix){return
}urlSuffix=suffix;
manualDictionary=true
};
self.getDictionary=function(locale){locale=locale||self.getLocale();
if(!dicts[locale]){pseudoTranslations=(locale.indexOf(self.PSEUDO_LANGUAGE)==0);
try{var response=$.ajax(getDictionaryUrl(locale),{async:false,dataType:"json"});
dicts[locale]=$.parseJSON(response.responseText)
}catch(e){}if(!dicts[locale]){dicts[locale]={}
}}return dicts[locale]
};
self.get=function(text,snippets,note){var dict,newText,lookupText;
dict=self.getDictionary();
lookupText=pseudoTranslations?self.PSEUDO_PATTERN_KEY:note?text+" (("+note+"))":text;
if(dict){newText=dict[lookupText]
}if(!newText){newText=text
}if(pseudoTranslations){newText=newText.replace("{string}",text).replace("{comment}",note?note:"")
}return util.patchText(newText,snippets)
};
self.getVar=function(text,note){if(!text){return null
}return self.get(text,null,note)
};
self.getLanguages=function(){if(!languages){try{var json=http.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
$.each(json,function(name,lang){lang.title=self.getVar(lang.language);
if(lang.title&&lang.country&&lang.country!="*"){lang.title+=" ("+self.getVar(lang.country)+")"
}});
languages=json
}catch(e){languages={}
}}return languages
};
self.parseLocale=function(langCode){if(!langCode){return null
}var pos=langCode.indexOf("_");
if(pos<0){pos=langCode.indexOf("-")
}var language,country;
if(pos<0){language=langCode;
country=null
}else{language=langCode.substring(0,pos);
country=langCode.substring(pos+1)
}return{code:langCode,language:language,country:country}
};
return self
}())
}(document,Granite,Granite.Util,Granite.HTTP,jQuery));
(function(b,c){var a=function(){var e={visibility:"hidden",position:"absolute",width:"30px",height:"30px","-webkit-border-radius":"20px","border-radius":"20px",border:"5px solid orange","-webkit-user-select":"none","user-select":"none",opacity:"0.5","z-index":"2000","pointer-events":"none"};
var f={};
var d=[];
return{debugWithMouse:false,init:function(){var g=this;
c(document).on("touchstart.touchindicator touchmove.touchindicator touchend.touchindicator",function(i){var h=i.originalEvent.touches;
g.update(h);
return true
});
if(this.debugWithMouse){c(document).on("mousemove.touchindicator",function(h){h.identifer="fake";
g.update([h]);
return true
})
}},update:function(k){var h={};
for(var j=0;
j<k.length;
j++){var m=k[j];
var l=m.identifier;
var g=f[l];
if(!g){g=d.pop();
if(!g){g=c("<div></div>").css(e);
c("body").append(g)
}}h[l]=g;
g.offset({left:m.pageX-20,top:m.pageY-20});
g.css("visibility","visible")
}for(l in f){if(f.hasOwnProperty(l)&&!h[l]){g=f[l];
g.css("visibility","hidden");
d.push(g)
}}f=h
}}
};
b.TouchIndicator=new a()
}(Granite,jQuery));
(function(c,a,b,d){c.OptOutUtil=(function(){var e={};
var f=[];
var g=[];
e.init=function(h){if(h){f=h.cookieNames?h.cookieNames:f;
g=h.whitelistCookieNames?h.whitelistCookieNames:g
}};
e.getCookieNames=function(){return f
};
e.getWhitelistCookieNames=function(){return g
};
e.isOptedOut=function(){var k=document.cookie.split(";");
for(var j=0;
j<k.length;
j++){var h=k[j];
var l=d.trim(h.split("=")[0]);
if(d.inArray(l,e.getCookieNames())>-1){return true
}}return false
};
e.maySetCookie=function(h){return !(e.isOptedOut()&&d.inArray(h,e.getWhitelistCookieNames())===-1)
};
return e
}())
}(Granite,Granite.Util,Granite.HTTP,jQuery));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
(function(c,b,d){var a;
b.Granite=b.Granite||{};
b.Granite.$=b.Granite.$||c;
b._g=b._g||{};
b._g.$=b._g.$||c;
a=Granite.HTTP;
c.ajaxSetup({externalize:true,encodePath:true,hook:true,beforeSend:function(f,e){if(typeof G_IS_HOOKED=="undefined"||!G_IS_HOOKED(e.url)){if(e.externalize){e.url=a.externalize(e.url)
}if(e.encodePath){e.url=a.encodePathOfURI(e.url)
}}if(e.hook){var g=a.getXhrHook(e.url,e.type,e.data);
if(g){e.url=g.url;
if(g.params){if(e.type.toUpperCase()=="GET"){e.url+="?"+c.param(g.params)
}else{e.data=c.param(g.params)
}}}}},statusCode:{403:function(e){if(e.getResponseHeader("X-Reason")==="Authentication Failed"){a.handleLoginRedirect()
}}}});
c.ajaxSettings.traditional=true
}(jQuery,this));
(function(e,b){e.Granite=e.Granite||{};
if(e.Granite.csrf){return
}e.Granite.csrf={initialised:false};
function h(){this._handler=[]
}h.prototype={then:function(r,q){this._handler.push({resolve:r,reject:q})
},resolve:function(){this._execute("resolve",arguments)
},reject:function(){this._execute("reject",arguments)
},_execute:function(q,r){if(this._handler===null){throw new Error("Promise already completed.")
}for(var s=0,t=this._handler.length;
s<t;
s++){this._handler[s][q].apply(e,r)
}this.then=function(v,u){(q==="resolve"?v:u).apply(e,r)
};
this._handler=null
}};
function i(r){var s=document.location.host,u=document.location.protocol,t="//"+s,q=u+t;
return(r==q||r.slice(0,q.length+1)==q+"/")||(r==t||r.slice(0,t.length+1)==t+"/")||!(/^(\/\/|http:|https:).*/.test(r))
}var k=":cq_csrf_token",j="CSRF-Token",m="/libs/granite/csrf/token.json";
var p,g;
function l(){p=new h();
var q=new XMLHttpRequest();
q.onreadystatechange=function(){if(q.readyState===4){try{var s=JSON.parse(q.responseText);
g=s.token;
p.resolve(g)
}catch(r){p.reject(q.responseText)
}}};
q.open("GET",Granite.HTTP.externalize(m),true);
q.send()
}function a(r){if(r.action&&!i(r.getAttribute("action"))){return
}var q=r.querySelector('input[name="'+k+'"]');
if(!q){q=document.createElement("input");
q.setAttribute("type","hidden");
q.setAttribute("name",k);
r.appendChild(q)
}q.setAttribute("value",g)
}function n(q){var r=function(u){var s=u.target;
if(s.nodeName.toLowerCase()==="form"&&g){a(s)
}};
if(q.addEventListener){q.addEventListener("submit",r,true)
}else{if(q.attachEvent){q.attachEvent("submit",r)
}}}l();
n(document);
var d=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(r,q){if(i(q)&&r.toLowerCase()!=="get"){this._csrf=true
}return d.apply(this,arguments)
};
var c=XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send=function(s){if(!this._csrf){c.apply(this,arguments);
return
}if(g){this.setRequestHeader(j,g);
c.apply(this,arguments);
return
}var q=this;
var r=Array.prototype.slice.call(arguments);
p.then(function(t){q.setRequestHeader(j,t);
c.apply(q,r)
},function(){if(e.console){console.error("Unable to read CSRF meta information")
}c.apply(q,r)
})
};
var f=HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit=function(){a(this);
return f.apply(this,arguments)
};
if(e.Node){var o=Node.prototype.appendChild;
Node.prototype.appendChild=function(){var q=o.apply(this,arguments);
if(q.nodeName==="IFRAME"){if(q.contentWindow&&!q._csrf){q._csrf=true;
n(q.contentWindow.document)
}}return q
}
}setInterval(function(){l()
},300000)
})(this);
window.$CQ=_g.$;
window._g=window._g||{};
_g.shared={};
if(window.console===undefined){window.console={log:function(a){}}
}_g.shared.HTTP=new function(){var createResponse=function(){var response=new Object();
response.headers=new Object();
response.body=new Object();
return response
};
var getResponseFromXhr=function(request){if(!request){return null
}var response=createResponse();
response.body=request.responseText;
response.headers[_g.HTTP.HEADER_STATUS]=request.status;
response.responseText=request.responseText;
response.status=request.status;
return response
};
return{EXTENSION_HTML:".html",EXTENSION_JSON:".json",EXTENSION_RES:".res",HEADER_STATUS:"Status",HEADER_MESSAGE:"Message",HEADER_LOCATION:"Location",HEADER_PATH:"Path",PARAM_NO_CACHE:"cq_ck",get:function(url,callback,scope,suppressForbiddenCheck){url=_g.HTTP.getXhrHookedURL(_g.HTTP.externalize(url,true));
if(callback!=undefined){return _g.$.ajax({type:"GET",url:url,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"GET",url:url,async:false,externalize:false,encodePath:false,hook:false});
var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}return response
}catch(e){return null
}}},post:function(url,callback,params,scope,suppressErrorMsg,suppressForbiddenCheck){url=_g.HTTP.externalize(url,true);
var hook=_g.HTTP.getXhrHook(url,"POST",params);
if(hook){url=hook.url;
params=hook.params
}if(callback!=undefined){return _g.$.ajax({type:"POST",url:url,data:params,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"POST",url:url,data:params,async:false,externalize:false,encodePath:false,hook:false});
var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}return response
}catch(e){return null
}}},getParameter:function(url,name){var params=_g.HTTP.getParameters(url,name);
return params!=null?params[0]:null
},getParameters:function(url,name){var values=[];
if(!name){return null
}name=encodeURIComponent(name);
if(url.indexOf("?")==-1){return null
}if(url.indexOf("#")!=-1){url=url.substring(0,url.indexOf("#"))
}var query=url.substring(url.indexOf("?")+1);
if(query.indexOf(name)==-1){return null
}var queryPts=query.split("&");
for(var i=0;
i<queryPts.length;
i++){var paramPts=queryPts[i].split("=");
if(paramPts[0]==name){values.push(paramPts.length>1?decodeURIComponent(paramPts[1]):"")
}}return values.length>0?values:null
},addParameter:function(url,name,value){if(value&&value instanceof Array){for(var i=0;
i<value.length;
i++){url=_g.HTTP.addParameter(url,name,value[i])
}return url
}var separator=url.indexOf("?")==-1?"?":"&";
var hashIdx=url.indexOf("#");
if(hashIdx<0){return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)
}else{var hash=url.substring(hashIdx);
url=url.substring(0,hashIdx);
return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)+hash
}},setParameter:function(url,name,value){url=_g.HTTP.removeParameter(url,name);
return _g.HTTP.addParameter(url,name,value)
},removeParameter:function(url,name){var pattern0="?"+encodeURIComponent(name)+"=";
var pattern1="&"+encodeURIComponent(name)+"=";
var pattern;
if(url.indexOf(pattern0)!=-1){pattern=pattern0
}else{if(url.indexOf(pattern1)!=-1){pattern=pattern1
}else{return url
}}var indexCutStart=url.indexOf(pattern);
var begin=url.substring(0,indexCutStart);
var indexCutEnd=url.indexOf("&",indexCutStart+1);
var end="";
if(indexCutEnd!=-1){end=url.substring(indexCutEnd);
if(end.indexOf("&")==0){end=end.replace("&","?")
}}return begin+end
},removeParameters:Granite.HTTP.removeParameters,addSelector:function(url,selector,index){if(!index){index=0
}var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var sIndex=url.lastIndexOf("/");
var main=url.substring(sIndex);
if(main.indexOf("."+selector+".")==-1){var path=url.substring(0,sIndex);
var obj=main.split(".");
var newMain="";
var delim="";
if(index>obj.length-2||index==-1){index=obj.length-2
}for(var i=0;
i<obj.length;
i++){newMain+=delim+obj[i];
delim=".";
if(index==i){newMain+=delim+selector
}}return path+newMain+post
}else{return url
}},setSelector:function(url,selector,index){var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var selectors=_g.HTTP.getSelectors(url);
var ext=url.substring(url.lastIndexOf("."));
url=url.substring(0,url.lastIndexOf("."));
var fragment=(selectors.length>0)?url.replace("."+selectors.join("."),""):url;
if(selectors.length>0){for(var i=0;
i<selectors.length;
i++){if(index==i){fragment+="."+selector
}else{fragment+="."+selectors[i]
}}}else{fragment+="."+selector
}return fragment+ext+post
},addSelectors:function(url,selectors){var res=url;
if(url&&selectors&&selectors.length){for(var i=0;
i<selectors.length;
i++){res=_g.HTTP.addSelector(res,selectors[i],i)
}}return res
},getAnchor:function(url){if(url.indexOf("#")!=-1){return url.substring(url.indexOf("#")+1)
}return""
},setAnchor:function(url,anchor){return _g.HTTP.removeAnchor(url)+"#"+anchor
},removeAnchor:Granite.HTTP.removeAnchor,noCaching:function(url){return _g.HTTP.setParameter(url,_g.HTTP.PARAM_NO_CACHE,new Date().valueOf())
},buildPostResponseFromNode:function(node,response){if(!node){return null
}if(response==undefined){response=createResponse()
}for(var i=0;
i<node.childNodes.length;
i++){var child=node.childNodes[i];
if(child.tagName){if(child.id){if(child.href){response.headers[child.id]=child.href
}else{response.headers[child.id]=child.innerHTML
}}response=_g.HTTP.buildPostResponseFromNode(child,response)
}}return response
},buildPostResponseFromHTML:function(html){var response=createResponse();
try{if(html.responseText!=undefined){html=html.responseText
}else{if(typeof html!="string"){html=html.toString()
}}var div=document.createElement("div");
div.innerHTML=html;
response=_g.HTTP.buildPostResponseFromNode(div,response);
div=null
}catch(e){}return response
},getCookie:function(name){var cname=encodeURIComponent(name)+"=";
var dc=document.cookie;
if(dc.length>0){var begin=dc.indexOf(cname);
if(begin!=-1){begin+=cname.length;
var end=dc.indexOf(";",begin);
if(end==-1){end=dc.length
}return decodeURIComponent(dc.substring(begin,end))
}}return null
},setCookie:function(name,value,path,days,domain,secure){if(typeof(days)!="number"){days=7
}var date;
if(days>0){date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000))
}else{date=new Date(0)
}document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+"; "+(days!=0?"expires="+date.toGMTString()+"; ":"")+(domain?"domain="+domain+"; ":"")+(path?"path="+path:"")+(secure?"; secure":"");
return value
},clearCookie:function(name,path,domain,secure){_g.HTTP.setCookie(name,"null",path||"",-1,domain||"",secure||"")
},getSchemeAndAuthority:Granite.HTTP.getSchemeAndAuthority,getContextPath:Granite.HTTP.getContextPath,externalize:function(url,encode){if((typeof G_IS_HOOKED!="undefined")&&G_IS_HOOKED(url)){return url
}if(encode){url=_g.HTTP.encodePathOfURI(url)
}url=Granite.HTTP.externalize(url);
return url
},internalize:Granite.HTTP.internalize,getPath:Granite.HTTP.getPath,getSuffix:function(){if(window.CQURLInfo&&CQURLInfo.suffix){return CQURLInfo.suffix
}return null
},getSelectors:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.selectors){return CQURLInfo.selectors
}}var selectors=[];
url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var fragment=url.substring(url.lastIndexOf("/"));
if(fragment){var split=fragment.split(".");
if(split.length>2){for(var i=0;
i<split.length;
i++){if(i>0&&i<split.length-1){selectors.push(split[i])
}}}}return selectors
},getExtension:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.extension){return CQURLInfo.extension
}}url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var pos=url.lastIndexOf(".");
if(pos<0){return""
}url=url.substring(pos+1);
pos=url.indexOf("/");
if(pos<0){return url
}return url.substring(0,pos)
},encodePathOfURI:Granite.HTTP.encodePathOfURI,encodePath:Granite.HTTP.encodePath,eval:Granite.HTTP.eval,isOkStatus:function(status){try{return(new String(status).indexOf("2")==0)
}catch(e){return false
}},isOk:function(response){try{return _g.HTTP.isOkStatus(response.headers[_g.HTTP.HEADER_STATUS])
}catch(e){return false
}},handleForbidden:function(response,suppressLogin){try{if(response[_g.HTTP.HEADER_STATUS.toLowerCase()]==403){Granite.HTTP.handleLoginRedirect();
return true
}return false
}catch(e){return false
}},getXhrHook:Granite.HTTP.getXhrHook,getXhrHookedURL:function(url,method,params){var hook=_g.HTTP.getXhrHook(url,method,params);
if(hook){return hook.url
}return url
},reloadHook:function(url){if(typeof G_RELOAD_HOOK!="undefined"&&_g.$.isFunction(G_RELOAD_HOOK)){if(CQURLInfo.selectorString!=""){url=_g.HTTP.addSelector(url,CQURLInfo.selectorString)
}url=G_RELOAD_HOOK(url)||url
}return url
}}
};
_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){return{reload:function(win,url,preventHistory){if(!win){win=window
}if(!url){url=_g.HTTP.noCaching(win.location.href)
}url=_g.HTTP.reloadHook(url);
if(preventHistory){win.location.replace(url)
}else{win.location.href=url
}},load:function(url,preventHistory){_g.Util.reload(window,url,preventHistory)
},open:function(url,win,name,options){if(!win){win=window
}if(!url){return
}url=_g.HTTP.reloadHook(url);
if(!name){name=""
}if(!options){options=""
}return win.open(url,name,options)
},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")
},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")
},ellipsis:function(value,length,word){if(value&&value.length>length){if(word){var vs=value.substr(0,length-2);
var index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"),vs.lastIndexOf(";"));
if(index==-1||index<(length-15)){return value.substr(0,length-3)+"..."
}else{return vs.substr(0,index)+"..."
}}else{return value.substr(0,length-3)+"..."
}}return value
},patchText:Granite.Util.patchText,eval:function(response){return _g.HTTP.eval(response)
},getTopWindow:Granite.Util.getTopWindow,setIFrameMode:Granite.Util.setIFrameMode}
};
_g.Util=_g.shared.Util;
_g.shared.Sling=function(){return{SELECTOR_INFINITY:Granite.Sling.SELECTOR_INFINITY,CHARSET:Granite.Sling.CHARSET,STATUS:Granite.Sling.STATUS,STATUS_BROWSER:Granite.Sling.STATUS_BROWSER,OPERATION:Granite.Sling.OPERATION,OPERATION_DELETE:Granite.Sling.OPERATION_DELETE,OPERATION_MOVE:Granite.Sling.OPERATION_MOVE,DELETE_SUFFIX:Granite.Sling.DELETE_SUFFIX,TYPEHINT_SUFFIX:Granite.Sling.TYPEHINT_SUFFIX,COPY_SUFFIX:Granite.Sling.COPY_SUFFIX,MOVE_SUFFIX:Granite.Sling.MOVE_SUFFIX,ORDER:Granite.Sling.ORDER,REPLACE:Granite.Sling.REPLACE,DESTINATION:Granite.Sling.DESTINATION,SAVE_PARAM_PREFIX:Granite.Sling.SAVE_PARAM_PREFIX,IGNORE_PARAM:Granite.Sling.IGNORE_PARAM,REQUEST_LOGIN_PARAM:Granite.Sling.REQUEST_LOGIN_PARAM,LOGIN_URL:Granite.Sling.LOGIN_URL,LOGOUT_URL:Granite.Sling.LOGOUT_URL,processBinaryData:function(a){if(a&&a[":jcr:data"]!=undefined){var b=new Object();
b.size=a[":jcr:data"];
b.type=a["jcr:mimeType"];
b.date=a["jcr:lastModified"];
a=b
}return a
},getContentPath:function(c,a,b){var d=a;
if(d.lastIndexOf(".")>d.lastIndexOf("/")){d=d.substr(0,d.indexOf(".",d.lastIndexOf("/")))
}if(c){if(c.indexOf("/")==0){d=c
}else{if(b){while(c.indexOf("../")==0){c=c.substring(3);
d=d.substring(0,d.lastIndexOf("/"))
}}c=c.replace("./","");
d=d+"/"+c
}}return d
}}
}();
_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){return{getXSSPropertyName:function(a){if(!a){return""
}if(_g.XSS.KEY_REGEXP.test(a)){return a
}return a+=_g.XSS.KEY_SUFFIX
},getXSSRecordPropertyValue:function(e,c,a){var d="";
if(e&&c){var b=e.get(this.getXSSPropertyName(c));
if(b){d=b
}else{d=e.get(c)
}if(a&&!isNaN(a)){d=_g.Util.ellipsis(d,a,true)
}}return d
},getXSSTablePropertyValue:function(d,c,a){var e="";
if(d&&c){var b=d[this.getXSSPropertyName(c)];
if(b){e=b
}else{e=d[c]
}if(a&&!isNaN(a)){e=_g.Util.ellipsis(e,a,true)
}}return e
},getXSSValue:function(a){if(a){return _g.Util.htmlEncode(a)
}else{return""
}},updatePropertyName:function(a,b){if(!a||!b||!a[b]){return
}if(a.xssProtect&&!a.xssKeepPropName){a[b]=this.getXSSPropertyName(a[b])
}},xssPropertyRenderer:function(d,b,c,a){if(a&&a.dataIndex&&c&&c.data&&c.data[this.getXSSPropertyName(a.dataIndex)]){d=c.data[this.getXSSPropertyName(a.dataIndex)];
if(a.ellipsisLimit&&!isNaN(a.ellipsisLimit)){d=_g.Util.ellipsis(d,a.ellipsisLimit,true)
}return d
}else{if(d){return d
}else{return""
}}}}
};
_g.XSS=_g.shared.XSS;
_g.XSS.KEY_SUFFIX="_xss";
_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=Granite.I18n;
_g.I18n=_g.shared.I18n;
_g.shared.I18n.getMessage=Granite.I18n.get;
_g.shared.I18n.getVarMessage=Granite.I18n.getVar;
_g.shared.String=new function(){return{startsWith:function(d,b){if(d==null||b==null){return d==null&&b==null
}if(b.length>d.length){return false
}var a=d.toString();
var c=b.toString();
return(a.indexOf(c)==0)
},endsWith:function(b,a){if(b==null||a==null){return b==null&&a==null
}if(a.length>b.length){return false
}b=b.toString();
a=a.toString();
return(b.lastIndexOf(a)==(b.length-a.length))
},contains:function(b,a){if(b==null||a==null){return false
}b=b.toString();
a=a.toString();
return(b.indexOf(a)>=0)
}}
};
_g.String=_g.shared.String;
_g.shared.ClientSidePersistence=function(a){var b={PERSISTENCE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("ClientSidePersistence"),config:{},cache:null,getMode:function(){return this.config.mode
},getWindow:function(){return this.config.window||_g.shared.Util.getTopWindow()
},debug:function(){if(console){var c=this.getMap();
var e="[ClientSidePersistence -> mode="+this.getMode().name+", container="+(this.config.container||"")+"]\n";
var d=0;
var f=new RegExp("^"+this.config.container+"/");
for(var h=0,k=Object.keys(c).sort(),i=null;
h<k.length;
h++){var j=k[h];
if(this.config.container&&(typeof(j)=="string")&&!j.match(f)){continue
}var g=c[j];
e+="-["+ ++d+"]-> '"+j.replace(f,"")+"' = '"+decodeURIComponent(g)+"'\n"
}if(!d){e+="(container is empty)"
}console.log(e)
}},keyName:function(c){return(this.config.container?(this.config.container+"/"):"")+c
},getKeys:function(){var f=this.getMap();
var e=[];
if(f){for(var c in f){if(this.config.container){if(c.indexOf(this.config.container+"/")==0){var d=c.substring(this.config.container.length+1);
e.push(d)
}}else{e.push(c)
}}}return e
},get:function(c){var d=this.getMap()[this.keyName(c)];
return d?decodeURIComponent(d):d
},set:function(d,g){d=(typeof d==="string")?d.replace(/:=/g,""):"";
var f={key:d};
d=this.keyName(d);
if(!d.length){return
}var c=[];
var h=this.getMap();
f.action=h[d]?"update":"set";
if(g){h[d]=encodeURIComponent(g)
}else{f.action="remove";
delete h[d]
}for(var e in h){c.push(e+":="+h[e])
}this.cache=h;
this.write(c.join("|"));
_g.$.extend(f,{value:g,mode:this.getMode().name,container:this.config.container});
_g.$(_g.shared.ClientSidePersistence).trigger(_g.shared.ClientSidePersistence.EVENT_NAME,f)
},getMap:function(){if(!this.cache||!this.config.useCache){var f=this.read().split("|");
var d={};
for(var c=0;
c<f.length;
c++){var g=f[c].split(":=");
var e=g[0];
if(e&&e.length){d[e]=g[1]||""
}}this.cache=d
}return this.cache
},remove:function(c){this.set(c)
},clearMap:function(){this.write()
},read:function(){return this.config.mode.read(this)||""
},write:function(c){this.config.mode.write(this,c||"")
}};
_g.$.extend(b.config,_g.shared.ClientSidePersistence.getDefaultConfig(),a);
if(b.config.useContainer===false){b.config.container=null
}if((b.config.mode===_g.shared.ClientSidePersistence.MODE_SESSION)&&(!window.sessionStorage||!window.sessionStorage.getItem||!window.sessionStorage.setItem)){b.config.mode=_g.shared.ClientSidePersistence.MODE_LOCAL
}if((b.config.mode===_g.shared.ClientSidePersistence.MODE_LOCAL)&&(!window.localStorage||!window.localStorage.getItem||!window.localStorage.setItem)){b.config.mode=_g.shared.ClientSidePersistence.MODE_WINDOW
}return b
};
_g.shared.ClientSidePersistence.EVENT_NAME="ClientSidePersistence";
_g.shared.ClientSidePersistence.MODE_SESSION={name:"session",read:function(a){return a.getWindow().sessionStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().sessionStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.MODE_LOCAL={name:"local",read:function(a){return a.getWindow().localStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().localStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.decoratePersistenceName=function(a){return a
};
_g.shared.ClientSidePersistence.MODE_WINDOW={name:"window",read:function(a){return a.getWindow().name
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()){return
}a.getWindow().name=b
}};
_g.shared.ClientSidePersistence.MODE_COOKIE={COOKIE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),name:"cookie",read:function(a){return _g.shared.ClientSidePersistence.CookieHelper.read(this.COOKIE_NAME)
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()&&!Granite.OptOutUtil.maySetCookie(this.COOKIE_NAME)){return
}if(!b){_g.shared.ClientSidePersistence.CookieHelper.erase(this.COOKIE_NAME)
}else{_g.shared.ClientSidePersistence.CookieHelper.set(this.COOKIE_NAME,b,365)
}}};
_g.shared.ClientSidePersistence.getDefaultConfig=function(){return{window:_g.shared.Util.getTopWindow(),useCache:false,container:null,mode:_g.shared.ClientSidePersistence.MODE_LOCAL}
};
_g.shared.ClientSidePersistence.CookieHelper={set:function(c,d,e){var a="";
if(e){var b=new Date();
b.setTime(b.getTime()+(e*24*60*60*1000));
a="; expires="+b.toGMTString()
}if(d){d=encodeURIComponent(d)
}document.cookie=c+"="+d+a+"; path=/"
},read:function(b){var f=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var g=a[d];
while(g.charAt(0)==" "){g=g.substring(1,g.length)
}if(g.indexOf(f)==0){var e=g.substring(f.length,g.length);
return e?decodeURIComponent(e):null
}}return null
},erase:function(a){_g.shared.ClientSidePersistence.CookieHelper.set(a,"",-1)
}};
_g.shared.ClientSidePersistence.clearAllMaps=function(){var a=[_g.shared.ClientSidePersistence.MODE_COOKIE,_g.shared.ClientSidePersistence.MODE_LOCAL,_g.shared.ClientSidePersistence.MODE_SESSION,_g.shared.ClientSidePersistence.MODE_WINDOW];
_g.$.each(a,function(d,c){var b=new _g.shared.ClientSidePersistence({mode:c});
b.clearMap()
})
};
_g.I18n.init();
window.CQ=window.CQ||{};
CQ.shared=_g.shared;
CQ.Sling=CQ.shared.Sling;
CQ.I18n=CQ.shared.I18n;
G_XHR_HOOK=typeof CQ_XHR_HOOK!="undefined"?CQ_XHR_HOOK:undefined;
G_RELOAD_HOOK=typeof CQ_RELOAD_HOOK!="undefined"?CQ_RELOAD_HOOK:undefined;
G_IS_HOOKED=typeof CQ_IS_HOOKED!="undefined"?CQ_IS_HOOKED:undefined;
G_CONTENT_PATH=typeof CQ_CONTENT_PATH!="undefined"?CQ_CONTENT_PATH:undefined;
CQ.shared.Form=function(){var e=function(){var j=new Object();
var k=document.getElementsByTagName("label");
for(var h=0;
h<k.length;
h++){var g=k[h].htmlFor;
if(g){j[g]=k[h]
}}return j
};
var f=function(h){var i="";
var g=function(k){if(k.nodeType==3){i+=k.nodeValue
}if(k.nodeName.toLowerCase()=="select"||k.nodeName.toLowerCase()=="input"||k.nodeName.toLowerCase()=="textarea"||k.nodeName.toLowerCase()=="button"){return
}for(var j=0;
k.childNodes&&j<k.childNodes.length;
j++){g(k.childNodes[j])
}};
g(h);
return i
};
var c=function(g){return g.replace(/-\d+$/,"")
};
var b=function(h,g){if(!g){g=e()
}if(g[h]){return f(g[h])
}return null
};
var a=function(i){var h;
var j=i.nodeName.toLowerCase();
var g=d(i,"type")?i.getAttribute("type"):undefined;
if(j=="input"){if(g=="radio"||g=="checkbox"){if(d(i,"checked")){h=i.getAttribute("value")
}}else{if(i.type=="text"){h=i.defaultValue
}else{h=i.value
}}}else{if(j=="textarea"){h=i.value
}else{if(j=="option"&&d(i,"selected")){h=i.getAttribute("value")
}}}return h
};
var d=function(h,g){if(h==null){return false
}return($CQ(h).attr(g)!=undefined)
};
return{searchArray:function(h,g,k){for(var j=0;
j<h.length;
j++){if(h[j][g]&&h[j][g]==k){return h[j]
}}return null
},getLabelForField:function(g,i){if(!i){i=e()
}var j=g.getAttribute("id");
if(j&&i[j]){return f(i[j])
}var h=g.parentNode;
while(h){if(h.nodeName.toLowerCase()=="label"){return f(h)
}h=h.parentNode
}return g.getAttribute("name")
},getFields:function(){var j=e();
var g=[];
var h=function(n,o){var m=n.getAttribute("name");
var p=n.nodeName.toLowerCase();
var r;
if(p=="input"||p=="textarea"){var l=d(n,"type")?n.getAttribute("type").toLowerCase():"text";
if(l=="button"||l=="submit"||l=="reset"){return
}r=CQ.shared.Form.searchArray(g,"value",m);
if(!r){g.push({text:CQ.shared.Form.getLabelForField(n,j),value:m,name:m,enumeration:undefined,local:o,type:p,defaultValue:a(n),node:n});
r=g[g.length-1]
}if(l=="radio"||(r.local&&l=="checkbox")){if(!r.enumeration){var s=n.getAttribute("id");
if(s){var u=c(s);
var t=b(u,j);
r.text=(t?t:m)
}else{r.text=m
}r.enumeration=[]
}r.enumeration.push({text:CQ.shared.Form.getLabelForField(n,j),value:n.getAttribute("value"),defaultValue:a(n),node:n})
}}else{if(p=="select"){g.push({text:CQ.shared.Form.getLabelForField(n,j),value:m,name:m,enumeration:[],local:o,type:p,defaultValue:undefined,node:n});
r=g[g.length-1];
var k=n.getElementsByTagName("option");
for(var q=0;
q<k.length;
q++){r.enumeration.push({text:k[q].innerHTML,value:k[q].getAttribute("value"),defaultValue:a(k[q]),node:k[q]})
}}}};
var i=function(m,l){if(m.nodeName.toLowerCase()=="div"&&$CQ(m).hasClass("section")){l=true
}if(m.getAttribute&&m.getAttribute("name")){h(m,l)
}for(var k=0;
m.childNodes&&k<m.childNodes.length;
k++){var n=m.childNodes[k];
if(n.nodeType==1){i(n,l)
}}};
i(document,false);
return g
}}
}();
CQ.shared.User=function(infoData){return{data:null,language:null,userPropsPath:null,getUserPropsUrl:function(){if(!this.userPropsPath){this.userPropsPath=CQ.shared.User.PROXY_URI
}return this.userPropsPath
},load:function(){var url=this.getUserPropsUrl();
url=CQ.shared.HTTP.noCaching(url);
var response=CQ.shared.HTTP.get(url);
if(CQ.shared.HTTP.isOk(response)){this.data=CQ.shared.Util.eval(response)
}},init:function(infoData,force){if(!this.initialized||force){if(infoData){this.data=infoData
}else{this.load()
}this.initialized=true
}return this.data
},lazyInit:function(){this.lazyLoad=function(){this.load();
this.initialized=true
}
},isInitialized:function(){return this.initialized
},getLanguage:function(){if(!this.isInitialized()&&this.lazyLoad){this.lazyLoad.call(this)
}this.language=this.data&&this.data.preferences&&this.data.preferences["language"]?this.data.preferences["language"]:"en";
return this.language
}}
}();
CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);
CQ.shared.User.lazyInit();
CQ.shared.I18n.init({locale:function(){return CQ.shared.User.getLanguage()
},urlPrefix:"/libs/cq/i18n/dict."});
(function(){var l;
var g=[],r=[];
var H=0;
var a=+new Date+"";
var b=75;
var j=40;
var E=(" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
var w=/\b__p \+= '';/g,R=/\b(__p \+=) '' \+/g,e=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var z=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var C=/\w*$/;
var p=/^\s*function[ \n\r\t]+\w/;
var m=/<%=([\s\S]+?)%>/g;
var W=RegExp("^["+E+"]*0+(?=.$)");
var P=/($^)/;
var i=/\bthis\b/;
var T=/['\n\r\t\u2028\u2029\\]/g;
var x=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"];
var Z=0;
var S="[object Arguments]",t="[object Array]",A="[object Boolean]",I="[object Date]",ab="[object Function]",F="[object Number]",c="[object Object]",J="[object RegExp]",G="[object String]";
var u={};
u[ab]=false;
u[S]=u[t]=u[A]=u[I]=u[F]=u[c]=u[J]=u[G]=true;
var M={leading:false,maxWait:0,trailing:false};
var k={configurable:false,enumerable:false,value:null,writable:false};
var D={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var L={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var B=(D[typeof window]&&window)||this;
var U=D[typeof exports]&&exports&&!exports.nodeType&&exports;
var y=D[typeof module]&&module&&!module.nodeType&&module;
var O=y&&y.exports===U&&U;
var v=D[typeof global]&&global;
if(v&&(v.global===v||v.window===v)){B=v
}function h(ag,af,ad){var ac=(ad||0)-1,ae=ag?ag.length:0;
while(++ac<ae){if(ag[ac]===af){return ac
}}return -1
}function N(ac,af){var ae=typeof af;
ac=ac.cache;
if(ae=="boolean"||af==null){return ac[af]?0:-1
}if(ae!="number"&&ae!="string"){ae="object"
}var ad=ae=="number"?af:a+af;
ac=(ac=ac[ae])&&ac[ad];
return ae=="object"?(ac&&h(ac,af)>-1?0:-1):(ac?0:-1)
}function K(ag){var ad=this.cache,af=typeof ag;
if(af=="boolean"||ag==null){ad[ag]=true
}else{if(af!="number"&&af!="string"){af="object"
}var ae=af=="number"?ag:a+ag,ac=ad[af]||(ad[af]={});
if(af=="object"){(ac[ae]||(ac[ae]=[])).push(ag)
}else{ac[ae]=true
}}}function o(ac){return ac.charCodeAt(0)
}function V(af,ae){var ai=af.criteria,ak=ae.criteria,ag=-1,ah=ai.length;
while(++ag<ah){var aj=ai[ag],ad=ak[ag];
if(aj!==ad){if(aj>ad||typeof aj=="undefined"){return 1
}if(aj<ad||typeof ad=="undefined"){return -1
}}}return af.index-ae.index
}function Y(aj){var af=-1,ah=aj.length,ai=aj[0],ae=aj[(ah/2)|0],ag=aj[ah-1];
if(ai&&typeof ai=="object"&&ae&&typeof ae=="object"&&ag&&typeof ag=="object"){return false
}var ad=q();
ad["false"]=ad["null"]=ad["true"]=ad["undefined"]=false;
var ac=q();
ac.array=aj;
ac.cache=ad;
ac.push=K;
while(++af<ah){ac.push(aj[af])
}return ac
}function f(ac){return"\\"+L[ac]
}function d(){return g.pop()||[]
}function q(){return r.pop()||{array:null,cache:null,criteria:null,"false":false,index:0,"null":false,number:null,object:null,push:null,string:null,"true":false,"undefined":false,value:null}
}function Q(ac){ac.length=0;
if(g.length<j){g.push(ac)
}}function n(ad){var ac=ad.cache;
if(ac){n(ac)
}ad.array=ad.cache=ad.criteria=ad.object=ad.number=ad.string=ad.value=null;
if(r.length<j){r.push(ad)
}}function s(ah,ag,ad){ag||(ag=0);
if(typeof ad=="undefined"){ad=ah?ah.length:0
}var ae=-1,af=ad-ag||0,ac=Array(af<0?0:af);
while(++ae<af){ac[ae]=ah[ag+ae]
}return ac
}function X(ah){ah=ah?aa.defaults(B.Object(),ah,aa.pick(B,x)):B;
var aF=ah.Array,cd=ah.Boolean,ce=ah.Date,aY=ah.Function,b3=ah.Math,bd=ah.Number,c1=ah.Object,cF=ah.RegExp,co=ah.String,aG=ah.TypeError;
var b7=[];
var cJ=c1.prototype;
var cV=ah._;
var az=cJ.toString;
var b0=cF("^"+co(az).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");
var aV=b3.ceil,bR=ah.clearTimeout,cN=b3.floor,bB=aY.prototype.toString,ar=b4(ar=c1.getPrototypeOf)&&ar,aZ=cJ.hasOwnProperty,aw=b7.push,aW=ah.setTimeout,cm=b7.splice,cI=b7.unshift;
var cG=(function(){try{var dh={},df=b4(df=c1.defineProperty)&&df,at=df(dh,dh,dh)&&df
}catch(dg){}return at
}());
var av=b4(av=c1.create)&&av,be=b4(be=aF.isArray)&&be,aI=ah.isFinite,bD=ah.isNaN,ci=b4(ci=c1.keys)&&ci,cj=b3.max,am=b3.min,da=ah.parseInt,bJ=b3.random;
var cK={};
cK[t]=aF;
cK[A]=cd;
cK[I]=ce;
cK[ab]=aY;
cK[c]=c1;
cK[F]=bd;
cK[J]=cF;
cK[G]=co;
function aT(at){return(at&&typeof at=="object"&&!bC(at)&&aZ.call(at,"__wrapped__"))?at:new cP(at)
}function cP(df,at){this.__chain__=!!at;
this.__wrapped__=df
}cP.prototype=aT.prototype;
var aE=aT.support={};
aE.funcDecomp=!b4(ah.WinRTError)&&i.test(X);
aE.funcNames=typeof aY.name=="string";
aT.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:m,variable:"",imports:{_:aT}};
function ap(di){var dh=di[0],df=di[2],at=di[4];
function dg(){if(df){var dl=s(df);
aw.apply(dl,arguments)
}if(this instanceof dg){var dk=bZ(dh.prototype),dj=dh.apply(dk,dl||arguments);
return dd(dj)?dj:dk
}return dh.apply(at,dl||arguments)
}ad(dg,di);
return dg
}function bi(dn,dk,dp,di,dg){if(dp){var dq=dp(dn);
if(typeof dq!="undefined"){return dq
}}var dh=dd(dn);
if(dh){var dl=az.call(dn);
if(!u[dl]){return dn
}var dm=cK[dl];
switch(dl){case A:case I:return new dm(+dn);
case F:case G:return new dm(dn);
case J:dq=dm(dn.source,C.exec(dn));
dq.lastIndex=dn.lastIndex;
return dq
}}else{return dn
}var dj=bC(dn);
if(dk){var df=!di;
di||(di=d());
dg||(dg=d());
var at=di.length;
while(at--){if(di[at]==dn){return dg[at]
}}dq=dj?dm(dn.length):{}
}else{dq=dj?s(dn):br({},dn)
}if(dj){if(aZ.call(dn,"index")){dq.index=dn.index
}if(aZ.call(dn,"input")){dq.input=dn.input
}}if(!dk){return dq
}di.push(dn);
dg.push(dq);
(dj?bA:bN)(dn,function(dr,ds){dq[ds]=bi(dr,dk,dp,di,dg)
});
if(df){Q(di);
Q(dg)
}return dq
}function bZ(at,df){return dd(at)?av(at):{}
}if(!av){bZ=(function(){function at(){}return function(dg){if(dd(dg)){at.prototype=dg;
var df=new at;
at.prototype=null
}return df||ah.Object()
}
}())
}function ct(df,at,di){if(typeof df!="function"){return bj
}if(typeof at=="undefined"||!("prototype" in df)){return df
}var dh=df.__bindData__;
if(typeof dh=="undefined"){if(aE.funcNames){dh=!df.name
}dh=dh||!aE.funcDecomp;
if(!dh){var dg=bB.call(df);
if(!aE.funcNames){dh=!p.test(dg)
}if(!dh){dh=i.test(dg);
ad(df,dh)
}}}if(dh===false||(dh!==true&&dh[1]&1)){return df
}switch(di){case 1:return function(dj){return df.call(at,dj)
};
case 2:return function(dk,dj){return df.call(at,dk,dj)
};
case 3:return function(dk,dj,dl){return df.call(at,dk,dj,dl)
};
case 4:return function(dj,dl,dk,dm){return df.call(at,dj,dl,dk,dm)
}
}return bX(df,at)
}function bl(dh){var dj=dh[0],dg=dh[1],dl=dh[2],df=dh[3],dp=dh[4],at=dh[5];
var di=dg&1,dr=dg&2,dn=dg&4,dm=dg&8,dq=dj;
function dk(){var dt=di?dp:this;
if(dl){var du=s(dl);
aw.apply(du,arguments)
}if(df||dn){du||(du=s(arguments));
if(df){aw.apply(du,df)
}if(dn&&du.length<at){dg|=16&~32;
return bl([dj,(dm?dg:dg&~3),du,null,dp,at])
}}du||(du=arguments);
if(dr){dj=dt[dq]
}if(this instanceof dk){dt=bZ(dj.prototype);
var ds=dj.apply(dt,du);
return dd(ds)?ds:dt
}return dj.apply(dt,du)
}ad(dk,dh);
return dk
}function dc(dh,dl){var dg=-1,di=b5(),df=dh?dh.length:0,dj=df>=b&&di===h,dm=[];
if(dj){var at=Y(dl);
if(at){di=N;
dl=at
}else{dj=false
}}while(++dg<df){var dk=dh[dg];
if(di(dl,dk)<0){dm.push(dk)
}}if(dj){n(dl)
}return dm
}function bT(dh,dj,df,dk){var dg=(dk||0)-1,at=dh?dh.length:0,dp=[];
while(++dg<at){var dl=dh[dg];
if(dl&&typeof dl=="object"&&typeof dl.length=="number"&&(bC(dl)||a4(dl))){if(!dj){dl=bT(dl,dj,df)
}var dn=-1,di=dl.length,dm=dp.length;
dp.length+=di;
while(++dn<di){dp[dm++]=dl[dn]
}}else{if(!df){dp.push(dl)
}}}return dp
}function bb(dx,dw,dl,dt,dz,dy){if(dl){var dr=dl(dx,dw);
if(typeof dr!="undefined"){return !!dr
}}if(dx===dw){return dx!==0||(1/dx==1/dw)
}var dk=typeof dx,di=typeof dw;
if(dx===dx&&!(dx&&D[dk])&&!(dw&&D[di])){return false
}if(dx==null||dw==null){return dx===dw
}var df=az.call(dx),dp=az.call(dw);
if(df==S){df=c
}if(dp==S){dp=c
}if(df!=dp){return false
}switch(df){case A:case I:return +dx==+dw;
case F:return(dx!=+dx)?dw!=+dw:(dx==0?(1/dx==1/dw):dx==+dw);
case J:case G:return dx==co(dw)
}var dm=df==t;
if(!dm){var ds=aZ.call(dx,"__wrapped__"),at=aZ.call(dw,"__wrapped__");
if(ds||at){return bb(ds?dx.__wrapped__:dx,at?dw.__wrapped__:dw,dl,dt,dz,dy)
}if(df!=c){return false
}var dj=dx.constructor,dg=dw.constructor;
if(dj!=dg&&!(ax(dj)&&dj instanceof dj&&ax(dg)&&dg instanceof dg)&&("constructor" in dx&&"constructor" in dw)){return false
}}var dq=!dz;
dz||(dz=d());
dy||(dy=d());
var dh=dz.length;
while(dh--){if(dz[dh]==dx){return dy[dh]==dw
}}var du=0;
dr=true;
dz.push(dx);
dy.push(dw);
if(dm){dh=dx.length;
du=dw.length;
dr=du==dh;
if(dr||dt){while(du--){var dn=dh,dv=dw[du];
if(dt){while(dn--){if((dr=bb(dx[dn],dv,dl,dt,dz,dy))){break
}}}else{if(!(dr=bb(dx[du],dv,dl,dt,dz,dy))){break
}}}}}else{ai(dw,function(dC,dB,dA){if(aZ.call(dA,dB)){du++;
return(dr=aZ.call(dx,dB)&&bb(dx[dB],dC,dl,dt,dz,dy))
}});
if(dr&&!dt){ai(dx,function(dC,dB,dA){if(aZ.call(dA,dB)){return(dr=--du>-1)
}})
}}dz.pop();
dy.pop();
if(dq){Q(dz);
Q(dy)
}return dr
}function ag(df,dg,di,at,dh){(bC(dg)?bA:bN)(dg,function(dq,dl){var dp,dm,dk=dq,dn=df[dl];
if(dq&&((dm=bC(dq))||aN(dq))){var dr=at.length;
while(dr--){if((dp=at[dr]==dq)){dn=dh[dr];
break
}}if(!dp){var dj;
if(di){dk=di(dn,dq);
if((dj=typeof dk!="undefined")){dn=dk
}}if(!dj){dn=dm?(bC(dn)?dn:[]):(aN(dn)?dn:{})
}at.push(dq);
dh.push(dn);
if(!dj){ag(dn,dq,di,at,dh)
}}}else{if(di){dk=di(dn,dq);
if(typeof dk=="undefined"){dk=dq
}}if(typeof dk!="undefined"){dn=dk
}}df[dl]=dn
})
}function ao(df,at){return df+cN(bJ()*(at-df+1))
}function ae(dk,dh,dp){var dj=-1,dl=b5(),dg=dk?dk.length:0,dq=[];
var dm=!dh&&dg>=b&&dl===h,df=(dp||dm)?d():dq;
if(dm){var at=Y(df);
dl=N;
df=at
}while(++dj<dg){var dn=dk[dj],di=dp?dp(dn,dj,dk):dn;
if(dh?!dj||df[df.length-1]!==di:dl(df,di)<0){if(dp||dm){df.push(di)
}dq.push(dn)
}}if(dm){Q(df.array);
n(df)
}else{if(dp){Q(df)
}}return dq
}function bS(at){return function(dk,dl,dg){var df={};
dl=aT.createCallback(dl,dg,3);
var dh=-1,di=dk?dk.length:0;
if(typeof di=="number"){while(++dh<di){var dj=dk[dh];
at(df,dj,dl(dj,dh,dk),dk)
}}else{bN(dk,function(dn,dm,dp){at(df,dn,dl(dn,dm,dp),dp)
})
}return df
}
}function cL(dk,dh,dl,dg,dr,at){var dj=dh&1,ds=dh&2,dp=dh&4,dn=dh&8,df=dh&16,dm=dh&32;
if(!ds&&!ax(dk)){throw new aG
}if(df&&!dl.length){dh&=~16;
df=dl=false
}if(dm&&!dg.length){dh&=~32;
dm=dg=false
}var di=dk&&dk.__bindData__;
if(di&&di!==true){di=s(di);
if(di[2]){di[2]=s(di[2])
}if(di[3]){di[3]=s(di[3])
}if(dj&&!(di[1]&1)){di[4]=dr
}if(!dj&&di[1]&1){dh|=8
}if(dp&&!(di[1]&4)){di[5]=at
}if(df){aw.apply(di[2]||(di[2]=[]),dl)
}if(dm){cI.apply(di[3]||(di[3]=[]),dg)
}di[1]|=dh;
return cL.apply(null,di)
}var dq=(dh==1||dh===17)?ap:bl;
return dq([dk,dh,dl,dg,dr,at])
}function bn(at){return aS[at]
}function b5(){var at=(at=aT.indexOf)===c4?h:at;
return at
}function b4(at){return typeof at=="function"&&b0.test(at)
}var ad=!cG?af:function(at,df){k.value=df;
cG(at,"__bindData__",k)
};
function aK(dg){var df,at;
if(!(dg&&az.call(dg)==c)||(df=dg.constructor,ax(df)&&!(df instanceof df))){return false
}ai(dg,function(di,dh){at=dh
});
return typeof at=="undefined"||aZ.call(dg,at)
}function bo(at){return bU[at]
}function a4(at){return at&&typeof at=="object"&&typeof at.length=="number"&&az.call(at)==S||false
}var bC=be||function(at){return at&&typeof at=="object"&&typeof at.length=="number"&&az.call(at)==t||false
};
var bc=function(dg){var df,dh=dg,at=[];
if(!dh){return at
}if(!(D[typeof dg])){return at
}for(df in dh){if(aZ.call(dh,df)){at.push(df)
}}return at
};
var b9=!ci?bc:function(at){if(!dd(at)){return[]
}return ci(at)
};
var aS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var bU=b6(aS);
var ca=cF("("+b9(bU).join("|")+")","g"),cg=cF("["+b9(aS).join("")+"]","g");
var br=function(di,at,dl){var dk,dh=di,dr=dh;
if(!dh){return dr
}var dn=arguments,df=0,dj=typeof dl=="number"?2:dn.length;
if(dj>3&&typeof dn[dj-2]=="function"){var dq=ct(dn[--dj-1],dn[dj--],2)
}else{if(dj>2&&typeof dn[dj-1]=="function"){dq=dn[--dj]
}}while(++df<dj){dh=dn[df];
if(dh&&D[typeof dh]){var dm=-1,dp=D[typeof dh]&&b9(dh),dg=dp?dp.length:0;
while(++dm<dg){dk=dp[dm];
dr[dk]=dq?dq(dr[dk],dh[dk]):dh[dk]
}}}return dr
};
function cB(dg,df,dh,at){if(typeof df!="boolean"&&df!=null){at=dh;
dh=df;
df=false
}return bi(dg,df,typeof dh=="function"&&ct(dh,at,1))
}function c9(df,dg,at){return bi(df,true,typeof dg=="function"&&ct(dg,at,1))
}function aP(df,dg){var at=bZ(df);
return dg?br(at,dg):at
}var bs=function(di,at,dl){var dk,dh=di,dq=dh;
if(!dh){return dq
}var dn=arguments,df=0,dj=typeof dl=="number"?2:dn.length;
while(++df<dj){dh=dn[df];
if(dh&&D[typeof dh]){var dm=-1,dp=D[typeof dh]&&b9(dh),dg=dp?dp.length:0;
while(++dm<dg){dk=dp[dm];
if(typeof dq[dk]=="undefined"){dq[dk]=dh[dk]
}}}}return dq
};
function cr(dg,dh,df){var at;
dh=aT.createCallback(dh,df,3);
bN(dg,function(dk,dj,di){if(dh(dk,dj,di)){at=dj;
return false
}});
return at
}function bM(dg,dh,df){var at;
dh=aT.createCallback(dh,df,3);
c0(dg,function(dk,dj,di){if(dh(dk,dj,di)){at=dj;
return false
}});
return at
}var ai=function(di,dj,df){var dg,dh=di,at=dh;
if(!dh){return at
}if(!D[typeof dh]){return at
}dj=dj&&typeof df=="undefined"?dj:ct(dj,df,3);
for(dg in dh){if(dj(dh[dg],dg,di)===false){return at
}}return at
};
function cs(df,di,at){var dh=[];
ai(df,function(dk,dj){dh.push(dj,dk)
});
var dg=dh.length;
di=ct(di,at,3);
while(dg--){if(di(dh[dg--],dh[dg],df)===false){break
}}return df
}var bN=function(dg,dl,dj){var dh,df=dg,dm=df;
if(!df){return dm
}if(!D[typeof df]){return dm
}dl=dl&&typeof dj=="undefined"?dl:ct(dl,dj,3);
var di=-1,dk=D[typeof df]&&b9(df),at=dk?dk.length:0;
while(++di<at){dh=dk[di];
if(dl(df[dh],dh,dg)===false){return dm
}}return dm
};
function c0(df,dj,at){var dh=b9(df),di=dh.length;
dj=ct(dj,at,3);
while(di--){var dg=dh[di];
if(dj(df[dg],dg,df)===false){break
}}return df
}function cH(df){var at=[];
ai(df,function(dh,dg){if(ax(dh)){at.push(dg)
}});
return at.sort()
}function cX(at,df){return at?aZ.call(at,df):false
}function b6(dg){var df=-1,di=b9(dg),dj=di.length,at={};
while(++df<dj){var dh=di[df];
at[dg[dh]]=dh
}return at
}function bG(at){return at===true||at===false||at&&typeof at=="object"&&az.call(at)==A||false
}function a7(at){return at&&typeof at=="object"&&az.call(at)==I||false
}function b1(at){return at&&at.nodeType===1||false
}function cp(dh){var at=true;
if(!dh){return at
}var df=az.call(dh),dg=dh.length;
if((df==t||df==G||df==S)||(df==c&&typeof dg=="number"&&ax(dh.splice))){return !dg
}bN(dh,function(){return(at=false)
});
return at
}function b2(dg,at,dh,df){return bb(dg,at,typeof dh=="function"&&ct(dh,df,2))
}function aJ(at){return aI(at)&&!bD(parseFloat(at))
}function ax(at){return typeof at=="function"
}function dd(at){return !!(at&&D[typeof at])
}function bP(at){return bq(at)&&at!=+at
}function c3(at){return at===null
}function bq(at){return typeof at=="number"||at&&typeof at=="object"&&az.call(at)==F||false
}var aN=!ar?aK:function(dg){if(!(dg&&az.call(dg)==c)){return false
}var at=dg.valueOf,df=b4(at)&&(df=ar(at))&&ar(df);
return df?(dg==df||ar(dg)==df):aK(dg)
};
function cR(at){return at&&typeof at=="object"&&az.call(at)==J||false
}function cy(at){return typeof at=="string"||at&&typeof at=="object"&&az.call(at)==G||false
}function bW(at){return typeof at=="undefined"
}function bg(dg,dh,df){var at={};
dh=aT.createCallback(dh,df,3);
bN(dg,function(dk,dj,di){at[dj]=dh(dk,dj,di)
});
return at
}function bI(di){var dh=arguments,dj=2;
if(!dd(di)){return di
}if(typeof dh[2]!="number"){dj=dh.length
}if(dj>3&&typeof dh[dj-2]=="function"){var dl=ct(dh[--dj-1],dh[dj--],2)
}else{if(dj>2&&typeof dh[dj-1]=="function"){dl=dh[--dj]
}}var dg=s(arguments,1,dj),df=-1,at=d(),dk=d();
while(++df<dj){ag(di,dg[df],dl,at,dk)
}Q(at);
Q(dk);
return di
}function cu(dh,dl,df){var at={};
if(typeof dl!="function"){var dj=[];
ai(dh,function(dn,dm){dj.push(dm)
});
dj=dc(dj,bT(arguments,true,false,1));
var dg=-1,dk=dj.length;
while(++dg<dk){var di=dj[dg];
at[di]=dh[di]
}}else{dl=aT.createCallback(dl,df,3);
ai(dh,function(dp,dn,dm){if(!dl(dp,dn,dm)){at[dn]=dp
}})
}return at
}function by(dg){var df=-1,di=b9(dg),dj=di.length,at=aF(dj);
while(++df<dj){var dh=di[df];
at[df]=[dh,dg[dh]]
}return at
}function bK(dh,dl,df){var at={};
if(typeof dl!="function"){var dg=-1,dj=bT(arguments,true,false,1),dk=dd(dh)?dj.length:0;
while(++dg<dk){var di=dj[dg];
if(di in dh){at[di]=dh[di]
}}}else{dl=aT.createCallback(dl,df,3);
ai(dh,function(dp,dn,dm){if(dl(dp,dn,dm)){at[dn]=dp
}})
}return at
}function cW(dg,dk,df,at){var dj=bC(dg);
if(df==null){if(dj){df=[]
}else{var di=dg&&dg.constructor,dh=di&&di.prototype;
df=bZ(dh)
}}if(dk){dk=aT.createCallback(dk,at,4);
(dj?bA:bN)(dg,function(dn,dm,dl){return dk(df,dn,dm,dl)
})
}return df
}function bv(dg){var df=-1,dh=b9(dg),di=dh.length,at=aF(di);
while(++df<di){at[df]=dg[dh[df]]
}return at
}function cM(dj){var dg=arguments,df=-1,dh=bT(dg,true,false,1),di=(dg[2]&&dg[2][dg[1]]===dj)?1:dh.length,at=aF(di);
while(++df<di){at[df]=dj[dh[df]]
}return at
}function a3(dk,dj,dh){var df=-1,dg=b5(),di=dk?dk.length:0,at=false;
dh=(dh<0?cj(0,di+dh):dh)||0;
if(bC(dk)){at=dg(dk,dj,dh)>-1
}else{if(typeof di=="number"){at=(cy(dk)?dk.indexOf(dj,dh):dg(dk,dj,dh))>-1
}else{bN(dk,function(dl){if(++df>=dh){return !(at=dl===dj)
}})
}}return at
}var bH=bS(function(at,dg,df){(aZ.call(at,df)?at[df]++:at[df]=1)
});
function ay(di,dj,df){var at=true;
dj=aT.createCallback(dj,df,3);
var dg=-1,dh=di?di.length:0;
if(typeof dh=="number"){while(++dg<dh){if(!(at=!!dj(di[dg],dg,di))){break
}}}else{bN(di,function(dl,dk,dm){return(at=!!dj(dl,dk,dm))
})
}return at
}function bO(dj,dk,df){var at=[];
dk=aT.createCallback(dk,df,3);
var dg=-1,dh=dj?dj.length:0;
if(typeof dh=="number"){while(++dg<dh){var di=dj[dg];
if(dk(di,dg,dj)){at.push(di)
}}}else{bN(dj,function(dm,dl,dn){if(dk(dm,dl,dn)){at.push(dm)
}})
}return at
}function bF(dj,dk,df){dk=aT.createCallback(dk,df,3);
var dg=-1,dh=dj?dj.length:0;
if(typeof dh=="number"){while(++dg<dh){var di=dj[dg];
if(dk(di,dg,dj)){return di
}}}else{var at;
bN(dj,function(dm,dl,dn){if(dk(dm,dl,dn)){at=dm;
return false
}});
return at
}}function c7(dg,dh,df){var at;
dh=aT.createCallback(dh,df,3);
aq(dg,function(dj,di,dk){if(dh(dj,di,dk)){at=dj;
return false
}});
return at
}function bA(dh,di,at){var df=-1,dg=dh?dh.length:0;
di=di&&typeof at=="undefined"?di:ct(di,at,3);
if(typeof dg=="number"){while(++df<dg){if(di(dh[df],df,dh)===false){break
}}}else{bN(dh,di)
}return dh
}function aq(dh,di,at){var dg=dh?dh.length:0;
di=di&&typeof at=="undefined"?di:ct(di,at,3);
if(typeof dg=="number"){while(dg--){if(di(dh[dg],dg,dh)===false){break
}}}else{var df=b9(dh);
dg=df.length;
bN(dh,function(dk,dj,dl){dj=df?df[--dg]:--dg;
return di(dl[dj],dj,dl)
})
}return dh
}var bp=bS(function(at,dg,df){(aZ.call(at,df)?at[df]:at[df]=[]).push(dg)
});
var c5=bS(function(at,dg,df){at[df]=dg
});
function aH(dk,df){var dh=s(arguments,2),dg=-1,dj=typeof df=="function",di=dk?dk.length:0,at=aF(typeof di=="number"?di:0);
bA(dk,function(dl){at[++dg]=(dj?df:dl[df]).apply(dl,dh)
});
return at
}function bk(di,dj,df){var dg=-1,dh=di?di.length:0;
dj=aT.createCallback(dj,df,3);
if(typeof dh=="number"){var at=aF(dh);
while(++dg<dh){at[dg]=dj(di[dg],dg,di)
}}else{at=[];
bN(di,function(dl,dk,dm){at[++dg]=dj(dl,dk,dm)
})
}return at
}function bh(dk,dl,df){var di=-Infinity,at=di;
if(typeof dl!="function"&&df&&df[dl]===dk){dl=null
}if(dl==null&&bC(dk)){var dg=-1,dh=dk.length;
while(++dg<dh){var dj=dk[dg];
if(dj>at){at=dj
}}}else{dl=(dl==null&&cy(dk))?o:aT.createCallback(dl,df,3);
bA(dk,function(dn,dm,dq){var dp=dl(dn,dm,dq);
if(dp>di){di=dp;
at=dn
}})
}return at
}function cl(dk,dl,df){var di=Infinity,at=di;
if(typeof dl!="function"&&df&&df[dl]===dk){dl=null
}if(dl==null&&bC(dk)){var dg=-1,dh=dk.length;
while(++dg<dh){var dj=dk[dg];
if(dj<at){at=dj
}}}else{dl=(dl==null&&cy(dk))?o:aT.createCallback(dl,df,3);
bA(dk,function(dn,dm,dq){var dp=dl(dn,dm,dq);
if(dp<di){di=dp;
at=dn
}})
}return at
}var c8=bk;
function cn(dj,dk,df,at){if(!dj){return df
}var dh=arguments.length<3;
dk=aT.createCallback(dk,at,4);
var dg=-1,di=dj.length;
if(typeof di=="number"){if(dh){df=dj[++dg]
}while(++dg<di){df=dk(df,dj[dg],dg,dj)
}}else{bN(dj,function(dm,dl,dn){df=dh?(dh=false,dm):dk(df,dm,dl,dn)
})
}return df
}function cT(dh,di,df,at){var dg=arguments.length<3;
di=aT.createCallback(di,at,4);
aq(dh,function(dk,dj,dl){df=dg?(dg=false,dk):di(df,dk,dj,dl)
});
return df

}function aA(df,dg,at){dg=aT.createCallback(dg,at,3);
return bO(df,function(di,dh,dj){return !dg(di,dh,dj)
})
}function cS(dg,dh,df){if(dg&&typeof dg.length!="number"){dg=bv(dg)
}if(dh==null||df){return dg?dg[ao(0,dg.length-1)]:l
}var at=bw(dg);
at.length=am(cj(0,dh),at.length);
return at
}function bw(dh){var df=-1,dg=dh?dh.length:0,at=aF(typeof dg=="number"?dg:0);
bA(dh,function(dj){var di=ao(0,++df);
at[df]=at[di];
at[di]=dj
});
return at
}function a6(df){var at=df?df.length:0;
return typeof at=="number"?at:b9(df).length
}function a5(di,dj,df){var at;
dj=aT.createCallback(dj,df,3);
var dg=-1,dh=di?di.length:0;
if(typeof dh=="number"){while(++dg<dh){if((at=dj(di[dg],dg,di))){break
}}}else{bN(di,function(dl,dk,dm){return !(at=dj(dl,dk,dm))
})
}return !!at
}function a8(dk,dl,df){var dh=-1,dj=bC(dl),di=dk?dk.length:0,at=aF(typeof di=="number"?di:0);
if(!dj){dl=aT.createCallback(dl,df,3)
}bA(dk,function(dp,dn,dq){var dm=at[++dh]=q();
if(dj){dm.criteria=bk(dl,function(dr){return dp[dr]
})
}else{(dm.criteria=d())[0]=dl(dp,dn,dq)
}dm.index=dh;
dm.value=dp
});
di=at.length;
at.sort(V);
while(di--){var dg=at[di];
at[di]=dg.value;
if(!dj){Q(dg.criteria)
}n(dg)
}return at
}function aC(at){if(at&&typeof at.length=="number"){return s(at)
}return bv(at)
}var aj=bO;
function aO(di){var df=-1,dg=di?di.length:0,at=[];
while(++df<dg){var dh=di[df];
if(dh){at.push(dh)
}}return at
}function ac(at){return dc(at,bT(arguments,true,true,1))
}function c2(di,dh,at){var df=-1,dg=di?di.length:0;
dh=aT.createCallback(dh,at,3);
while(++df<dg){if(dh(di[df],df,di)){return df
}}return -1
}function aL(dh,dg,at){var df=dh?dh.length:0;
dg=aT.createCallback(dg,at,3);
while(df--){if(dg(dh[df],df,dh)){return df
}}return -1
}function bf(dj,di,at){var dh=0,dg=dj?dj.length:0;
if(typeof di!="number"&&di!=null){var df=-1;
di=aT.createCallback(di,at,3);
while(++df<dg&&di(dj[df],df,dj)){dh++
}}else{dh=di;
if(dh==null||at){return dj?dj[0]:l
}}return s(dj,0,am(cj(0,dh),dg))
}function cA(dh,at,dg,df){if(typeof at!="boolean"&&at!=null){df=dg;
dg=(typeof at!="function"&&df&&df[at]===dh)?null:at;
at=false
}if(dg!=null){dh=bk(dh,dg,df)
}return bT(dh,at)
}function c4(di,dh,df){if(typeof df=="number"){var dg=di?di.length:0;
df=(df<0?cj(0,dg+df):df||0)
}else{if(df){var at=a9(di,dh);
return di[at]===dh?at:-1
}}return h(di,dh,df)
}function c6(dj,di,at){var dh=0,dg=dj?dj.length:0;
if(typeof di!="number"&&di!=null){var df=dg;
di=aT.createCallback(di,at,3);
while(df--&&di(dj[df],df,dj)){dh++
}}else{dh=(di==null||at)?1:di||dh
}return s(dj,0,am(cj(0,dg-dh),dg))
}function cx(){var dn=[],dg=-1,dj=arguments.length,dm=d(),dp=b5(),di=dp===h,df=d();
while(++dg<dj){var dq=arguments[dg];
if(bC(dq)||a4(dq)){dn.push(dq);
dm.push(di&&dq.length>=b&&Y(dg?dn[dg]:df))
}}var dl=dn[0],dk=-1,dh=dl?dl.length:0,dr=[];
outer:while(++dk<dh){var at=dm[0];
dq=dl[dk];
if((at?N(at,dq):dp(df,dq))<0){dg=dj;
(at||df).push(dq);
while(--dg){at=dm[dg];
if((at?N(at,dq):dp(dn[dg],dq))<0){continue outer
}}dr.push(dq)
}}while(dj--){at=dm[dj];
if(at){n(at)
}}Q(dm);
Q(df);
return dr
}function bt(dj,di,at){var dh=0,dg=dj?dj.length:0;
if(typeof di!="number"&&di!=null){var df=dg;
di=aT.createCallback(di,at,3);
while(df--&&di(dj[df],df,dj)){dh++
}}else{dh=di;
if(dh==null||at){return dj?dj[dg-1]:l
}}return s(dj,cj(0,dg-dh))
}function de(dh,dg,df){var at=dh?dh.length:0;
if(typeof df=="number"){at=(df<0?cj(0,at+df):am(df,at-1))+1
}while(at--){if(dh[at]===dg){return at
}}return -1
}function cb(dk){var dg=arguments,at=0,di=dg.length,dh=dk?dk.length:0;
while(++at<di){var df=-1,dj=dg[at];
while(++df<dh){if(dk[df]===dj){cm.call(dk,df--,1);
dh--
}}}return dk
}function aX(dj,df,di){dj=+dj||0;
di=typeof di=="number"?di:(+di||1);
if(df==null){df=dj;
dj=0
}var dg=-1,dh=cj(0,aV((df-dj)/(di||1))),at=aF(dh);
while(++dg<dh){at[dg]=dj;
dj+=di
}return at
}function aM(dk,dj,df){var dg=-1,dh=dk?dk.length:0,at=[];
dj=aT.createCallback(dj,df,3);
while(++dg<dh){var di=dk[dg];
if(dj(di,dg,dk)){at.push(di);
cm.call(dk,dg--,1);
dh--
}}return at
}function b8(dj,di,at){if(typeof di!="number"&&di!=null){var dh=0,df=-1,dg=dj?dj.length:0;
di=aT.createCallback(di,at,3);
while(++df<dg&&di(dj[df],df,dj)){dh++
}}else{dh=(di==null||at)?1:cj(0,di)
}return s(dj,dh)
}function a9(dk,di,dj,df){var at=0,dh=dk?dk.length:at;
dj=dj?aT.createCallback(dj,df,1):bj;
di=dj(di);
while(at<dh){var dg=(at+dh)>>>1;
(dj(dk[dg])<di)?at=dg+1:dh=dg
}return at
}function au(){return ae(bT(arguments,true,true))
}function bQ(dh,dg,df,at){if(typeof dg!="boolean"&&dg!=null){at=df;
df=(typeof dg!="function"&&at&&at[dg]===dh)?null:dg;
dg=false
}if(df!=null){df=aT.createCallback(df,at,3)
}return ae(dh,dg,df)
}function cZ(at){return dc(at,s(arguments,1))
}function bY(){var df=-1,dg=arguments.length;
while(++df<dg){var dh=arguments[df];
if(bC(dh)||a4(dh)){var at=at?ae(dc(at,dh).concat(dc(dh,at))):dh
}}return at||[]
}function an(){var dh=arguments.length>1?arguments:arguments[0],df=-1,dg=dh?bh(c8(dh,"length")):0,at=aF(dg<0?0:dg);
while(++df<dg){at[df]=c8(dh,df)
}return at
}function cC(dj,df){var dg=-1,di=dj?dj.length:0,at={};
if(!df&&di&&!bC(dj[0])){df=[]
}while(++dg<di){var dh=dj[dg];
if(df){at[dh]=df[dg]
}else{if(dh){at[dh[0]]=dh[1]
}}}return at
}function aR(df,at){if(!ax(at)){throw new aG
}return function(){if(--df<1){return at.apply(this,arguments)
}}
}function bX(df,at){return arguments.length>2?cL(df,17,s(arguments,2),null,at):cL(df,1,null,null,at)
}function bu(dg){var at=arguments.length>1?bT(arguments,true,false,1):cH(dg),df=-1,di=at.length;
while(++df<di){var dh=at[df];
dg[dh]=cL(dg[dh],1,null,null,dg)
}return dg
}function cQ(at,df){return arguments.length>2?cL(df,19,s(arguments,2),null,at):cL(df,3,null,null,at)
}function cE(){var at=arguments,df=at.length;
while(df--){if(!ax(at[df])){throw new aG
}}return function(){var dg=arguments,dh=at.length;
while(dh--){dg=[at[dh].apply(this,dg)]
}return dg[0]
}
}function cO(at,df){df=typeof df=="number"?df:(+df||at.length);
return cL(at,4,null,null,null,df)
}function cD(dh,dm,dt){var dp,dk,du,at,dr,ds,dq,dl=0,dj=false,dn=true;
if(!ax(dh)){throw new aG
}dm=cj(0,dm)||0;
if(dt===true){var dg=true;
dn=false
}else{if(dd(dt)){dg=dt.leading;
dj="maxWait" in dt&&(cj(dm,dt.maxWait)||0);
dn="trailing" in dt?dt.trailing:dn
}}var di=function(){var dw=dm-(cf()-at);
if(dw<=0){if(dk){bR(dk)
}var dv=dq;
dk=ds=dq=l;
if(dv){dl=cf();
du=dh.apply(dr,dp);
if(!ds&&!dk){dp=dr=null
}}}else{ds=aW(di,dw)
}};
var df=function(){if(ds){bR(ds)
}dk=ds=dq=l;
if(dn||(dj!==dm)){dl=cf();
du=dh.apply(dr,dp);
if(!ds&&!dk){dp=dr=null
}}};
return function(){dp=arguments;
at=cf();
dr=this;
dq=dn&&(ds||!dg);
if(dj===false){var dv=dg&&!ds
}else{if(!dk&&!dg){dl=at
}var dx=dj-(at-dl),dw=dx<=0;
if(dw){if(dk){dk=bR(dk)
}dl=at;
du=dh.apply(dr,dp)
}else{if(!dk){dk=aW(df,dx)
}}}if(dw&&ds){ds=bR(ds)
}else{if(!ds&&dm!==dj){ds=aW(di,dm)
}}if(dv){dw=true;
du=dh.apply(dr,dp)
}if(dw&&!ds&&!dk){dp=dr=null
}return du
}
}function a0(df){if(!ax(df)){throw new aG
}var at=s(arguments,1);
return aW(function(){df.apply(l,at)
},1)
}function bL(df,dg){if(!ax(df)){throw new aG
}var at=s(arguments,2);
return aW(function(){df.apply(l,at)
},dg)
}function a2(df,dg){if(!ax(df)){throw new aG
}var at=function(){var dh=at.cache,di=dg?dg.apply(this,arguments):a+arguments[0];
return aZ.call(dh,di)?dh[di]:(dh[di]=df.apply(this,arguments))
};
at.cache={};
return at
}function cw(dg){var df,at;
if(!ax(dg)){throw new aG
}return function(){if(df){return at
}df=true;
at=dg.apply(this,arguments);
dg=null;
return at
}
}function cU(at){return cL(at,16,s(arguments,1))
}function cq(at){return cL(at,32,null,s(arguments,1))
}function ck(df,dg,at){var di=true,dh=true;
if(!ax(df)){throw new aG
}if(at===false){di=false
}else{if(dd(at)){di="leading" in at?at.leading:di;
dh="trailing" in at?at.trailing:dh
}}M.leading=di;
M.maxWait=dg;
M.trailing=dh;
return cD(df,dg,M)
}function bV(at,df){return cL(df,16,[at])
}function cv(at){return function(){return at
}
}function aD(dj,df,dk){var di=typeof dj;
if(dj==null||di=="function"){return ct(dj,df,dk)
}if(di!="object"){return a1(dj)
}var dh=b9(dj),dg=dh[0],at=dj[dg];
if(dh.length==1&&at===at&&!dd(at)){return function(dm){var dl=dm[dg];
return at===dl&&(at!==0||(1/at==1/dl))
}
}return function(dm){var dn=dh.length,dl=false;
while(dn--){if(!(dl=bb(dm[dh[dn]],dj[dh[dn]],null,true))){break
}}return dl
}
}function ba(at){return at==null?"":co(at).replace(cg,bn)
}function bj(at){return at
}function aB(df,dk,at){var dg=true,di=dk&&cH(dk);
if(!dk||(!at&&!di.length)){if(at==null){at=dk
}dh=cP;
dk=df;
df=aT;
di=cH(dk)
}if(at===false){dg=false
}else{if(dd(at)&&"chain" in at){dg=at.chain
}}var dh=df,dj=ax(dh);
bA(di,function(dl){var dm=df[dl]=dk[dl];
if(dj){dh.prototype[dl]=function(){var dp=this.__chain__,dr=this.__wrapped__,dq=[dr];
aw.apply(dq,arguments);
var dn=dm.apply(df,dq);
if(dg||dp){if(dr===dn&&dd(dn)){return this
}dn=new dh(dn);
dn.__chain__=dp
}return dn
}
}})
}function cY(){ah._=cV;
return this
}function af(){}var cf=b4(cf=ce.now)&&cf||function(){return new ce().getTime()
};
var db=da(E+"08")==8?da:function(df,at){return da(cy(df)?df.replace(W,""):df,at||0)
};
function a1(at){return function(df){return df[at]
}
}function cc(dg,at,dj){var di=dg==null,df=at==null;
if(dj==null){if(typeof dg=="boolean"&&df){dj=dg;
dg=1
}else{if(!df&&typeof at=="boolean"){dj=at;
df=true
}}}if(di&&df){at=1
}dg=+dg||0;
if(df){at=dg;
dg=0
}else{at=+at||0
}if(dj||dg%1||at%1){var dh=bJ();
return am(dg+(dh*(at-dg+parseFloat("1e-"+((dh+"").length-1)))),at)
}return ao(dg,at)
}function aQ(at,df){if(at){var dg=at[df];
return ax(dg)?at[df]():dg
}}function bE(ds,dl,dv){var di=aT.templateSettings;
ds=co(ds||"");
dv=bs({},dv,di);
var dg=bs({},dv.imports,di.imports),dm=b9(dg),dh=bv(dg);
var dr,dn=0,dq=dv.interpolate||P,df="__p += '";
var du=cF((dv.escape||P).source+"|"+dq.source+"|"+(dq===m?z:P).source+"|"+(dv.evaluate||P).source+"|$","g");
ds.replace(du,function(dw,dA,dy,dx,dz,dB){dy||(dy=dx);
df+=ds.slice(dn,dB).replace(T,f);
if(dA){df+="' +\n__e("+dA+") +\n'"
}if(dz){dr=true;
df+="';\n"+dz+";\n__p += '"
}if(dy){df+="' +\n((__t = ("+dy+")) == null ? '' : __t) +\n'"
}dn=dB+dw.length;
return dw
});
df+="';\n";
var dj=dv.variable,dk=dj;
if(!dk){dj="obj";
df="with ("+dj+") {\n"+df+"\n}\n"
}df=(dr?df.replace(w,""):df).replace(R,"$1").replace(e,"$1;");
df="function("+dj+") {\n"+(dk?"":dj+" || ("+dj+" = {});\n")+"var __t, __p = '', __e = _.escape"+(dr?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+df+"return __p\n}";
var at="\n/*\n//# sourceURL="+(dv.sourceURL||"/lodash/template/source["+(Z++)+"]")+"\n*/";
try{var dt=aY(dm,"return "+df+at).apply(l,dh)
}catch(dp){dp.source=df;
throw dp
}if(dl){return dt(dl)
}dt.source=df;
return dt
}function ak(di,dh,df){di=(di=+di)>-1?di:0;
var dg=-1,at=aF(di);
dh=ct(dh,df,1);
while(++dg<di){at[dg]=dh(dg)
}return at
}function al(at){return at==null?"":co(at).replace(ca,bo)
}function ch(at){var df=++H;
return co(at==null?"":at)+df
}function bx(at){at=new cP(at);
at.__chain__=true;
return at
}function cz(at,df){df(at);
return at
}function bz(){this.__chain__=true;
return this
}function bm(){return co(this.__wrapped__)
}function aU(){return this.__wrapped__
}aT.after=aR;
aT.assign=br;
aT.at=cM;
aT.bind=bX;
aT.bindAll=bu;
aT.bindKey=cQ;
aT.chain=bx;
aT.compact=aO;
aT.compose=cE;
aT.constant=cv;
aT.countBy=bH;
aT.create=aP;
aT.createCallback=aD;
aT.curry=cO;
aT.debounce=cD;
aT.defaults=bs;
aT.defer=a0;
aT.delay=bL;
aT.difference=ac;
aT.filter=bO;
aT.flatten=cA;
aT.forEach=bA;
aT.forEachRight=aq;
aT.forIn=ai;
aT.forInRight=cs;
aT.forOwn=bN;
aT.forOwnRight=c0;
aT.functions=cH;
aT.groupBy=bp;
aT.indexBy=c5;
aT.initial=c6;
aT.intersection=cx;
aT.invert=b6;
aT.invoke=aH;
aT.keys=b9;
aT.map=bk;
aT.mapValues=bg;
aT.max=bh;
aT.memoize=a2;
aT.merge=bI;
aT.min=cl;
aT.omit=cu;
aT.once=cw;
aT.pairs=by;
aT.partial=cU;
aT.partialRight=cq;
aT.pick=bK;
aT.pluck=c8;
aT.property=a1;
aT.pull=cb;
aT.range=aX;
aT.reject=aA;
aT.remove=aM;
aT.rest=b8;
aT.shuffle=bw;
aT.sortBy=a8;
aT.tap=cz;
aT.throttle=ck;
aT.times=ak;
aT.toArray=aC;
aT.transform=cW;
aT.union=au;
aT.uniq=bQ;
aT.values=bv;
aT.where=aj;
aT.without=cZ;
aT.wrap=bV;
aT.xor=bY;
aT.zip=an;
aT.zipObject=cC;
aT.collect=bk;
aT.drop=b8;
aT.each=bA;
aT.eachRight=aq;
aT.extend=br;
aT.methods=cH;
aT.object=cC;
aT.select=bO;
aT.tail=b8;
aT.unique=bQ;
aT.unzip=an;
aB(aT);
aT.clone=cB;
aT.cloneDeep=c9;
aT.contains=a3;
aT.escape=ba;
aT.every=ay;
aT.find=bF;
aT.findIndex=c2;
aT.findKey=cr;
aT.findLast=c7;
aT.findLastIndex=aL;
aT.findLastKey=bM;
aT.has=cX;
aT.identity=bj;
aT.indexOf=c4;
aT.isArguments=a4;
aT.isArray=bC;
aT.isBoolean=bG;
aT.isDate=a7;
aT.isElement=b1;
aT.isEmpty=cp;
aT.isEqual=b2;
aT.isFinite=aJ;
aT.isFunction=ax;
aT.isNaN=bP;
aT.isNull=c3;
aT.isNumber=bq;
aT.isObject=dd;
aT.isPlainObject=aN;
aT.isRegExp=cR;
aT.isString=cy;
aT.isUndefined=bW;
aT.lastIndexOf=de;
aT.mixin=aB;
aT.noConflict=cY;
aT.noop=af;
aT.now=cf;
aT.parseInt=db;
aT.random=cc;
aT.reduce=cn;
aT.reduceRight=cT;
aT.result=aQ;
aT.runInContext=X;
aT.size=a6;
aT.some=a5;
aT.sortedIndex=a9;
aT.template=bE;
aT.unescape=al;
aT.uniqueId=ch;
aT.all=ay;
aT.any=a5;
aT.detect=bF;
aT.findWhere=bF;
aT.foldl=cn;
aT.foldr=cT;
aT.include=a3;
aT.inject=cn;
aB(function(){var at={};
bN(aT,function(dg,df){if(!aT.prototype[df]){at[df]=dg
}});
return at
}(),false);
aT.first=bf;
aT.last=bt;
aT.sample=cS;
aT.take=bf;
aT.head=bf;
bN(aT,function(dg,df){var at=df!=="sample";
if(!aT.prototype[df]){aT.prototype[df]=function(dk,dj){var di=this.__chain__,dh=dg(this.__wrapped__,dk,dj);
return !di&&(dk==null||(dj&&!(at&&typeof dk=="function")))?dh:new cP(dh,di)
}
}});
aT.VERSION="2.4.1";
aT.prototype.chain=bz;
aT.prototype.toString=bm;
aT.prototype.value=aU;
aT.prototype.valueOf=aU;
bA(["join","pop","shift"],function(at){var df=b7[at];
aT.prototype[at]=function(){var dh=this.__chain__,dg=df.apply(this.__wrapped__,arguments);
return dh?new cP(dg,dh):dg
}
});
bA(["push","reverse","sort","unshift"],function(at){var df=b7[at];
aT.prototype[at]=function(){df.apply(this.__wrapped__,arguments);
return this
}
});
bA(["concat","slice","splice"],function(at){var df=b7[at];
aT.prototype[at]=function(){return new cP(df.apply(this.__wrapped__,arguments),this.__chain__)
}
});
return aT
}var aa=X();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){B._=aa;
define(function(){return aa
})
}else{if(U&&y){if(O){(y.exports=aa)._=aa
}else{U._=aa
}}else{B._=aa
}}}.call(this));
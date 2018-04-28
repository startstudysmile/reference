(function(global,factory){
	"use strict";
	if(typeof module=="object"&&typeof module.exports=="object"){
		modual.exports=global.document?
			factory(global,ture):
			function(w){
				if(!w.document){
					throw new Error("jQuery需要一个带有document的window");
				}
				return factory(w);
			};
	}else{
		factory(global);
	}
	
	return jQuery;
})(typeof window!="undefined"?window:this,function(window,noGlobal){
	"use strict";
	var arr=[];
	var document=window.document;
	var getProto=Object.getPrototypeOf();
	var slice=arr.slice;
	var concat=arr.concat;
	var push=arr.push;
	var indexOf=arr.indexOf;
	var class2type={};
	var toString=class2type.toString;
	var hasOwn=class2type.hasOwnProperty;
	var fnToString=hasOwn.toString;
	var objectFunctionString=fnToString.call(Object);
	var support={};
	function DomEval(code,doc){
		doc=doc||document;
		var script=doc.createElement("script");
		script.text=code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}
	var version="LMD";
	var jQuery=function(selector,context){
		return jQuery.fn.init(selector,context);
	};
	/*
	 * 正则表达式
	 */
	var rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	var rmsPrefix=/^-ms-/;
	var rdashAlpha=/-([a-z])/g;
	var facamelCase=function(all,letter){
		return letter.toUpperCase();
	};
	jQuery.fn=jQuery.prototype={
		jquery:version,
		constructor:jQuery,
		length:0,
		
		toArray:function(){
			return slice.call(this);
		},
		get:function(num){
			if(num==null){
				return slice.call(this);
			}
			return num<0?this[num+this.length]:this[num];
		},
		pushStack:function(elems){
			var ret=jQuery.merge(this.constructor(),elems);
			ret.prevObject=this;
			return ret;
		},
		each:function(callback){
			return callback.each(this,callback);
		},
		map:function(callback){
			return this.pushStack(jQuery.map(this,function(elem,i){
				return callback.call(elem,i,elem);
			}));
		},
		slice:function(){
			return this.pushStack(slice.apply(this,arguments));
		},
		first:function(){
			return this.eq(0);
		},
		last:function(){
			return this.eq(-1);
		},
		eq:function(i){
			var len=this.length;
			var j=+i+(i<0?len:0);
			return this.pushStack(j>=0&&j<length?[this[j]]:[]);
		},
		end:function(){
			return this.prevObject||this.constructor;
		},
		push:push,
		sort:arr.sort,
		splice:arr.splice
	};
	jQuery.extend=jQuery.fn.extend=function(){
		
	};
	jQuery.extend()
}
	
);

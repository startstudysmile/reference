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
		var options;
		var name;
		var src;
		var copy;
		var copyIsArray;
		var clone;
		var target=arguments[0]||{};
		var i=1;
		var length=arguments.length;
		var deep=false;
		if(typeof target=="boolean"){
			deep=target;
			target=arguments[i]||{};
			i++;
		}
		if(typeof target!="object"&&!jQuery.isFunction(target)){
			target={};
		}
		if(i===length){
			target=this;
			i--;
		}
		for(;i<length;i++){
			if((options=arguments[i])!=null){
				for(name in options){
					src=target[name];
					copy=options[name];
					if(target===copy){
						continue;
					}
					if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){
						if(copyIsArray){
							copyIsArray=false;
							clone=src&&jQuery.isArray(src)?src:[];
						}else{
							clone=src&&jQuery.isPlainObject(src)?sec:{};
						}
						target[name]=jQuery.extend(deep,clone,copy);
					}else if(copy!==undefined){
						target[name]=copy;
					}
				}
			}
		}
		return target;
	};
	jQuery.extend({
		expando:"jQuery" +(version+Math.random()).replace( /\D/g, "" ),
		isReady:true;
		error:function(msg){
			throw new Error(msg);
		},
		noop:function(){
			
		},
		isFunction:function(obj){
			return jQuery.type(obj)==="function";
		},
		isArray:Array.isArray,
		isWindow:function(obj){
			return obj!=null&&obj===obj.window;
		},
		isNumeric:function(obj){
			var type=jQuery.type(obj);
			return (type==="number"||type==="string")&&(!isNaN(obj-parseFloat(obj)));
		},
		isPlainObject:fucntion(obj){
			var proto,
			var Ctor,
			if(!obj||toString().call(obj)!="[Object Object]"){
				return false;
			}
			proto=getProto(obj);
			if(!proto){
				return true;
			}
			Ctor=hasOwn.call(ctor,"constructor")&&proto.constructor;
			return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;
		},
		isEmptyObject:function(obj){
			var name,
			for(name in obj){
				return false;
			}
			return true;
		},
		type:function(obj){
			if(obj==null){
				return obj+"";
			}
			return typeof obj==="object"||typeof obj ==="function"?class2type[toString.call( obj )]||"object":typeof obj;
		},
		globalEval:function(code){
			DOMEval(code);
		},
		camelcase:function(string){
			return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);
		},
		nodeName:function(elem,name){
			return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
		},
		each:function(obj,callback){
			var length=0;
			var i=0;
			if(isArrayLike(obj)){
				length=obj.length;
				for(;i<length;i++){
					if(callback.call(obj[ i ], i, obj[ i ])===false){
						break;
					}
				}
			}else{
				for(i in obj){
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
			return obj;
		},
	});
}
	
);

window.onload=function(){
	// mc中当鼠标放在a上时，span也变红
	var mca=document.getElementsByTagName("a");	
	for (var i = 0; i < mca.length; i++) {
		mca[i].index=i;
		mca[i].onmouseover=function(){
			var mcaspan=mca[this.index].getElementsByTagName("span");
			for (var i = 0; i < mcaspan.length; i++) {
				mcaspan[i].style["color"]="#b1191a";
			};			
		}
		mca[i].onmouseout=function(){
			var mcaspan=mca[this.index].getElementsByTagName("span");
			for (var i = 0; i < mcaspan.length; i++) {
				mcaspan[i].style["color"]="#666";
			};			
		}
	};
	// 获得对象（兼容）各种名,区间
	function $(gezming,qujian){
		qujian=qujian?qujian:document;
		if (typeof gezming=="string") {
			if (gezming.charAt(0)==".") {
			return getclass(gezming.slice(1),qujian);
		}else if (gezming.charAt(0)=="#") {
			return qujian.getElementById(gezming.slice(1));
		}else if(/^[a-z][a-z1-6]{0,10}$/.test(gezming)){
			return qujian.getElementsTagName(gezming.slice(0));
		}
	}else if (typeof gezming=="function"){
		addeventl(window,"onload",gezming)
	}
		
	}
	// 得到某个对象的属性（兼容）
	function getstyle(obj,shux){
		if (obj.currentStyle) {
			return obj.currentStyle[shux];
		}else{
			return getComputedStyle(obj,null)[shux];
		}
	}
	// 在一定范围内得到，类名为某值的集合(兼容)
	function getclass(classname,fanwei){
		fanwei=fanwei?fanwei:document;
		if (fanwei.getElementsByClassName) {
			return fanwei.getElementsByClassName(classname);
		}else{
			var all=fanwei.getElementsByTagName("*");
			var newarr=[];
			for (var i = 0; i < all.length; i++) {
				if (all[i].className==classname) {
					newarr[newarr.length]=all[i];
				};
				
			}
			return newarr;
		}
	}
	// 同一事件给定多个事件处理程序 evn "on事件" 
	function addeventl(obj,evn,func){
		// var hs=obj.attachEvent?obj.attachEvent:obj.removeEventListener;
		// hs()
		if (obj.attachEvent){
			obj.attachEvent("on"+evn,func);
		}else{
			obj.addEventListener(evn,func,false);
		}
	}
	// 同一事件删除多个事件处理程序 evn "on事件"
	function removeeventl(obj,evn,func){
		// var hs=obj.attachEvent?obj.attachEvent:obj.removeEventListener;
		// hs()
		if (obj.attachEvent){
			obj.detahEvent("on"+evn,func);
		}else{
			obj.removeEventListener(evn,func,false);
		}
	}
	// 将函数添加到onload
	// function $(func){
	// 	addeventl(window,"onload",func)
	// }
}

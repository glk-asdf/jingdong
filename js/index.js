window.onload=function(){

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

	// 得到某个对象的属性（兼容）
	function getstyle(obj,shux){
		if (obj.currentStyle) {
			return obj.currentStyle[shux];
		}else{
			return getComputedStyle(obj,null)[shux];
		}
	}


	// 获得对象（兼容）各种名,区间
	function $(gezming,qujian){
		qujian=qujian?qujian:document;
		if (gezming.charAt(0)==".") {
			return getclass(gezming.slice(1),qujian);
		}else if (gezming.charAt(0)=="#") {
			return qujian.getElementById(gezming.slice(1));
		}else{
			return qujian.getElementsTagName(gezming.slice(0));
		}
	}


	// 获取图片，切点，左右切
	var images=$(".imga");
	var zuoq=$(".zuoq")[0];
	var youq=$(".youq")[0];
    var qieqs=$(".img1d");
    var imageq=$(".imageq")[0];
    // 初始状态
    var ferg=true;
    var index=0;
    var num=0;
    var a,b;
    for (var i = 0; i < images.length; i++) {
    	images[i].style.left="730px";
    	qieqs[i].style.background="#3e3e3e";
    };
    images[index].style.left="0";
    qieqs[index].style.background="#b61b1f";
    // 自动切换
    var t=setInterval(yq,2000)
    // 鼠标放上去后停止,离开后自动切换
    imageq.onmouseover=function(){
    	clearInterval(t);
    }
    imageq.onmouseout=function(){
    	t=setInterval(yq,2000)
    	
    }
    // 左切按钮
    zuoq.onclick=function(){
    	zq();
    }
    // 右切按钮
    youq.onclick=function(){
    	yq();
    }
    // 切点
    for (var i = 0; i < qieqs.length; i++) {
    	qieqs[i].index=i;
    	qieqs[i].onclick=function(){
    		if (this.index<index) {
    			for (var i = 0; i < images.length; i++) {
    	    images[i].style.left="-730px";
    	    qieqs[i].style.background="#3e3e3e";
        };
            images[index].style.left="0";
            colorAnimate(qieqs[this.index],"background","#b61b1f",400)
    	a=animate(images[index],{left:730},500);
    	b=animate(images[this.index],{left:0},500);
    	index=this.index;
    		}else if (this.index>index) {
    			for (var i = 0; i < images.length; i++) {
    	    images[i].style.left="730px";
    	    qieqs[i].style.background="#3e3e3e";
        };
            images[index].style.left="0";
            colorAnimate(qieqs[this.index],"background","#b61b1f",400)
            
    	a=animate(images[index],{left:-730},500);
    	b=animate(images[this.index],{left:0},500);
    	index=this.index;
    		};
    	}
    };
    // 右切
    function yq(){
    	num++;
    	if (num>5) {num=0};
        if (!ferg) {return};
        ferg=false;
    	for (var i = 0; i < images.length; i++) {
    	    images[i].style.left="730px";
    	    qieqs[i].style.background="#3e3e3e";
        };
            images[index].style.left=null;
            images[index].style.right="0";
            colorAnimate(qieqs[num],"background","#b61b1f",400)
            // qieqs[num].style.background="#b61b1f";
    	a=animate(images[index],{left:-730},500,function(){ferg=true});
    	b=animate(images[num],{left:0},500);
    	index=num;
    }
    // 左切
    function zq(){
    	num--;
    	if (num<0) {num=5};
        if (!ferg) {return};
        ferg=false;
    	for (var i = 0; i < images.length; i++) {
    	    images[i].style.left="-730px";
    	    qieqs[i].style.background="#3e3e3e";
        };
            images[index].style.left="0";
            colorAnimate(qieqs[num],"background","#b61b1f",400)
    	a=animate(images[index],{left:730},500,function(){ferg=true});
    	b=animate(images[num],{left:0},500);
    	index=num;
    }

    
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
	// 得到随机图片
	// var suijitp=["./image/56e76ce9N55a2fb61.jpg","./image/56e76e99N7a83e7b5.jpg"];
	// var suij=getclass("suijitupian")[0];
	// var tup=suij.getElementsByTagName("img")[0];
	// tup.style.src=suijitp[Math.floor(Math.random()*suijitp.length)]
}
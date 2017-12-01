
//购物车
let gouwuche=document.getElementsByClassName('you-gouwuche')[0];
let gouwuXia=document.getElementsByClassName('gouwuche-xia')[0];

gouwuche.onmouseover=function(){
	// gouwuXia.style.opacity='1';
	// gouwuXia.style.height='100px';
	animate(gouwuXia,{height:100})
}
gouwuche.onmouseout=function(){
	// gouwuXia.style.opacity='0';
	// gouwuXia.style.height='0';
    animate(gouwuXia,{height:0})
}





//banner选项卡
let ce1=document.getElementsByClassName('cedaohang1')[0];
let celi=ce1.getElementsByTagName('li')
let TaBa=document.getElementsByClassName('TABA');
let xuanxiangkaBox=[];
for(let i=0;i<TaBa.length;i++){
	xuanxiangkaBox[xuanxiangkaBox.length]=TaBa[i].getElementsByClassName('xuanxiangka-box');
}
// let xuanneirong=document.getElementsByClassName('a');
let kuan;
	// for(let i=0;i<celi.length;i++){
	// 	celi[i].onmouseover=function(){
	// 		TaBa[i].style.visibility='visible';
	// 	}
	// 	celi[i].onmouseout=function(){
	// 		TaBa[i].style.visibility='hidden';
	// 	}
	// }
	for(var i=0;i<celi.length;i++){
		celi[i].index=i;
		celi[i].onmouseover=function(){
			TaBa[this.index].style.visibility='visible';
		}
		celi[i].onmouseout=function(){
			TaBa[this.index].style.visibility='hidden';
		}
	}
		
	for(let i=0;i<TaBa.length;i++){
		kuan=Math.ceil(xuanxiangkaBox[i].length/6)*250;
		TaBa[i].style.width=`${kuan}px`;
	}
	

//导航选项卡
let daohangZi=document.getElementsByClassName('daohang-zi')[0];
let daohangZili=document.getElementsByClassName('zili');
let daohangTab=document.getElementsByClassName('daohang-tab');

	for(let i=0;i<daohangTab.length;i++){
		daohangZili[i].onmouseover=function(){
			for(let j=0;j<daohangTab.length;j++){
				daohangTab[j].style.display='none';
				// daohangTab[i].style.zIndex=5;
				daohangTab[j].style.height='0px';
			}
			daohangTab[i].style.display='block';
			// daohangTab[i].style.zIndex=999;
			daohangTab[i].style.height='229px';		
		}
		daohangZili[i].onmouseout=function(){
			daohangTab[i].style.display='none';
			// daohangTab[i].style.zIndex=5;
			daohangTab[i].style.height='0px';	
		}
	}
//banner图
let bannerBigBox = document.getElementsByClassName('banner-big-box')[0];
let bannerTu = document.getElementsByClassName('banner-tu')[0];
let lis = bannerTu.getElementsByTagName('li')[0];
let lisa = lis.getElementsByTagName('a')[0];
let lisaimg=lisa.getElementsByTagName('img');
let bannerDiandian = document.getElementsByClassName('banner-diandian')[0];
let diandiana = bannerDiandian.getElementsByTagName('li');


// 轮播图时间函数
let num=0;
let t=setInterval(fn,5000);
function fn(){
	num++;
	if(num==lisaimg.length){
		num=0;
	}
	for(let i=0;i<lisaimg.length;i++){
		diandiana[i].style.background='#7F766A';
		lisaimg[i].style.opacity='0';
	}
	diandiana[num].style.background='#E4DBD0';
	lisaimg[num].style.opacity='1';	
}
//轮播图鼠标移入移出
for(let i=0;i<lisaimg.length;i++){
	diandiana[i].onmouseover=function(){
		for(let j=0;j<lisaimg.length;j++){
			diandiana[j].style.background='#7F766A';
			lisaimg[j].style.opacity='0';
		}
		diandiana[i].style.background='#E4DBD0';
		lisaimg[i].style.opacity='1';
		num=i;
		clearInterval(t);
	}

	diandiana[i].onmouseout=function(){
		t=setInterval(fn,5000);
	}
}
//轮播左右箭头
let zuojiantou=document.getElementsByClassName('banner-zuo-jiantou')[0];
let youjiantou=document.getElementsByClassName('banner-you-jiantou')[0];
zuojiantou.onclick=function(){
	num--;
	if(num==-1){
		num=lisaimg.length-1;
	}
	for(let i=0;i<lisaimg.length;i++){
		diandiana[i].style.background='#7F766A';
		lisaimg[i].style.opacity='0';
	}
	diandiana[num].style.background='#E4DBD0';
	lisaimg[num].style.opacity='1';	
}
youjiantou.onclick=function(){
	num++;
	if(num==lisaimg.length){
		num=0;
	}
	for(let i=0;i<lisaimg.length;i++){
		diandiana[i].style.background='#7F766A';
		lisaimg[i].style.opacity='0';
	}
	diandiana[num].style.background='#E4DBD0';
	lisaimg[num].style.opacity='1';	
}

function jiadiandianji(num){
	//家电开始
	let jiadianZiBox=document.getElementsByClassName('jiadian-biaoti-big-box')[num];
	let jiadianZi=jiadianZiBox.getElementsByTagName('a');
	//家电图片
	let jiadianBox=document.getElementsByClassName('jiadian-tupian-big-box')[num];
	let jiadianTuBox=jiadianBox.getElementsByClassName('jiadian-tu-box')[0];
	let jiadianYouBox=jiadianTuBox.getElementsByClassName('jiadian-you-box');
	for(let i=0;i<jiadianZi.length;i++){
		jiadianZi[i].onmouseover=function(){
			for(let j=0;j<jiadianZi.length;j++){
				jiadianZi[j].style.color='#424242';
				// jiadianYouBox[j].style.opacity='0';
				animate(jiadianYouBox[j],{opacity:0});
				jiadianZi[j].style.borderBottom='0'
			}
			jiadianZi[i].style.color='#ff6700';
			// jiadianYouBox[i].style.opacity='1';
            animate(jiadianYouBox[i],{opacity:1});
			jiadianZi[i].style.borderBottom='2px solid #ff6700';
		}
	}
}
jiadiandianji(0);
jiadiandianji(1);
jiadiandianji(2);
function neirong(num){
	//内容
	//内容轮播
	//最外边大盒子
	let pro2=document.getElementsByClassName('pro2')[0];
	let pro2li=pro2.getElementsByTagName('li')[num];
	//获取li的宽
	let widths=pro2li.offsetWidth;
	//
	let halibox=pro2li.getElementsByClassName('halineirongbox')
	//左箭头
	let zuojiantou1=pro2li.getElementsByClassName('zuojiantou')[0];
	//右箭头
	let youjiantou1=pro2li.getElementsByClassName('youjiantou')[0];
	//圆点
	let diandianBox=pro2.getElementsByClassName('diandian-box')[0];
	let diandian=diandianBox.getElementsByTagName('div')
	let now=next=0;
	let zuokaiguan=false;
	let youkaiguan=true;
	let flag=true;
	function neirongfn(){
		if(zuokaiguan){
			flag=false;
			next--;
			halibox[next].style.left=`-${widths}px`;
			animate(halibox[now],{left:widths})
			animate(halibox[next],{left:'0'},function(){
				flag=true;
			})
			for(let i=0;i<diandian.length;i++){
				diandian[i].style.background='#b0b0b0';
			}
			diandian[next].style.background='#FF6700';
			now=next;
			if(next<halibox.length){
				youkaiguan=true;
			}
			if(now==0){
				zuokaiguan=false;
			}
		}
	}	
	zuojiantou1.onclick=function(){
		if(flag){
			neirongfn();
		}
	
	}
	function neirongfn1(){
		flag=false;
		if(youkaiguan){
				next++;
				halibox[next].style.left=`${widths}px`;
				animate(halibox[now],{left:-widths})
				animate(halibox[next],{left:'0'},function(){
					flag=true;
				})
				// halibox[now].style.left=`-${widths}px`;
				// halibox[next].style.left='0';
				for(let i=0;i<diandian.length;i++){
					diandian[i].style.background='#b0b0b0';
				}
				diandian[next].style.background='#FF6700';
				now=next;
			
				if(next==halibox.length-1){
						youkaiguan=false;
				}
				if(now>0){
					zuokaiguan=true;
				}	
			}
		}
		
	youjiantou1.onclick=function(){
		if(flag){
			neirongfn1();
		}
	}
}	
neirong(0);
// neirong(1);
// neirong(2);
// neirong(3);


//明星单品
//箭头
let danpinZuojiantou=document.getElementsByClassName('danping-zuo-jiantou')[0];
let danpinYoujiantou=document.getElementsByClassName('danping-you-jiantou')[0];
//单品图big-big-box
let bigbigbox=document.getElementsByClassName('danpintu-big-big-box')[0];
let bigbox=bigbigbox.getElementsByClassName('danpintu-big-box')[0];
//大宽
let bigwidths=bigbox.offsetWidth;
//小宽
let widths=bigbigbox.offsetWidth;
let num1=0;
let danpingkaiguan=bigwidths/widths;
danpinYoujiantou.onclick=function(){
	num1++;
	// if(num1==danpingkaiguan){
	// 	danpinYoujiantou.style.disabled='true';
	// 	danpinYoujiantou.style.color='#e0e0e0';
	// 	return;
	// }
	// if(num1>0){
	// 	danpinZuojiantou.style.disabled='false';
	// 	danpinZuojiantou.style.color='#ff6700';
	// }
	bigbox.style.transform=`translateX(-${widths}px)`;
}
danpinZuojiantou.onclick=function(){
	num1--;
	// if(num1==1){
	// 	danpinZuojiantou.style.disabled='true';
	// 	danpinZuojiantou.style.color='#e0e0e0';
	// 	return;
	// }
	// if(num1<danpingkaiguan){
	// 	danpinYoujiantou.style.disabled='false';
	// 	danpinYoujiantou.style.color='#ff6700';
	// }
	bigbox.style.transform=`translateX(0px)`;
}

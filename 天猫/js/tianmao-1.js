//头部右侧显示隐藏
let touyinBox=document.querySelector('.touyin-box');
let youceyinBox=document.querySelector('.youceyin-box');
let youceli=document.querySelectorAll('.youceyin-box li');
// console.log(youceli)
//显示的高度
let chaoliu=document.querySelector('.chaoliu-big-box');
let chaoliuH=chaoliu.offsetTop;
//各层高度
//美丽
let meili=document.querySelectorAll('.meili-big-box');
//猜你
let caini=document.querySelector('.cainixihuan-shang');
let cainiH=caini.offsetTop;
//楼层数组
let newarr=[chaoliu];
for(let i=0;i<meili.length;i++){
    newarr[newarr.length]=meili[i];
}
newarr[newarr.length]=caini;

//开关
let flag=true;
let flags=false;

let dangqian=0;
//颜色
let color= ['red', 'yellow', 'blue', '#27FF05', '#FF5A00', '#00FCFF', '#AA00FF', '#FF00F0', '#00FFFC', '#FF0062'];

window.onscroll=function () {
    let obj = document.body ? document.body : document.documentElement;
    let height=obj.scrollTop;
    if(flag){
        if(height>=chaoliuH-400){
            flag=false;
            animate(youceyinBox,{width:36,height:370});
            animate(touyinBox,{height:50},function () {
                flags=true;
            });
        }
    }
    if(flags){
        if(height<chaoliuH-400){
            flags=false;
            animate(youceyinBox,{width:0,height:0});
            animate(touyinBox,{height:0},function () {
                flag=true;
            });
        }
    }
    //楼层颜色变化
    newarr.forEach(function (val,index) {
        if(height+140>=newarr[index].offsetTop){
            for(let i=0;i<youceli.length;i++){
                youceli[i].style.background='';
            }
            youceli[index].style.background=color[index];
            dangqian=index;
        }
    })
    // console.log(dangqian);
    //点击跳转
    youceli.forEach(function (val, call) {
        youceli[call].onclick = function () {
            // console.log(newarr[call].offsetTop);
            animate(document.documentElement, {scrollTop: newarr[call].offsetTop - 100});
            animate(document.body, {scrollTop: newarr[call].offsetTop - 100});
        }
        youceli[call].onmouseover=function () {
            youceli[call].style.background=color[call];
        }
        youceli[call].onmouseout=function () {
            youceli[call].style.background='';
            youceli[dangqian].style.background=color[dangqian];
        }
    })
}
let fanhui=document.querySelector('.zuoce-huidingbu');
fanhui.onclick=function () {
    animate(document.documentElement, {scrollTop:0});
    animate(document.body, {scrollTop:0});
}

//我的淘宝
let wode=document.querySelectorAll('.toubu-you-zi');
let wodeXia=document.querySelector('.wodetaobao');
let wodeXia1=document.querySelector('.shoucangjia');
wode[0].onmouseover=function () {
    animate(wodeXia,{height:57,padding:8},200)
    wodeXia.style.border='1px solid #ddd';
    wodeXia.style.overflow='visible';
    wode[0].style.background='#fff';
}
wode[0].onmouseout=function () {
    animate(wodeXia,{height:0,padding:0},200)
    wodeXia.style.border=0;
    wodeXia.style.overflow='hidden';
    wode[0].style.background='';
}
wode[1].onmouseover=function () {
    animate(wodeXia1,{height:57,padding:8},200)
    wodeXia1.style.border='1px solid #ddd';
    wodeXia1.style.overflow='visible';
    wode[1].style.background='#fff';
}
wode[1].onmouseout=function () {
    animate(wodeXia1,{height:0,padding:0},200)
    wodeXia1.style.border=0;
    wodeXia1.style.overflow='hidden';
    wode[1].style.background='';
}

//网址导航
let wangzhi=document.querySelector('.toubu-zi-zuihou');
let wangzhiXia=document.querySelector('.wangzhi-xia');
wangzhi.onmouseover=function () {
    animate(wangzhiXia,{height:250,padding:25},200);
    wangzhiXia.style.border='1px solid #dddddd';
    wangzhiXia.style.overflow='visible';
}
wangzhi.onmouseout=function () {
    animate(wangzhiXia,{height:0,padding:0},200);
    wangzhiXia.style.border='0';
    wangzhiXia.style.overflow='hidden';
}
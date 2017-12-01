//导航
var navYou = document.querySelector('.nav-you');
var navyouli = document.querySelectorAll('.nav-you li');
var daohangxiala = document.getElementsByClassName('daohang-xiala');

for (let i = 0; i < navyouli.length; i++) {
    navyouli[i].onmouseover = function () {
        daohangxiala[i].style.height = '150px';
        daohangxiala[i].style.opacity = '1';
        navyouli[i].style.overflow = 'visible';
    }
    navyouli[i].onmouseout = function () {
        daohangxiala[i].style.height = '0';
        daohangxiala[i].style.opacity = '0';
        navyouli[i].style.overflow = 'hidden';
    }
}

//banner侧导航
var bannerzuo = document.getElementsByClassName('banner-zuo')[0];
var lis =document.querySelectorAll('.banner-zuo li');
var t = document.getElementsByClassName('cedaohang-box');
for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        t[i].style.display = 'block';
    }
    lis[i].onmouseout = function () {
        t[i].style.display = 'none';
    }
}

//轮播图
var bannertu = document.getElementsByClassName('banner-tu');
var imgs =document.querySelectorAll('.banner-tu img');
var yuan = document.getElementsByClassName('yuan')[0];
var b = document.querySelectorAll('.yuanquan');

var num = 0;
var tw1;



//轮播图时间函数
var qq = setInterval(fn, 5000);

function fn() {
    num++;
    if (num == imgs.length) {
        num = 0;
    }
    for (let i = 0; i < imgs.length; i++) {
        // imgs[i].style.display = 'none';
        animate(imgs[i], {opacity: 0});
        b[i].style.background = '#a1a1a1'
    }
    // imgs[num].style.display = 'block';
    animate(imgs[num], {opacity: 1});
    b[num].style.background = 'red';

}

//轮播图鼠标移入移出
for (let i = 0; i < imgs.length; i++) {
    b[i].onmouseout = function () {
        clearInterval(qq);
        qq = setInterval(fn, 5000);
    }
    b[i].onmouseover = function () {
        // imgs[num].style.display = 'none';
        animate(imgs[num], {opacity: 0});
        b[num].style.background = '#a1a1a1';
        // imgs[i].style.display = 'block';
        animate(imgs[i], {opacity: 1});
        b[i].style.background = 'red';
        num = i;
        clearInterval(qq);

    }

}

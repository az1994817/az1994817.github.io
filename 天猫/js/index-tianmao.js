//楼层数组
let newarr = [$('.chaoliu-big-box')];
$('.meili-big-box').each(function (index, val) {
    newarr[newarr.length] = $(val);
})
newarr[newarr.length] = $('.cainixihuan-shang');
//开关
let flag = true;
let flags = false;
let dangqian = 0;
let color = ['red', 'yellow', 'blue', '#27FF05', '#FF5A00', '#00FCFF', '#AA00FF', '#FF00F0', '#00FFFC', '#FF0062'];
$(window).scroll(function () {
    if (flag) {
        if ($(window).scrollTop() >= $('.chaoliu-big-box').offset().top - 400) {
            flag = false;
            $('.touyin-box').slideDown();
            $('.youceyin-box').slideDown(function () {
                flags = true;
            });
        }
    }
    if (flags) {
        if ($(window).scrollTop() < $('.chaoliu-big-box').offset().top - 400) {
            flags = false;
            $('.touyin-box').slideUp();
            $('.youceyin-box').slideUp(function () {
                flag = true;
            });
        }
    }
    //楼层颜色变化
    newarr.forEach(function (val, index) {
        if ($(window).scrollTop() + 140 >= $(newarr[index]).offset().top) {
            for (let i = 0; i < $('.youceyin-box li').length; i++) {
                $('.youceyin-box li').eq(i).css('background', '');
            }
            $('.youceyin-box li').eq(index).css('background', color[index]);
            dangqian = index;
        }
    })
    //点击跳转
    $('.youceyin-box li').each(function (call, val) {
        // console.log($(val))
        $(val).click(function () {
            $('body').animate({
                scrollTop: $(newarr[call]).offset().top - 100
            })
        })
        $(val).mouseover(function () {
            $(val).css('background', color[call])
        })
        $(val).mouseout(function () {
            $('.youceyin-box li').eq(call).css('background', '');
            $('.youceyin-box li').eq(dangqian).css('background', color[dangqian])
        })
    })
    
    $('.zuoce-huidingbu').click(function () {
        $('body').animate({
            scrollTop: 0
        })
    })
})
//我的淘宝
$('.toubu-you-zi a').eq(0).mouseover(function (e) {
    $('.wodetaobao').show();
    $('.toubu-you-zi').eq(0).css('background','#fff');
})
$('.toubu-you-zi a').eq(0).mouseout(function (e) {
    e.cancelBubble = true;
    $('.wodetaobao').hide();
    $('.toubu-you-zi').eq(0).css('background','');
})
$('.toubu-you-zi a').eq(1).mouseover(function (e) {
    $('.shoucangjia').show();
    $('.toubu-you-zi').eq(1).css('background','#fff');
})
$('.toubu-you-zi a').eq(1).mouseout(function (e) {
    e.cancelBubble = true;
    $('.shoucangjia').hide();
    $('.toubu-you-zi').eq(1).css('background','');
})
//网址导航

$('.toubu-zi-zuihou').mouseover(function () {
    $('.wangzhi-xia').css('display','block');
    $('.wangzhi-xia').animate({height:250})
})
$('.toubu-zi-zuihou').mouseout(function () {
    $('.wangzhi-xia').css('display','none');
    $('.wangzhi-xia').animate({height:0})
})
//导航
for (let i = 0; i <$('.nav-you li').length; i++) {
    $('.nav-you li').eq(i).mouseover(function () {
        $('.daohang-xiala').eq(i).show();
    })
    $('.nav-you li').eq(i).mouseout(function () {
        $('.daohang-xiala').eq(i).hide();
    })
}
//banner侧导航
var bannerzuo = document.getElementsByClassName('banner-zuo')[0];
var lis =document.querySelectorAll('.banner-zuo li');
var t = document.getElementsByClassName('cedaohang-box');
for (let i = 0; i < $('.banner-zuo li').length; i++) {
    $('.banner-zuo li').eq(i).mouseover (function () {
        $('.cedaohang-box').eq(i).css('display','block');
        $('.cedaohang-box').eq(i).css('z-index',99);
    })
    $('.banner-zuo li').eq(i).mouseout (function () {
        $('.cedaohang-box').eq(i).css('display','none');
        $('.cedaohang-box').eq(i).css('z-index','');
    })
}
//轮播图
var bannertu = document.getElementsByClassName('banner-tu');
var imgs =document.querySelectorAll('.banner-tu img');
var yuan = document.getElementsByClassName('yuan')[0];
var b = document.querySelectorAll('.yuanquan');

let num = 0;
let tw1;



//轮播图时间函数
let qq = setInterval(fn, 1000);

function fn() {
    num++;
    if (num == $('.banner-tu img').length) {
        num = 0;
    }
    for (let i = 0; i < $('.banner-tu img').length; i++) {
        $('.banner-tu img').eq(i).css('opacity',0);
        $('.yuanquan').eq(i).css('background','#a1a1a1');
    }
    $('.banner-tu img').eq(num).css('opacity',1);
    $('.yuanquan').eq(num).css('background','red');
}

//轮播图鼠标移入移出
for (let i = 0; i < $('.banner-tu img').length; i++) {
    $('.yuanquan').eq(i).mouseout(function () {
        console.log(1)
        clearInterval(qq);
        qq = setInterval(fn, 5000);
    })
    $('.yuanquan').eq(i).mouseover(function () {
        $('.banner-tu img').eq(num).css('opacity',0);
        $('.yuanquan').eq(num).css('background','#a1a1a1');
        // animate(imgs[num], {opacity: 0});
        // b[num].style.background = '#a1a1a1';
        // imgs[i].style.display = 'block';
        $('.banner-tu img').eq(i).css('opacity',1);
        $('.yuanquan').eq(i).css('background','red');
        // animate(imgs[i], {opacity: 1});
        // b[i].style.background = 'red';
        num = i;
        clearInterval(qq);

    })

}

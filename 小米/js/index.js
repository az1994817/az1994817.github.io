//购物车
$('.you-gouwuche').mouseover(function () {
    $('.gouwuche-xia').slideDown(1000);
})
$('.you-gouwuche').mouseout(function () {
    $('.gouwuche-xia').slideUp(1000);
})
//banner选项卡
let kuan;
$('.cedaohang1>li').each(function (index, val) {
    $(val).find('.TABA').hide();
    $(this).mouseover(function () {
        $(val).find('.TABA').show();
    })
    $(this).mouseout(function (index) {
        $(val).find('.TABA').hide();
    })
})
let TaBa = document.getElementsByClassName('TABA');
let xuanxiangkaBox = [];
for (let i = 0; i < TaBa.length; i++) {
    xuanxiangkaBox[xuanxiangkaBox.length] = TaBa[i].getElementsByClassName('xuanxiangka-box');
}
for (let i = 0; i < TaBa.length; i++) {
    kuan = Math.ceil(xuanxiangkaBox[i].length / 6) * 250;
    TaBa[i].style.width = `${kuan}px`;
}
//导航选项卡
for (let i = 0; i < $('.daohang-tab').length; i++) {
    $('.zili').eq(i).mouseover(function () {
        for (let j = 0; j < $('.daohang-tab').length; j++) {
            $('.daohang-tab').eq(j).hide();
        }
        $('.daohang-tab').eq(i).slideDown();
    })
    $('.zili').eq(i).mouseout(function () {
        $('.daohang-tab').eq(i).slideUp();
    })
}

//轮播图
let num = 0;
let t = setInterval(fn, 1000);

function fn() {
    num++;
    if (num == $('.banner-tu li a img').length) {
        num = 0;
    }
    for (let i = 0; i < $('.banner-tu li a img').length; i++) {
        $('.banner-diandian li').eq(i).css('background', '#7F766A');
        $('.banner-tu li a img').eq(i).hide();
    }
    $('.banner-diandian li').eq(num).css('background', '#E4DBD0');
    $('.banner-tu li a img').eq(num).show();
}

//轮播图鼠标移入移出
for (let i = 0; i < $('.banner-tu li a img').length; i++) {
    $('.banner-diandian li').eq(i).mouseover(function () {
        for (let j = 0; j < $('.banner-tu li a img').length; j++) {
            $('.banner-diandian li').eq(j).css('background', '#7F766A');
            $('.banner-tu li a img').eq(j).hide();
        }
        $('.banner-diandian li').eq(i).css('background', '#E4DBD0');
        $('.banner-tu li a img').eq(i).show();
        num = i;
        clearInterval(t);
    })

    $('.banner-diandian li').eq(i).mouseout(function () {
        t = setInterval(fn, 1000);
    })
}
//轮播左右箭头
var zuojiantou = document.getElementsByClassName('banner-zuo-jiantou')[0];
var youjiantou = document.getElementsByClassName('banner-you-jiantou')[0];

$('.banner-zuo-jiantou').mouseover(function () {
    clearInterval(t);
})
$('.banner-zuo-jiantou').mouseout(function () {
    clearInterval(t);
    t = setInterval(fn, 1000);
})

$('.banner-you-jiantou').mouseover(function () {
    clearInterval(t);
})
$('.banner-you-jiantou').mouseout(function () {
    clearInterval(t);
    t = setInterval(fn, 1000);
})


$('.banner-zuo-jiantou').click(function () {
    num--;
    if (num == -1) {
        num = $('.banner-tu li a img').length - 1;
    }
    for (let i = 0; i < $('.banner-tu li a img').length; i++) {
        $('.banner-diandian li').eq(i).css('background', '#7F766A');
        $('.banner-tu li a img').eq(i).hide();
    }
    $('.banner-diandian li').eq(num).css('background', '#E4DBD0');
    $('.banner-tu li a img').eq(num).show();
})
$('.banner-you-jiantou').click(function () {
    num++;
    if (num == $('.banner-tu li a img').length) {
        num = 0;
    }
    for (let i = 0; i < $('.banner-tu li a img').length; i++) {
        $('.banner-diandian li').eq(i).css('background', '#7F766A');
        $('.banner-tu li a img').eq(i).hide();
    }
    $('.banner-diandian li').eq(num).css('background', '#E4DBD0');
    $('.banner-tu li a img').eq(num).show();
})

//家电
function jiadiandianji(num) {
    for (let i = 0; i < $('.jiadian-biaoti-big-box').eq(num).find('a').length; i++) {
        $('.jiadian-biaoti-big-box').eq(num).find('a').eq(i).mouseover(function () {
            for (let j = 0; j < $('.jiadian-biaoti-big-box').eq(num).find('a').length; j++) {
                $('.jiadian-biaoti-big-box').eq(num).find('a').eq(j).css('color', '#424242');
                $('.jiadian-biaoti-big-box').eq(num).find('a').eq(j).css('border-bottom', 0);
                $('.jiadian-tupian-big-box').eq(num).find('.jiadian-tu-box .jiadian-you-box').eq(j).hide();
                // animate(jiadianYouBox[j],{opacity:0});
            }
            $('.jiadian-biaoti-big-box').eq(num).find('a').eq(i).css('color', '#ff6700');
            $('.jiadian-biaoti-big-box').eq(num).find('a').eq(i).css('border-bottom', '2px solid #ff6700');
            $('.jiadian-tupian-big-box').eq(num).find('.jiadian-tu-box .jiadian-you-box').eq(i).show();
            // jiadianZi[i].style.color='#ff6700';
            // // jiadianYouBox[i].style.opacity='1';
            // animate(jiadianYouBox[i],{opacity:1});
            // jiadianZi[i].style.borderBottom='2px solid #ff6700';
        })
    }
}

jiadiandianji(0);
jiadiandianji(1);
jiadiandianji(2);
let bigbigbox = document.getElementsByClassName('danpintu-big-big-box')[0];
let bigbox = bigbigbox.getElementsByClassName('danpintu-big-box')[0];
let widths = bigbigbox.offsetWidth;
$('.danping-you-jiantou').click(function () {
    $('.danpintu-big-big-box .danpintu-big-box').css('transform', `translateX(-${widths}px)`);
})
$('.danping-zuo-jiantou').click(function () {
    $('.danpintu-big-big-box .danpintu-big-box').css('transform', `translateX(0px)`);
})
//内容
let now = next = 0;
let zuokaiguan = false;
let youkaiguan = true;
let flag = true;

// $('.pro2 li').width();
function neirongfengzhuang(num) {

    function neirongfn() {
        if (zuokaiguan) {
            flag = false;
            next--;
            $(`.pro2 li:eq(${num}) .halineirongbox`).eq(next).css('left', `-${$('.pro2 li').width()}px`);
            $(`.pro2 li:eq(${num}) .halineirongbox`).eq(now).animate({left: `${$('.pro2 li').width()}px`})
            $(`.pro2 li:eq(${num}) .halineirongbox`).eq(next).animate({left: '0'}, function () {
                flag = true;
            })


            for (let i = 0; i < $(`.diandian-box:eq(${num}) div`).length; i++) {
                $(`.diandian-box:eq(${num}) div`).eq(i).css('background', '#b0b0b0');
            }
            $(`.diandian-box:eq(${num}) div`).eq(next).css('background', '#FF6700');
            now = next;
            if (next < $(`.pro2 li:eq(${num}) .halineirongbox`).length) {
                youkaiguan = true;
            }
            if (now == 0) {
                zuokaiguan = false;
            }
        }
    }

    $(`.pro2 li:eq(${num}) .zuojiantou`).click(function () {
        if (flag) {
            neirongfn();
        }

    })

    function neirongfn1() {

        if (youkaiguan) {
            flag = false;
            next++;
            $(`.pro2 li:eq(${num}) .halineirongbox`).eq(next).css('left', `${$('.pro2 li').width()}px`);
            $(`.pro2 li:eq(${num}) .halineirongbox`).eq(now).animate({left: `-${$('.pro2 li').width()}px`})
            $(`.pro2 li:eq(${num}) .halineirongbox`).eq(next).animate({left: '0'}, function () {
                flag = true;
            })
            // halibox[next].style.left = `${widths}px`;
            // animate(halibox[now], {left: -widths})
            // animate(halibox[next], {left: '0'}, function () {
            //     flag = true;
            // })
            for (let i = 0; i < $(`.diandian-box:eq(${num}) div`).length; i++) {
                $(`.diandian-box:eq(${num}) div`).eq(i).css('background', '#b0b0b0');
            }
            $(`.diandian-box:eq(${num}) div`).eq(next).css('background', '#FF6700');
            now = next;
            if (next == $(`.pro2 li:eq(${num}) .halineirongbox`).length - 1) {
                youkaiguan = false;

            }
            if (now > 0) {
                zuokaiguan = true;
            }
        }
    }

    $(`.pro2 li:eq(${num}) .youjiantou`).click(function () {
        if (flag) {
            neirongfn1();

        }
    })
    console.log($(`.pro2 li:eq(${num}) .halineirongbox`).length)
}
neirongfengzhuang(0);
neirongfengzhuang(1);
neirongfengzhuang(2);
neirongfengzhuang(3);
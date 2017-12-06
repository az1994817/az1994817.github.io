$(function () {
    let search='';
    let arr=[];
    // localStorage.history=' ';
    $('.fanhui').click(function () {
      history.back();
    })
    function reset() {

        if(localStorage.history){
            search=localStorage.history;
            let str='';
            arr=search.split(',');
            arr=arr.slice(-5);
            arr.forEach(val=>{
                str+=`<span class="sousuo">${val}</span>`;
            })
            $('.history').html(str);
        }
    }
    reset();

    $('input').focus(function () {
        reset();
        $('.history').show();
    })
    $('input').blur(function () {

        $('.history').hide().prev().blur();
        let value=$('input').val();
        if(!arr.includes(value)){
            search+=`${value},`
        }
        localStorage.history=search;
        fn(value);
        $('input').val('');

    })
    $('.sousuo').click(function () {
        let val=$(this).text();
        fn(val);
        $('.history').hide();
    })

    function fn(val) {
        $.ajax({
            url:`http://api.jisuapi.com/news/search?keyword=${val}&appkey=59ce2b61a17bbb8f`,
            dataType:'jsonp',
            success:function (val) {
                let arr=val.result.list;
                let arr1=''
                console.log(arr)
                arr.forEach(function (val) {
                    if(val.pic){
                        arr1+=`<div class="xinwen" style="border-bottom: 1px solid #DDD;box-sizing: border-box;padding-top: 0.2rem;padding-bottom: 0.2rem; ">
                             <div class="xinwenimg">
                                 <img src="${val.pic}" alt="" style="width: 100%">
                              </div>
                             <div class="xinwentitle">${val.title}</div>
                             <div class="xiaoxi">
                             <div class="time">时间：${val.time}</div>
                             <div class="laiyuan">来源：${val.src}</div>
                             </div>
                         </div>`;
                    }else{
                        arr1+=` <div class="xinwen1" style="border-bottom: 1px solid #DDD;box-sizing: border-box;padding-top: 0.2rem;padding-bottom: 0.2rem;">
                              <div class="xintitle">${val.title}
                              <div class="xiaoxi">
                              <div class="time">时间：${val.time}</div>
                              <div class="laiyuan">来源：${val.src}</div>
                              </div></div>
                              </div>`;
                    }
                })
                $('.sousuonei').html(function (index,html) {
                    return arr1+html;
                })
            }
        })
    }

    $(window).keydown(function (e) {
        let key=e.keyCode;
        if(key==13){
            $('.history').hide().prev().blur();
            let value=$('input').val();
            if(value==''){
                return;
            }else if(!arr.includes(value)){
                search+=`${value},`
            }
            localStorage.history=search;
            fn(value);
            $('input').val('');
        }
    })
    $('.fanhui').click(function () {
        history.back();
    })







})
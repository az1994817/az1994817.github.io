$(function () {
    $('.fanhui').click(function () {
      history.back();
    })
    let his='';
    let str='';
    if(localStorage.history){
        his=localStorage.history;
        let arr=his.split(',');
        arr.forEach(val=>{
            str+=`<span>${val}</span>`;
        })
        $('.history').html(str);
    }



})
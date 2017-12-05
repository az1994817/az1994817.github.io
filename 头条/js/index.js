$(function () {
    let myScroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false,
        click:true
    });

    $.ajax({
        url: "https://api.jisuapi.com/news/channel?appkey=59ce2b61a17bbb8f",
        dataType: "jsonp",
        beforeSend:function(){
            $('.zhao').show();
        },
        success: function (val) {
            $('.zhao').hide();
            var arr = val.result;
            console.log(arr)
            var str = "";
            arr.forEach((value, index) => {
                if (index == 0) {
                    str += `<li class="active">${value}</li>`
                } else {
                    str += `<li>${value}</li>`
                }

            });
            $("#scroller > ul").html(str);

            function render(obj) {
                let start = obj.start || "0";
                let num = obj.num || "10";
                let act = obj.act || $("li.active");
                $.ajax({
                    url: "https://api.jisuapi.com/news/get?channel=" + act.text() + "&start=" + start + "&num=" + num + "&appkey=59ce2b61a17bbb8f",
                    dataType: "jsonp",
                    beforeSend:function(){
                        $('.zhao').show();
                    },
                    success: function (val) {
                        $('.zhao').hide();
                        let arr = val.result.list;
                        let str = "";
                        arr.forEach((val) => {
                            if (val.pic === "") {
                                str += `
                                <a href="${val.url}">
                            <li class="list">
                               
                                <div class="right noimg">
                                     <p>
                                        ${val.title}
                                     </p>
                                     <section class="time">
                                        时间: ${val.time}
                                        来源: ${val.src}
                                     </section>
                                </div>
                            </li>
                         </a>`;
                            } else {
                                str += `
                        <a href="${val.url}">
                            <li class="list">
                                <div class="left">
                                     <img src="${val.pic}" alt="">
                                </div>
                                <div class="right">
                                     <p>
                                        ${val.title}
                                     </p>
                                     <section class="time">
                                        时间: ${val.time}
                                        来源: ${val.src}
                                     </section>
                                </div>
                            </li>
                         </a>`;
                            }
                        });
                        $("ul.content").html(str);
                    }
                })
            }

            render({
                start: 0,
                num: 10,
                act: $("li.active"),
            });

            $("#scroller ul").on("click", "li", function () {
                let act = $(this).siblings().removeClass("active").end().addClass("active");
                render(act);
                $("header input").val("");
            });
            let num = 10;
            $(".go").on("click", function () {
                num += 10;
                render({
                    num: num,
                });
            });

            function LookFor(obj) {
                let val = obj.val;
                $.ajax({
                    url: "https://api.jisuapi.com/news/search?keyword=" + val + "&appkey=59ce2b61a17bbb8f",
                    dataType: "jsonp",
                    success: function (val) {
                        let arr = val.result.list;
                        let str = "";
                        arr.forEach((val) => {
                            if (val.pic === "") {
                                str += `
                                <a href="${val.url}">
                            <li class="list">
                               
                                <div class="right noimg">
                                     <p>
                                        ${val.title}
                                     </p>
                                     <section class="time">
                                        时间: ${val.time}
                                        来源: ${val.src}
                                     </section>
                                </div>
                            </li>
                         </a>`;
                            } else {
                                str += `
                        <a href="${val.url}">
                            <li class="list">
                                <div class="left">
                                     <img src="${val.pic}" alt="">
                                </div>
                                <div class="right">
                                     <p>
                                        ${val.title}
                                     </p>
                                     <section class="time">
                                        时间: ${val.time}
                                        来源: ${val.src}
                                     </section>
                                </div>
                            </li>
                         </a>`;
                            }
                        });
                        $("ul.content").html(str);

                    }
                })
            }

            // $("header .for").on("click", function () {
            //     // console.log($("input.lookfor").val())
            //     LookFor({
            //         val: $("input.lookfor").val()
            //     })
            // })
            $("input.lookfor").keyup(function (e) {
                if (e.which == 13) {
                    LookFor({
                        val: $(this).val()
                    })
                }
            })
        }
    })
    $('input').click(function () {
        location.href='newindex.html';
    })



})

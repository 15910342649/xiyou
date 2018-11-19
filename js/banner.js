$(function(){
	 var i = 0;

//         var clone = $("#banner li").first().clone();//克隆第一张图片
//         $("#banner ul").append(clone);                //复制到列表最后
        var size = $("#banner li").size();         //返回匹配元素的数量
//         console.log(size);

        /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
        for (var j = 0; j < size - 1; j++) {
            $("#banner ul").append("<li></li>");
			}
        //  $("#banner li").first().addClass("on");

        /*自动轮播*/

        var t = setInterval(function () {
            i++;
            move();
        }, 3000);

        /*鼠标悬停事件*/

        $("#banner").hover(function () {
            clearInterval(t);//鼠标悬停时清除定时器
        }, function () {
            t = setInterval(function () {
                i++;
                move();
            }, 3000); //鼠标移出时开始定时器
        });

        /*鼠标滑入原点事件*/

        $("#banner li").hover(function () {
            var index = $(this).index();//获取当前索引值
            i = index;
            $("#banner ul").stop().animate({ top: -index * 500 }, 600);
            // $(this).addClass("on").siblings().removeClass("on");
        });



        /*向左按钮*/
        $("#banner .leftBtn").click(function () {
            i--;
            move();
        }) /*向右按钮*/
        $("#banner .rightBtn").click(function () {
            i++;
            move();
        }) /*移动事件*/
        function move() {
            if (i == size) {
                $("#banner ul").css({ top: 0 });
                i = 1;
            } if (i == -1) {
                $("#banner ul").css({ left: -(size - 1) * 100 + '%' });
                i = size - 2;
            } $("#banner ul").stop().animate({ top: -i * 500 }, 600);

            if (i == size - 1) {
                $("#banner li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $("#banner li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }

})
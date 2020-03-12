**拼图示例**

```js
seajs.use('../pt', function (pt) {
    var ptdMain = pt;
    var isBind = false; // 按钮绑定

    function dealing() {
        if (isBind) {
            return;
        }
        isBind = true;


        // 监听拼图成功的事件、或者倒计时监听拼图失败的事件
        // 拼图倒计时结束后传值,status=2拼图成功,status=3拼图失败

        // 拼图成功
        wht.game('pt1').stop(1, function () {
            alert('拼图成功！！');
            setTimeout(function(){
                wht.game('pt1').reset();
                isBind = false;
            }, 2000);
        });

        // 拼图失败
        // 假设一个定时器
        /*var time = 10;
        var timer = setInterval(function () {
            time -= 1;
            console.log(time);
            if (time <= 0) {
                clearInterval(timer);
                console.log('拼图失败！！');
                wht.game('pt1').reset();
            }
        }, time);*/

    }

    function btnBind() {
        $('.J-startBtn').click(function () {

            if(wht.game('pt1').isStart){
                alert('您还在游戏中');
                return;
            }

            // 启动
            wht.game('pt1').start();

            dealing();
        });

        $('.J-resetBtn').click(function () {
            if(wht.game('pt1') == null){
                return;
            }
            wht.game('pt1').reset();
        });
    }

    function initconfig() {
        wht.gameInit({
            name: 'pt1',
            type: 'pt',
            param: {
                // 拼图图片路径
                img: "assets/img/wht-pt/1.jpg",
                // 拼图图片碎片数量
                pieces: [3, 3],
                // 拼图区域；
                area: ".cube",
                pieceClass: ".cube div.imgCell",
                // 拼图切片运动速度，单位毫秒
                movetime: 400
            },
            // 指定由哪个游戏组件进行初始化配置项
            specifyConfItem: function (o) {
                return ptdMain.init(o);
            }
        });
    }

    function init() {
        initconfig();
        btnBind();
    }

    init();
});
```
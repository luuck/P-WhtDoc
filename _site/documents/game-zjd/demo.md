**砸金蛋示例**

```js
seajs.use('../zjd', function (zjd) {
    var zjdMain = zjd; // 万花筒-游戏组件
    var isBind = false; // 按钮绑定
    var zjd1 = null;

    function dealing() {
        if (isBind) {
            return;
        }
        isBind = true;

        var d = {
            award: ["<h2&一等奖</h2&", "<h2&没有中奖1</h2&", "<h2&没有中奖2</h2&"],
            awardImgs: []
        };
        zjd1.stop(d, function () {
            setTimeout(function () {
                console.log('处理奖励,手动重置');
                zjd1.reset();
                isBind = false;
            }, 3000);
        });
    }

    function btnBind() {
        $('.J-startBtn').click(function () {
            zjd1 = wht.game('zjd1');
            if (zjd1 != null &amp;&amp; zjd1.isRun) {
                return;
            }
            zjd1.start();
            dealing();
        });

        $('.J-resetBtn').click(function () {
            if (zjd1 == null) {
                return;
            }
            zjd1.reset();
        });
    }

    function initconfig() {
        wht.gameInit({
            name: 'zjd1',
            type: 'zjd',
            param: {
                eggs: ".eggList li",
                hummer: "#hammer",
                eggsNum: 3,
                // 动画随机交换的次数；
                anniNumMax: 6,
                speed: 300
            },
            // 指定由哪个游戏组件进行初始化配置项
            specifyConfItem: function (o) {
                return zjdMain.init(o);
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
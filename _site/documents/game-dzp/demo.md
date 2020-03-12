**大转盘示例**

```js
seajs.use('../dzp', function (dzp) {
        var dzpMain = dzp; // 万花筒-游戏组件
        var isBind = false; // 按钮绑定
        var dzp1 = null;

        function dealing() {
            if (isBind) {
                return;
            }
            isBind = true;

            // 为了测试用，此时是ajax交互，这里省略了ajax交互
            dzp1.stop(4, function () {
                alert('成功停止在位置4');
                isBind = false;
                // 重置
                dzp1.reset();
            });
        }

        function btnBind() {
            $('.J-lottery0').click(function () {
                console.log('---dzp1---');
                dzp1 = wht.game('dzp1');
                // 启动
                dzp1.start();
                dealing();
            });
        }

        function initconfig() {

            // 初始化游戏组件
            wht.gameInit({
                // 这里的name命名便于调用的时候方便识别，示例：wht.game('pmd1')
                name: 'dzp1',
                type: 'dzp',
                param: {
                    //偏移量；转盘第一个奖区应该向右偏移的角度(指针与第一奖区的左边线对齐)
                    excursion: 18,
                    //转动指针
                    pointerName: ".lottery-pointer0",
                    //奖区数量
                    awardNum: 10,
                    //停止转动所需时间（从匀速减速到0）
                    duration: 4000,
                    //匀速时每秒转动圈数(圈数越多，转盘速度越快)
                    circles: 4
                },
                // 指定由哪个游戏组件进行初始化配置项
                specifyConfItem: function (o) {
                    return dzpMain.init(o);
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

[demo查看：待提供](http://www.baidu.com)
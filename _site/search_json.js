window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "",
      "content": "",
      "url": "/documents/index.html",
      "children": [
        {
          "title": "简介",
          "url": "/documents/index.html#简介",
          "content": "简介wht是基于jquery.js、layer.js实现的PC平台活动开发库。把重复、相似、稳定的内容统一标准化，简化开发流程。"
        },
        {
          "title": "特性",
          "url": "/documents/index.html#特性",
          "content": "特性质量可靠\n经历了半年多的考验，给活动开发提供了有效的保障。\n开发便捷\n迅速、快捷调用通用的模块，提高开发效率。\n统一标准\n遵循统一的交互标准、接口标准，使用统一规范化开发方式。\n扩展性强\n可扩展新的基础组件、游戏组件等等。\n"
        },
        {
          "title": "支持环境",
          "url": "/documents/index.html#支持环境",
          "content": "支持环境IE6及以上\n主流浏览器（chrome、360、firefox）\n"
        },
        {
          "title": "版本",
          "url": "/documents/index.html#版本",
          "content": "版本V2.0.0\n"
        }
      ]
    },
    {
      "title": "安装",
      "content": "",
      "url": "/documents/intro/install.html",
      "children": [
        {
          "title": "克隆",
          "url": "/documents/intro/install.html#克隆",
          "content": "克隆`git clone http://qinlu@192.168.1.146:8080/r/FD_P_ActMode.git"
        },
        {
          "title": "创建分支",
          "url": "/documents/intro/install.html#创建分支",
          "content": "创建分支创建分支release-v1.0.0（开发分支）"
        },
        {
          "title": "安装依赖包",
          "url": "/documents/intro/install.html#安装依赖包",
          "content": "安装依赖包npm install or cnpm install"
        }
      ]
    },
    {
      "title": "快速开始",
      "content": "",
      "url": "/documents/intro/start.html",
      "children": [
        {
          "title": "运行",
          "url": "/documents/intro/start.html#运行",
          "content": "运行已经安装好项目后，运行：node server.js"
        },
        {
          "title": "访问",
          "url": "/documents/intro/start.html#访问",
          "content": "访问http://a.yaodou.org:1505/src/index.html访问前注意事项：需要在host文件中新增一行：127.0.0.1 a.yaodou.org（中间有空格），以防止运行时登录出现跨域错误，并且host文件调整后需要重启运行。"
        },
        {
          "title": "目录结构说明",
          "url": "/documents/intro/start.html#目录结构说明",
          "content": "目录结构说明目录结构特别说明：【css】和【img】：都是打包后的资源文件\n【js/app】：活动入口，处理活动所有逻辑\n【js/config】：配置文件，例如url的配置\n【js/lib】：第三方库文件\n【js/tool】：工具函数，用于放置基础组件、全局公用函数、全局公用方法 \n \n【js/tpl】：打包后的模板文件\n【js/wht-game】：万花筒游戏组件，例如大转盘使用说明\n【scss】：样式文件\n\n【sprite】：打包前的图片位置\n【spritemp】：雪碧图和样式的映射文件（不需要改动）\n【tplhtml】：模板页面\n【index.html】：首页\n【pop-demo.html】：弹窗页面，主要用于快速调整弹窗的样式\n【gulpConfig.json】：gulp配置文件，主要用于文件打包的配置项，包括雪碧图合并，脚本合并压缩处理等等\n【serverPackage.json】：接口数据\n\n"
        }
      ]
    },
    {
      "title": "Code 字典",
      "content": "Code 字典提供了全局的code值配置。",
      "url": "/documents/base-code.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/base-code.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/base-code.html#如何使用？-1.引入",
          "content": "1.引入"
        },
        {
          "title": "2.初始化配置",
          "url": "/documents/base-code.html#如何使用？-2.初始化配置",
          "content": "2.初始化配置// 覆盖默认配置wht.codeInit({\n\t SUCCESS: 0,\n\t SUCCESS: 0, // 成功\n\t NO_LOGIN: 2000, // 未登录\n\t NO_START: 3000, // 活动未开始\n\t END: 4000, // 活动已结束\n\t ERROR_SYSTEM: 5000 // 系统出错\n });\n"
        },
        {
          "title": "3.直接使用",
          "url": "/documents/base-code.html#如何使用？-3.直接使用",
          "content": "3.直接使用wht.code.SUCCESS"
        }
      ]
    },
    {
      "title": "Ajax 方法",
      "content": "Ajax 方法提供了简易版的ajax请求。",
      "url": "/documents/base-ajax.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/base-ajax.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/base-ajax.html#如何使用？-1.引入",
          "content": "1.引入"
        },
        {
          "title": "2.初始化配置",
          "url": "/documents/base-ajax.html#如何使用？-2.初始化配置",
          "content": "2.初始化配置// 覆盖默认配置wht.ajaxInit({\n\t// 默认为【get】，可选\n\ttype: 'post',\n\t// 默认为【''】,可选\n\turl：'',\n\t// 默认为【''】,可选\n\tdata: '',\n\t// 默认为【'json'】,可选\n\tdataType: 'json',\n\t// 默认type为get时为【''】、post时为【'application/json'】,可选\n \tcontentType: 'application/json',\n\t// 默认【false】,可选\n\tcache: false,\n\t// 默认【true】,可选\n\tasync: true,\n\t// 必填\n\tsuccess: function(){\n\t\n\t},\n\t// 初始化配置的时候必填,使用时可忽略\n\terror: function(){\n\t\n\t},\n\t// 可选\n\tcomplete: function(){\n\t\n\t}\n });\n"
        },
        {
          "title": "3.直接使用",
          "url": "/documents/base-ajax.html#如何使用？-3.直接使用",
          "content": "3.直接使用简化版wht.ajax({\turl: '',\n\tdata: '',\n\tsuccess: function(result){\n\t\tdealfn(result);\n\t}\n});\n完整版wht.ajax({\t// 默认为【get】，可选\n\ttype: 'post',\n\t// 默认为【''】,可选\n\turl：'',\n\t// 默认为【''】,可选\n\tdata: '',\n\t// 默认为【'json'】,可选\n\tdataType: 'json',\n\t// 默认type为get时为【''】、post时为【'application/json'】,可选\n \tcontentType: 'application/json',\n\t// 默认【false】,可选\n\tcache: false,\n\t// 默认【true】,可选\n\tasync: true,\n\t// 必填\n\tsuccess: function(){\n\t\n\t},\n\t// 初始化配置的时候必填,使用时可忽略\n\terror: function(){\n\t\n\t},\n\t// 可选\n\tcomplete: function(){\n\t\n\t}\n });\n"
        }
      ]
    },
    {
      "title": "Dialog 弹窗",
      "content": "固有弹窗-完整版\n固有弹窗-简易版\n\n基础弹窗\n弱提示弹窗\n带img图片弹窗\n\n\n自定义弹窗-完整版\n示例\n",
      "url": "/documents/msg/msg-base.html",
      "children": []
    },
    {
      "title": "固有弹窗 - 完整版",
      "content": "分为两种类型，分别是base（基础）、img（带img图片）的弹窗。base：基础提示弹窗（包含了带sorry图标弹窗、妖豆弱提示弹窗、同城游弱提示弹窗）\nimg：带img提示弹窗\n",
      "url": "/documents/msg/msg-base-common.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/msg/msg-base-common.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/msg/msg-base-common.html#如何使用？-1.引入",
          "content": "1.引入"
        },
        {
          "title": "2.使用",
          "url": "/documents/msg/msg-base-common.html#如何使用？-2.使用",
          "content": "2.使用// 使用方式如下，具体的参数说明在下边的配置项说明wht.dialog({\n\t// type有两种类型：\n\t// base：基础弹窗；img：带img的弹窗。\n\ttype: 'base',\n    title: '提示',\n\t// -----------------------------------\n\t// 这里样式皮肤设置对应 css/layer-myskin.css 文件，这个样式文件有两个作用：\n\t// 1.覆盖第三方弹窗插件layer的默认样式；\n\t// 2.使用官方推荐的方式自定义弹窗的皮肤。\n\t// 如需配置新的弹窗样式，详情请阅读示例中的 css/layer-myskin.css 这个样式文件。\n    // 可选：默认是【layer-ext-baseskin】，\n\t// -----------------------------------\n\tskin: 'layer-ext-baseskin',\n    close: function(){},\n    complete: function(){},\n    body: {\n        content: '对不起您还没有完成任务',\n        simContent: '请继续完成任务！',\n        btn: [{\n            text: '任务中心',\n\t\t\t// 按钮样式，对应在 css/layer-myskin.css 文件编辑\n            css: '', /*skin-btn-1*/\n            href: 'http://www.yaodou.com',\n            target: '_blank',\n            isExeCloseE: true,\n            action: function () {\n\t\t\t\t// 如果按钮中打开另外另外一个弹窗\n\t\t\t\t// 则需要延迟300s，否则按钮的样式会加载失败\n\t\t\t\tsetTimeout(function(){\n\t\t\t\t\t// 打开另外一个弹窗\n\t\t\t\t},300);\n\t\t\t}\n        }, {\n            text: '取消'\n        }],\n\n        isSorry: false,\n        isNotTip: false,\n        isWeak: false,\n        weakTime: 3000,\n        weakType: 1,\n        scrollbar: true,\n        closeBtn: true,\n        shadeClose: false,\n        shade: [0.3, '#393D49'],\n        isOutAnim: true,\n        anim: 0,\n        iconCss: false,\n        imgCss: ''\n    }\n});\n配置项说明\n\n属性\n说明\n值\n\n\n\n\ntype\n有两种类型：'base'为基础提示弹窗；'img'为带img提示弹窗。\n可选，默认是配置【base】\n\n\ntitle\n弹窗头部提示文案\n可选，默认是【空】\n\n\nskin\n弹窗皮肤\n可选，默认是【layer-ext-baseskin】\n\n\nclose\n弹窗关闭后的回调事件\n可选，默认是【function(){}】\n\n\ncomplete\n弹窗打开后的回调事件\n可选，默认是【function(){}】\n\n\nbody\n具体内容配置项，请继续往下看\n对象\n\n\nbody配置项说明\n\n属性\n说明\n值\n\n\n\n\ncontent\n主要文案说明\n可选，默认是【空】\n\n\nsimContent\n次要文案说明\n可选，默认是【空】\n\n\nisSorry\n“左侧sorry图片提示”是否显示，只有当type为【base】配置后生效\n可选，默认是【false】\n\n\nisNotTip\n“不再提示选择项”是否显示，只有当type为【base】配置后生效\n可选，默认是【false】\n\n\nisWeak\n是否是弱提示，只有当type为【base】配置后生效\n可选，默认是【false】\n\n\nweakTime\n弹窗多少秒后自动关闭，只有当isWeak为【true】配置后生效\n可选，默认是【3000s】\n\n\nweakType\n弱提示类型：1为妖豆弱弹窗提示，2为同城游弱提示。只有当isWeak为【true】配置后生效\n可选，默认是【1】\n\n\niconCss\n同城游弱提示弹窗左侧icon图标是否显示，只有当isWeak为【true】且weakType为【2】配置后生效\n可选，默认是【false】\n\n\ncloseBtn\n弹窗右上角的关闭按钮是否显示，只有当isWeak为【false】配置后生效\n可选，默认是【true】\n\n\nscrollbar\n弹窗出现，是否允许滚动条滚动\n可选，默认是【true】\n\n\nshadeClose\n弹窗弹出后，点击遮罩是否关闭弹窗\n可选，默认是【false】\n\n\nshade\n遮罩颜色，默认是0.3透明度的黑色颜色；若不想显示遮罩，shadow：0\n可选，默认是【0.3,'#000'】\n\n\nisOutAnim\n弹窗关闭时的过渡动画是否开启\n可选，默认是【true】\n\n\nanim\n弹窗弹出的动画：-1无动画效果；0:平滑放大;1:从上掉落;2:从最底部往上滑入；3:从左滑入;4:从左翻滚;5:渐显;6:抖动\n可选，默认是【0】\n\n\nimgCss\n单一奖励弹窗对应的奖励图片样式类名配置项，只有当type为【img】配置后生效\n可选，默认是【空】\n\n\nbtn\n具体内容配置项，请继续往下看\n数组对象\n\n\nbtn配置项说明\n\n属性\n说明\n值\n\n\n\n\ntext\n按钮文案\n可选，默认是【空】\n\n\ncss\n按钮样式\n可选，默认是【空】\n\n\nhref\n按钮点击后的跳转地址\n可选，默认是【空】\n\n\ntarget\n只有当href配置后生效，可配置两种情况：为空则在当前页打开新的地址，'_blank'则在新窗口打开新的地址\n可选，默认是【空】\n\n\nisExeCloseE\n场景：有的弹窗操作了按钮后不需要关闭当前弹窗\n可选，默认是【true】\n\n\naction\n按钮点击后的回调事件\n可选，默认是【function(){}】\n\n\n其他方法说明关闭所有打开的弹窗：layer.closeAll();"
        }
      ]
    },
    {
      "title": "固有弹窗 - 简易版",
      "content": "基础弹窗\n弱提示弹窗\n带img图片弹窗\n",
      "url": "/documents/msg/msg-base-common-easy.html",
      "children": []
    },
    {
      "title": "基础弹窗",
      "content": "",
      "url": "/documents/msg/msg-base-source.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/msg/msg-base-source.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.示例",
          "url": "/documents/msg/msg-base-source.html#如何使用？-1.示例",
          "content": "1.示例"
        },
        {
          "title": "2.使用",
          "url": "/documents/msg/msg-base-source.html#如何使用？-2.使用",
          "content": "2.使用// 使用方式wht.dialog({\n    body: {\n        // 可选，默认是【''】\n        content: '对不起您还没有完成任务',\n        // 可选，默认是【''】\n        simContent: '请继续完成任务！',\n        // 可选，默认是【[]】\n        btn: [{\n            text: '任务中心',\n            css: '', /*skin-btn-1*/\n            href: 'http://www.yaodou.com',\n            target: '_blank',\n            action: function () {\n            }\n        }, {\n            text: '取消'\n        }]\n    }\n});\n"
        }
      ]
    },
    {
      "title": "弱提示弹窗",
      "content": "",
      "url": "/documents/msg/msg-base-weak.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/msg/msg-base-weak.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.示例",
          "url": "/documents/msg/msg-base-weak.html#如何使用？-1.示例",
          "content": "1.示例"
        },
        {
          "title": "2.使用",
          "url": "/documents/msg/msg-base-weak.html#如何使用？-2.使用",
          "content": "2.使用// 使用方式wht.dialog({\n    body: {\n        // 可选，默认是【''】\n        content: '对不起您还没有完成任务',\n        // 可选，默认是【''】\n        simContent: '请继续完成任务！',\n        isWeak: true,\n\t\tweakType: 2\n    }\n});\n"
        }
      ]
    },
    {
      "title": "带奖励的img弹窗",
      "content": "",
      "url": "/documents/msg/msg-base-img.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/msg/msg-base-img.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.示例",
          "url": "/documents/msg/msg-base-img.html#如何使用？-1.示例",
          "content": "1.示例"
        },
        {
          "title": "2.使用",
          "url": "/documents/msg/msg-base-img.html#如何使用？-2.使用",
          "content": "2.使用// 使用方式 wht.dialog({\n    type: 'img',\n    body: {\n        content: '<span style=\"color: red;margin-bottom: 10px;\"&恭喜您，获得'+result[0].PrizeName+'</span&',\n        simContent: '直接到<a href=\"www.baidu.com\" target=\"_blank\"&我的奖励</a&中查看',\n        imgCss: 'msg-img-1',\n        btn: [{\n            text: '任务中心',\n            css: '', /*skin-btn-1*/\n            href: 'http://www.yaodou.com',\n            target: '_blank',\n            // 默认为false,执行关闭事件\n            isExeCloseE: true,\n            action: function () {\n            }\n        }, {\n            text: '取消'\n        }]\n    }\n});\n"
        }
      ]
    },
    {
      "title": "带sorry的img弹窗",
      "content": "",
      "url": "/documents/msg/msg-base-img-sorry.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/msg/msg-base-img-sorry.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.示例",
          "url": "/documents/msg/msg-base-img-sorry.html#如何使用？-1.示例",
          "content": "1.示例"
        },
        {
          "title": "2.使用",
          "url": "/documents/msg/msg-base-img-sorry.html#如何使用？-2.使用",
          "content": "2.使用// 使用方式 wht.dialog({\n    type: 'img',\n    body: {\n        content: '<span style=\"color: red;margin-bottom: 10px;\"&恭喜您，获得'+result[0].PrizeName+'</span&',\n        simContent: '直接到<a href=\"www.baidu.com\" target=\"_blank\"&我的奖励</a&中查看',\n        imgCss: 'msg-img-1',\n        btn: [{\n            text: '任务中心',\n            css: '', /*skin-btn-1*/\n            href: 'http://www.yaodou.com',\n            target: '_blank',\n            // 默认为false,执行关闭事件\n            isExeCloseE: true,\n            action: function () {\n            }\n        }, {\n            text: '取消'\n        }],\n\n        isSorry: true // 显示带sorry图片的弹窗\n    }\n});\n"
        }
      ]
    },
    {
      "title": "自定义弹窗 - 完整版",
      "content": "自定义弹窗完整版，可灵活配置。调用的方式同固有弹窗几乎完全一致，唯一不同的就是配置项body.content属性对应的模板不一致，具体详情结合示例查看。",
      "url": "/documents/msg/msg-custom-common.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/msg/msg-custom-common.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/msg/msg-custom-common.html#如何使用？-1.引入",
          "content": "1.引入"
        },
        {
          "title": "2.使用",
          "url": "/documents/msg/msg-custom-common.html#如何使用？-2.使用",
          "content": "2.使用// 使用方式如下，具体的参数说明在下边的配置项说明wht.dialog({\n    // 必填，自定义弹窗，type设置为'personal'\n    type: 'personal',\n\t// -----------------------------------\n    // 这里样式皮肤设置对应 css/layer-myskin.css 文件，这个文件有两个作用：\n    // 1.覆盖第三方弹窗插件layer的默认样式；\n    // 2.使用官方推荐的方式自定义弹窗的皮肤。\n    // 如需配置新的弹窗样式，详情请阅读 css/layer-myskin.css 这个样式文件。\n    // 可选，默认为【'layer-ext-baseskin'】假设此时配置 'layer-ext-personal'\n\t// -----------------------------------\n    skin: 'layer-ext-personal',\n\t// -----------------------------------\n\t// 特别说明！！！！必填！\n\t// a.纯自定义结构的弹窗生效前提：需要和skin皮肤设置的宽高数据保持一致，否则生效失败；\n\t// 如：样式中设置 body .layer-ext-personal{width: 580px;height: 180px;}，那么这里area:[580, 180]\n\t// b.原有结构的弹窗：可忽略此配置项；\n\t// 特别说明：在百度浏览器、360浏览器会出现弹窗有滚动条，所以，在样式中，弹窗的宽度需要额外增加20px像素左右。\n\t// -----------------------------------\n\tarea: [580, 180],\n\t\n    close: function(){},\n    complete: function(){},\n    body: {\n        // 必填，是一段html模板，根据示例文件查看\n        content: '',\n\t\t// -----------------------------------\n\t\t// 特别说明！！！！\n\t\t// 纯自定义弹窗结构：可忽略此配置，\n\t\t// 使用原有结构的弹窗的模板：按钮区域需遵守一定规则，详情请看示例文件\n\t\t// 可选，默认是【[]】\n\t\t// -----------------------------------\n        btn: [{\n            text: '任务中心',\n            css: '', /*skin-btn-1*/\n            href: 'http://www.yaodou.com',\n            target: '_blank',\n            isExeCloseE: true,\n            action: function () {}\n        }, {\n            text: '取消'\n        }],\n        scrollbar: true,\n        shadeClose: false,\n        shade: [0.3, '#393D49'],\n        isOutAnim: true,\n        anim: 0\n    }\n});\n配置项说明\n\n属性\n说明\n值\n\n\n\n\ntype\n自定义弹窗类型的type值设置为'personal'\n必填，配置【personal】\n\n\nskin\n弹窗皮肤\n可选，默认是【layer-ext-personal】\n\n\narea\n弹窗宽高\n必填，参考配置【580, 180】\n\n\nclose\n弹窗关闭后的回调事件\n可选，默认是【function(){}】\n\n\ncomplete\n弹窗打开后的回调事件\n可选，默认是【function(){}】\n\n\nbody\n具体内容配置项，请继续往下看\n对象\n\n\nbody配置项说明\n\n属性\n说明\n值\n\n\n\n\ncontent\n弹窗的模板配置项\n必填\n\n\nscrollbar\n弹窗出现，是否允许滚动条滚动\n可选，默认是【true】\n\n\nshadeClose\n弹窗弹出后，点击遮罩是否关闭弹窗\n可选，默认是【false】\n\n\nshade\n遮罩颜色，默认是0.3透明度的黑色颜色；若不想显示遮罩，shadow：0\n可选，默认是【0.3,'#000'】\n\n\nisOutAnim\n弹窗关闭时的过渡动画是否开启\n可选，默认是【true】\n\n\nanim\n弹窗弹出的动画：-1无动画效果；0:平滑放大;1:从上掉落;2:从最底部往上滑入；3:从左滑入;4:从左翻滚;5:渐显;6:抖动\n可选，默认是【0】\n\n\nbtn\n具体内容配置项，请继续往下看\n数组对象\n\n\nbtn配置项说明\n\n属性\n说明\n值\n\n\n\n\ntext\n按钮文案\n可选，默认是【空】\n\n\ncss\n按钮样式\n可选，默认是【空】\n\n\nhref\n按钮点击后的跳转地址\n可选，默认是【空】\n\n\ntarget\n只有当href配置后生效，可配置两种情况：为空则在当前页打开新的地址，'_blank'则在新窗口打开新的地址\n可选，默认是【空】\n\n\nisExeCloseE\n场景：有的弹窗操作了按钮后不需要关闭当前弹窗\n可选，默认是【true】\n\n\naction\n按钮点击后的回调事件\n可选，默认是【function(){}】\n\n\n其他说明btn配置项说明：纯自定义弹窗结构可忽略此配置\n使用原有结构的弹窗的模板，按钮区域需遵守一定规则，详情请看示例文件\n"
        }
      ]
    },
    {
      "title": "关闭弹窗",
      "content": "",
      "url": "/documents/msg/msg-close.html",
      "children": [
        {
          "title": "方法说明",
          "url": "/documents/msg/msg-close.html#方法说明",
          "content": "方法说明// 关闭所有打开的弹窗layer.closeAll();\n特别说明：由于同城游大厅内的弹窗存在图片不能及时响应，所以会延迟20ms，导致不能根据弹窗的id值直接关闭指定弹窗，如果有特殊需求，则手动隐藏具体弹窗，否则使用关闭所有打开弹窗的方法。"
        }
      ]
    },
    {
      "title": "示例",
      "content": "\n下载demo（wht-dialog-src待提供）\n\n\n阅读readme.md\n\n",
      "url": "/documents/msg/msg-demo.html",
      "children": [
        {
          "title": "介绍",
          "url": "/documents/msg/msg-demo.html#介绍",
          "content": "介绍应用于PC平台活动项目中，旨在快速开发活动类的弹窗"
        },
        {
          "title": "版本",
          "url": "/documents/msg/msg-demo.html#版本",
          "content": "版本V1.0.0"
        },
        {
          "title": "功能",
          "url": "/documents/msg/msg-demo.html#功能",
          "content": "功能基础弹窗弱提示弹窗带img图片弹窗自定义弹窗（可扩展）"
        },
        {
          "title": "下载地址",
          "url": "/documents/msg/msg-demo.html#下载地址",
          "content": "下载地址暂无"
        },
        {
          "title": "文件结构说明",
          "url": "/documents/msg/msg-demo.html#文件结构说明",
          "content": "文件结构说明assets：资源\npop-demo.html：弹窗模板demo页面\ntest.html：弹窗测试页面\n"
        },
        {
          "title": "demo运行",
          "url": "/documents/msg/msg-demo.html#demo运行",
          "content": "demo运行启动cd wht-dialog-src  node server.js\n访问http://a.yaodou.org:8000/test.html"
        },
        {
          "title": "使用步骤",
          "url": "/documents/msg/msg-demo.html#使用步骤",
          "content": "使用步骤"
        },
        {
          "title": "1. 引入",
          "url": "/documents/msg/msg-demo.html#使用步骤-1.-引入",
          "content": "1. 引入// 引入公用的基础样式\n// 引入wht-dialog.css\n\n// 当是引入的是wht.dialog.js时【单个使用（只想用万花筒-弹窗）】需配置在head结束标签前，// 否则引入的是wht.min.js时【整体使用（万花筒整体）】请忽略这个配置\nvar wht = {};\n\n// .......\n// 一堆代码\n// .......\n\n// 配置在body结束标签前\n// 以下的引入顺序不能调整，否则会报错\n// 依赖于jquery.js\n\n// 依赖于layer.js,一定要单独一行引入,否则会报错\n\n// ---------------------------------------------------\n// 单个使用（只想用万花筒-弹窗）：引入wht.dialog.js\n\n// 整体使用（万花筒整体）：引入wht.min.js\n//  -->\n// ---------------------------------------------------\n// 引入wht.dailogconfig.js\n\nwht.dailogconfig.js 文件内容说明layer.config({    // 自定义皮肤的样式文件，路径是相对于layer/theme/目录下的路径\n    extend: '../../../../css/layer-myskin.css'\n});\n"
        },
        {
          "title": "2. 具体调用、配置规则",
          "url": "/documents/msg/msg-demo.html#使用步骤-2.-具体调用、配置规则",
          "content": "2. 具体调用、配置规则请参考：查看参考资料弹层组件文档 - layer.js"
        }
      ]
    },
    {
      "title": "Dzp 大转盘",
      "content": "",
      "url": "/documents/game-dzp/index.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/game-dzp/index.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/game-dzp/index.html#如何使用？-1.引入",
          "content": "1.引入\n\n\n\n"
        },
        {
          "title": "2.初始化配置",
          "url": "/documents/game-dzp/index.html#如何使用？-2.初始化配置",
          "content": "2.初始化配置// 引入var dzpMain = require('../wht-game/wht-game-dzp/dzp-main'); // 万花筒-游戏组件\n// 初始化游戏组件\nwht.gameInit({\n    // 这里的name命名便于调用的时候方便识别，示例：wht.game('dzp1')\n    name: 'dzp1',\n    type: 'dzp',\n    param: {\n        //偏移量；转盘第一个奖区应该向右偏移的角度(指针与第一奖区的左边线对齐)\n        excursion: 18,\n        //转动指针\n        pointerName: \".lottery-pointer0\",\n        //奖区数量\n        awardNum: 10,\n        //停止转动所需时间（从匀速减速到0）\n        duration: 4000,\n        //匀速时每秒转动圈数(圈数越多，转盘速度越快)\n        circles: 4\n    },\n    // 指定由哪个游戏组件进行初始化配置项\n    specifyConfItem: function (o) {\n        return dzpMain.init(o);\n    }\n});\n"
        },
        {
          "title": "3.页面结构",
          "url": "/documents/game-dzp/index.html#如何使用？-3.页面结构",
          "content": "3.页面结构    \n        \n        \n    \n\n"
        },
        {
          "title": "4.调用",
          "url": "/documents/game-dzp/index.html#如何使用？-4.调用",
          "content": "4.调用// `dzp1`等同于初始化时配置项的name值// 获取游戏组件这个对象\nwht.game('dzp1');\n// ---------分割线-------------\n// 使用方法和说明请查看左侧API\n// 启动\nwht.game('dzp1').start();\n// 重置\nwht.game('dzp1').reset();\n// 停止\n// id参数说明：\n// 如果需要停在指定位置，则为具体数字（场景：大转盘停在指定位置）\n// 如果不需要停在指定位置，则id为1（场景：拼图不需要停在指定位置）\n// 如果是具体奖励对象，则id为 data对象（场景：砸金蛋需要传递data对象）\nwht.game('dzp1').stop(id,callback);\nAPI方法说明\n\n方法\n说明\n\n\n\n\nstart()\n启动游戏组件\n\n\nreset()\n重置游戏组件\n\n\nstop(id,callback)\n停留到指定奖区位置，触发回callback事件\n\n\n示例seajs.use('../dzp', function (dzp) {    var dzpMain = dzp; // 万花筒-游戏组件\n    var isBind = false; // 按钮绑定\n    var dzp1 = null;\n\n    function dealing() {\n        if (isBind) {\n            return;\n        }\n        isBind = true;\n\n        // 为了测试用，此时是ajax交互，这里省略了ajax交互\n        dzp1.stop(4, function () {\n            alert('成功停止在位置4');\n            isBind = false;\n            // 重置\n            dzp1.reset();\n        });\n    }\n\n    function btnBind() {\n        $('.J-lottery0').click(function () {\n            console.log('---dzp1---');\n            dzp1 = wht.game('dzp1');\n            // 启动\n            dzp1.start();\n            dealing();\n        });\n    }\n\n    function initconfig() {\n\n        // 初始化游戏组件\n        wht.gameInit({\n            // 这里的name命名便于调用的时候方便识别，示例：wht.game('pmd1')\n            name: 'dzp1',\n            type: 'dzp',\n            param: {\n                //偏移量；转盘第一个奖区应该向右偏移的角度(指针与第一奖区的左边线对齐)\n                excursion: 18,\n                //转动指针\n                pointerName: \".lottery-pointer0\",\n                //奖区数量\n                awardNum: 10,\n                //停止转动所需时间（从匀速减速到0）\n                duration: 4000,\n                //匀速时每秒转动圈数(圈数越多，转盘速度越快)\n                circles: 4\n            },\n            // 指定由哪个游戏组件进行初始化配置项\n            specifyConfItem: function (o) {\n                return dzpMain.init(o);\n            }\n        });\n    }\n\n    function init() {\n        initconfig();\n        btnBind();\n    }\n\n    init();\n});\n"
        }
      ]
    },
    {
      "title": "Pmd 跑马灯",
      "content": "",
      "url": "/documents/game-pmd/index.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/game-pmd/index.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/game-pmd/index.html#如何使用？-1.引入",
          "content": "1.引入\n"
        },
        {
          "title": "2.初始化配置",
          "url": "/documents/game-pmd/index.html#如何使用？-2.初始化配置",
          "content": "2.初始化配置// 引入var pmdMain = require('../wht/wht-game/pmd/pmd-main'); // 万花筒-游戏组件-跑马灯\n// 初始化\npmdMain.init({\n    // 这里的name命名便于调用的时候方便识别，示例：wht.game('pmd1')\n    name: 'pmd1',\n    type: 'pmd',\n    param: {\n        //对奖区列表重新排序(顺时针方向)\n        awardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],\n        // 跑马灯奖区对应区域\n        $item: \"#J-pmd1 .prizebox div s\",\n        // 跑马灯转动的时候的速度，越小速度越快\n        speed: 100,\n        // 跑马灯减速转动的时候的速度，越小速度越快\n        reduceSpeed: 20\n    }\n});\n"
        },
        {
          "title": "3.页面结构",
          "url": "/documents/game-pmd/index.html#如何使用？-3.页面结构",
          "content": "3.页面结构    \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n    \n    抽奖次数0次\n    剩余金币0元\n    \n        \n        \n    \n\n"
        },
        {
          "title": "4.调用",
          "url": "/documents/game-pmd/index.html#如何使用？-4.调用",
          "content": "4.调用var pmd = wht.gamePmd('pmd1');// ----------------------\n// 使用方法和说明请查看左侧API\n// 启动\npmd.start();\n// 重置\npmd.reset();\n// 停止\npmd.stop(id,callback);\nAPI方法说明\n\n方法\n说明\n\n\n\n\nstart()\n启动游戏组件\n\n\nreset()\n重置游戏组件\n\n\nstop(id,callback)\n停留到指定奖区位置，触发回callback事件\n\n\n示例seajs.use('../pmd-main', function(pmdmain){    var pmdMain = pmdmain; // 万花筒-游戏组件-跑马灯\n    var isBind = false; // 按钮绑定\n    var pmd1 = null;\n\n    function dealing() {\n        if(isBind){\n            return;\n        }\n        isBind = true;\n        // 启动跑马灯\n        pmd1.start();\n\n        // 为了测试用，此时是ajax交互，这里省略了ajax交互\n        pmd1.stop(4, function () {\n            alert('成功停止在位置4');\n            isBind = false;\n            // 重置跑马灯\n            pmd1.reset();\n        });\n    }\n\n    // 跑马灯配置项初始化\n    function pmdInitConfig() {\n        pmdMain.init({\n            // 这里的name命名便于调用的时候方便识别，示例：wht.game('pmd1')\n            name: 'pmd1',\n            type: 'pmd',\n            param: {\n                //对奖区列表重新排序(顺时针方向)\n                awardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],\n                // 跑马灯奖区对应区域\n                $item: \"#J-pmd1 .prizebox div s\",\n                // 跑马灯转动的时候的速度，越小速度越快\n                speed: 100,\n                // 跑马灯减速转动的时候的速度，越小速度越快\n                reduceSpeed: 20\n            }\n        });\n    }\n\n    // 跑马灯按钮绑定\n    function pmdBtnBind(){\n        $('.J-lottery').click(function(){\n            var dataid = $(this).attr('data-id');\n            pmd1 = wht.gamePmd('pmd1');\n            dealing(dataid);\n        });\n    }\n\n    // 初始化\n    function init() {\n        pmdInitConfig();\n        pmdBtnBind();\n    }\n\n    init();\n});\n"
        }
      ]
    },
    {
      "title": "Zqq 扎气球",
      "content": "",
      "url": "/documents/game-zqq/index.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/game-zqq/index.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/game-zqq/index.html#如何使用？-1.引入",
          "content": "1.引入\n\n"
        },
        {
          "title": "2.初始化配置",
          "url": "/documents/game-zqq/index.html#如何使用？-2.初始化配置",
          "content": "2.初始化配置// 引入var zqqMain = require('../wht-game/wht-game-zqq/zqq-main'); // 万花筒-游戏组件-扎气球\n// 初始化\nzqqMain.init({\n    name: 'zqq1',\n    type: 'zqq',\n    param: {\n        wrapper: 'div.b2', // 包裹气球区域\n        aim: 'span.sights', // 瞄准器\n        balloon: '.list li', // 气球位置\n        time: 600, // 击破气球到复原完整气球时间间隔\n        success: function (currentInex) {\n            // console.log(\"击破气球\");\n            // console.log(currentInex);\n            /*\n                * 这里可以判断是否登录\n                * ···\n                */\n            if (currentInex !== undefined) {\n                // 扎气球游戏组件与其他组件不同略微不同！！！\n                // 特别注意这里进行回调处理\n                dealing(currentInex);\n            }\n        },\n        error: function (data) {}\n    }\n});\n"
        },
        {
          "title": "3.页面结构",
          "url": "/documents/game-zqq/index.html#如何使用？-3.页面结构",
          "content": "3.页面结构    \n        \n            充值500-999元\n            1枚子弹\n        \n        \n            充值1000-1999元\n            2枚子弹\n        \n        \n            充值2000元\n            4枚子弹\n        \n        \n            瞄准器\n            \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n                \n                    \n                \n            \n        \n        \n            您还剩余0枚子弹\n        \n    \n\n"
        },
        {
          "title": "4.调用",
          "url": "/documents/game-zqq/index.html#如何使用？-4.调用",
          "content": "4.调用// 1.创建扎气球对象var zqq = wht.gameZqq('zqq1');\n\n// 2.初始化扎气球配置项\n// InitConfig();\n\n// ----------------------\n// 使用方法和说明请查看左侧API\n// 3.在扎气球配置项中处理成功扎破气球方法，具体事例请看demo\nzqq.stop(id,callback);\nAPI方法说明\n\n方法\n说明\n\n\n\n\nstop(id,callback)\n击破气球，触发回callback事件\n\n\n示例seajs.use('../zqq-main', function(zqqmain){    var zqqMain = zqqmain; // 万花筒-游戏组件-扎气球\n        var isBind = false; // 按钮绑定\n        var zqq1 = null;\n\n    function dealing(n) {\n        if(isBind){\n            return;\n        }\n        isBind = true;\n\n        // 为了测试用，此时是ajax交互，这里省略了ajax交互\n        zqq1.stop(n, function () {\n            alert('成功击破位置：'+n+' 的气球');\n            isBind = false;\n        });\n    }\n\n    // 扎气球配置项初始化\n    function zqqInitConfig() {\n        zqqMain.init({\n            // 这里的name命名便于调用的时候方便识别，示例：wht.game('zqq1')\n            name: 'zqq1',\n            type: 'zqq',\n            param: {\n                wrapper: 'div.b2', // 包裹气球区域\n                aim: 'span.sights', // 瞄准器\n                balloon: '.list li', // 气球位置\n                time: 600, // 击破气球到复原完整气球时间间隔\n                success: function (currentInex) {\n                    // console.log(\"击破气球\");\n                    // console.log(currentInex);\n                    /*\n                        * 这里可以判断是否登录\n                        * ````\n                        */\n                    if (currentInex !== undefined) {\n                        // 扎气球游戏组件与其他组件不同略微不同！！！\n                        // 特别注意这里进行回调处理\n                        dealing(currentInex);\n                    }\n                },\n                error: function (data) {}\n            }\n        });\n    }\n\n    // 扎气球对象创建及处理\n    function zqqCreate(){\n        zqq1 = wht.gameZqq('zqq1');\n    }\n\n    // 初始化\n    function init() {\n        zqqInitConfig();\n        zqqCreate();\n    }\n\n    init();\n});\n"
        }
      ]
    },
    {
      "title": "Pt 拼图",
      "content": "",
      "url": "/documents/game-pt/index.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/game-pt/index.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/game-pt/index.html#如何使用？-1.引入",
          "content": "1.引入\n"
        },
        {
          "title": "2.初始化配置",
          "url": "/documents/game-pt/index.html#如何使用？-2.初始化配置",
          "content": "2.初始化配置// 引入var ptMain = require('../wht-game/wht-game-pt/pt'); // 万花筒-游戏组件\n// 初始化游戏组件\nwht.gameInit({\n    name: 'pt1',\n    type: 'pt',\n    param: {\n        // 拼图图片路径\n        img: \"assets/img/wht-pt/1.jpg\",\n        // 拼图图片碎片数量\n        pieces: [3, 3],\n        // 拼图区域；\n        area: \".cube\",\n        pieceClass: \".cube div.imgCell\",\n        // 拼图切片运动速度，单位毫秒\n        movetime: 400\n    },\n    // 指定由哪个游戏组件进行初始化配置项\n    specifyConfItem: function (o) {\n        return ptdMain.init(o);\n    }\n});\n"
        },
        {
          "title": "3.页面结构",
          "url": "/documents/game-pt/index.html#如何使用？-3.页面结构",
          "content": "3.页面结构\n\n    开始\n    重置\n\n"
        },
        {
          "title": "4.调用",
          "url": "/documents/game-pt/index.html#如何使用？-4.调用",
          "content": "4.调用// `pt1`等同于初始化时配置项的name值//  获取游戏组件对象\nwht.game('pt1');\n// ---------分割线-------------\n// 使用方法和说明请查看左侧API\n// 启动\nwht.game('pt1').start();\n// 重置\nwht.game('pt1').reset();\n// 停止\n// id参数说明：\n// 如果需要停在指定位置，则为具体数字（场景：大转盘停在指定位置）\n// 如果不需要停在指定位置，则id为1（场景：拼图不需要停在指定位置）\n// 如果是具体奖励对象，则id为 data对象（场景：砸金蛋需要传递data对象）\nwht.game('pt1').stop(id,callback);\nAPI方法说明\n\n方法\n说明\n\n\n\n\nstart()\n启动游戏组件\n\n\nreset()\n重置游戏组件\n\n\nstop(id,callback)\nid为1，触发回callback事件\n\n\n示例seajs.use('../pt', function (pt) {    var ptdMain = pt;\n    var isBind = false; // 按钮绑定\n\n    function dealing() {\n        if (isBind) {\n            return;\n        }\n        isBind = true;\n\n\n        // 监听拼图成功的事件、或者倒计时监听拼图失败的事件\n        // 拼图倒计时结束后传值,status=2拼图成功,status=3拼图失败\n\n        // 拼图成功\n        wht.game('pt1').stop(1, function () {\n            alert('拼图成功！！');\n            setTimeout(function(){\n                wht.game('pt1').reset();\n                isBind = false;\n            }, 2000);\n        });\n\n        // 拼图失败\n        // 假设一个定时器\n        /*var time = 10;\n        var timer = setInterval(function () {\n            time -= 1;\n            console.log(time);\n            if (time <= 0) {\n                clearInterval(timer);\n                console.log('拼图失败！！');\n                wht.game('pt1').reset();\n            }\n        }, time);*/\n\n    }\n\n    function btnBind() {\n        $('.J-startBtn').click(function () {\n\n            if(wht.game('pt1').isStart){\n                alert('您还在游戏中');\n                return;\n            }\n\n            // 启动\n            wht.game('pt1').start();\n\n            dealing();\n        });\n\n        $('.J-resetBtn').click(function () {\n            if(wht.game('pt1') == null){\n                return;\n            }\n            wht.game('pt1').reset();\n        });\n    }\n\n    function initconfig() {\n        wht.gameInit({\n            name: 'pt1',\n            type: 'pt',\n            param: {\n                // 拼图图片路径\n                img: \"assets/img/wht-pt/1.jpg\",\n                // 拼图图片碎片数量\n                pieces: [3, 3],\n                // 拼图区域；\n                area: \".cube\",\n                pieceClass: \".cube div.imgCell\",\n                // 拼图切片运动速度，单位毫秒\n                movetime: 400\n            },\n            // 指定由哪个游戏组件进行初始化配置项\n            specifyConfItem: function (o) {\n                return ptdMain.init(o);\n            }\n        });\n    }\n\n    function init() {\n        initconfig();\n        btnBind();\n    }\n\n    init();\n});\n"
        }
      ]
    },
    {
      "title": "Lhj 老虎机",
      "content": "",
      "url": "/documents/game-lhj/index.html",
      "children": []
    },
    {
      "title": "Zjd 砸金蛋",
      "content": "",
      "url": "/documents/game-zjd/index.html",
      "children": [
        {
          "title": "如何使用？",
          "url": "/documents/game-zjd/index.html#如何使用？",
          "content": "如何使用？"
        },
        {
          "title": "1.引入",
          "url": "/documents/game-zjd/index.html#如何使用？-1.引入",
          "content": "1.引入\n"
        },
        {
          "title": "2.初始化配置",
          "url": "/documents/game-zjd/index.html#如何使用？-2.初始化配置",
          "content": "2.初始化配置// 引入var zjdMain = require('../wht-game/wht-game-zjd/zjd'); // 万花筒-游戏组件\n// 初始化游戏组件\nwht.gameInit({\n    name: 'zjd1',\n    type: 'zjd',\n    param: {\n            eggs: \".eggList li\",\n        hummer: \"#hammer\",\n        eggsNum: 3,\n        // 动画随机交换的次数；\n        anniNumMax: 6,\n        speed: 300\n    },\n    // 指定由哪个游戏组件进行初始化配置项\n    specifyConfItem: function (o) {\n        return zjdMain.init(o);\n    }\n});\n"
        },
        {
          "title": "3.页面结构",
          "url": "/documents/game-zjd/index.html#如何使用？-3.页面结构",
          "content": "3.页面结构    \n        锤子\n        \n            \n\n            \n        \n        \n            中奖内容区域，自行配置html和css样式；\n        \n        \n            sswss\n        \n        \n            中奖图文内容\n        \n    \n\n\n\n    开始\n    重置\n\n"
        },
        {
          "title": "4.调用",
          "url": "/documents/game-zjd/index.html#如何使用？-4.调用",
          "content": "4.调用// `zjd1`等同于初始化时配置项的name值//  获取游戏组件对象\nwht.game('zjd1');\n// ---------分割线-------------\n// 使用方法和说明请查看左侧API\n// 启动\nwht.game('zjd1').start();\n// 重置\nwht.game('zjd1').reset();\n// 停止\n// id参数说明：\n// 如果是具体奖励对象，则id为 data对象（场景：砸金蛋需要传递data对象）\nwht.game('zjd1').stop(id,callback);\n// 判断初始化动画是否结束\nwht.game('zjd1').isRun\nAPI方法说明\n\n方法\n说明\n\n\n\n\nstart()\n启动游戏组件\n\n\nreset()\n重置游戏组件\n\n\nstop(id,callback)\n停留到指定奖区位置，触发回callback事件\n\n\nisRun\n初始化的动画是否结束\n\n\n示例seajs.use('../zjd', function (zjd) {    var zjdMain = zjd; // 万花筒-游戏组件\n    var isBind = false; // 按钮绑定\n    var zjd1 = null;\n\n    function dealing() {\n        if (isBind) {\n            return;\n        }\n        isBind = true;\n\n        var d = {\n            award: [\"一等奖\", \"没有中奖1\", \"没有中奖2\"],\n            awardImgs: []\n        };\n        zjd1.stop(d, function () {\n            setTimeout(function () {\n                console.log('处理奖励,手动重置');\n                zjd1.reset();\n                isBind = false;\n            }, 3000);\n        });\n    }\n\n    function btnBind() {\n        $('.J-startBtn').click(function () {\n            zjd1 = wht.game('zjd1');\n            if (zjd1 != null && zjd1.isRun) {\n                return;\n            }\n            zjd1.start();\n            dealing();\n        });\n\n        $('.J-resetBtn').click(function () {\n            if (zjd1 == null) {\n                return;\n            }\n            zjd1.reset();\n        });\n    }\n\n    function initconfig() {\n        wht.gameInit({\n            name: 'zjd1',\n            type: 'zjd',\n            param: {\n                eggs: \".eggList li\",\n                hummer: \"#hammer\",\n                eggsNum: 3,\n                // 动画随机交换的次数；\n                anniNumMax: 6,\n                speed: 300\n            },\n            // 指定由哪个游戏组件进行初始化配置项\n            specifyConfItem: function (o) {\n                return zjdMain.init(o);\n            }\n        });\n    }\n\n    function init() {\n        initconfig();\n        btnBind();\n    }\n\n    init();\n});\n"
        }
      ]
    },
    {
      "title": "Yqs 摇钱树",
      "content": "",
      "url": "/documents/game-yqs/index.html",
      "children": []
    }
  ],
  "示例": [
    {
      "title": "活动",
      "content": "",
      "url": "/demo/index.html",
      "children": [
        {
          "title": "2018年",
          "url": "/demo/index.html#2018年",
          "content": "2018年妖豆中秋\n妖豆四周年\n"
        }
      ]
    }
  ],
  "扩展": [
    {
      "title": "构建目录",
      "content": "创建基础目录结构（以大转盘为例说明）",
      "url": "/extend/index.html",
      "children": [
        {
          "title": "1.项目命名：",
          "url": "/extend/index.html#1.项目命名：",
          "content": "1.项目命名：wht-game-name：name为游戏组件中文首字母，如大转盘（wht-game-dzp）"
        },
        {
          "title": "2.项目结构：",
          "url": "/extend/index.html#2.项目结构：",
          "content": "2.项目结构：demo: 示例 dzp.js：自身插件，如大转盘自身插件，命名为中文首字母"
        }
      ]
    },
    {
      "title": "制作说明",
      "content": "制作步骤【两步】 （以大转盘为例说明）",
      "url": "/extend/addgame/des.html",
      "children": [
        {
          "title": "1.大转盘自身插件改写为seajs模块的方式：",
          "url": "/extend/addgame/des.html#1.大转盘自身插件改写为seajs模块的方式：",
          "content": "1.大转盘自身插件改写为seajs模块的方式：实际例子查看：wht-game-dzp/dzp.js 文件  整体结构如下： define(function(require, exports, module){\tvar successCallback = null; // 回调事件\n\t\n\tfunction Lottery(){\n\t\t// ...\n\t\t// ...\n\t}\n\t\n\tLottery.prototype = {\n\t\t// ...\n\t\t_success: function(){\n\t\t\t// ...\n\t\t\t this._options.success(data,successCallback);\n\t\t}\n\t\t// ...\n\t\tgotoIndex: function(id, data, fn){\n\t\t\tsuccessCallback = fn;\n\t\t\t// ...\n\t\t}\n\t}\n\t\n\tfunction handle(opt) {\n        var o = new Lottery(opt.param);\n\n        /**\n         * 给这个游戏组件对象新增stop方法\n         * @param prizeid 获奖的id\n         * @param fn 获奖后的回调事件\n         */\n        o.stop = function (prizeid, fn) {\n\t\t\t// 特别说明！！！需根据组件自行确定stop事件\n            o.gotoIndex(prizeid, '', fn);\n        };\n\n        return o;\n    }\n\n    function init(opt) {\n        return handle(opt);\n    }\n\t\n\tmodule.exports = {\n\t\tinit: init\n\t};\n});\n！！！特殊说明：需要在已有的插件上新增一个回调事件,用于成功事件之后执行"
        },
        {
          "title": "2.编写使用文档说明：",
          "url": "/extend/addgame/des.html#2.编写使用文档说明：",
          "content": "2.编写使用文档说明：文档参考查看：Dzp 大转盘\n"
        }
      ]
    },
    {
      "title": "示例查看",
      "content": "（以大转盘为例说明）",
      "url": "/extend/addgame/demo.html",
      "children": [
        {
          "title": "1.查看案例如下：",
          "url": "/extend/addgame/demo.html#1.查看案例如下：",
          "content": "1.查看案例如下：\n安装：解压 wht-game.zip\n\n\n运行：node server.js\n\n\n访问：http://a.yaodou.org:8000/wht-game-dzp/demo/demo.html\n\n"
        },
        {
          "title": "2.特别说明：",
          "url": "/extend/addgame/demo.html#2.特别说明：",
          "content": "2.特别说明：实际例子查看：wht-game-dzp/demo/demo.html 下的文件"
        }
      ]
    },
    {
      "title": "开发流程",
      "content": "1.参加PRD会议了解需求：对功能进行判断，是否具有可行性；\n确定排期：技术评审时间、前端开发和完成时间、联调时间；\n梳理组件：prd会议评审结束后，优先梳理此次活动需要的组件，查看pc开发库中是否存在可复用的组件。\n2.技术评审编写接口文档，查看参考文档 妖豆2018竞技场活动，查看扩展阅读通用的接口规范。\n确认功能点和交互方式以及接口需要的注意事项，查看参考文档 妖豆2018竞技场活动，访问密码：UWEt。\n1. 如活动未开始、已结束、活动期间各个状态的交互；2. 妖币数量兼容1-8位数字，用户名兼容（16个w）；\n3. 空数据的展现方式和交互方式；\n4. 溢出隐藏的内容，需要写title属性；\n5. 灰色按钮无特殊要求，做无响应处理;\n6. 确定接口的dataType类型：一般是json，可能会出现jsonp的格式；\n7. 确定接口的contentType类型；\n8. 确定兼容方案，某些酷炫效果只能在高级浏览器呈现，低级浏览器可直接忽略需要确认。\n文档都写好后，邀请相关人员(运营、后端、测试）参加技术评审会议，讲解功能交互文档和接口文档，共同协商确认后进入开发阶段。\n3.开发环境搭建查看4.代码编写、自测联调活动代码编写逻辑：(友情提示：右击图片在新标签中打开图片，点击放大可查看清晰的大图。)\n\n自测联调：测试功能、兼容性测试、对接后端接口，扩展阅读常见bug\n5.提测发布（ftp上传）ftp静态资源的测试版服务器IP：192.168.1.18；\nftp上传权限申请：查看服务器地址申请(有的请忽略)，扩展阅读ftp列表；\nftp静态资源路径：\n根据组内约定来放置资源路径，最后一次更新2018.03.01。\n\n站点\n文件位置\n项目名\n\n\n\n\n妖豆活动-开发版\n/www2/CtStatic_dev/yd/action/\nxxx\n\n\n妖豆活动-提测版\n/www2/CtStatic_test/yd/action/\nxxx\n\n\n妖豆活动-测试稳定版\n/www2/CtStatic/yd/action/\nxxx\n\n\n同城游活动-开发版\n/www2/CtStatic_dev/uc/action/\nxxx\n\n\n同城游活动-提测版\n/www2/CtStatic_test/uc/action/\nxxx\n\n\n同城游活动-测试稳定版\n/www2/CtStatic/uc/action/\nxxx\n\n\n无后端参与需要编写提测邮件(提测邮件模板暂时找组长拿)到测试人员那里，抄送组长、测试组长，有后端参与可由后端统一编写提测邮件。\n6.进行三轮bug修复测试会把每轮bug提到禅道；\n禅道bug修改规范，点击查看；\n每结束一轮测试，才可以上传修复好的bug，如果有紧急bug修复好后可先咨询测试是否可上传，测试同意后，再进行上传发布；\n确保每轮提测前自测通过；\n确保最后一轮测试提测无任何bug。\n7.发布预发版把资源打包好后发给组长，由组长进行发布8.发布正式版把资源打包好后发给组长，由组长进行发布。9.活动总结总结整个项目中遇到的问题，并整理可优化的bug到showdoc的常见的bug这个目录下边；\nwiki上更新git目录和项目地址，备份到pc项目列表\n",
      "url": "/extend/step.html",
      "children": []
    },
    {
      "title": "开发环境搭建",
      "content": "",
      "url": "/extend/env.html",
      "children": [
        {
          "title": "1.创建仓库",
          "url": "/extend/env.html#1.创建仓库",
          "content": "1.创建仓库申请 Gitblit 账号（有账号的请忽略）;\n钉钉找【康国伟】创建Gitblit仓库，命名为FD_P_XXX（XXX根据活动的项目命名）:\n特别说明活动类项目命名规则说明，一般是和后端的项目命名保持一致，如果不能保持一致可按照下边的这种格式命名：\n\n同城游活动： 【FD_P_TcyAct_XXX】(XXX根据活动项目命名)； \n妖豆活动：【FD_P_YdAct_XXX】(XXX根据活动项目命名，如妖豆竞技场命名FD_P_YdAct_JJC) ； \n如果有复用的活动，命名最后加上日期即可，如妖豆竞技场命名【FD_P_YdAct_JJC20180429】。 \n\n\n查看扩展阅读，通用项目命名规则说明：点击查看\n"
        },
        {
          "title": "2.安装",
          "url": "/extend/env.html#2.安装",
          "content": "2.安装克隆【活动基础项目】：git clone http://qinlu@192.168.1.146:8080/r/FD_P_ActMode.git\n克隆【FD_P_XXX】仓库到本地，接着创建分支【release-v1.0.0】（开发分支），然后把【活动基础项目】拷贝到这个分支下\n在本地【FD_P_XXX】仓库安装脚手架npm依赖包：npm install，推荐使用cnpm install\n"
        },
        {
          "title": "3.运行",
          "url": "/extend/env.html#3.运行",
          "content": "3.运行node server.js"
        },
        {
          "title": "4.访问",
          "url": "/extend/env.html#4.访问",
          "content": "4.访问http://a.yaodou.org:1505/src/index.html访问前注意事项：需要在host文件中新增一行：127.0.0.1 a.yaodou.org（中间有空格），以防止运行时登录出现跨域错误，并且host文件调整后需要重启运行。"
        },
        {
          "title": "5.目录结构说明",
          "url": "/extend/env.html#5.目录结构说明",
          "content": "5.目录结构说明目录结构特别说明：【css】和【img】：都是打包后的资源文件\n【js/app】：活动入口，处理活动所有逻辑\n【js/config】：配置文件，例如url的配置\n【js/lib】：第三方库文件\n【js/tool】：工具函数，用于放置基础组件、全局公用函数、全局公用方法\n\n【js/tpl】：打包后的模板文件\n【js/wht-game】：万花筒游戏组件，例如大转盘使用说明\n【scss】：样式文件\n\n【sprite】：打包前的图片位置\n【spritemp】：雪碧图和样式的映射文件（不需要改动）\n【tplhtml】：模板页面\n【index.html】：首页\n【pop-demo.html】：弹窗页面，主要用于快速调整弹窗的样式\n【gulpConfig.json】：gulp配置文件，主要用于文件打包的配置项，包括雪碧图合并，脚本合并压缩处理等等\n【serverPackage.json】：接口数据\n\n"
        }
      ]
    },
    {
      "title": "规范",
      "content": "活动开发设计规范\n活动开发接口规范\n",
      "url": "/extend/stand.html",
      "children": []
    },
    {
      "title": "常见bug",
      "content": "1.点击【充值】按钮回到活动页面，弹出的是否完成充值的弹窗，点击取消、确定、关闭都需要刷新页面需要刷新的数据：2.妖豆活动点击【充值】按钮，这个充值链接的充值代号格式是【年月日+序号】，序号是01开始：3.规则的最后一条以句号结尾：4.活动记录底部分页如果出现换行操作，则隐藏左侧的【共941条，第10/135页】的数据，然后分页的数据居中显示：错误示范：正确示范：5.功能自测，建议找测试拿到测试用例进行自测。",
      "url": "/extend/bug.html",
      "children": []
    }
  ]
}
# 常见bug

#### 1.点击【充值】按钮回到活动页面，弹出的是否完成充值的弹窗，点击取消、确定、关闭都需要刷新页面需要刷新的数据：
![](https://www.showdoc.cc/server/api/common/visitfile/sign/5dbd98aa220bdbc4f8609f0e0cda277e?showdoc=.jpg)

#### 2.妖豆活动点击【充值】按钮，这个充值链接的充值代号格式是【年月日+序号】，序号是01开始：
![](https://www.showdoc.cc/server/api/common/visitfile/sign/89dd7e58e1807ba5fdf805684d14c4f7?showdoc=.jpg)

#### 3.规则的最后一条以句号结尾： 
![](https://www.showdoc.cc/server/api/common/visitfile/sign/2f6ed735239e8304285157fb15243566?showdoc=.jpg)

#### 4.活动记录底部分页如果出现换行操作，则隐藏左侧的【共941条，第10/135页】的数据，然后分页的数据居中显示：
**错误示范：**<br/>
![](https://www.showdoc.cc/server/api/common/visitfile/sign/77ed5309fc33b166716ab7257b4c79f8?showdoc=.jpg)<br/>

**正确示范：**<br/>
![](https://www.showdoc.cc/server/api/common/visitfile/sign/77fc0726e18dd7052d77fa7655beb8ca?showdoc=.jpg)

#### 5.功能自测，建议找测试拿到测试用例进行自测。
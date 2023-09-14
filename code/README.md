<!--
 * @Author: hfxie
 * @Date: 2023-09-12 10:08:58
 * @LastEditors: hfxie
 * @LastEditTime: 2023-09-12 13:29:49
 * @Description: 指引
-->
# 自定义控件
路径: 
金蝶/制造云/项目任务与进度计划/项目计划管理/项目计划进度
金蝶/制造云/项目策划/检修主计划/检修主资源工作台
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 内置交互
  发起 (customEventOutConst)： [ custom_init ]
  接收 (customEventInConst)： [ dataLoading, init ]


### 版本号规则:V1.5.23 (20210524)
  V(大版本号|2021年).几月.(迭代1|2)(需求序号1|2|3|4···) 
  V1.5.23为例就是21年五月迭代2第3个需求优化版本

### commit规范
「type」message
示例:「refactor」作业批量修改为任务,重构项目目录结构
示例:「feat」XXX
```
feat：新功能（feature）
fix：修补bug
hotfix：紧急修复bug
test：增加测试
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
chore：构建过程或辅助工具的变动





```
#### 参考位置
```
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度

网页可见区域宽： document.body.clientWidth
网页可见区域高： document.body.clientHeight
网页可见区域宽： document.body.offsetWidth (包括边线的宽)
网页可见区域高： document.body.offsetHeight (包括边线的高)
网页正文全文宽： document.body.scrollWidth
网页正文全文高： document.body.scrollHeight
网页被卷去的高： document.body.scrollTop
网页被卷去的左： document.body.scrollLeft
网页正文部分上： window.screenTop
网页正文部分左： window.screenLeft
屏幕分辨率的高： window.screen.height
屏幕分辨率的宽： window.screen.width
屏幕可用工作区高度： window.screen.availHeight
屏幕可用工作区宽度： window.screen.availWidth

// 部分jQuery函数
(window).height()　//浏览器时下窗口可视区域高度(document).height()　　　　//浏览器时下窗口文档的高度
(document.body).height()　　　　　　//浏览器时下窗口文档body的高度(document.body).outerHeight(true)　//浏览器时下窗口文档body的总高度 包括border padding margin
(window).width()　//浏览器时下窗口可视区域宽度(document).width()//浏览器时下窗口文档对于象宽度
(document.body).width()　　　　　　//浏览器时下窗口文档body的高度(document.body).outerWidth(true)　//浏览器时下窗口文档body的总宽度 包括border padding

HTML精确定位:scrollLeft,scrollWidth,clientWidth,offsetWidth
scrollHeight: 获取对象的滚动高度。
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth:获取对象的滚动宽度
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标
event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标
document.documentElement.scrollTop 垂直方向滚动的值
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量
```
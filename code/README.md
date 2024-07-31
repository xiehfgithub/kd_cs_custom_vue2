<!--
 * @Author: hfxie
 * @Date: 2023-04-12 10:08:58
 * @LastEditors: haifeng_xie haifeng_xie@kingdee.com
 * @LastEditTime: 2024-07-31 10:06:17
 * @LastEditors: haifeng_xie haifeng_xie@kingdee.com
 * @LastEditTime: 2023-09-22 12:18:54
 * @Description: 指引
-->
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

### 控件命名
  领域_控件标识[?_移动端标识]
  例: 
    PC端控件      mmc_table 
    移动端控件    mmc_table_m

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


### 新建模板文件夹使用
  先修改createTemplate.js中 「parentFolder」参数值（src/components/xxx下属的主组件目录下）
  运行命令或者开发编辑器NPM脚本 node createTemplate.js
  输入新建组件名称（请确保同目录下无重复文件名称）
  回车确认等待是生成即可


### 目录规范
规范自定义控件目录如下：
```
mmc_demo/                               // 自定义控件名目录                    
├── code/
|   ├── .vscode/                        // 编辑器本地设置目录
|   ├── .public/                        // 公共目录
|   |    ├── index.html                 // 本地开发·预览页面模版入口
|   |    ├── kdfont.css                 // 本地开发·平台基础样式
|   ├── src/                            // 代码主目录
|   |    ├── assets/                    // 静态资源目录
|   |    |    ├── images /              // 图片资源
|   |    |    ├── less/                 // 样式文件资源
|   |    |    └── ..../                 // 更多
|   |    ├── components/                // vue组件 
|   |    |    └── TemplateComponent/    // createTemplate脚本模板组件目录
|   |    |        └── TemplateComponent/TemplateComponent.vue           // createTemplate脚本模板组件·模板
|   |    |        └── TemplateComponent/TemplateComponent.less           // createTemplate脚本模板组件·样式
|   |    |    └── Xxx/Xxx.vue           // 参照基本的组件规范·大驼峰命名
|   |    |    └── ..../                 // 更多
|   |    ├── global/                    // 全局引入资源目录
|   |    |    └── components/           // 第三方UI库注册目录
|   |    |    └── filters/              // 过滤器注册目录
|   |    ├── mock/                      // 本地Mock数据结构目录
|   |    ├── store/                     // 数据状态管理目录
|   |    |    └── actions.js            // 数据状态管理·动作
|   |    |    └── getters.js            // 数据状态管理·依赖计算
|   |    |    └── index.js              // 数据状态管理·入口
|   |    |    └── mutations.js          // 数据状态管理·更改
|   |    └── utils/                     // 自定义 + 第三方工具类目录 
|   |    └── App.vue                    // 自定义控件·主组件入口
|   |    └── ConstName.js               // 本地常量文件 
|   |    └── customEventInConst.js      // 服务端输入控件·接口名称常量文件 
|   |    └── customEventOutConst.js     // 控件调用服务端·接口名称常量文件 
|   |    └── main.js                    // 自定义控件·主逻辑入口
|   |    └── ..../                      // 更多
|   └── .eslintignore                   // 配置文件·elint忽略文件规则
|   └── .eslintrc.js                    // 配置文件·elint具体规则
|   └── .gitignore                      // 配置文件·git提交忽略文件规则
|   └── babel.config.js                 // 配置文件·babel配置规则
|   └── createTemplate.js               // 脚本文件·新增组件文件夹脚本
|   └── editorconfig                    // 配置文件·编辑器规则
|   └── package-lock.json               // 配置文件·锁定npm形式安装模块的版本
|   └── package.json                    // 配置文件·安装依赖及控件版本配置
|   └── README.md                       // 指引文件，版本、代码提交规范
|   └── vue.config.js                   // 配置文件·整体项目打包构建输出配置
|   └── yarn.lock                       // 配置文件·锁定yarn形式安装模块的版本
|
├── scr/                              // 打包后·静态资源目录
├── index.html                        // 打包后·页面入口
├── index.js                          // 打包后·主JS入口
├── index.js.map                      // 打包后·开启源码分析sourceMap定位文件

```




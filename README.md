# react-admin([尝试一下](https://codesandbox.io/s/react-admin-u9kdb))
react-admin system solution

<img src="https://raw.githubusercontent.com/yezihaohao/react-admin/master/screenshots/logo.png" alt="logo" width="150" height="53" />

![travis-ci](https://travis-ci.org/yezihaohao/react-admin.svg?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

### 文档地址：[wiki](https://github.com/yezihaohao/react-admin/wiki)

### 问题和方案汇总：[issue](https://github.com/yezihaohao/react-admin/issues/12)

### 更新日志迁移至[CHANGELOG.md](https://github.com/yezihaohao/react-admin/blob/master/CHANGELOG.md)😁(重要！对于了解项目部分功能和代码很有用！)

### 前言
> 网上react后台管理开源免费的完整版项目比较少，所以利用空余时间集成了一个版本出来，已放到GitHub
  启动和打包的时间都稍长，请耐心等待两分钟

- [GitHub地址](https://github.com/yezihaohao/react-admin)
- [预览地址](https://admiring-dijkstra-34cb29.netlify.com)(已增加响应式，可手机预览😄)

### 依赖模块
<span style="color: rgb(184,49,47);">项目是用create-react-app创建的，主要还是列出新加的功能依赖包</span>

<span style="color: rgb(184,49,47);">点击名称可跳转相关网站😄😄</span>

- [react](https://facebook.github.io/react/)
- [react-router](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">react路由，4.x的版本，如果还使用3.x的版本，请切换分支（ps:分支不再维护）</span>)
- [redux](https://redux.js.org/)(基础用法，但是封装了通用action和reducer，demo中主要用于权限控制（ps：目前可以用16.x的context api代替），可以简单了解下)
- [antd](https://ant.design/index-cn)(<span style="color: rgb(243,121,52);">蚂蚁金服开源的react ui组件框架</span>)
- [axios](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">http请求模块，可用于前端任何场景，很强大👍</span>)
- [echarts-for-react](https://github.com/hustcc/echarts-for-react)(<span style="color: rgb(243,121,52);">可视化图表，别人基于react对echarts的封装，足够用了</span>)
- [recharts](http://recharts.org/#/zh-CN/)(<span style="color: rgb(243,121,52);">另一个基于react封装的图表，个人觉得是没有echarts好用</span>)
- [nprogress](https://github.com/rstacruz/nprogress)(<span style="color: rgb(243,121,52);">顶部加载条，蛮好用👍</span>)
- [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg)(<span style="color: rgb(243,121,52);">别人基于react的富文本封装，如果找到其他更好的可以替换</span>)
- [react-draggable](https://github.com/mzabriskie/react-draggable)(<span style="color: rgb(243,121,52);">拖拽模块，找了个简单版的</span>)
- [screenfull](https://github.com/sindresorhus/screenfull.js/)(<span style="color: rgb(243,121,52);">全屏插件</span>)
- [photoswipe](https://github.com/dimsemenov/photoswipe)(<span style="color: rgb(243,121,52);">图片弹层查看插件，不依赖jQuery，还是蛮好用👍</span>)
- [animate.css](http://daneden.me/animate)(<span style="color: rgb(243,121,52);">css动画库</span>)
- [react-loadable](https://github.com/jamiebuilds/react-loadable)(代码拆分，按需加载，预加载，样样都行，具体见其文档，推荐使用)
- [redux-alita](https://github.com/yezihaohao/redux-alita) 极简的redux2react工具
- 其他小细节省略

### 功能模块
<span style="color: rgb(184,49,47);">备注：项目只引入了ant-design的部分组件，其他的组件antd官网有源码，可以直接复制到项目中使用，后续有时间补上全部组件。</span>

<span style="color: rgb(184,49,47);">项目使用了antd的自定义主题功能-->黑色，若想替换其他颜色，具体操作请查看antd官网</span>
<!--more-->

- 首页
    - 完整布局
    - 换肤(全局功能，暂时只实现了顶部导航的换肤，后续加上其他模块)
- 导航菜单
    - 顶部导航(菜单伸缩，全屏功能)
    - 左边菜单(增加滚动条以及适配路由的active操作)
- UI模块
    - 按钮(antd组件)
    - 图标(antd组件并增加彩色表情符)
    - 加载中(antd组件并增加顶部加载条)
    - 通知提醒框(antd组件)
    - 标签页(antd组件)
    - 轮播图(ant动效组件)
    - 富文本
    - 拖拽
    - 画廊
- 动画
    - 基础动画(animate.css所有动画)
    - 动画案例
- 表格
    - 基础表格(antd组件)
    - 高级表格(antd组件)
    - 异步表格(数据来自掘金酱的接口)
- 表单
    - 基础表单(antd组件)
- 图表
    - echarts图表
    - recharts图表
- 页面
    - 登录页面(包括GitHub第三方登录)
    - 404页面

### 功能截图
#### 首页
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd1.gif)
#### 按钮图标等
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd2.gif)
#### 轮播图
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd3.gif)
#### 富文本
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd4.gif)
#### 拖拽
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd5.gif)
#### 画廊
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd6.gif)
#### 动画
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd7.gif)
#### 表格
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd8.gif)
#### 表单
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd9.gif)
#### 图表
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd10.gif)
#### 页面
![截图](https://raw.githubusercontent.com/yezihaohao/yezihaohao.github.io/master/imgs/rd11.gif)
#### 菜单拖拽
![截图](https://raw.githubusercontent.com/yezihaohao/react-admin/master/screenshots/menu_draggable.gif)

### 代码目录
```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   --- index.html							---首页入口html文件
|   --- npm.json							---echarts测试数据
|   --- weibo.json							---echarts测试数据
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- index.js
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- animation                      ---动画组件
|   |    |    --- ...
|   |    +-- charts                         ---图表组件
|   |    |    --- ...
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...
|   |    +-- forms                          ---表单组件
|   |    |    --- ...
|   |    +-- pages                          ---页面组件
|   |    |    --- ...
|   |    +-- tables                         ---表格组件
|   |    |    --- ...
|   |    +-- ui                             ---ui组件
|   |    |    --- ...
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json
```
### 安装运行
##### 1.下载或克隆项目源码
##### 2.yarn 或者 npm安装相关包文件(首先推荐使用yarn，国内建议增加淘宝镜像源，不然很慢，你懂的😁)
> 有些老铁遇到运行时报错，首先确定下是不是最新稳定版的nodejs和npm或者yarn(推荐用yarn)，切记不要用cnpn

```js
// 首推荐使用yarn装包
yarn or npm i
```
##### 3.启动项目
```js
yarn start or npm start
```
##### 4.打包项目
```js
yarn build or npm run build
```

### 结尾

### vs code 插件和配置

### vscode 配置
```
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "eslint.autoFixOnSave": true,
    "editor.fontSize": 14,
    "vetur.format.options.useTabs": true,
    "workbench.colorTheme": "Dracula",
    "window.zoomLevel": 0,
```

### vscode 插件安装
必装插件
* EditorConfig for VS Code
* ESLint
# module-federation-demo
## 概述
当前demo中包含三个微应用

1. reactProjectOne: react 端口8991
2. reactProjectTwo: react 端口8992
3. vueTwoProject: vue2 端口8993
4. vueThreeProject: vue3 端口8994

reactProjectOne项目中引用了`reactProjectTwo`、`vueTwoProject`、`vueThreeProject`.

使用node启动服务，`node app.js`
## 使用 plop 生成微应用模板

可以快速生成react,vue3的项目及webpack配置。

```
npm run plop
```

> 输入的项目名称最好是小驼峰命名

## 项目启动

先cd进入每一个子项目，需先安装依赖执行`yarn`，若已安装可跳过该步骤，`yarn start`启动起来，有使用到的都需要启动。

上面是通过导出`mount()`方法的方式，下面验证下直接导出vue文件，看目标项目是否能正确展示该vue文件，该vue文件的vue实例读取是否直接读取的是各自应用的实例。


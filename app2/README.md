# cloud-music-demo

#### 介绍
使用网易云音乐API练习写一个仿网易云的项目

#### 软件架构
使用到的内容有：vue2、vant、webpack4

API使用项目：https://github.com/Binaryify/NeteaseCloudMusicApi

**启动服务前准备：**

克隆项目到本地并安装依赖

```shell
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git

npm install
```

启动服务：默认端口号为3000

```shell
node app.js
```




#### 启动本应用教程

1.  安装依赖：`yarn`
2.  启动项目：`yarn serve`
3.  然后在`http://localhost:8888`端口访问即可。



#### 项目记录

1.  首页的搜索框部分的布局样式及页面搜索历史缓存功能已写好；
2.  首页轮播图通过接口联调拿到对应的数据，已写好样式布局，其中包括轮播图自动滚动、轮播图下方的标签等
3.  首页第二行的滚动菜单已通过接口联调好，目前点击后均是跳转到搜索界面，后续完善相应的界面跳转；
4.  首页第三行的推荐歌单已做好，第一张图可自动垂直更新，横向的图可自由滑动，目前还没有写对应的跳转界面；
5.  首页第四行的热门播客，样式布局已写好，对应的跳转界面还没有开始写；
6.  轮播图中新歌首发，点击可以跳转到音乐播放界面，音乐播放界面布局已写好，对应功能还没开始写，后续完善。

当前功能界面效果如下：

![image-20210822000050067](src/assets/images/pic1.gif)

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

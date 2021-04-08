# 改变

与vue-cli2相比

+ 基于webpack4
+ 移除配置目录，build和config不见
+ 提供vue ui
+ 移除static，增加public 将index.html加入到public中

# 创建项目

```shell
vue create projectname
```

1. please pick a preset 选中配置
   1. ![vue-cli4 preset](vue-cli4 preset.jpg)
   2. 选择手动查看配置
2. 手动配置 按空格是选中和取消
   1. ![手动配置](手动配置.jpg)
   2. 取消选中Linter =》对代码进行规范的东西
   3. Unit testing和E2E testing一般都不选
   4. TypeScript是JS超集
   5. Progressive Web App Support: 先进webapp
      + 缓存
      + 推送通知
   6. 选择Babel
3. 选择vue版本，现在已经有3.x版本，但是还是使用稳定的2.x版本
   1. ![vueversion](vueversion.jpg)

4. 配置文件处理方式

   1. ![配置文件处理方式](配置文件处理方式.jpg)
   2. In dedicated config files :某些配置文件在单独配置文件
   3. in package.json :放在package.json中

5. 是否将这次配置的项目作为一种模板可供选择

   1. ![设置模板](设置模板.jpg)

   2. 可以保存一个试一试

6. 配置项目模板名称

   1. ![配置模板名](配置模板名.jpg)

7. 选择包管理工具（npm 或者 yarn)
   + vue-cli4没有此项
8. 后续删除配置模板
   + 在users/admin中找到.vuerc，删除
   + rc后缀来源于Unix系统的前辈CTSS，它其中有个叫做“run command”的命令脚本功能。早期的Unix版本使用rc在操作系统启动脚本的文件名中，以尊重CTSS的成果。
# multipage-workflow-with-webpack
一个多页面下的webpack开发前端工作流

## 目标
1. 资源自动引入
2. 页面拆分与合并 
3. 自动化构建
4. 热替换自动刷新
5. 接口访问代理配置

## 说明
项目为了重构公司内部系统，基于webpack配置了一套工作流，实现了自动引入资源，页面拆分，热代码替换等诸多功能。

## 使用方法
1. 开发模式，不生成dist目录 支持热替换和自动刷新`node server.js`
2. 部署打包 `webpack`或`webpack -p` 

## todos
- 开发环境和部署环境的区分
- 修改程序任意位置均可以实现自动刷新

## 参考与感谢

[基于gulp+webpack的"约定大于配置"的构建方案探讨](http://segmentfault.com/a/1190000003904552)

[基于gulp+webpack的"约定大于配置"的构建方案探讨 2](http://segmentfault.com/a/1190000003952477)


# 在 Taro 微信小程序中适用 Echarts

本项目是基于 ec-canvas 封装的适用于 Taro 小程序版本。

开发者可以通过简单的引入及 React 的语法，快速开发图表，满足各种可视化需求

## 体验示例小程序

在微信中扫描下面的二维码即可体验 ECharts Demo：

![ECharts Demo](img/weixin-app.jpg)

## FAQ
### 可滑动的图表？

添加配置dataZoom可对图表进行缩放达到滑动的效果，可以参考 [pages/bar/index.js](/blob/master/pages/bar/index.js) 的写法。

### 多图表结合在一起？

参见 `pages/More/More` 的例子，可以在获取数据后再初始化数据。

### 如何在一个页面中加载多个图表？

参见 `pages/Add/Add` 的例子。



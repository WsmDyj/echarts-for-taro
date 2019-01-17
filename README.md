随着React的快速发展，我们也越来越接受它的写法和思想，如今小程序如火中天，普通的编译模式早已不适应开发者的需求。人们在不断的寻求一种React能够在小程序中编译的语言框架，因此Taro便诞生了。宇宙中最强的执行官。它支持使用 React 的开发方式来编写可以同时在微信小程序、Web 、React Native 等多个平台上运行的应用。经过不断地迭代完善，已经让 Taro 浴火重生。
## TaroEcharts简介
本项目是在实际开发中总结出来的一套基于ec-canvas封装的适用于Taro版本的图表框架。开发者可以通过简单的配置及 React 的语法，快速开发图表，满足各种可视化需求。

#### 微信小程序预览：
![TaroECharts Demo](https://user-gold-cdn.xitu.io/2019/1/17/1685a1063cc8a9bf?w=439&h=413&f=png&s=106489)
## 实现过程
### 1 下载
为了兼容小程序 Canvas，我们首先去构建ec-canvas下载到本地。其中ec-canvas是echarts官网提供的组件，我们可以自行下载或者去[官网自定义构建](https://echarts.baidu.com/builder.html)选择自己需要的图表或插件进行下载。
### 2 引入组件
在项目中引入我们需要的组件库，这里统一将其放在`src/components/ec-canvas`文件夹下。大家可将[该文件夹](https://github.com/WsmDyj/echarts-for-taro/tree/master/src/components/ec-canvas)导入到自己项目中去。其中echarts.js就是刚我们自行下载的echarts图表插件，可根据实际项目需求自定义下载所需图表然后将其导入。
### 3 创建图表(以饼图为例)
### 3.1 新建图表组件
在`components`文件夹下创建`pieCharts.js`组件。引入我们刚创建的组件
> import * as echarts from "./ec-canvas/echarts";

### 3.2 懒加载渲染图表
配置我们的ec-canvas
```
config = {
    usingComponents: {
        "ec-canvas": "./ec-canvas/ec-canvas"
    }
};
```
在render函数中使用刚导入的ec-canvas
```
<ec-canvas
    ref={this.refChart}
    canvas-id="mychart-area"
    ec={this.state.ec}
/>
 ```
构建refresh函数初始化图表
```
refresh(data) {
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChart = node => (this.Chart = node);
```
配置懒加载图表
```
state = {
    ec: {
      lazyLoad: true
    }
 };
```
### 3.3 配置我们所需图表的option 
这里在setChartData进行配置，并传入charts,data参数。
```

function setChartData(chart, data) {
  let option = {
    series : [
      {
        name: '访问来源',
        type: 'pie',
        center: ['50%', '50%'],
        radius: [0, '60%'],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chart.setOption(option);
}
```
至此饼图已经创建完成，具体的可参考[饼图](https://github.com/WsmDyj/echarts-for-taro/blob/master/src/components/PieChart.js)

## 4 实例化图表
在需要图表的页面中导入刚创建的图表([饼图](https://github.com/WsmDyj/echarts-for-taro/blob/master/src/pages/Pie/Pie.js))
> import PieChart from "../../components/PieChart";

render函数中导入
``` 
<PieChart ref={this.refPieChart} />
```
实例化图表并传入data
```
componentDidMount() {
    const chartData = [
      {value:335, name:'直接访问'},
      {value:310, name:'邮件营销'},
      {value:234, name:'联盟广告'},
      {value:135, name:'视频广告'},
      {value:1548, name:'搜索引擎'}
    ];
    this.pieChart.refresh(chartData);
  }
  refPieChart = (node) => this.pieChart = node
 ```
 至此饼图已经创建完成，饼图如此其他的都是类似的。只要照着这个方式去设置option,我们就可以创建你想要的图表了。

## FAQ
### 可滑动的图表？

添加配置dataZoom可对图表进行缩放达到滑动的效果，可以参考 `pages/Move/Move` 的写法。

### 多图表结合在一起？

参见 `pages/More/More` 的例子，可以在获取数据后再初始化数据。

### 如何在一个页面中加载多个图表？

参见 `pages/Add/Add` 的例子。



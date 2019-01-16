import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "TaroEcharts示例"
  };
  constructor() {
    super(...arguments);
    this.state = {
      charts: [
        { id: 'Pie', name: '饼图', img: require('../../img/icons/pie.png')},
        { id: 'Bar', name: '柱状图', img: require('../../img/icons/bar.png')},
        { id: 'Line',name: '折线图', img: require('../../img/icons/line.png')},
        { id: 'Funnel', name: '漏斗图', img: require('../../img/icons/funnel.png')},
        { id: 'Gauge', name: '仪表盘', img: require('../../img/icons/gauge.png')},
        { id: 'Heatmap', name: '热力图', img: require('../../img/icons/heatmap.png')},
        { id: 'Radar', name: '雷达图', img: require('../../img/icons/radar.png')},
        { id: 'Tree', name: '树图', img: require('../../img/icons/tree.png')},
        { id: 'Scatter', name: '散点图', img: require('../../img/icons/scatter.png')},
        { id: 'Sunburst', name: '旭日图', img: require('../../img/icons/sunburst.png')},
        { id: 'Map', name: '地图', img: require('../../img/icons/map.png')},
        { id: 'Graph',name: '关系图',img: require('../../img/icons/graph.png')}]
    };
  }

  gotoEcharts(type) {
    Taro.navigateTo({ url: `/pages/${type}/${type}` });
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="panel">
        {this.state.charts.map((chart, index) => {
          return (
            <View
              className="chart-with-img"
              onClick={this.gotoEcharts.bind(this, chart.id)}
              key={chart.id}
            >
              <Image src={chart.img} />
              <Text>{chart.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

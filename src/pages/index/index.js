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
        { id: "Pie", name: "饼图", img: require("../../img/icons/pie.png")},
        { id: "Bar", name: "柱状图", img: require("../../img/icons/bar.png")},
        { id: "Line",name: "折线图", img: require("../../img/icons/line.png")},
        {id: "Funnel",name: "漏斗图",img: require("../../img/icons/funnel.png")}]
    };
  }

  gotoEcharts(type) {
    console.log(type);
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

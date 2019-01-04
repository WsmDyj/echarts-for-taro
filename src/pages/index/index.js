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
        {
          id: "pie",
          name: "饼图"
        },
        {
          id: "bar",
          name: "柱状图"
        },

        {
          id: "line",
          name: "折线图"
        },
        {
          id: "funnel",
          name: "漏斗图"
        }
      ]
    };
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
            <View className="chart-with-img" key={index}>
              <Image src={`../../img/icons/${chart.id}.png`} />
              <Text>{chart.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

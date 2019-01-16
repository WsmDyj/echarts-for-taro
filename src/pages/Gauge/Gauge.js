import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import GaugeChart from "../../components/GaugeChart";

export default class Gauge extends Component {
  config = {
    navigationBarTitleText: "仪表盘示例"
  };
  componentDidMount() {
    const chartData = [{
      value: 70,
      name: '完成率',
  }];
    this.gaugeChart.refresh(chartData);
  }

  refGaugeChart = (node) => this.gaugeChart = node

  render() {
    return (
      <View className="gauge-chart">
        <GaugeChart ref={this.refGaugeChart} />
      </View>
    );
  }
}

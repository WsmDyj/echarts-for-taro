import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import HeatmapChart from '../../components/HeatmapChart'

export default class Heatmap extends Component {
  config = {
    navigationBarTitleText: "散点图示例"
  };
  componentDidMount() {
    const chartData = [];
    this.heatmapChart.refresh();
  }

  refHeatmapChart = (node) => this.heatmapChart = node

  render() {
    return (
      <View className="pie-chart">
        <HeatmapChart ref={this.refHeatmapChart} />
      </View>
    );
  }
}

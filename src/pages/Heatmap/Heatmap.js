import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import HeatmapChart from '../../components/HeatmapChart'

export default class Heatmap extends Component {
  config = {
    navigationBarTitleText: "热力图示例"
  };
  componentDidMount() {
    const chartData = {
      xAxis: ['1', '2', '3', '4', '5','6','7'],
      yAxis: ['a', 'b', 'c', 'd', 'v'],
      data: [
        [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
        [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
        [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
        [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
        [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
        [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
        [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
      ]
    };
    this.heatmapChart.refresh(chartData);
  }

  refHeatmapChart = (node) => this.heatmapChart = node

  render() {
    return (
      <View className="heatmap-chart">
        <HeatmapChart ref={this.refHeatmapChart} />
      </View>
    );
  }
}

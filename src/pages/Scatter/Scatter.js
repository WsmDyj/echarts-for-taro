import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import ScatterCharts from '../../components/ScatterCharts'
import "./index.scss";

export default class Scatter extends Component {
  config = {
    navigationBarTitleText: "散点图示例"
  };
  componentDidMount() {
    const chartData = [
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58],
      [9.0, 8.81],
      [11.0, 8.33],
      [14.0, 9.96],
      [6.0, 7.24],
      [4.0, 4.26],
      [12.0, 10.84],
      [7.0, 4.82],
      [5.0, 5.68]
    ]
    this.scatterCharts.refresh(chartData);
  }
  refScatterCharts = (node) => this.scatterCharts = node

  render() {
    return (
      <View className="scatter-chart">
        <ScatterCharts ref={this.refScatterCharts} />
      </View>
    );
  }
}

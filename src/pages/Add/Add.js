import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import AddChart from "../../components/AddChart";

export default class Add extends Component {
  config = {
    navigationBarTitleText: "多图表结合示例"
  };
  componentDidMount() {
    const chartData = {
      barData: [709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078],
      lineData: [1036,3693,2962,3810, 2519,1915,1748, 4675, 6209,4323,2865,4298]
    };
    this.addChart.refresh(chartData);
  }

  refAddChart = (node) => this.addChart = node

  render() {
    return (
      <View className="worldCloud-chart">
        <AddChart ref={this.refAddChart} />
      </View>
    );
  }
}

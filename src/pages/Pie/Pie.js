import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import PieChart from "../../components/PieChart";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "饼图示例"
  };
  componentDidMount() {
    const chartData = { value: 30, label: "女", color: "#FFC7EB" };
    this.pieChart.refresh(chartData);
  }

  refPieChart = (node) => this.pieChart = node

  render() {
    return (
      <View className="pie-chart">
        <PieChart ref={this.refPieChart} />
      </View>
    );
  }
}

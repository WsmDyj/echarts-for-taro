import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import PieChart from "../../components/PieChart";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "饼图示例"
  };
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

  render() {
    return (
      <View className="pie-chart">
        <PieChart ref={this.refPieChart} />
      </View>
    );
  }
}

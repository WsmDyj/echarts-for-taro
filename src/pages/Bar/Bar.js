import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import BarChart from '../../components/BarChart';

export default class Index extends Component {
  config = {
    navigationBarTitleText: "柱图示例"
  };
  componentDidMount() {
    const chartData =[
      {value: 60, name: '访问'},
      {value: 40, name: '咨询'},
      {value: 20, name: '订单'},
      {value: 80, name: '点击'},
      {value: 100, name: '展现'}]
    this.barChart.refresh(chartData);
  }

  refBarChart = (node) => this.barChart = node

  render() {
    return (
      <View className="bar-chart">
        <BarChart ref={this.refBarChart} />
      </View>
    );
  }
}

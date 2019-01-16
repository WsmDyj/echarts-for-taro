import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import BarChart from '../../components/BarChart'
import "./index.scss";


export default class Bar extends Component {
  config = {
    navigationBarTitleText: "柱状图示例"
  };
  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      measures: [{
        data: [10, 52, 200, 334, 390, 330, 220]
      }]
    }
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

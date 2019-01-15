import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import FunnelChart from '../../components/FunnelChart';

export default class Funnel extends Component {
  config = {
    navigationBarTitleText: "漏斗图示例"
  };
  componentDidMount() {
    const chartData =[
      {value: 60, name: '访问'},
      {value: 40, name: '咨询'},
      {value: 20, name: '订单'},
      {value: 80, name: '点击'},
      {value: 100, name: '展现'}]
    this.funnelChart.refresh(chartData);
  }

  refFunnelChart = (node) => this.funnelChart = node

  render() {
    return (
      <View className="funnel-chart">
        <FunnelChart ref={this.refFunnelChart} />
      </View>
    );
  }
}

import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KChart from '../../components/KChart'
import "./index.scss";


export default class K extends Component {
  config = {
    navigationBarTitleText: "K线图示例"
  };
  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
      },
      measures: [{
        data: [
          [20, 30, 10, 35],
          [40, 35, 30, 55],
          [33, 38, 33, 40],
          [40, 40, 32, 42]
        ]
      }]
    }
    this.kChart.refresh(chartData);
  }
  refKChart = (node) => this.kChart = node

  render() {
    return (
      <View className="k-chart">
        <KChart ref={this.refKChart} />
      </View>
    );
  }
}

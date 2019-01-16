import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import MoveChart from '../../components/MoveChart'
import LineChart from '../../components/LineChart'
import "./index.scss";


export default class More extends Component {
  config = {
    navigationBarTitleText: "可移动图表示例"
  };
  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      measures: [{
        data: [10, 52, 200, 334, 390, 330, 220, 334, 390, 330, 220, 10, 52, 200,]
      }]
    }
    this.moveChart.refresh(chartData);
    this.lineChart.refresh(chartData);
  }
  refMoveChart = (node) => this.moveChart = node

  refLineChart = (node) => this.lineChart = node

  render() {
    return (
      <View className='container'>
        <View className="move-chart">
          <MoveChart ref={this.refMoveChart} />
        </View>
        <View className="move-chart">
          <LineChart ref={this.refLineChart} />
        </View>
      </View>
    );
  }
}

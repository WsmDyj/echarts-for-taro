import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import GraphChart from "../../components/GraphChart";

export default class Graph extends Component {
  config = {
    navigationBarTitleText: "关系图示例"
  };
  componentDidMount() {
    const chartData = [{
      name: '节点1',
      x: 300,
      y: 300,
      itemStyle: {
        color: '#37A2DA'
      }
    }, {
      name: '节点2',
      x: 800,
      y: 300,
      itemStyle: {
        color: '#32C5E9'
      }
    }, {
      name: '节点3',
      x: 550,
      y: 100,
      itemStyle: {
        color: '#9FE6B8'
      }
    }, {
      name: '节点4',
      x: 550,
      y: 500,
      itemStyle: {
        color: '#FF9F7F'
      }
    }];
    this.graphChart.refresh(chartData);
  }

  refGraphChart = (node) => this.graphChart = node

  render() {
    return (
      <View className="gauge-chart">
        <GraphChart ref={this.refGraphChart} />
      </View>
    );
  }
}

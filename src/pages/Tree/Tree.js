import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import TreeChar from "../../components/TreeChar";

export default class Tree extends Component {
  config = {
    navigationBarTitleText: "树图示例"
  };
  componentDidMount() {
    const chartData = [
      {
        name: 'root',
        children: [
          {name: 'a',children: [{name: 'a1'}, {name: 'a2'}, {name: 'a3'}, {name: 'a4'}]},
          {name: 'b',children: [{name: 'b1'}, {name: 'b2'}, {name: 'b3'}, {name: 'b4'}]},
          {name: 'c',children: [{name: 'c1'}]},
          {name: 'd',children: [{name: 'd1'}]}
        ]
      }
    ]
    this.treeChart.refresh(chartData);
  }

  refTreeChart = (node) => this.treeChart = node

  render() {
    return (
      <View className="Tree-chart">
        <TreeChar ref={this.refTreeChart} />
      </View>
    );
  }
}

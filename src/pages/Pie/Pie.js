import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import PieChart from "../../components/PieChart";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "饼图示例"
  };

  refPieChart = node => (this.pieChart = node);

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="pie-chart">
        <PieChart ref={this.refPieChart} />
      </View>
    );
  }
}

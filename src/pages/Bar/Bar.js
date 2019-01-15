import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "柱图示例"
  };
  componentDidMount() {
  }


  render() {
    return (
      <View className="bar-chart">
      </View>
    );
  }
}

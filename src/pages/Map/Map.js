import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import MapChart from '../../components/MapChart'
import "./index.scss";

export default class Map extends Component {
  config = {
    navigationBarTitleText: "地图示例"
  };
  componentDidMount() {
    const chartData = [
      { name: '郑州市', value: 100 },
      { name: '洛阳市', value: 10 },
      { name: '开封市', value: 20 },
      { name: '信阳市', value: 30 },
      { name: '驻马店市', value: 40 },
      { name: '南阳市', value: 41 },
      { name: '周口市', value: 15 },
      { name: '许昌市', value: 25 },
      { name: '平顶山市', value: 35 },
      { name: '新乡市', value: 35 },
      { name: '漯河市', value: 35 },
      { name: '商丘市', value: 35 },
      { name: '三门峡市', value: 35 },
      { name: '济源市', value: 35 },
      { name: '焦作市', value: 35 },
      { name: '安阳市', value: 35 },
      { name: '鹤壁市', value: 35 },
      { name: '濮阳市', value: 35 },
      { name: '开封市', value: 45 }
    ]
    this.mapChart.refresh(chartData);
  }
  refMapChart = (node) => this.mapChart = node

  render() {
    return (
      <View className="map-chart">
        <MapChart ref={this.refMapChart} />
      </View>
    );
  }
}

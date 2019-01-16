import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import SunburstChart from '../../components/SunburstChart'
import "./index.scss";

export default class Scatter extends Component {
  config = {
    navigationBarTitleText: "旭日图示例"
  };
  componentDidMount() {
    var item1 = {
      color: '#F54F4A'
    };
    var item2 = {
        color: '#FF8C75'
    };
    var item3 = {
        color: '#FFB499'
    };
    const chartData = [{
      children: [{value: 5,
          children: [{
              value: 1,
              itemStyle: item1
          }, {
              value: 2,
              children: [{
                  value: 1,
                  itemStyle: item2
              }]
          }, {
              children: [{
                  value: 1
              }]
          }],
          itemStyle: item1
      }, {
          value: 10,
          children: [{
              value: 6,
              children: [{
                  value: 1,
                  itemStyle: item1
              }, {
                  value: 1
              }, {
                  value: 1,
                  itemStyle: item2
              }, {
                  value: 1
              }],
              itemStyle: item3
          }, {
              value: 2,
              children: [{
                  value: 1
              }],
              itemStyle: item3
          }, {
              children: [{
                  value: 1,
                  itemStyle: item2
              }]
          }],
          itemStyle: item1
      }],
      itemStyle: item1
  }, {
      value: 9,
      children: [{
          value: 4,
          children: [{
              value: 2,
              itemStyle: item2
          }, {
              children: [{
                  value: 1,
                  itemStyle: item1
              }]
          }],
          itemStyle: item1
      }, {
          children: [{
              value: 3,
              children: [{
                  value: 1
              }, {
                  value: 1,
                  itemStyle: item2
              }]
          }],
          itemStyle: item3
      }],
      itemStyle: item2
  }, {
      value: 7,
      children: [{
          children: [{
              value: 1,
              itemStyle: item3
          }, {
              value: 3,
              children: [{
                  value: 1,
                  itemStyle: item2
              }, {
                  value: 1
              }],
              itemStyle: item2
          }, {
              value: 2,
              children: [{
                  value: 1
              }, {
                  value: 1,
                  itemStyle: item1
              }],
              itemStyle: item1
          }],
          itemStyle: item3
      }],
      itemStyle: item1
  }, {
      children: [{
          value: 6,
          children: [{
              value: 1,
              itemStyle: item2
          }, {
              value: 2,
              children: [{
                  value: 2,
                  itemStyle: item2
              }],
              itemStyle: item1
          }, {
              value: 1,
              itemStyle: item3
          }],
          itemStyle: item3
      }, {
          value: 3,
          children: [{
              value: 1,
          }, {
              children: [{
                  value: 1,
                  itemStyle: item2
              }]
          }, {
              value: 1
          }],
          itemStyle: item3
      }],
      itemStyle: item1
  }];
    this.sunburstChart.refresh(chartData);
  }
  refSunburstChart = (node) => this.sunburstChart = node

  render() {
    return (
      <View className="sunburst-chart">
        <SunburstChart ref={this.refSunburstChart} />
      </View>
    );
  }
}

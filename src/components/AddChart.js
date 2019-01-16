import Taro, { Component } from "@tarojs/taro";
import * as echarts from "./ec-canvas/echarts";
function setChartData(chart, data) {
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff"
        }
      },
    },
    grid: {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    dataZoom: [
      {
        type: 'slider',
        start: 0,
        show: false,
        end: 60,
      },
      {
        type: 'inside',
        start: 0,
        end: 60,
        filterMode: 'filter',
      },
    ],
    xAxis: [{
        type: "category",
        axisLine: {
          lineStyle: {
            color: '#90979c'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          interval: 0,
        },
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
    }],
    yAxis: [{
      type: "value",
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#90979c'
        }
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          interval: 0,
      },
      splitArea: {
          show: false
      },
    }],
    series: [
      {
        name: "女",
        type: "bar",
        stack: "总量",
        barWidth: 10,
        label: {
          normal: {
            show: false,
            position: 'top',
            color: '#000'
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00cefc'
            }, {
              offset: 1,
              color: '#00cefc'
            }]),
          }
        },
        data: data.barData,
      },
      {
        name: "男",
        type: "line",
        stack: "总量",
        symbolSize: 10,
        symbol:'circle',
        itemStyle: {
          normal: {
            color: "green",
            barBorderRadius: 0,
            label: {
              show: false,
              position: "bottom",
            }
          }
        },
        data: data.lineData
      },
    ]
  }
  chart.setOption(option);
}

export default class AddChart extends Component {
  config = {
    usingComponents: {
      "ec-canvas": "./ec-canvas/ec-canvas"
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    ec: {
      lazyLoad: true
    }
  };

  refresh(data) {
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChart = node => (this.Chart = node);

  render() {
    return (
      <ec-canvas
        ref={this.refChart}
        canvas-id="mychart-area"
        ec={this.state.ec}
      />
    );
  }
}

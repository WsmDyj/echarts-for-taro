import Taro, { Component } from "@tarojs/taro";
import * as echarts from "./ec-canvas/echarts";
import geoJson from '../pages/Map/mapData';

function setChartData(chart, data) {
  echarts.registerMap('map', geoJson);
  let option = {
    tooltip: {
      
    },
    visualMap: {
      min: 0,
      max: 100,
      left: 'left',
      top: 'bottom',
      calculable: true,
      show: false
    },
    series: [{
      type: 'map',
      mapType: 'map',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#389BB7',
          areaColor: '#fff',
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0
        }
      },
      animation: false,
      data: data
    }],
  };
  chart.setOption(option);
}

export default class MapChart extends Component {
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

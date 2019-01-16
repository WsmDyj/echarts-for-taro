import Taro, { Component } from "@tarojs/taro";
import * as echarts from "./ec-canvas/echarts";

function setChartData(chart, data) {
  let option = {
    tooltip: {
    },
    color: ['#3398DB'],
    xAxis : [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    dataZoom: [
      {
        type: 'slider',
        start: 0,
        show: false,
        end: 50,
      },
      {
        type: 'inside',
        start: 0,
        end: 50,
        filterMode: 'filter',
      },
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : []
  };
  if (data && data.dimensions && data.measures) {
    option.xAxis[0].data = data.dimensions.data
    option.series = data.measures.map(item => {
      return {
        ...item,
        type:'bar',
      }
    })
  }
  chart.setOption(option);
}

export default class MoveChart extends Component {
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

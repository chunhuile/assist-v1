import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const EchartsDemo: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      // 初始化 ECharts 实例
      const myChart = echarts.init(chartRef.current);

      // 配置项
      const option = {
        title: {
          text: '用户增长折线图'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
    
    ]
      };

      // 使用指定的配置项和数据显示图表
      myChart.setOption(option);
    }
  }, []);

  return <div ref={chartRef} id="main" style={{ width: '100%', height: '600px' }} />;
};

export default EchartsDemo;

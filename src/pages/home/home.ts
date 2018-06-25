import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import ECharts from 'echarts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  segmentTitle: Array<object> = [
    {code: '0', value: '体重'},
    {code: '1', value: '体脂'},
    {code: '2', value: '肌肉'},
    {code: '3', value: '内脏脂肪'}
  ];
  selectSegment: string;
  private xAxis: Array<string> = ['2018-06-24'];
  private weightY: Array<number> = [];
  private fatY: Array<number> = [];
  private muscleY: Array<number> = [];
  private gulletY: Array<number> = [];
  private weightAve: number = 57.2;
  private fatAve: number = 26.1;
  private muscleAve: number = 71.0;
  private gulletAve: number = 8;
  private myChart: any;


  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.myChart = ECharts.init(document.getElementById('main') as HTMLDivElement);
    this.selectSegment = '0';
    this.weightY = [74.9];
    this.fatY = [41.4];
    this.muscleY = [55.2];
    this.gulletY = [11];
    if (localStorage.getItem('xAxis') != null) {
      let xAxis: Array<string> = localStorage.getItem('xAxis').split(',');
      for (let i = 0; i < xAxis.length; i++) {
        if (xAxis[i] !== '') {
          this.xAxis.push(xAxis[i]);
        }
      }
      let weightY: Array<string> = localStorage.getItem('weightY').split(',');
      for (let i = 0; i < weightY.length; i++) {
        if (weightY[i] !== '') {
          this.weightY.push(parseFloat(weightY[i]));
        }
      }
      let fatY: Array<string> = localStorage.getItem('fatY').split(',');
      for (let i = 0; i < fatY.length; i++) {
        if (fatY[i] !== '') {
          this.fatY.push(parseFloat(fatY[i]));
        }
      }
      let muscleY: Array<string> = localStorage.getItem('muscleY').split(',');
      for (let i = 0; i < muscleY.length; i++) {
        if (muscleY[i] !== '') {
          this.muscleY.push(parseFloat(muscleY[i]));
        }
      }
      let gulletY: Array<string> = localStorage.getItem('gulletY').split(',');
      for (let i = 0; i < gulletY.length; i++) {
        if (gulletY[i] !== '') {
          this.gulletY.push(parseInt(gulletY[i]));
        }
      }
    }
    
    // 使用刚指定的配置项和数据显示图表。
    this.myChart.setOption(this.weightOption());
  }

  

  segmentChanged(e) {
    if (e.value === '0') {
      this.myChart.setOption(this.weightOption());
    } else if (e.value === '1'){
      this.myChart.setOption(this.fatOption());
    } else if (e.value === '2'){
      this.myChart.setOption(this.muscleOption());
    } else if (e.value === '3'){
      this.myChart.setOption(this.gulletOption());
    }
  }

  weightOption() {
    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: this.xAxis
      },
      yAxis: {
        splitLine: {
          show: false
        },
        min: 40,
        max: 80
      },
      dataZoom: [{
          startValue: this.xAxis[0]
      }, {
          type: 'inside'
      }],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [{
          gt: 40,
          lte: this.weightAve,
          color: '#488aff'
        }, {
          gt: this.weightAve,
          lte: 100,
          color: '#f5222d'
        }],
        outOfRange: {
          color: 'rgb(82, 196, 26)'
        }
      },
      series: {
        name: '体重',
        type: 'line',
        data: this.weightY,
        smooth: true,
        markLine: {
          silent: true,
          data: [{
            yAxis: this.weightAve,
            lineStyle: {
              color: '#999'
            }
          }]
        }
      }
    }
  }

  fatOption() {
    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: this.xAxis
      },
      yAxis: {
        splitLine: {
          show: false
        },
        min: 10,
        max: 60
      },
      dataZoom: [{
          startValue: this.xAxis[0]
      }, {
          type: 'inside'
      }],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [{
          gt: 10,
          lte: this.fatAve,
          color: '#488aff'
        }, {
          gt: this.fatAve,
          lte: 60,
          color: '#f5222d'
        }],
        outOfRange: {
          color: 'rgb(82, 196, 26)'
        }
      },
      series: {
        name: '体脂',
        type: 'line',
        data: this.fatY,
        smooth: true,
        markLine: {
          silent: true,
          data: [{
            yAxis: this.fatAve,
            lineStyle: {
              color: '#999'
            }
          }]
        }
      }
    }
  }

  muscleOption() {
    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: this.xAxis
      },
      yAxis: {
        splitLine: {
          show: false
        },
        min: 40,
        max: 80
      },
      dataZoom: [{
          startValue: this.xAxis[0]
      }, {
          type: 'inside'
      }],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [{
          gt: 40,
          lte: this.muscleAve,
          color: '#f5222d'
        }, {
          gt: this.muscleAve,
          lte: 80,
          color: '#488aff'
        }],
        outOfRange: {
          color: 'rgb(82, 196, 26)'
        }
      },
      series: {
        name: '肌肉',
        type: 'line',
        data: this.muscleY,
        smooth: true,
        markLine: {
          silent: true,
          data: [{
            yAxis: this.muscleAve,
            lineStyle: {
              color: '#999'
            }
          }]
        }
      }
    }
  }

  gulletOption() {
    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: this.xAxis
      },
      yAxis: {
        splitLine: {
          show: false
        },
        min: 1,
        max: 15
      },
      dataZoom: [{
          startValue: this.xAxis[0]
      }, {
          type: 'inside'
      }],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [{
          gt: 0,
          lte: this.gulletAve,
          color: '#488aff'
        }, {
          gt: this.gulletAve,
          lte: 15,
          color: '#f5222d'
        }],
        outOfRange: {
          color: 'rgb(82, 196, 26)'
        }
      },
      series: {
        name: '肌肉',
        type: 'bar',
        data: this.gulletY,
        smooth: true,
        markLine: {
          silent: true,
          data: [{
            yAxis: this.gulletAve,
            lineStyle: {
              color: '#999'
            }
          }]
        }
      }
    }
  }
}

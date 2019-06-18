$(function () {
  // 日期选择器  http://www.jq22.com/jquery-info1059 文档地址
  laydate({
      elem: '#pickerDate1'
  });
  laydate({
      elem: '#pickerDate2'
  });
  laydate({
      elem: '#pickerDate3'
  });
  laydate({
      elem: '#pickerDate4'
  });


  // 第一个高度控制
  var windowW = $(window).width()
  var boxH = $(window).height();
  var innerHeight = boxH - 150 - 76
  $(".data_show_box1,.data_show_box5").height(innerHeight * 35 / 100)
  $(".data_show_box2,.data_show_box6").height(innerHeight * 65 / 100)
  $('.data_show_box4').height(innerHeight - 104)
  
  $(".data_show").parent('.content-wrapper').css({ "background": "none" });
  if (windowW < 1366) {
      $("body").css({
          "overflow-x": "scroll"
      })
  } else {
      $("body").css({
          "overflow-x": "hidden"
      })
  }
  if (boxH < 800) {
    var myChart1 = echarts.init(document.getElementById('main1'), 'dark');
    var option1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        backgroundColor: '', //设置无背景色
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['保安', '保洁', '护工','维修', ]
        },
        series: [
            {
                name: '员工统计',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 2, name: '保安' },
                    { value: 3, name: '保洁' },
                    { value: 3, name: '护工' },
                    { value: 2, name: '维修' }
                ],
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}人"
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 2,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    // normal: {
                    //     // 定制显示（按顺序）
                    //     color: function (params) {
                    //         var colorList = ['#6C48E5', '#F16647', '#FFFFFF', '#FAB13E'];
                    //         return colorList[params.dataIndex]
                    //     }
                    // },
                },
            }
        ]
    };
    myChart1.setOption(option1);
  
  
  
    var myChart2 = echarts.init(document.getElementById('main2'), 'dark');
    var option2 = {
        backgroundColor: '', //设置无背景色
        series: [
            {
                name: '利用率',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                legend: {  
                    fontSize : 15
                }, 
                label: {
                    normal: {
                        show: true,
                        formatter: function () {
                            return '75%'
                        },
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        },
                        position: 'center'
                    },
                },
                itemStyle: {
                    normal: {
                        // 定制显示（按顺序）
                        color: function (params) {
                            var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                            return colorList[params.dataIndex]
                        },
                    },
                },
                data: [
                    { value: 25, name: '直接访问' },
                    { value: 75, name: '邮件营销' },
                ]
            }
        ]
    };
  
    myChart2.setOption(option2);
  
  
    var myChart3 = echarts.init(document.getElementById('main3'), 'dark');
    var option3 = {
        backgroundColor: '', //设置无背景色
        series: [
            {
                name: '利用率',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: function () {
                            return '75%'
                        },
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        },
                        position: 'center'
                    },
                },
                itemStyle: {
                    normal: {
                        // 定制显示（按顺序）
                        color: function (params) {
                            var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                            return colorList[params.dataIndex]
                        }
                    },
                },
                data: [
                    { value: 25, name: '直接访问' },
                    { value: 75, name: '邮件营销' },
                ]
            }
        ]
    };
  
    myChart3.setOption(option3);
  
  
    var myChart4 = echarts.init(document.getElementById('main4'), 'dark');
    var option4 = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        backgroundColor: '', //设置无背景色
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['浙江大学', '浙江工商大学', '浙江大学', '浙江工商大学', '浙江理工大学', '中国计量大学', '杭州师范大学',  '杭州师范大学', '浙江理警察学校', '浙江中医药大学', '浙江中医药大学', '浙江中医药大学', '浙江中医药大学', '浙江中医药大学', '浙江中医药大学', '浙江中医药大学'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12,     //更改坐标轴文字大小
                        lineHeight: 20,
                    },
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: { show: false },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 14,     //更改坐标轴文字大小
                        color: '#C4C4C5',
                        lineHeight: 20,
                    },
                    formatter: '{value} %',
                },
                splitLine: { show: true, lineStyle: { type: 'solid' } },
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                itemStyle: {
                    normal: {
                        // 定制显示（按顺序）
                        color: function (params) {
                            var colorList = ['#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF'];
                            return colorList[params.dataIndex]
                        }
                    },
                },
                data: (function () {
                    var arr = [10, 52, 200, 334, 390, 330, 220, 220, 220, 220, 220, 220, 220, 220 ,220, 220]
                    var newArr = []
                    for (var index = 0; index < arr.length; index++) {
                        newArr.push(arr[index] / 4)
                    }
                    return newArr
                })()
            }
        ],
        // 解决文字过多不显示的问题
        axisLabel: {
            interval: 0,
            formatter: function (value) {
                var ret = "";//拼接加\n返回的类目项  
                var maxLength = 2;//每项显示文字个数  
                var valLength = value.length;//X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                if (rowN > 1)//如果类目项的文字大于3,  
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = "";//每次截取的字符串  
                        var start = i * maxLength;//开始截取的位置  
                        var end = start + maxLength;//结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return ret;
                }
                else {
                    return value;
                }
            }
        }
    };
  
  
    myChart4.setOption(option4);
  
  
    var myChart5 = echarts.init(document.getElementById('main5'), 'dark');
    var option5 = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        backgroundColor: '', //设置无背景色
        grid: {
            top: '0%',
            left: '3%',
            right: '4%',
            bottom: '-8%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['个人区域', '公共区域'],
                axisLine: { show: false },
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 14,     //更改坐标轴文字大小
                        lineHeight: 14,
                    },
                }
            }
        ],
        yAxis: [
            {
                show: false,
                max: 100,
                axisLine: {
                    show: true,
                },
                type: 'value',
                splitLine: { show: true, lineStyle: { type: 'solid' } }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                itemStyle: {
                    normal: {
                        // 定制显示（按顺序）
                        color: function (params) {
                            var colorList = ['#13C6FF', '#F3747D'];
                            return colorList[params.dataIndex]
                        }
                    },
                },
                data: [30, 90]
            }
        ],
        // 解决文字过多不显示的问题
        axisLabel: {
            interval: 0,
            formatter: function (value) {
                var ret = "";//拼接加\n返回的类目项  
                var maxLength = 2;//每项显示文字个数  
                var valLength = value.length;//X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数 
  
                if (rowN > 1 && windowW < 1500)//如果类目项的文字大于3,  
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = "";//每次截取的字符串  
                        var start = i * maxLength;//开始截取的位置  
                        var end = start + maxLength;//结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return ret;
                }
                else {
                    return value;
                }
            }
        }
    };
  
  
    myChart5.setOption(option5);
  
  
    var myChart6 = echarts.init(document.getElementById('main6'), 'dark');
    var option6 = {
        backgroundColor: '', //设置无背景色
        series: [
            {
                name: '利用率',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: function () {
                            return '75%'
                        },
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        },
                        position: 'center'
                    },
                },
                itemStyle: {
                    normal: {
                        // 定制显示（按顺序）
                        color: function (params) {
                            var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                            return colorList[params.dataIndex]
                        }
                    },
                },
                data: [
                    { value: 25, name: '直接访问' },
                    { value: 75, name: '邮件营销' },
                ]
            }
        ]
    };
  
    myChart6.setOption(option6);
  
    var myChart7 = echarts.init(document.getElementById('main7'), 'dark');
    var option7 = {
        backgroundColor: '', //设置无背景色
        series: [
            {
                name: '利用率',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: function () {
                            return '75%'
                        },
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        },
                        position: 'center'
                    },
                },
                itemStyle: {
                    normal: {
                        // 定制显示（按顺序）
                        color: function (params) {
                            var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                            return colorList[params.dataIndex]
                        }
                    },
                },
                data: [
                    { value: 25, name: '直接访问' },
                    { value: 75, name: '邮件营销' },
                ]
            }
        ]
    };
  
    myChart7.setOption(option7);
  } else {
  var myChart1 = echarts.init(document.getElementById('main1'), 'dark');
  var option1 = {
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      backgroundColor: '', //设置无背景色
      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['保安', '保洁', '护工','维修', ]
      },
      series: [
          {
              name: '员工统计',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                { value: 2, name: '保安' },
                { value: 3, name: '保洁' },
                { value: 3, name: '护工' },
                { value: 2, name: '维修' }
              ],
              label: {
                  normal: {
                      show: true,
                      formatter: "{c}人"
                  }
              },
              itemStyle: {
                  emphasis: {
                      shadowBlur: 2,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  },
                //   normal: {
                //       // 定制显示（按顺序）
                //       color: function (params) {
                //         var colorList = ['#6C48E5', '#F16647', '#FFFFFF', '#FAB13E'];
                //           return colorList[params.dataIndex]
                //       }
                //   },
              },
          }
      ]
  };
  myChart1.setOption(option1);



  var myChart2 = echarts.init(document.getElementById('main2'), 'dark');
  var option2 = {
      backgroundColor: '', //设置无背景色
      series: [
          {
              name: '利用率',
              type: 'pie',
              radius: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      formatter: function () {
                          return '75%'
                      },
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      },
                      position: 'center'
                  },
              },
              itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function (params) {
                          var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                          return colorList[params.dataIndex]
                      }
                  },
              },
              data: [
                  { value: 25, name: '直接访问' },
                  { value: 75, name: '邮件营销' },
              ]
          }
      ]
  };

  myChart2.setOption(option2);


  var myChart3 = echarts.init(document.getElementById('main3'), 'dark');
  var option3 = {
      backgroundColor: '', //设置无背景色
      series: [
          {
              name: '利用率',
              type: 'pie',
              radius: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      formatter: function () {
                          return '75%'
                      },
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      },
                      position: 'center'
                  },
              },
              itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function (params) {
                          var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                          return colorList[params.dataIndex]
                      }
                  },
              },
              data: [
                  { value: 25, name: '直接访问' },
                  { value: 75, name: '邮件营销' },
              ]
          }
      ]
  };

  myChart3.setOption(option3);


  var myChart4 = echarts.init(document.getElementById('main4'), 'dark');
  var option4 = {
      color: ['#3398DB'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      backgroundColor: '', //设置无背景色
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['浙江大学', '浙江工商大学', '浙江理工大学', '中国计量大学', '杭州师范大学', '浙江理警察学校', '浙江中医药大学'],
              axisTick: {
                  alignWithLabel: true
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      fontSize: 16,     //更改坐标轴文字大小
                      lineHeight: 20,
                  },
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              axisLine: { show: false },
              axisLabel: {
                  show: true,
                  textStyle: {
                      fontSize: 14,     //更改坐标轴文字大小
                      color: '#C4C4C5',
                      lineHeight: 20,
                  },
                  formatter: '{value} %',
              },
              splitLine: { show: true, lineStyle: { type: 'solid' } },
          }
      ],
      series: [
          {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function (params) {
                          var colorList = ['#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF', '#13C6FF'];
                          return colorList[params.dataIndex]
                      }
                  },
              },
              data: (function () {
                  var arr = [10, 52, 200, 334, 390, 330, 220]
                  var newArr = []
                  for (var index = 0; index < arr.length; index++) {
                      newArr.push(arr[index] / 4)
                  }
                  return newArr
              })()
          }
      ],
      // 解决文字过多不显示的问题
      axisLabel: {
          interval: 0,
          formatter: function (value) {
              var ret = "";//拼接加\n返回的类目项  
              var maxLength = 2;//每项显示文字个数  
              var valLength = value.length;//X轴类目项的文字个数  
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
              if (rowN > 1)//如果类目项的文字大于3,  
              {
                  for (var i = 0; i < rowN; i++) {
                      var temp = "";//每次截取的字符串  
                      var start = i * maxLength;//开始截取的位置  
                      var end = start + maxLength;//结束截取的位置  
                      //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                      temp = value.substring(start, end) + "\n";
                      ret += temp; //凭借最终的字符串  
                  }
                  return ret;
              }
              else {
                  return value;
              }
          }
      }
  };


  myChart4.setOption(option4);


  var myChart5 = echarts.init(document.getElementById('main5'), 'dark');
  var option5 = {
      color: ['#3398DB'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      backgroundColor: '', //设置无背景色
      grid: {
          top: '0%',
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['个人区域', '公共区域'],
              axisLine: { show: false },
              axisTick: {
                  alignWithLabel: true
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      fontSize: 14,     //更改坐标轴文字大小
                      lineHeight: 20,
                  },
              }
          }
      ],
      yAxis: [
          {
              show: false,
              max: 100,
              axisLine: {
                  show: true,
              },
              type: 'value',
              splitLine: { show: true, lineStyle: { type: 'solid' } }
          }
      ],
      series: [
          {
              name: '直接访问',
              type: 'bar',
              barWidth: '40%',
              itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function (params) {
                          var colorList = ['#13C6FF', '#F3747D'];
                          return colorList[params.dataIndex]
                      }
                  },
              },
              data: [30, 90]
          }
      ],
      // 解决文字过多不显示的问题
      axisLabel: {
          interval: 0,
          formatter: function (value) {
              var ret = "";//拼接加\n返回的类目项  
              var maxLength = 2;//每项显示文字个数  
              var valLength = value.length;//X轴类目项的文字个数  
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数 

              if (rowN > 1 && windowW < 1500)//如果类目项的文字大于3,  
              {
                  for (var i = 0; i < rowN; i++) {
                      var temp = "";//每次截取的字符串  
                      var start = i * maxLength;//开始截取的位置  
                      var end = start + maxLength;//结束截取的位置  
                      //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                      temp = value.substring(start, end) + "\n";
                      ret += temp; //凭借最终的字符串  
                  }
                  return ret;
              }
              else {
                  return value;
              }
          }
      }
  };


  myChart5.setOption(option5);


  var myChart6 = echarts.init(document.getElementById('main6'), 'dark');
  var option6 = {
      backgroundColor: '', //设置无背景色
      series: [
          {
              name: '利用率',
              type: 'pie',
              radius: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      formatter: function () {
                          return '75%'
                      },
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      },
                      position: 'center'
                  },
              },
              itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function (params) {
                          var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                          return colorList[params.dataIndex]
                      }
                  },
              },
              data: [
                  { value: 25, name: '直接访问' },
                  { value: 75, name: '邮件营销' },
              ]
          }
      ]
  };

  myChart6.setOption(option6);

  var myChart7 = echarts.init(document.getElementById('main7'), 'dark');
  var option7 = {
      backgroundColor: '', //设置无背景色
      series: [
          {
              name: '利用率',
              type: 'pie',
              radius: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      formatter: function () {
                          return '75%'
                      },
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      },
                      position: 'center'
                  },
              },
              itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function (params) {
                          var colorList = ['rgba(0,0,0,0)', '#03F5FC '];
                          return colorList[params.dataIndex]
                      }
                  },
              },
              data: [
                  { value: 25, name: '直接访问' },
                  { value: 75, name: '邮件营销' },
              ]
          }
      ]
  };

  myChart7.setOption(option7);

}
  window.onresize = function () {
      var windowW = $(window).width()
      var boxH = $(window).height();
      var innerHeight = boxH - 150 - 76
      $(".data_show_box1,.data_show_box5").height(innerHeight * 35 / 100)
      $(".data_show_box2,.data_show_box6").height(innerHeight * 65 / 100)
      $('.data_show_box4').height(innerHeight - 104)
      $(".data_show").parent('.content-wrapper').css({ "background": "none" });
      //重置容器高宽
      myChart1.resize();
      myChart2.resize();
      myChart3.resize();
      myChart4.resize();
      myChart5.resize();
      myChart6.resize();
      myChart7.resize();
  };
  // setTimeout(function(){

  //     myChart1.resize();
  //     myChart2.resize();
  //     myChart3.resize();
  //     myChart4.resize();
  //     myChart5.resize();
  //     myChart6.resize();
  //     myChart7.resize();
  // },0)
})



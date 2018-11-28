// 左边第一个
var myChart = echarts.init(document.getElementById('left1'));
var giftImageUrl = "data:image/png;base64,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";

myChart.setOption({
    title:{
        text:'固定资产投资分布',
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
    legend: {
        orient: 'vertical',
        left:'40',
        top:'center',
        itemHeight:7,
        itemWidth:14,
        data:['国企投资','外企投资','民企投资'],
        textStyle:{
            color:'#64686b',
            fontSize:12
        }

    },
    graphic: {
        elements: [{
            type: 'image',
             style: {
                 width: 20,
                 height: 20
             },
            left: 'center',
            top: 'center'
        }]
    },
    series: [{  //控制 整个圆表
        show:false,
        type: 'pie',
        radius: [15, '70%'],
        center: ['65%', '50%'],
        roseType: 'radius',
        color: ['#f2c955', '#009dd0', '#9ece64'],
        data: [{
            type: 'bar',
            value: 22,
            name: '国企投资'
        }, {
            type: 'bar',
            value: 15,
            name: '外企投资'
        }, {
            type: 'bar',
            value: 63,
            name: '民企投资',

        }],
        label: {
            normal: {
                show:false,
                textStyle: {
                    fontSize: 14
                },
                //  formatter: function(param) {
                //      return param.name + ':\n' + Math.round(param.percent) + '%';
                //  }
            }
        },
        //  labelLine: {
        //      normal: {   //牵引线 指向
        //          smooth: false,
        //          lineStyle: {
        //              width: 0
        //          }
        //      }
        //  },
        //  itemStyle: {  //  阴影部分
        //     //  normal: {
        //     //     //  shadowBlur: 10,
        //     //     //  shadowColor: 'rgba(0, 0, 0, 0.4)'
        //     //  }
        //  },
        //  展开方式

         animationType: 'scale',
         animationEasing: 'elasticOut',
         animationDelay: function(idx) {
             return Math.random() * 200;
         }
}]
});
myChart.setOption(myChart.setOption);
// 左二
var myChart = echarts.init(document.getElementById('left2'));
option = {
    title: {
        text: '投资结构',
        // subtext: 'From ExcelHome',
        // sublink: 'http://e.weibo.com/1341556070/AjQH99che'  点击跳转页面
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['产业投资','第一产业','第二产业','第三产业'],
        axisLabel:{
            textStyle:{
                fontSize:10,
                color:'#e5e5e5'
            }
        }

    },
    yAxis: {
        name:'亿元',
        type : 'value',
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        axisTick:{
            show:false
        },
        axisLabel:{
            textStyle:{
                fontSize:10,
                color:'#e5e5e5'
            }
        }
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    // barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },

            },
            data: [0, 25, 50, 30]
        },
        {
            // name: '生活费',
            type: 'bar',
            stack: '总量',
            itemStyle : {   //设置圆弧
                normal: {
                    barBorderRadius:[10, 10, 10, 10],
                    label : {
                        show: false, //设置显示的字在里面还是
                        position: 'insideRight'
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[105, 25, 50, 30]
        }
    ]
};
myChart.setOption(option);



// 左三
var myChart = echarts.init(document.getElementById('left3'));
option = {
    title:{
        text:'重点领域投资',
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left:'20',
        top:'55',
        itemHeight:7,
        itemWidth:14,
        data:['工业技术投资','高新技术投资','四大文明技术投资','基础技术投资','文化技术投资'],
        textStyle:{
            fontSize:10,
            color:'#e5e5e5'
        }

    },
    series: [

        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        // fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            center: ['69%', '60%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:28, name:'工业技术投资'},
                {value:12, name:'高新技术投资'},
                {value:36, name:'四大文明技术投资'},
                {value:13, name:'基础技术投资'},
                {value:11, name:'文化技术投资'}
            ]
        }
    ]
};
myChart.setOption(option);

// 中二
var myChart = echarts.init(document.getElementById('center_center'));
option = {
    title: {
        text: '固定资产投资',
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
    xAxis:  {
        name:'年份',
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'category',
        boundaryGap: false,
        data: ['0','2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        axisLabel:{
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            }
        }
    },

    yAxis: {

        name:'亿元',
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        // axisLine:{
        //     lineStyle:{
        //         color:'#b9edf1'
        //     }
        // },
        type: 'value',
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        max:350,  //设置刻度最大尺寸
        splitNumber:10, //设置刻度尺寸
        axisLabel:{
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            }
        }
    },
    visualMap: {
        show: false,
        seriesIndex:0,
        dimension: 0,
        pieces: [{
            gt: 0,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            color: 'transparent'
        }]
    },
    // series[i]-line:{
    //     markLine:{
    //           lineStyle:{
    //               color:'#b9edf1'
    //           }
    //      }
    // },
    series: [
        {
            name:'用电量',
            type:'line',
            smooth: true,
            //  color:['#b9edf1'],    //线的颜色设置
            data: ['',152, 250, 330, 240, 221,260],
            // itemStyle:{
            //             normal:{
            //                 lineStyle:{
            //                     width:2,
            //                     type:'solid'  //'dotted'虚线 'solid'实线
            //                 }
            //             }
            //         },
        },
        {
            name:'用电量',
            type:'line',
            smooth: true,
            data: ['',152, 250, 330, 240, 221, 260, 280],
            lineStyle:{
                normal:{
                    type:'dotted'
                }
            },
            // itemStyle:{
            //     color:'#b9edf1'
            // }
        }
    ]
};

myChart.setOption(option);


// 中三


var myChart = echarts.init(document.getElementById('center_bottom'));

option = {
    title:{
        text:'2015年固定资产投资区域分布',
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top:'center',
        left:'90',
        itemHeight:7,
        itemWidth:14,
        data:['市区','响水县','滨海县','阜宁县','射阳县','建湖县','东台市','大丰市'],
        textStyle:{
            color:'#dcdfe2',
            fontSize:10,
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            // selectedMode: 'single',
            radius: [0, '20%'],
            center: ['65%', '60%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            normal:{
                //   formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            },
            // labelLine: {
            //     normal: {
            //         show: true,
            //         length:120,
            //         length2:30
            //     },
            //
            // },
            data:[
                {value:20, name:''},
                {value:30, name:''},
                {value:50, name:''}
            ]
        },
        {
            name:'访问来源',
            center: ['65%', '60%'],
            type:'pie',
            radius: ['35%', '65%'],
            label: {
                normal: {
                    // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    // backgroundColor: '#eee',
                    // borderColor: '#aaa',
                    // borderWidth: 1,
                    // borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],

                }
            },
            data:[
                {value:14, name:'市区',labelLine:{length:5}},
                {value:35, name:'响水县',labelLine:{length:5}},
                {value:14, name:'滨海县',labelLine:{length:5}},
                {value:33, name:'阜宁县',labelLine:{length:5}},
                {value:45, name:'射阳县',labelLine:{length:5}},
                {value:23, name:'建湖县',labelLine:{length:5}},
                {value:16, name:'东台市',labelLine:{length:5}},
                {value:22, name:'大丰市',labelLine:{length:5}}
            ]


        }
    ]
};
myChart.setOption(option);

// 右一

var myChart = echarts.init(document.getElementById('right1'));

option = {
    title: [{
        text: '新增项目',
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
        {
            text:'新增项目',
            subtext:'4316个',
            left: '5',
            top: '40',
            textStyle:{
                color:'#e2e5e5',
                fontSize:10
            },
            subtextStyle:{
                color:'#e2e5e5',
                fontSize:12
            }
        },
        {
            text:'比上年增加',
            subtext:'956个',
            left: '5',
            top: '85',
            textStyle:{
                color:'#e2e5e5',
                fontSize:10
            },
            subtextStyle:{
                color:'#e2e5e5',
                fontSize:12
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    // legend: {
    //     data: ['2011年', '2012年']
    // },
    grid: {
        top:'22%',
        left: '20%',
        right: '17%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        name:'项目数量',
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        axisLabel:{
            textStyle:{
                fontSize:10,
                color:'#e5e5e5'
            }
        }
    },
    yAxis: {
        name:'投资额度',
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'category',
        data: ['>1亿元','>5亿元','>10亿元'],
        axisLabel:{
            textStyle:{
                fontSize:10,
                color:'#e5e5e5'
            }
        }
    },
    series: [
        {
            type: 'bar',
            barWidth:10,
            data: [2011, 196, 2019]
        }
    ]
};
myChart.setOption(option);



// 右二
var myChart = echarts.init(document.getElementById('right2'));
option = {
    title : {
        text: '主要工业行业',
        left:'left',
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right: 'right',
        top:5,
        itemHeight:7,    //设置小方块的尺寸
        itemWidth:14,
        data: ['化工学','光学','水利学','电气学','矿业学','生物学'],
        textStyle:{
            fontSize:10,
            color:'#7e7a7c'
        }
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['40%', '65%'],
            data:[
                {value:23, name:'化工学',labelLine:{length:5,length2: 3}},
                {value:34, name:'光学',labelLine:{length:5,length2: 3}},
                {value:42, name:'水利学',labelLine:{length:5,length2: 3}},
                {value:23, name:'电气学',labelLine:{length:5,length2: 3}},
                {value:56, name:'矿业学',labelLine:{length:5,length2: 3}},
                {value:28, name:'生物学',labelLine:{length:5,length2: 3}},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart.setOption(option);
// 右三

var myChart = echarts.init(document.getElementById('right3'));
option = {
    color:'#97ca68',
    title: {
        text: '房地产',
        textStyle:{
            color:'#33ebe4',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top:'22%',
        left: '0%',
        right: '15%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: [{
        name:'（亿元）',
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'value',
        boundaryGap: [0, 1],
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        max:400,  //设置刻度最大尺寸
        splitNumber:0, //设置刻度尺寸
        axisLine: {     //去除轴线，下部数据还在
            show: false
        },
        axisTick: { //去除轴线，下部数据还在
            show: false
        },
        axisLabel:{   //y轴字体大小
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            }
        }
    }],
    yAxis:[{
        axisLine:{
            lineStyle:{
                width:3,
            }
        },
        type: 'category',

        data: ['毛坯房销售','精装房销售','商品房销售'],

        axisLabel:{
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            }
        }
    }],
    series: [
        {
            type: 'bar',
            barWidth:10,
            data: [274, 284, 341],
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            fontSize:10,
                            color:'#dbdfe4'
                        }
                    }
                }
            },
        }

    ]
};
myChart.setOption(option);
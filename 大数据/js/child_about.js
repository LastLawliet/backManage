// 左一
// ①①①①①①①①①①①①①①①①①①①①①①①①
var myChart = echarts.init(document.getElementById('left1_top'));
option = {
    color:'#8cbbc0',
    title:[{
        left:'left',
        text:'社会消费品零售额',
        textStyle:{
            fontSize:14,
            color:'#2d3748'
        }
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        y:30,
        left: '2%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'value',
        boundaryGap: [0, 1],
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        max:4,  //设置刻度最大尺寸
        splitNumber:0, //设置刻度尺寸
        axisLine: {     //去除轴线
            show: true
        },
        axisTick: { //去除轴线分叉
            show: false
        },
        axisLabel:{   //x轴字体大小
            show:false,
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            }
        }
    }],
    yAxis:[{

        axisLine:{
            lineStyle:{//坐标轴的宽度
                width:2,
            }
        },

        type: 'category',
        data: ['餐饮','住宿','零售','批发'],
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
            data: [2, 4, 2,3],
            itemStyle: {
                normal: {
                    barBorderRadius:[10, 10, 10, 10],
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
// ②①
var myChart = echarts.init(document.getElementById('left1_bottom_left'));
// 基于准备好的dom，初始化echarts实例


// 基于准备好的dom，初始化echarts实例


var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=';

var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';
var chartData = [
    {
        name: '城镇市场',
        value: 70
    }
];

var bgData = [];
var itemData = [];

// 取出每一条数据value,作为显示数据
chartData.forEach(function(items, index) {
    itemData.push(items.value);
})

// 取出所有数据最大值,作为背景象形柱图数据
chartData.forEach(function(items, index) {
    bgData.push({
        name: items.name,
        value: Math.max.apply(null, itemData)
    });
})

// 所有数据最大值
var maxValue = Math.max.apply(null, itemData);

// 字体 distance放大参数
var scale = 1;

//富文本配置
var rich = {
    white: {
        // color: "#fff",
        // align: 'left',
        // fontSize: 18 * scale,
        // padding: [0, 0]
    },
};

var option = {
    // backgroundColor: '#0a142d',
    // tooltip:{
    //     formatter:'{b} : {c}',
    // },
    grid: {
        y:35,
        left: '3%',
        right: '6%',
        bottom: '9%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data:(function(data){
            var arr=[];
            data.forEach(function(items){
                arr.push(items.name);
            });
            return arr;
        })(chartData),
        // max:70
        // boundaryGap: ['20%', '20%'],
        // splitLine: {
        //     show: false
        // },
        axisLabel: {
            show:true,
            textStyle: {
                fontSize: 10 * scale,
                color: '#ecf0f3'
            }
        },
        axisLine: {
            show: false

        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [
        {
            // type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show:false,
                textStyle: {
                    fontSize: 16 * scale,
                    color: '#3fdaff'
                }
            },

        }],
    series: [
        //背景
        {
            // name: 'bg',
            type: 'pictorialBar',
            barWidth: '60%',
            // barGap: '0%',
            silent: true,
            label: {
                normal: {
                    show: true,
                    position: "top",
                    distance: 20 * scale,
                    formatter: function(params) {
                        var stuNum = 0;
                        chartData.forEach(function(value, index, array) {
                            if (params.name == value.name) {
                                stuNum = value.value;
                            }
                        })
                        return stuNum ;
                    },
                    textStyle: {
                        color: "#d3d3d7",
                        fontSize: 8 * scale
                    },
                    rich: rich
                }
            },
            symbol: 'image://'+ bgImg,
            symbolClip:true,
            symbolBoundingData: maxValue,
            symbolSize: [50, '100%'],
            data: bgData
        },
        {
            name: '数据',
            type: 'pictorialBar',
            barWidth: '60%',
            barGap: '-100%',
            data: chartData,
            z: 20,
            symbol: 'image://'+ fillImg,
            symbolClip:true,
            symbolBoundingData: maxValue,
            symbolSize: [50, '100%']
        },
    ]
};
myChart.setOption(option);
// 使用刚指定的配置项和数据显示图表。
// ②======②
var myChart = echarts.init(document.getElementById('left1_bottom_right'));
// 基于准备好的dom，初始化echarts实例


// 基于准备好的dom，初始化echarts实例


var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=';

var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';
var chartData = [
    {
        name: '农村市场',
        value: 30
    }
];

var bgData = [];
var itemData = [];

// 取出每一条数据value,作为显示数据
chartData.forEach(function(items, index) {
    itemData.push(items.value);
})

// 取出所有数据最大值,作为背景象形柱图数据
chartData.forEach(function(items, index) {
    bgData.push({
        name: items.name,
        value: Math.max.apply(null, itemData)
    });
})

// 所有数据最大值
var maxValue = Math.max.apply(null, itemData);

// 字体 distance放大参数
var scale = 1;

//富文本配置
var rich = {
    white: {
        // color: "#fff",
        // align: 'left',
        // fontSize: 18 * scale,
        // padding: [0, 0]
    },
};

var option = {
    // backgroundColor: '#0a142d',
    // tooltip:{
    //     formatter:'{b} : {c}',
    // },
    grid: {
        y:35,
        left: '3%',
        right: '6%',
        bottom: '9%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data:(function(data){
            var arr=[];
            data.forEach(function(items){
                arr.push(items.name);
            });
            return arr;
        })(chartData),
        // max:70
        // boundaryGap: ['20%', '20%'],
        // splitLine: {
        //     show: false
        // },
        axisLabel: {
            show:true,
            textStyle: {
                fontSize: 10 * scale,
                color: '#ecf0f3'
            }
        },
        axisLine: {
            show: false

        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [
        {
            // type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show:false,
                textStyle: {
                    fontSize: 16 * scale,
                    color: '#3fdaff'
                }
            },

        }],
    series: [
        //背景
        {
            // name: 'bg',
            type: 'pictorialBar',
            barWidth: '60%',
            // barGap: '0%',
            silent: true,
            label: {
                normal: {
                    show: true,
                    position: "top",
                    distance: 20 * scale,
                    formatter: function(params) {
                        var stuNum = 0;
                        chartData.forEach(function(value, index, array) {
                            if (params.name == value.name) {
                                stuNum = value.value;
                            }
                        })
                        return stuNum ;
                    },
                    textStyle: {
                        color: "#d3d3d7",
                        fontSize: 8 * scale
                    },
                    rich: rich
                }
            },
            symbol: 'image://'+ bgImg,
            symbolClip:true,
            symbolBoundingData: maxValue,
            symbolSize: [50, '100%'],
            data: bgData
        },
        {
            name: '数据',
            type: 'pictorialBar',
            barWidth: '60%',
            barGap: '-100%',
            data: chartData,
            z: 20,
            symbol: 'image://'+ fillImg,
            symbolClip:true,
            symbolBoundingData: maxValue,
            symbolSize: [50, '100%']
        },
    ]
};
// 使用刚指定的配置项和数据显示图表。


myChart.setOption(option);

// 左二
var myChart = echarts.init(document.getElementById('left2'));
option = {
    color:'#63a1a9',
    title:{
        text:'生活消费',
        textStyle:{
            fontSize:14,
            color:'#2d3748'
        }
    },
    grid: {
        top:'18%',
        left: '2%',
        right: '5%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['通讯类器材', '', '穿着类', '', '健康类', ''],
        axisLabel:{
            textStyle:{
                fontSize:6,
                color:'#dbdfe4'
            }
        },
        // splitNumber:100, //设置刻度尺寸
    },
    yAxis:[ {
        type: 'value',
        axisLabel: {    //给y轴加单位
            formatter: '{value}亿元',
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            },
            max:200,   //设置坐标轴数字
            min:0,
        },
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        max:200,   //设置坐标轴数字
        min:0,
        axisLine: {     //去除轴线，下部数据还在
            show: false
        },
        axisTick: { //去除轴线，下部数据还在
            show: false
        },
    }],
    series: [{
        data: [4, 64, 30, 167, 32, 63],
        type: 'bar',
        barWidth:10,
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'center', //在上方显示
                    textStyle: { //数值样式
                        fontSize:6,
                        color:'#dbdfe4'
                    }
                }
            }
        },
    }]
};
myChart.setOption(option);


// 左三
// ①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①
var myChart = echarts.init(document.getElementById('left3_left'));
option = {
    color:'#bd382f',
    title:[{
        top:'10',
        text:'供销合作',
        textStyle:{
            fontSize:12,
            color:'#2d3748'
        }
    },{
        top:'30',
        left:'center',
        text:'投资项目总额10.6亿元',
        textStyle:{
            fontSize:10,
            color:'#d8dde5'
        }
    },{
        top:'50',
        left:'left',
        text:'粮油购销',
        textStyle:{
            fontSize:14,
            color:'#222c3a'
        }
    }],
    grid: {
        y:81,
        left: '0%',
        right: '3%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['收购粮油', '储存粮油'],
        axisLabel:{
            textStyle:{
                fontSize:8,
                color:'#dbdfe4'
            }
        },
        // splitNumber:100, //设置刻度尺寸
    },
    yAxis:[ {
        type: 'value',
        axisLabel: {    //给y轴加单位
            formatter: '{value}亿元',
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            },
        },
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        max:70,   //设置坐标轴数字
        min:0,
    }],
    series: [{
        data: [62, 10],
        type: 'bar',
        barWidth:10,
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        fontSize:8,
                        color:'#dbdfe4'
                    }
                }
            }
        },
    }]
};

myChart.setOption(option);


// ②②②②②②②②②②②②②②②②②②②②②②②②②②②②②②②②②②
var myChart = echarts.init(document.getElementById('left3_right'));
option = {
    color:'#bd382f',
    title:[{
        top:'30',
        left:'center',
        text:'投资项目数29个',
        textStyle:{
            fontSize:10,
            color:'#d8dde5'
        }
    },{
        top:'50',
        left:'left',
        text:'盐业经销',
        textStyle:{
            fontSize:14,
            color:'#222c3a'
        }
    }],
    grid: {
        y:81,
        left: '0%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['各类盐品','食盐'],
        axisLabel:{
            textStyle:{
                fontSize:8,
                color:'#dbdfe4'
            }
        },
        // splitNumber:100, //设置刻度尺寸
    },
    yAxis:[ {
        type: 'value',
        axisLabel: {    //给y轴加单位
            formatter: '{value}万吨',
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            },
        },
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        max:15,   //设置坐标轴数字
        min:0,
    }],
    series: [{
        data: [14, 3],
        type: 'bar',
        barWidth:10,
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        fontSize:8,
                        color:'#dbdfe4'
                    }
                }
            }
        },
    }]
};

myChart.setOption(option);




// 中二
var myChart = echarts.init(document.getElementById('center_center_right'));
option = {
    color:'#df8667',
    title:[{
        left:'center',
        text:'社会消费品零售总额',
        textStyle:{
            fontSize:14,
            color:'#2d3748'
        }
    }],
    legend: {
        orient: 'vertical',
        data:['检查站入城'],
        left:'center',
        top:'85%',
        itemHeight:7,    //设置小方块的尺寸
        itemWidth:14,
        textStyle:{
            color:'#dbdfe4'

        }

    },
    grid: {
        top:'18%',
        left: '2%',
        right: '1%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2014'],
        axisLabel:{
            textStyle:{
                fontSize:8,
                color:'#dbdfe4'
            }
        },
        // boundaryGap: [120, 112],
        // splitNumber:10, //设置刻度尺寸
    },
    yAxis:[ {
        type: 'value',
        axisLabel: {    //给y轴加单位
            formatter: '{value}亿美元',
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            },
        },
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        axisLine: {     //去除轴线，下部数据还在
            show: false
        },
        axisTick: { //去除轴线，下部数据还在
            show: false
        },
    }],
    series: [{
        name:'检查站入城',

        data: [760, 892, 1023, 1163, 1313, 1499],
        type: 'bar',
        barWidth:25,
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'center', //在上方显示
                    textStyle: { //数值样式
                        fontSize:6,
                        color:'#dbdfe4'
                    }
                }
            }
        },
    }]
};
myChart.setOption(option);

// 中三
var myChart = echarts.init(document.getElementById('center_bottom_qqq'));
option = {
    title:[{
        left:'center',
        text:'社会消费品零售总额',
        textStyle:{
            fontSize:14,
            color:'#2d3748'
        }
    }],
    grid: {
        top:'25%',
        left: '5%',
        right: '15%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        name:'年份',
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2015'],
        axisLabel:{   //y轴字体大小
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            }
        },
        axisLine:{
            show:false,
            lineStyle:{
                color:'#b0b5b3'
            }
        }

    },
    yAxis: {
        name:'百分比(%)',
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'value',
        max:46.00,
        min:36.00,
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

    },
    series: [{
        data: [38.63,41.73,42.83, 40, 42.34, 43.83],
        type: 'line',
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        fontSize:8,
                        color:'#dbdfe4'
                    }
                }
            }
        },
    }]
};

myChart.setOption(option);

// 右一
var myChart = echarts.init(document.getElementById('right1'));
option = {
    color:'#97ca68',
    title:[{
        left:'left',
        text:'招商引资',
        textStyle:{
            fontSize:14,
            color:'#2d3748'
        }
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top:'22%',
        left: '10%',
        right: '15%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        nameTextStyle:{
            fontSize:10,
            color:'#dbdfe4'
        },
        type: 'value',
        boundaryGap: [0, 1],
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        max:40,  //设置刻度最大尺寸
        splitNumber:0, //设置刻度尺寸
        axisLine: {     //去除轴线
            show: true
        },
        axisTick: { //去除轴线分叉
            show: false
        },
        axisLabel:{   //x轴字体大小
            show:false,
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            }
        }
    }],
    yAxis:[{

        axisLine:{
            lineStyle:{
                width:2,
            }
        },
        type: 'category',

        data: ['中国大众银行','中国人民银行','中国银行','中国招商银行'],

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
            data: [12, 32, 1,2],
            itemStyle: {
                normal: {
                    barBorderRadius:[10, 10, 10, 10],
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

// 右二
var myChart = echarts.init(document.getElementById('right2'));
option = {
    color:'#63a1a9',
    title:{
        text:'外贸出口主要国家情况',
        textStyle:{
            fontSize:14,
            color:'#2d3748'
        }
    },
    grid: {
        top:'18%',
        left: '2%',
        right: '5%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['美国', '日本', '韩国', '巴西', '德国', '荷兰'],
        axisLabel:{
            textStyle:{
                fontSize:8,
                color:'#dbdfe4'
            }
        },
        // boundaryGap: [120, 112],
        // splitNumber:10, //设置刻度尺寸
    },
    yAxis:[ {
        type: 'value',
        axisLabel: {    //给y轴加单位
            formatter: '{value}亿美元',
            textStyle:{
                fontSize:10,
                color:'#dbdfe4'
            },
            max:10,   //设置坐标轴数字
            min:0,
        },
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        axisLine: {     //去除轴线，下部数据还在
            show: false
        },
        axisTick: { //去除轴线，下部数据还在
            show: false
        },
    }],
    series: [{
        data: [9.5, 2.5, 2.2, 1.8, 1.6, 1.5],
        type: 'bar',
        barWidth:10,
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'center', //在上方显示
                    textStyle: { //数值样式
                        fontSize:6,
                        color:'#dbdfe4'
                    }
                }
            }
        },
    }]
};
myChart.setOption(option);
// 右三

var myChart = echarts.init(document.getElementById('right3'));
option = {
    color:['#c13532','#354655','#669fa6','#dd8769','#93c7ae','#6e7377'],
    title:[{
        left:'left',
        top:'20',
        text:'外贸出口国际市场分布情况',
        textStyle:{
            fontSize:14,
            color:'#2d3748'
        }
    }],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        right:0,
        top:40,
        height:120,
        itemWidth:8,
        itemHeight:8,
        itemGap:6,
        textStyle:{
            color: '#333',
            fontSize:10
        },
        orient:'vertical',
        data:['非洲','亚洲','欧洲','北美洲','南美洲','大洋洲']
    },

    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [0, 70],
            center : ['50%', '65%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'非洲',labelLine:{length:5,length2: 5}},
                {value:5, name:'亚洲',labelLine:{length:5,length2: 5}},
                {value:15, name:'欧洲',labelLine:{length:5,length2: 5}},
                {value:25, name:'北美洲'},
                {value:20, name:'南美洲'},
                {value:35, name:'大洋洲'}
            ]
        },

    ]
};
myChart.setOption(option);
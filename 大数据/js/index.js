// 左一
var myChart = echarts.init(document.getElementById('left1'));
 var option = {
    color:['#46baf3','#f39e30','#f75d3e'],
    title:{
        left:'left',
        text:'生产总值',
        subtext:'总值累计值',
        subtextStyle:{
            color:'#18ebee',
            fontSize:12
        },
        textStyle:{
            //文字颜色
            color:'#18ebee',
            //字体风格,'normal','italic','oblique'
            fontStyle:'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight:'bold',
            //字体系列
            fontFamily:'sans-serif',
            //字体大小
            fontSize:16
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }

    },
    legend: {
        orient: 'vertical',
        x:'right',
        data:['一产总值','二产总值','三产总值'],
        textStyle:{
            color:'#fff'
        }
    },
    grid: {
        left: '-6%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis : [
        {
            type : 'category',
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }
        }
    ],
    yAxis : [
        {
            show : false

        }
    ],
    series : [

        {
            name:'一产总值',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210,134,253,414,584,221]
        },
        {
            name:'二产总值',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310,456,52,44,125,67]
        },
        {
            name:'三产总值',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410,124,325,154,364,124]
        },
        {
            name:'搜索擎',
            type:'bar',
            data:[],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        }
    ]
};
myChart.setOption(option);
// 左边第二个 -----------------------------------------------------
var myChart = echarts.init(document.getElementById('left2'));
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
        left: '30%',
        right: '15%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        name:'项目数量',
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
            barWidth:6,
            data: [2011, 196, 2019]
        }
    ]
};
myChart.setOption(option);

// 左边第三个--------------------------------------
// ①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①
var myChart = echarts.init(document.getElementById('left3_one'));
option = {
    color:'#eea141',
    title: [{
        text: '从业人数',
        left: '10',
        top: '35',
        textStyle:{
            color:'#42464b',
            fontSize: 12
        }
    },
        {
            subtext: '200万',
            left: '10',
            top: '50',
            subtextStyle: {
                color: '#ebedee',
                fontSize: 16
            }
        },
        {
            text: '劳动力',
            textStyle:{
                color:'#222935',
                fontSize: 12
            }
        }
    ],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '33%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
        y:30
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        // 让坐标消失
        axisLabel : {
            formatter: function(){
                return "";
            }
        },
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        axisTick:{
            show:false
        }
    },
    yAxis: {
        type: 'category',
        data: ['第一产业','第二产业','第三产业'],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize:10
            }
        }
    },
    series: [
        {
            type: 'bar',
            barWidth : 6,
            data: [  370, 634, 630],
            itemStyle : {   //设置圆弧
                normal: {
                    barBorderRadius:[0, 10, 10, 0],
                    label : {
                        show: false, //设置显示的字在里面还是
                        position: 'insideRight'
                    }
                }
            },
        }


    ]
};

myChart.setOption(option);
// ②②②②②②②②②②②②②②②②②②②②②②②②②②②②②②
var myChart = echarts.init(document.getElementById('left3_two'));
option = {
    color:'#ef573f',
    title: [{
        text: '人才资源',
        left: '10',
        top: '25',
        textStyle:{
            color:'#42464b',
            fontSize: 12
        }
    },
        {
            subtext: '700万',
            left: '10',
            top: '40',
            subtextStyle: {
                color: '#ebedee',
                fontSize: 16
            }
        }
    ],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '30%',
        bottom: '0%',
        containLabel: true,
        y:25,
        borderWidth:1
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        // 让坐标消失
        axisLabel : {
            formatter: function(){
                return "";
            }
        },
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        axisTick:{
            show:false
        }
    },
    yAxis: {
        type: 'category',
        data: ['企业管理人员','党政机关人员','专业技术人员'],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize:10
            }
        }
    },
    series: [
        {
            type: 'bar',
            barWidth : 6,
            data: [  370, 634, 630],
            itemStyle : {   //设置圆弧
                normal: {
                    barBorderRadius:[0, 10, 10, 0],
                    label : {
                        show: false, //设置显示的字在里面还是
                        position: 'insideRight'
                    }
                }
            },
        }

    ]
};

myChart.setOption(option);

//右一
var myChart = echarts.init(document.getElementById('right1'));
 var option = {
    color:'#9aca68',
    title:{
        left:'left',
        text:'财政收入',
        subtext:'财政收入额',
        subtextStyle:{
            color:'#18ebee',
            fontSize:12
        },
        textStyle:{
            //文字颜色
            color:'#18ebee',
            //字体风格,'normal','italic','oblique'
            fontStyle:'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight:'bold',
            //字体系列
            fontFamily:'sans-serif',
            //字体大小
            fontSize:16
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }

    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis : [
        {
            type : 'category',
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            axisLabel:{
                textStyle: {
                    color: '#fff'//坐标值得具体的颜色

                }
            }
        },

    ],
    yAxis : [   //去除轴线
        {
            show : false
        }
    ],
    series : [

        {
            barWidth: 10,
            type:'bar',
            data:[320, 432, 501, 334, 390, 430, 410,534,453,414,284,421],
            itemStyle : {   //设置圆弧
                normal: {
                    barBorderRadius:[10, 10, 0, 0],
                    label : {
                        show: false, //设置显示的字在里面还是
                        position: 'insideRight'
                    }
                }
            },
        }


    ]
};
myChart.setOption(option);

//右二

var myChart = echarts.init(document.getElementById('right2'));
option = {
    title: {
        left:'left',
        text: '规模以上工业',
        textStyle:{
            color:'#2be9eb',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        x:'right',
        data:['大型企业','中型企业','小型企业'],
        textStyle:{
            fontSize:8,
            color:'#dbdcdd'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        splitLine:{show: false},//去除网格线
        splitArea : {show : false},//保留网格区域
        axisLabel:{
            textStyle: {
                color: '#fff'//坐标值得具体的颜色

            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel : {
            formatter: function(){
                return "";
            }
        },
        show:false
    },
    series: [
        {
            name:'大型企业',
            type:'line',
            smooth: true,//折线圆弧
            data:[4, 5, 7, 8, 8, 7, 7,  9, 10, 8,9,8]
        },
        {
            name:'中型企业',
            type:'line',
            smooth: true,
            data:[2, 4, 5, 5, 9, 4, 6,  11, 7, 9,6,11]

        },
        {
            name:'小型企业',
            type:'line',
            smooth: true,
            data:[1, 2, 1, 2, 2, 3, 1,  3, 2, 3,4,3]

        }
    ],
    grid: {
        y2:25
    },
};

myChart.setOption(option);


//右三
var myChart = echarts.init(document.getElementById('right3'));
option = {
    color:'#e4634a',
    title:{
        left:'left',
        text:'对外经济',
        subtext:'出口交货额',
        subtextStyle:{
            color:'#18ebee',
            fontSize:12
        },
        textStyle:{
            //文字颜色
            color:'#18ebee',
            //字体风格,'normal','italic','oblique'
            fontStyle:'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight:'bold',
            //字体系列
            fontFamily:'sans-serif',
            //字体大小
            fontSize:16
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }

    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis : [
        {
            type : 'category',
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            axisLabel:{
                textStyle: {
                    color: '#fff'//坐标值得具体的颜色

                }
            }
        },
//      axisLabel:{
//          textStyle: {
//              color: '#fff',//坐标值得具体的颜色
//
//          }
//      }
    ],
    yAxis : [
        {
            show : false
        }
    ],
    series : [

        {
            barWidth: 10,
            type:'bar',
            data:[320, 432, 501, 334, 390, 430, 410,534,453,414,284,421],
            itemStyle : {   //设置圆弧
                normal: {
                    barBorderRadius:[10, 10, 0, 0],
                    label : {
                        show: false, //设置显示的字在里面还是
                        position: 'insideRight'
                    }
                }
            },
        },


    ]
};
myChart.setOption(option);

// 中下仪表盘
// ①①①①①①①①①①①①①①①①①①①①①①①①①①①①①①
var myChart = echarts.init(document.getElementById('center_bottom_right1'));
option = {
    title:{
        top:'10',
        text:'综合发展指数',
        left:'center',
        textStyle:{
            fontSize:12,
            color:'#f7fafa'
        }
    },
    legend:[{
    }],
    axisLabel: {  //仪表盘两边设置字体
        formatter: function(e) {
            switch (e + "") {
                case "10":
                    return "低";
                case "90":
                    return "高";
            }
        },
        textStyle: {
            fontSize: 12
        }
    },
    splitLine: { //遇到倍数显示较长   修改length属性
        show: true,
        length: 1,
        lineStyle: {
            color: '#fff'
        }
    },
    series: [{
        center: ['50%', '57%'],//控制仪表盘位置
        type: 'gauge',
        axisLine: {
            show: true,
            lineStyle: {
                width: 7,
                shadowBlur: 0,
                color: [
                    [0.3, '#60b6f0'],
                    [1.7, '#1a363f']
                ]
            }
        },
        axisTick: {  //每刻度指针长度
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1

            },
            length: 7
        },
        splitLine: { //遇到倍数显示较长   修改length属性
            show: true,
            length: 4,
            lineStyle: {
                color: '#fff'
            }
        },
        detail: {
            offsetCenter: [0, 30],  //移动中间数字
            textStyle: { //中间字体大小
                fontSize: 20
            }
        },
        data: [{
            value: 30,

        }],
        textStyle:{
            fontSize:12
        }

    }]
};
myChart.setOption(option);


// ②②②②②②②②②②②②②②②②②②②②②②②②②②②
var myChart = echarts.init(document.getElementById('center_bottom_right2'));
option = {
    title:{
        top:'10',
        text:'城镇化指数',
        left:'center',
        textStyle:{
            fontSize:12,
            color:'#f7fafa'
        }
    },
    legend:[{
    }],
    axisLabel: {  //仪表盘两边设置字体
        formatter: function(e) {
            switch (e + "") {
                case "10":
                    return "低";
                case "90":
                    return "高";
            }
        },
        textStyle: {
            fontSize: 12,
            color:'#02848a'
        }
    },
    splitLine: { //遇到倍数显示较长   修改length属性
        show: true,
        length: 1,
        lineStyle: {
            color: '#fff'
        }
    },
    axisTick: {  //每刻度指针长度
        show: true,
        lineStyle: {
            color: '#fff',
            width: 1

        },
        length: 7
    },
    series: [{
        center: ['50%', '57%'],//控制仪表盘位置
        type: 'gauge',
        axisLine: {
            show: true,
            lineStyle: {
                width: 7,
                shadowBlur: 0,
                color: [
                    [0.5, '#ef9e3c'],
                    [1.5, '#1a363f']
                ]
            }
        },
        splitLine: { //遇到倍数显示较长   修改length属性
            show: true,
            length: 4,
            lineStyle: {
                color: '#fff'
            }
        },
        detail: {
            offsetCenter: [0, 30],//移动中间数字
            textStyle: { //中间字体大小
                fontSize: 20
            }
        },
        data: [{
            value: 50,

        }],
        textStyle:{
            fontSize:12
        }

    }]
};
myChart.setOption(option);


// ③③③③③③③③③③③③③③③③③③③③③③③③③③③③
var myChart = echarts.init(document.getElementById('center_bottom_right3'));
option = {
    title:{
        top:'10',
        text:'城镇化指数',
        left:'center',
        textStyle:{
            fontSize:12,
            color:'#f7fafa'
        }
    },
    legend:[{
    }],
    axisLabel: {  //仪表盘两边设置字体
        formatter: function(e) {
            switch (e + "") {
                case "10":
                    return "低";
                case "90":
                    return "高";
            }
        },
        textStyle: {
            fontSize: 12,
            color:'#02848a'
        }
    },
    splitLine: { //遇到倍数显示较长   修改length属性
        show: true,
        length: 1,
        lineStyle: {
            color: '#fff'
        }
    },
    axisTick: {  //每刻度指针长度
        show: true,
        lineStyle: {
            color: '#fff',
            width: 1

        },
        length: 7
    },
    series: [{
        center: ['50%', '57%'],//控制仪表盘位置
        type: 'gauge',
        axisLine: {
            show: true,
            lineStyle: {
                width: 7,
                shadowBlur: 0,
                color: [
                    [0.7, '#ef0e3c'],
                    [1.2, '#1a363f']
                ]
            }
        },
        splitLine: { //遇到倍数显示较长   修改length属性
            show: true,
            length: 4,
            lineStyle: {
                color: '#fff'
            }
        },
        detail: {
            offsetCenter: [0, 30],//移动中间数字
            textStyle: { //中间字体大小
                fontSize: 20
            }
        },
        data: [{
            value:70,

        }],
        textStyle:{
            fontSize:12
        }

    }]
};
myChart.setOption(option);
// 地图
var myChart = echarts.init(document.getElementById('center_center'));

var name_title = "中国人民大学2017年各省市计划录取人数"
var subname = '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [
    {name:"北京",value:177},
    {name:"天津",value:42},
    {name:"河北",value:102},
    {name:"山西",value:81},
    {name:"内蒙古",value:47},
    {name:"辽宁",value:67},
    {name:"吉林",value:82},
    {name:"黑龙江",value:66},
    {name:"上海",value:24},
    {name:"江苏",value:92},
    {name:"浙江",value:114},
    {name:"安徽",value:109},
    {name:"福建",value:116},
    {name:"江西",value:91},
    {name:"山东",value:119},
    {name:"河南",value:137},
    {name:"湖北",value:116},
    {name:"湖南",value:114},
    {name:"重庆",value:91},
    {name:"四川",value:125},
    {name:"贵州",value:62},
    {name:"云南",value:83},
    {name:"西藏",value:9},
    {name:"陕西",value:80},
    {name:"甘肃",value:56},
    {name:"青海",value:10},
    {name:"宁夏",value:18},
    {name:"新疆",value:67},
    {name:"广东",value:123},
    {name:"广西",value:59},
    {name:"海南",value:14},
];

var geoCoordMap = {};
var toolTipData = [
    {name:"北京",value:[{name:"文科",value:95},{name:"理科",value:82}]},
    {name:"天津",value:[{name:"文科",value:22},{name:"理科",value:20}]},
    {name:"河北",value:[{name:"文科",value:60},{name:"理科",value:42}]},
    {name:"山西",value:[{name:"文科",value:40},{name:"理科",value:41}]},
    {name:"内蒙古",value:[{name:"文科",value:23},{name:"理科",value:24}]},
    {name:"辽宁",value:[{name:"文科",value:39},{name:"理科",value:28}]},
    {name:"吉林",value:[{name:"文科",value:41},{name:"理科",value:41}]},
    {name:"黑龙江",value:[{name:"文科",value:35},{name:"理科",value:31}]},
    {name:"上海",value:[{name:"文科",value:12},{name:"理科",value:12}]},
    {name:"江苏",value:[{name:"文科",value:47},{name:"理科",value:45}]},
    {name:"浙江",value:[{name:"文科",value:57},{name:"理科",value:57}]},
    {name:"安徽",value:[{name:"文科",value:57},{name:"理科",value:52}]},
    {name:"福建",value:[{name:"文科",value:59},{name:"理科",value:57}]},
    {name:"江西",value:[{name:"文科",value:49},{name:"理科",value:42}]},
    {name:"山东",value:[{name:"文科",value:67},{name:"理科",value:52}]},
    {name:"河南",value:[{name:"文科",value:69},{name:"理科",value:68}]},
    {name:"湖北",value:[{name:"文科",value:60},{name:"理科",value:56}]},
    {name:"湖南",value:[{name:"文科",value:62},{name:"理科",value:52}]},
    {name:"重庆",value:[{name:"文科",value:47},{name:"理科",value:44}]},
    {name:"四川",value:[{name:"文科",value:65},{name:"理科",value:60}]},
    {name:"贵州",value:[{name:"文科",value:32},{name:"理科",value:30}]},
    {name:"云南",value:[{name:"文科",value:42},{name:"理科",value:41}]},
    {name:"西藏",value:[{name:"文科",value:5},{name:"理科",value:4}]},
    {name:"陕西",value:[{name:"文科",value:38},{name:"理科",value:42}]},
    {name:"甘肃",value:[{name:"文科",value:28},{name:"理科",value:28}]},
    {name:"青海",value:[{name:"文科",value:5},{name:"理科",value:5}]},
    {name:"宁夏",value:[{name:"文科",value:10},{name:"理科",value:8}]},
    {name:"新疆",value:[{name:"文科",value:36},{name:"理科",value:31}]},
    {name:"广东",value:[{name:"文科",value:63},{name:"理科",value:60}]},
    {name:"广西",value:[{name:"文科",value:29},{name:"理科",value:30}]},
    {name:"海南",value:[{name:"文科",value:8},{name:"理科",value:6}]},
];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 480,
    min = 9; // todo
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
option = {
    title: {
        text: name_title,
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle:{
            fontSize:subname_fontSize,
            fontFamily:name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            }
        }
    },
    // legend: {
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x: 'right',
    //     data: ['credit_pm2.5'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    },
    series: [{
        name: '散点',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function(val) {
            return val[2] / 10;
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#05C3F9'
            }
        }
    },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },

    ]
};
myChart.setOption(option);
myChart.setOption(option);

//
//
//            刻度盘
// //  var myChart = echarts.init(document.getElementById("item_3"));
// option = {
//     backgroundColor: "#062a44",
//     series: [{
//         name: '刻度',
//         type: 'gauge',
//         radius: '90%',
//         min:0,
//         max:1000,
//         show:false,
//         splitNumber: 5, //刻度数量
//         startAngle: 180,
//         endAngle: 0,
//         axisLine: {
//             show:true,
//             lineStyle: {
//                 width: 1,
//                 color: [[1,'rgba(0,0,0,0)']]
//             }
//         },//仪表盘轴线
//         axisLabel: { //仪表数字
//             show: true,
//             color:'#fff',
//             distance:30
//         },//刻度标签。
//         axisTick: {  //每隔刻度之间的小单位
//             show: true,
//             lineStyle: {
//                 color: '#fff',
//                 width: 1
//
//             },
//             length: 5
//         },//刻度样式
//         splitLine: { //遇到倍数显示较长   修改length属性
//             show: true,
//             length: 5,
//             lineStyle: {
//                 color: '#fff'
//             }
//         },//分隔线样式
//         detail: {
//             show: false
//         },
//         pointer: {
//             show: false
//         }
//     },
//         {
//
//
//             type: 'gauge',
//             radius: '70%',
//             center: ['50%', '50%'],
//
//             splitNumber: 0, //刻度数量
//             startAngle: 180,
//             endAngle: 0,
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     width: 20,
//                     color: [
//                         [
//                             //1为圆弧
//                             1, new echarts.graphic.LinearGradient(
//                             0, 0, 1, 0, [{
//                                 offset: 0,
//                                 color: '#ae3df6'
//                             },
//                                 {
//                                     offset: 1,
//                                     color: '#53bef9'
//                                 }
//                             ]
//                         )
//                         ],
//                         [
//                             1, '#222e7d'
//                         ]
//                     ]
//                 }
//             },
//             //分隔线样式。
//             splitLine: {
//                 show: false,
//             },
//             axisLabel: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//             pointer: {
//                 show: false
//             },
//             title: {
//                 show: true,
//                 offsetCenter: [0, '-20%'], // x, y，单位px
//                 textStyle: {
//                     color: '#ddd',
//                     fontSize: 40
//                 }
//             },
//             //仪表盘详情，用于显示数据。
//             detail: {
//                 show: true,
//                 offsetCenter: [0, 0],
//                 color: '#ddd',
//                 formatter: function(params) {
//                     return params
//                 },
//                 textStyle: {
//                     fontSize: 40
//                 }
//             },
//             data: [{
//                 name: "总体出勤率",
//                 value: 75
//             }]
//         }
//     ]
// };

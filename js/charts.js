//bar-chart
var bar = echarts.init(document.querySelector(".bar"));

var barOpt = {
    color: ['rgba(255,255,255,0.6)','rgba(255,255,255,0.8)','rgba(255,255,255,0.4)'],
    tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //     type: 'cross',
        //     crossStyle: {
        //         color: '#999'
        //     }
        // }
    },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    grid: {
    	top:7,
    	left: 0,
    	bottom: 0,
    	right: -10,
    	containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1','2','3','4','5','6','7','8','9'],
            // boundaryGap: false,
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'
                }
            },
            axisTick: {
            	length: 0
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 120,
            // interval: 50,
            axisLabel: {
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'
                }
            },
            axisTick: {
            	length: 0
            }
        },
        {
            type: 'value',
            // name: '水量',
            min: 0,
            max: 120,
            // interval: 50,
            axisLabel: {
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'
                }
            },
            axisLabel: {
            	textStyle:{
            		show: false,
            		color: 'rgba(255,255,255,0)'	
            	}
            },
            axisTick: {
            	length: 0
            }
        },
    ],
    series: [
        {
            name:'0.82',
            type:'bar',
            barWidth: 8,
            data:[60, 30, 50, 100, 10, 90, 85, 40, 5]
        },
        {
            name:'0.95',
            type:'bar',
            barWidth: 8,
            data:[20, 90, 60, 40, 100, 25, 65, 5, 70]
        },
        {
            name:'1.08',
            type:'bar',
            barWidth: 8,
            data:[100, 20, 60, 90, 80, 10, 5, 15, 50]
        }
    ]
};

bar.setOption(barOpt);



window.addEventListener("resize",function(){
	bar.resize();
})

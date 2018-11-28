var lines = document.querySelectorAll(".line");
var myChart = [],option = [];
var datas = [
	[5, 6, 3, 9, 7, 5, 4, 6, 5, 6, 4, 9],
	[8,11, 9,12,10, 9,13,11,12,11,10],
	[4, 6, 7, 8, 9, 5, 3, 6, 5, 6, 7, 5, 7, 2, 7],
	[9, 4, 6, 5, 6, 4, 5, 7, 9, 3, 6, 5]
];
for(let i=0; i<lines.length;i++){

	var dataX = new Array(datas[i].length);
	for(var a=0;a<dataX.length;a++){
		dataX[a] = "";
	}


	myChart[i] = echarts.init(lines[i]);
	option[i] = {
		xAxis: {
			show:false, //隐藏显示x轴
			boundaryGap: false,     // x轴 折线两端无间隙
			data: dataX// 描点用的数据(y值)
		},
		yAxis: {
			show:false,
			min: 'dataMin',
		},
		grid: { // 折线图(含坐标轴) 与 四周 的间隙
			left:0,
			right:0,
			top:0,
			bottom:0
		},
		// color: "red",
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			extraCssText: 'line-height:12px;font-size:12px;',
			borderWidth: 1,
			borderColor:"#fff",
			borderRadius:0,
			// confine:true, 是否将提示信息限制在图表内
			// formatter: '{c}',// 文本格式 c为数值
			position: function (pt) {
				return [pt[0]+5, pt[1]-12];
			},
			lineStyle: {color: "red"}
		},
		series: {
			data: datas[i],
			// markPoint: {
			//     type: "point",
			//     animation: false,
			//     itemStyle: {
			//         normal :{
			//             color: "blue"
			//         },
			//         color: "red",
			//     }
			// },
			type: 'line',
			areaStyle: {},
			symbolSize: 1,
			areaStyle: {
				color: "rgba(0,0,0,0.4)"
			},
			lineStyle: {
				normal: {
					color: 'rgba(255,255,255,0.4)',
					width: 1,
					// type: 'dashed'
				}
			},
			itemStyle: {
				data: [
					{type: 'max', name: '最大值'},
					{type: 'min', name: '最小值'}
				],
				normal: {
					borderWidth: 1,
					borderColor: 'orangered',
					color: 'rgba(255,255,255,0.4)'  // 会影响tooltip中小圆点的颜色
				},
				emphasis: {
					color: "green",
					borderColor: 'green',
					width:2,
					symbolSize: 2
				},
				// silent: false
			}
		}
	};
	myChart[i].setOption(option[i]);
}

// line0
var line0 = echarts.init(document.querySelector("#line-chart"));

let option0 = {
	xAxis: {
		type: 'category',
		show: true,
		boundaryGap: false,
		data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		axisLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		axisLabel: {
			textStyle: {
				color: 'rgba(255,255,255,0.5)'
			}
		},
		nameLocation: "end",
		axisTick: {
			length:0
		}
	},
	yAxis: [{
		type: 'value',
		show: true,
		axisLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		axisLabel: {
			textStyle: {
				color: 'rgba(255,255,255,0.5)'
			}
		},
		splitLine: {
			lineStyle: {
				color: "rgba(255,255,255,0)"
			}
		},
		min: '10',
		max: 22,
		// nameLocation: "start",
		axisTick: {
			length:0
		}
	},{
		type: 'value',
		show: true,
		axisLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		axisLabel: {
			textStyle: {
				show: false,
				color: "rgba(255,255,255,0)"
			}
		},
		splitLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		min: '10',
		max: 22,
		// nameLocation: "start",
		axisTick: {
			length:0
		}
	}],
	grid: { // 折线图(含坐标轴) 与 四周 的间隙
		left:0,
		right:-14,
		top:4,
		bottom:0,
		containLabel: true
	},
	tooltip: {
		//折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
		backgroundColor: "rgba(0,0,0,0.7)",
		extraCssText: 'line-height:12px;font-size:12px;',
		borderRadius: 0,
		borderWidth: 1,
		borderColor: "white",
		lineHeight: "10px",
		formatter: 'Data of {b}.00={c}.00'
	},
	series: [{
		data: [14, 15, 18, 16, 19, 17, 15, 16, 20, 16, 18],
		type: 'line',
		areaStyle: {
			color: "rgba(255,255,255,0.4)",
			borderColor: '#fff'
		},
		lineStyle: {
			normal: {
				color: "rgba(255,255,255,0.6)"
			}
		},
		itemStyle: {
			normal: {
				// symbolSize: 10,
				borderColor: "rgba(255,255,255,0.6)"
			},
			emphasis: {
				// show:false
				symbolSize: 5,
				width: 0,
				borderWidth: 0,
				// color: 'red',
				opacity: 0.5
			}
		},
		symbolSize: 6
	}]
};

line0.setOption(option0);

// pie-chart-tiny 开始
var circles = document.querySelectorAll(".pie-chart-tiny");
var cDatas = [
	[{value:86,name:"86%"},{value:14,name:""}],
	[{value:23,name:"23%"},{value:77,name:""}],
	[{value:57,name:"57%"},{value:43,name:""}],
	[{value:34,name:"34%"},{value:66,name:""}],
	[{value:81,name:"81%"},{value:19,name:""}],
];
var cOptions = [],cmyCharts = []

for(let c=0;c<circles.length;c++){
	cmyCharts[c] = echarts.init(circles[c]);
	cOptions[c] = {
		series:{
			type: "pie",
			data: cDatas[c],
			avoidLabelOverlap: false,   // 文字垂直居中 不会上偏
			label: {
				normal: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: 20,
						// fontWeight: 'bold',
						lineHeight: 20
					}
				}
			},
			radius:['78%','85%'],
			color:['rgba(255,255,255,0.7)','rgba(0,0,0,0.4)']
		}
	}
	cmyCharts[c].setOption(cOptions[c])
}

// pie-chart-tiny 结束

// map 开始
var map = echarts.init(document.querySelector(".map"));
// map.showLoading();
// $.get('./json/china.json',function(geoJson){
	// map.hideLoading();
	// echarts.registerMap("china",geoJson);
	var mapopt = {
        series: [
            {
            	roam: true,
                type: 'map',
                layoutCenter: ['50%','50%'],
                layoutSize: 500,
                min:200,
                // max: 500, meiluanyong
                mapType: 'china', // 自定义扩展图表类型
                itemStyle:{
                    normal:{label:{show:true},areaColor: "rgba(255,255,255,0.7)"},
                    emphasis:{label:{show:true},areaColor: 'rgba(255,255,255,0.8)'}// 高亮
                }
            }
        ]
	};
	map.setOption(mapopt)
// });
// map 结束

// active 开始
var active = echarts.init(document.getElementsByClassName('active-chart')[0].querySelector('.active'));

var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
var data = [Math.random() * 40 + 20];

for (var i = 1; i <= 250; i++) {
    // var now = new Date(base += oneDay);
    date.push(i);
    data.push(Math.round((Math.random() - 0.5) * 5 + data[i - 1]));
}

var actOpt = {
	grid: {
		left:0,
		top:5,
		bottom:0,
		right:1,
		containLabel: true
	},
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    xAxis: {
        type: 'category',
        // type: 'time',
        // type: 'value',
        maxInterval: 50, //type 是value 或者time 时生效
        boundaryGap: false,
        data: date,
		axisLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		axisLabel: {
			textStyle: {
				color: 'rgba(255,255,255,0.5)'
			}
		},
		splitNumber: 5,
		splitLine: {
		// 	show: true,
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		axisTick: {
			length:0
		},
		min: 0,
		max: 250
    },
    yAxis: [{
        type: 'value',
        data: data,
        // boundaryGap: [0, '100%'],
		axisLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		axisLabel: {
			textStyle: {
				color: 'rgba(255,255,255,0.5)'
			}
		},
		// splitNumber: 4,
		splitLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		// nameLocation: "start",
		axisTick: {
			length:0
		},
		min: 0,
		max: 100
    },{
    	// show:false,
        type: 'value',
        boundaryGap: [0, '100%'],
		axisLine: {
			lineStyle: {
				color: "rgba(255,255,255,0.2)"
			}
		},
		axisLabel: {
			textStyle: {
				color: 'rgba(255,255,255,0.5)'
			}
		},
		splitLine: {
			lineStyle: {
				color: "rgba(255,255,255,0)"
			}
		},
		// nameLocation: "start",
		axisTick: {
			length:0
		},
		min: '0',
		// max: 100
    }],
    series: [
        {
            name:'',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgba(255,255,255,0.6)'
            },
            areaStyle: {
                color: 'rgba(255,255,255,0.6)'
            },
            data: data
        }
    ]
};

active.setOption(actOpt)
// active 结束

window.onresize = function(){
	for(var i=0;i<lines.length;i++){
		myChart[i].resize();
	}
	line0.resize();
	
// 	for(let c=0;c<circles.length;c++){
// 		cmyCharts[c].resize();
// 	}
	
	map.resize();
	active.resize();
}

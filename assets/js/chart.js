window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Total Price"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "doughnut",
            showInLegend: true,
			dataPoints: [
				{ label: "apple",name:"apple", y: 10  },
				{ label: "orange",name:"orange", y: 15  },
				{ label: "banana",name:"banana", y: 25  },
				{ label: "mango",name:"mango", y: 30  },
				{ label: "grape",name:"grape", y: 28  }
			]
		}
		]
	});
	chart.render();
}
$('#line-btn').onclick = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Total Price"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "line",
            showInLegend: true,
			dataPoints: [
				{ label: "apple",name:"apple", y: 10  },
				{ label: "orange",name:"orange", y: 15  },
				{ label: "banana",name:"banana", y: 25  },
				{ label: "mango",name:"mango", y: 30  },
				{ label: "grape",name:"grape", y: 28  }
			]
		}
		]
	});
	chart.render();
}
/* Creating a canvas element and appending it to a div element. */
/////////////////////////////////////////////////////////////////
let div = document.createElement('div');
let canvas3 = document.createElement('canvas');
canvas3.id = 'canvas3';
canvas3.width = 800;
div.append(canvas3);



/* Creating a table element and appending it to a div element. */
////////////////////////////////////////////////////////////////
const table1 = document.getElementById('firstHeading');
table1.appendChild(div, canvas3);

let x = [];
let y = []

////////* Creating a data object for the chart. *///////////////
///////////////////////////////////////////////////////////////
let dataH = {
	labels: x,
	datasets: [{
		data: y,
		label: null,
		borderColor : 'rgb(0, 0, 0)',
		backgroundColor: 'rgb(255, 0, 0, .5)',
	}],
};


/////////////////* Creating a chart. *//////////////////////////
///////////////////////////////////////////////////////////////
const ctx3 = document.getElementById('canvas3').getContext('2d');
const chartTable3 = new Chart(ctx3, {
	type: "bar",
	data: dataH,
	options: {
	scales: {
		y: {
			min: -30,
			max: 30,
		}
		},
	plugins: {
		legend: {
			display: false}
}}});
	/**
	 * It takes the data fetched from the database and 
	 * updates the chart with the new data.
	 * @param dataFetched - the data fetched from the server
	 */
	////////////////////////////////////////////////////////////////
	function updateChart(dataFetched) {
		for (let i = 0; i < dataFetched.length; i++) {
			console.log('ok')
		x[i] = dataFetched[i][0];
		y[i] = dataFetched[i][1];
		}
		/**
		 * The function takes the chart object, the labels, the data,
		 * and the dataset index as arguments, and
		 * then updates the chart with the new data.
		 * @param chart - the chart object
		 * @param labels - x
		 * @param dataY - the data to be plotted on the y-axis
		 * @param datasetIndex - The index of the dataset to add data to.
		 */
		function addData(chart, labels, dataY, datasetIndex) {
				chart.data.datasets[datasetIndex].data = dataY;
				chart.data.labels = labels;
				chart.update();
				}
				addData(chartTable3, x, y, 0);
				}
	/**
	 * It fetches data from a URL, and if the request is successful,
	 * it calls the updateChart function
	 * with the data as an argument.
	 */
	////////////////////////////////////////////////////////////////
	async function dataFetch() {
		const url = "https://canvasjs.com/services/data/datapoints.php";
		const request = await fetch(url, {
			method: "GET",
			cache: "reload",
		});

		/* Checking if the request is ok, and if it is,
		it is calling the updateChart function with the
		data as an argument. */
		if (!request.ok) {
			alert("Error")
		} else {
			let dataFetched = await request.json();
			updateChart(dataFetched);
		}
	}
	/* Calling the `dataFetch` function every 1000 milliseconds. */
	//////////////////////////////////////////////////////////////
	setInterval(dataFetch, 1000);




var ctx = document.getElementById('myChart').getContext('2d');
			var chart = new Chart(ctx, {
				type: 'horizontalBar',
				data: {
					labels: ['A New Hope', 'Return of the Jedi', 'The Empire Strikes Back'],
					datasets: [{
						label: 'Star Wars Ratings',
						backgroundColor: 'rgb(240, 212, 31)',
						borderColor: 'rgb(255, 99, 132)',
						data: [92, 81, 74]
					}]
				},
				options: {
                    legend: {
                        labels: {
                            fontColor: 'rgb(255, 232, 31)' 
                        }
                    },
					responsive: true,
					maintainAspectRatio: false,
					scales: {
					  xAxes: [{
						ticks: {
						  beginAtZero: true,          
                          stepSize: 10,
                          fontColor: 'rgb(255, 232, 31)',          
						}
					  }],
					  yAxes: [{
						ticks: {
                          maxTicksLimit: 30,
                          fontColor: 'rgb(255, 232, 31)' 
						}
					  }]
					}
				}
			});
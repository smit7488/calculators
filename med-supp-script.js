 


 function doFV() {

	// Get user input from the text field that has the id.
	var avgPremium = parseFloat(document.getElementById('avgPremium').value.replace(/[^0-9.]/g, ''));
	var avgContract = parseFloat(document.getElementById('avgContract').value.replace(/[^0-9.]/g, ''));
	var appsPerMonth = parseFloat(document.getElementById('appsPerMonth').value.replace(/[^0-9.]/g, ''));
    var monthsOfProduction = parseFloat(document.getElementById('monthsOfProduction').value.replace(/[^0-9.]/g, ''));
    var avgPersistency = parseFloat(document.getElementById('avgPersistency').value.replace(/[^0-9.]/g, ''));
    var avgGrowth = parseFloat(document.getElementById('avgGrowth').value.replace(/[^0-9.]/g, ''));


	// Call the function computeCommission (avgPremium, costPerLead, appsPerMonth, ) , monthsOfProduction, avgPersistency, avgGrowth
	// and store the value returned by function in a variable
	
    var k = computeFirstYearRev(avgPremium, appsPerMonth, monthsOfProduction, avgContract); 
    var m = computeSecondYearRev(avgPremium, appsPerMonth, monthsOfProduction, avgGrowth, avgPersistency, avgContract);
    var n = computeThirdYearRev(avgPremium, appsPerMonth,  monthsOfProduction, avgGrowth, avgPersistency, avgContract);


	// define the chart
	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['First Year', 'Second Year', 'Third Year'],
			datasets: [{
				label: '$ USD',
				data: [parseInt(k.replace(/,/g, ''), 10), parseInt(m.replace(/,/g, ''), 10), parseInt(n.replace(/,/g, ''), 10)],
				backgroundColor: [
					'#4475b920',
					'#43beac20',
					'#2ac4f320'
					
					
				],
				borderColor: [
					'#4475b9',
					'#43beac',
					'#2ac4f3'
					
					
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});


   
   	// Display the result
	document.getElementById('outputDiv4').innerHTML = 'Total Compensation Year 1: $' + k;
    // Display the result
	document.getElementById('outputDiv5').innerHTML = 'Total Compensation Year 2: $' + m;
    // Display the result
	document.getElementById('outputDiv6').innerHTML = 'Total Compensation Year 3: $' + n;


   
}
 

 
function computeFirstYearRev(avgPremium, appsPerMonth,  monthsOfProduction, avgContract) {

    // Compute conversion rate as a percentage.
var k = (appsPerMonth * monthsOfProduction * (avgPremium * (avgContract / 100)));

return k.toLocaleString(undefined, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
  });

}


function computeSecondYearRev(avgPremium, appsPerMonth, monthsOfProduction, avgGrowth, avgPersistency, avgContract) {

    // Compute conversion rate as a percentage.
 //+ ((appsPerMonth * monthsOfProduction) * (1 + (avgGrowth / 100)) * (avgPremium * (avgContract / 100))))


// 3rd yr renewal: ((appsPerMonth * monthsOfProduction * (avgPremium * (avgContract / 100)) * (1 + (avgGrowth / 100)) * (avgPersistency / 100)));

 var m = Math.floor(appsPerMonth * monthsOfProduction * (1 + (avgGrowth / 100))) * (avgPremium * (avgContract / 100)) + ((appsPerMonth * monthsOfProduction * (avgPremium * (avgContract / 100)) * (avgPersistency / 100)));

 return m.toLocaleString(undefined, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
  });
}

function computeThirdYearRev(avgPremium, appsPerMonth, monthsOfProduction, avgGrowth, avgPersistency, avgContract) {


 var n =  Math.floor((appsPerMonth * monthsOfProduction * (1 + (avgGrowth / 100))) * (1 + (avgGrowth / 100))) * (avgPremium * (avgContract / 100)) + Math.floor(appsPerMonth * monthsOfProduction * (avgPremium * (avgContract / 100))) * (avgPersistency / 100) + Math.floor(appsPerMonth * monthsOfProduction * (1 + (avgGrowth / 100))) * (avgPremium * (avgContract / 100) *  (avgPersistency / 100));

 return n.toLocaleString(undefined, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
  });
}



	// Limit character inputs... comma, $, and % are ignored.
    /// Test Changes
	$("input").keypress( function(e) {
		var chr = String.fromCharCode(e.which);
		if ("1234567890.,$%".indexOf(chr) < 0)
			return false;
	});

	


	// Reset the form
function reset() {
	document.getElementById("resetForm").reset(); } 



 function medADV() {

	// Get user input from the text field that has the id.
	var newToMedicareCommission = parseFloat(document.getElementById('newToMedicareCommission').value.replace(/[^0-9.]/g, ''));
	var replacementCommission = parseFloat(document.getElementById('replacementCommission').value.replace(/[^0-9.]/g, ''));
	var newToMedicareOverride = parseFloat(document.getElementById('newToMedicareOverride').value.replace(/[^0-9.]/g, ''));
    var replacementOverride = parseFloat(document.getElementById('replacementOverride').value.replace(/[^0-9.]/g, ''));
	var newToMedicareAppsPerMonth = parseFloat(document.getElementById('newToMedicareAppsPerMonth').value.replace(/[^0-9.]/g, ''));
	var replacementAppsPerMonth = parseFloat(document.getElementById('replacementAppsPerMonth').value.replace(/[^0-9.]/g, ''));
    var avgPersistency = parseFloat(document.getElementById('avgPersistency').value.replace(/[^0-9.]/g, ''));
    var avgGrowth = parseFloat(document.getElementById('avgGrowth').value.replace(/[^0-9.]/g, ''));


	// Year 1 Base Commission, Monthly Revenue, and Annual Revenue Computations
	
    let computedBaseCommission = computeBaseCommission(newToMedicareCommission, newToMedicareAppsPerMonth, replacementAppsPerMonth, replacementCommission); 
    let computedMonthlyRevenue = computeMonthlyRevenue(newToMedicareCommission, newToMedicareAppsPerMonth, newToMedicareOverride, replacementOverride, replacementAppsPerMonth, replacementCommission);
    let computedAnnualRevenue = computeAnnualRevenue(newToMedicareCommission, newToMedicareAppsPerMonth, newToMedicareOverride, replacementOverride, replacementAppsPerMonth, replacementCommission);


	// New Production Calculations

	let yearOneProduction = computeYearOneProduction(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearTwoProduction = computeYearTwoProduction(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearThreeProduction = computeYearThreeProduction(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearFourProduction = computeYearFourProduction(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearFiveProduction = computeYearFiveProduction(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearSixProduction = computeYearSixProduction(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	
	// Renewal Calculations
	
	let yearTwoRenewals = computeYearTwoRenewals(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearThreeRenewals = computeYearThreeRenewals(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearFourRenewals = computeYearFourRenewals(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearFiveRenewals = computeYearFiveRenewals(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let yearSixRenewals = computeYearSixRenewals(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	
	// Yearly Total Calculations
	
	let totalYearOne = computeTotalYearOne(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let totalYearTwo = computeTotalYearTwo(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let totalYearThree = computeTotalYearThree(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let totalYearFour = computeTotalYearFour(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let totalYearFive = computeTotalYearFive(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);
	let totalYearSix = computeTotalYearSix(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);

	// Six Year Total Calculation

	let sixYearTotal = computeSixYearTotal(newToMedicareCommission, newToMedicareOverride,  replacementOverride, avgGrowth, avgPersistency, replacementCommission);

	
	// define the chart
	const ctx = document.getElementById('myChart2').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Year 1 Prod & Renewals', 'Year 2 Prod & Renewals', 'Year 3 Prod & Renewals', 'Year 4 Prod & Renewals', 'Year 5 Prod & Renewals', 'Year 6 Prod & Renewals'],
			datasets: [{
				label: '$ USD',
				data: [parseInt(totalYearOne.replace(/,/g, ''), 10), parseInt(totalYearTwo.replace(/,/g, ''), 10), parseInt(totalYearThree.replace(/,/g, ''), 10), parseInt(totalYearFour.replace(/,/g, ''), 10), parseInt(totalYearFive.replace(/,/g, ''), 10), parseInt(totalYearSix.replace(/,/g, ''), 10)],
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


   
	// Display Year 1 Base Commission, Monthly Revenue, and Annual Revenue Computations
	document.getElementById('outputDiv26').innerHTML = 'Base Commission: $' + computedBaseCommission;
	document.getElementById('outputDiv27').innerHTML = 'Monthly Revenue: $' + computedMonthlyRevenue;
	document.getElementById('outputDiv28').innerHTML = 'Annual Revenue: $' + computedAnnualRevenue;



   	// Display New Production
	document.getElementById('outputDiv7').innerHTML = 'New Production Year 1: $' + yearOneProduction;
	document.getElementById('outputDiv8').innerHTML = 'New Production Year 2: $' + yearTwoProduction;
	document.getElementById('outputDiv9').innerHTML = 'New Production Year 3: $' + yearThreeProduction;
	document.getElementById('outputDiv10').innerHTML = 'New Production Year 4: $' + yearFourProduction;
	document.getElementById('outputDiv11').innerHTML = 'New Production Year 5: $' + yearFiveProduction;
	document.getElementById('outputDiv12').innerHTML = 'New Production Year 6: $' + yearSixProduction;


	// Display Renewals
	document.getElementById('outputDiv14').innerHTML = 'Renewals Year 2: $' + yearTwoRenewals;
	document.getElementById('outputDiv15').innerHTML = 'Renewals Year 3: $' + yearThreeRenewals;
	document.getElementById('outputDiv16').innerHTML = 'Renewals Year 4: $' + yearFourRenewals;
	document.getElementById('outputDiv17').innerHTML = 'Renewals Year 5: $' + yearFiveRenewals;
	document.getElementById('outputDiv18').innerHTML = 'Renewals Year 6: $' + yearSixRenewals;


	// Display Totals
	document.getElementById('outputDiv19').innerHTML = 'Total Comp Year 1: $' + totalYearOne;
	document.getElementById('outputDiv20').innerHTML = 'Total Comp Year 2: $' + totalYearTwo;
	document.getElementById('outputDiv21').innerHTML = 'Total Comp Year 3: $' + totalYearThree;
	document.getElementById('outputDiv22').innerHTML = 'Total Comp Year 4: $' + totalYearFour;
	document.getElementById('outputDiv23').innerHTML = 'Total Comp Year 5: $' + totalYearFive;
	document.getElementById('outputDiv24').innerHTML = 'Total Comp Year 6: $' + totalYearSix;

	// Display Six Year Total
	document.getElementById('outputDiv25').innerHTML = '6 Year Total: $' + sixYearTotal;

   
}
 

 
function computeBaseCommission(newToMedicareCommission, newToMedicareAppsPerMonth, replacementAppsPerMonth, replacementCommission)  {

    // Compute conversion rate as computedBaseCommission percentage.
let computedBaseCommission = (newToMedicareCommission * newToMedicareAppsPerMonth) + (replacementCommission * replacementAppsPerMonth);

return computedBaseCommission.toLocaleString(undefined, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
  });

}

function computeMonthlyRevenue(newToMedicareCommission, newToMedicareAppsPerMonth, newToMedicareOverride, replacementOverride, replacementAppsPerMonth, replacementCommission)  {

    // Compute conversion rate as computedBaseCommission percentage.
if (newToMedicareOverride == 0) {
	computedMonthlyRevenue = (newToMedicareCommission * newToMedicareAppsPerMonth) + (replacementCommission * replacementAppsPerMonth);
}
else computedMonthlyRevenue = (newToMedicareOverride * newToMedicareAppsPerMonth) + (replacementOverride * replacementAppsPerMonth);




return computedMonthlyRevenue.toLocaleString(undefined, {
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
	document.getElementById("resetForm2").reset(); } 

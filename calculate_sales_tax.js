var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

calculateSales = function () {
  var results = {};
  for (var j=0; j < companySalesData.length; j++) {
    var amountOfSales = companySalesData[j].sales;
    var province = companySalesData[j].province;
    var companyName = companySalesData[j].name;
    var totalTaxes = 0;
    var totalSales = 0;
    for (var i = 0; i < amountOfSales.length; i++) {
      totalSales += amountOfSales[i];
      totalTaxes = salesTaxRates[province] * totalSales;
      results[companyName] = {totalSales: totalSales, totalTaxes:totalTaxes}
    }
  }
  return results;
}

var a = calculateSales();

console.log(a);

//
//
//
// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300,
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

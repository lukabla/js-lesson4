function squ(number) {
  const result = number ** 2;
  //   const result = number * number;
  return result;
}
const squ1 = squ(5);
const squ2 = squ(7);
const squ3 = squ(9);
// console.log(squ1, squ2, squ3);

function sale(price, percent) {
  const result = price - (price / 100) * percent;
  return result;
}
const firstSale = sale(1000, 10);
const seconSale = sale(1300, 17);
const thirdSale = sale(999, 22);

// console.log(firstSale, seconSale, thirdSale);

function randomNumber(random) {
  const result = random;
  return result;
}
const x = randomNumber(Math.round(Math.random() * 100));
// console.log(x);

function string(text) {
  return text.length;
}
// console.log(string(`qwertyuio`));

const currencies = [
  {
    code: "AMD",
    quantity: 1000,
    rateFormated: "6.6742",
    diffFormated: "0.0202",
    rate: 6.6742,
    name: "სომხური დრამი",
    diff: 0.0202,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "EUR",
    quantity: 1,
    rateFormated: "2.8673",
    diffFormated: "0.0131",
    rate: 2.8673,
    name: "ევრო",
    diff: -0.0131,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "GBP",
    quantity: 1,
    rateFormated: "3.3111",
    diffFormated: "0.0046",
    rate: 3.3111,
    name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
    diff: -0.0046,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "TRY",
    quantity: 1,
    rateFormated: "0.0957",
    diffFormated: "0.0003",
    rate: 0.0957,
    name: "თურქული ლირა",
    diff: 0.0003,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },

  {
    code: "USD",
    quantity: 1,
    rateFormated: "2.5771",
    diffFormated: "0.0078",
    rate: 2.5771,
    name: "აშშ დოლარი",
    diff: 0.0078,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
];

function lowestRateCurrency(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a.rate - b.rate;
  });
  return sortedArr[0];
}
// console.log(lowestRateCurrency(currencies));

const unirest = require("unirest");

let req = unirest("GET", "https://currency-converter5.p.rapidapi.com/currency/convert");

req.query({
	"format": "json",
	"from": process.argv[2],
	"to": process.argv[3],
	"amount": "1"
});

req.headers({
	"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
	"x-rapidapi-key": "28076bd067mshb9b7d0743238189p17d6ccjsn47378b9a6e03"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);
	let myRes = res.body;
	let result = "One " + myRes.base_currency_code + " (" + myRes.base_currency_name + ")";
	result += " buys " + myRes.rates[process.argv[3]].rate_for_amount;
	result += " " + process.argv[3] + " (" + res.body.rates[process.argv[3]].currency_name + ")."
	console.log(result);
});
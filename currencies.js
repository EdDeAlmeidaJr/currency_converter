var unirest = require("unirest");

var req = unirest("GET", "https://currency-converter5.p.rapidapi.com/currency/list");

req.query({
	"format": "json"
});

req.headers({
	"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
	"x-rapidapi-key": "28076bd067mshb9b7d0743238189p17d6ccjsn47378b9a6e03"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);
    let myRes = res.body.currencies;
    let currencies = Object.keys(myRes);
    currencies.forEach(x => {
        console.log(x + " => " + myRes[x]);
    })
});

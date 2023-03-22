const ccxt = require('ccxt');
require("dotenv").config()

async function test(){
    const exchange = new ccxt.binance({
        apiKey:process.env.API,
        secret: process.env.SECRET_KEY,
      });
     
      const ticker = await exchange.fetchTicker('BTC/USDT');
      const bal=await exchange.fetchBalance()
      console.log("My Bal:",bal)
      
      console.log(`Last price for BTC/USDT: ${ticker.last}`);
}

test()

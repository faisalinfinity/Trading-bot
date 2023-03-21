const ccxt = require('ccxt');

(async () => {
  const exchange = new ccxt.binance({
    apiKey: 'YOUR_API_KEY',
    secret: 'YOUR_SECRET_KEY',
  });

  const ticker = await exchange.fetchTicker('BTC/USDT');
  console.log(`Last price for BTC/USDT: ${ticker.last}`);
})();

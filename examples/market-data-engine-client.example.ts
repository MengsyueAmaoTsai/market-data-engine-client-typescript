

import MarketDataEngineClient from "../market-data-engine-client";

const symbols = ['TX-1', 'NQ-1', '2330', 'BTCUSDT', 'USDJPY', 'XTIUSD'];

const client = new MarketDataEngineClient();

client.on('connected', () => {
    symbols.forEach(symbol => {
        client.subscribe(symbol);
    });
});

client.connect();

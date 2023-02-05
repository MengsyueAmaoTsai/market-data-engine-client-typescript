import EventEmitter from "events";
import { RawData, WebSocket } from "ws";

interface MarketDataEngineClient {
    on(event: 'connected', listener: () => void): this;
}

class MarketDataEngineClient extends EventEmitter {
    private websocketClient?: WebSocket;

    constructor() {
        super()
    }

    public connect = () => {
        const port = 8080;
        const url = `ws://localhost:${port}`;
        this.websocketClient = new WebSocket(url);
        this.websocketClient
            .on('open', this.onWebSocketOpened)
            .on('close', this.onWebSocketClosed)
            .on('error', this.onWebSocketError)
            .on('message', this.onWebSocketMessageReceived)
            ;
    }

    public subscribe = (symbol: string) => {
        const request = {
            clientId: 'market-data-engine-client-1',
            action: 'subscribe',
            symbol: symbol,
        }
        this.websocketClient?.send(JSON.stringify(request));
    }

    private onWebSocketOpened = () => {
        this.emit('connected');
    }

    private onWebSocketClosed = () => {
    }

    private onWebSocketError = (error: Error) => {
    }

    private onWebSocketMessageReceived = (data: RawData) => {
    }
}

export default MarketDataEngineClient;
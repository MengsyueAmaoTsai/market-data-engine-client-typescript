import { RawData, WebSocket } from "ws";


class MarketDataEngineClient {
    private websocketClient?: WebSocket;

    constructor() {
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

    private onWebSocketOpened = () => {
    }

    private onWebSocketClosed = () => {
    }

    private onWebSocketError = (error: Error) => {
    }

    private onWebSocketMessageReceived = (data: RawData) => {
    }
}

export default MarketDataEngineClient;
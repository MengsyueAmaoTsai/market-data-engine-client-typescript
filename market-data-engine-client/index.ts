import EventEmitter from 'events';
import { RawData, WebSocket } from 'ws';

interface MarketDataEngineClient {
  on(event: 'connected', listener: () => void): this;
}

class MarketDataEngineClient extends EventEmitter {
  private websocketClient?: WebSocket;

  constructor() {
    super();
  }

  public connect = (): void => {
    const port = 8080;
    const url = `ws://localhost:${port}`;
    this.websocketClient = new WebSocket(url);
    this.websocketClient
      .on('open', this.onWebSocketOpened)
      .on('close', this.onWebSocketClosed)
      .on('error', this.onWebSocketError)
      .on('message', this.onWebSocketMessageReceived);
  };

  public disconnect = (): void => {};

  public subscribe = (symbol: string): void => {
    const request = {
      clientId: 'market-data-engine-client-1',
      action: 'subscribe',
      symbol: symbol,
    };
    this.websocketClient?.send(JSON.stringify(request));
  };

  public unsubscribe = (symbol: string): void => {
    const request = {
      clientId: 'market-data-engine-client-1',
      action: 'unsubscribe',
      symbol: symbol,
    };
    this.websocketClient?.send(JSON.stringify(request));
  };

  private onWebSocketOpened = (): void => {
    this.emit('connected');
  };

  private onWebSocketClosed = (): void => {};

  private onWebSocketError = (error: Error): void => {};

  private onWebSocketMessageReceived = (data: RawData): void => {};
}

export default MarketDataEngineClient;

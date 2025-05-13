import { 
  OnGatewayConnection, 
  OnGatewayDisconnect, 
  OnGatewayInit, 
  SubscribeMessage,
  WebSocketGateway, 
  WebSocketServer 
} from '@nestjs/websockets';
import { Server,Socket } from 'socket.io';
import { CreateMessagesDto } from './dto/CreateMessage.dto';
import { ChatService } from '../chat.service';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit,OnGatewayConnection,OnGatewayDisconnect{

  constructor(private readonly serviceMessages:ChatService){}

  @WebSocketServer() serve: Server;

  afterInit(server: Server) {
      console.log('WebSocket server initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
      console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: CreateMessagesDto): void {
    this.serviceMessages.createMessage(payload);
    this.serve.emit('message',payload);
  }
}

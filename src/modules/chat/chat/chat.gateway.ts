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
      console.log('WebSocket foi inicializado!');
  }

  handleConnection(client: Socket) {
      console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
      console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: CreateMessagesDto): void {
    this.serviceMessages.createMessage(payload);
    this.serve.emit('message',payload);
  }
}

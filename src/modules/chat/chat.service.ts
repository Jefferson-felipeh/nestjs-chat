import { Injectable } from "@nestjs/common";
import { CreateMessagesDto } from "./chat/dto/CreateMessage.dto";

@Injectable()
export class ChatService{

    private messages: CreateMessagesDto[] = [];

    createMessage(message:CreateMessagesDto){
        this.messages.push(message);
    }

    getAllMessages():CreateMessagesDto[]{
        return this.messages;
    }
}
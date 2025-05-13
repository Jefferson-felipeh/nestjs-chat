import { Body, Controller, Post, Put } from "@nestjs/common";
import { EmailService } from "./email.service";

@Controller('email')
export class EmailController{

    //Instanciando/injetando o service como dependecia_
    constructor(private emailService:EmailService){}

    //Criando um endpoint para envio do email_
    @Post('send')
    sendEmail(@Body() dataBody: {to:string, subject:string, body:string}):void{
        return this.emailService.sendEmail(dataBody.to, dataBody.subject,dataBody.body);
    }
}
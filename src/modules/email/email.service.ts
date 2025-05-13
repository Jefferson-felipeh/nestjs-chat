import { Inject, Injectable } from "@nestjs/common";
import { EMAIL_MODULE_OPTIONS } from "./constants/email.constants";
import { EmailModuleOptions } from "./interface/emailModuleOptions.interface";

@Injectable()
export class EmailService{
    constructor(
        @Inject(EMAIL_MODULE_OPTIONS)
        private readonly options:EmailModuleOptions
    ){}

    sendEmail(to:string,subjet:string,body:string){
        console.log(`Enviando um email para ${to} via ${this.options.host}:${this.options.port}`);
    }
}
import { DynamicModule, Module, Provider, Type } from "@nestjs/common";
import { EmailModuleOptions } from "./interface/emailModuleOptions.interface";
import { EmailService } from "./email.service";
import { EMAIL_MODULE_OPTIONS } from "./constants/email.constants";
import { EmailController } from "./email.controller";

@Module({})
export class EmailModule{
    static register(options:EmailModuleOptions):DynamicModule{
        return{
            module: EmailModule,
            providers: [
                {
                    provide: EMAIL_MODULE_OPTIONS,
                    useValue: options
                },
                EmailService
            ],
            controllers: [EmailController],
            exports: [EmailService] 
        }
    }
}
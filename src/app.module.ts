import { Module } from '@nestjs/common';
import { ChatModule } from './modules/chat/chat.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [
    ChatModule,
    EmailModule.register({
      host: 'gmail',
      port: 555,
      user: 'Jefferson Felipe',
      pass: '12345678'
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

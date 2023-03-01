import { Injectable } from '@nestjs/common';
import {OnEvent} from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @OnEvent("product.getAllItems")
  handleEvent() {
    console.log('EVENT')
  }
}

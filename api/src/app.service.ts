import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      status: 200,
      success: true,
      message: 'Hello World!',
    };
  }
}

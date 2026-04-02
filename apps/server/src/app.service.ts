import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { Redis } from 'ioredis';
import { REDIS_CLIENT } from './redis/redis.module.js';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject(REDIS_CLIENT) private readonly redis: Redis) {}

  async onModuleInit() {
    await this.redis.set('test', 'meridian connected');
    const val = await this.redis.get('test');
    console.log('Redis test:', val);
  }

  getHello(): string {
    return 'Hello World!';
  }
}

import { Module } from '@nestjs/common';
import {LoggerInterceptor} from './logger/logger.interceptor';
import {APP_INTERCEPTOR} from '@nestjs/core';

@Module({
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ]
})
export class CoreModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InputFileModule } from './input-file/input-file.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    InputFileModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/fbc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: false,
      autoLoadEntities: true,
      // Only enable this option if your application is in development,
      // otherwise use TypeORM migrations to sync entity schemas:
      // https://typeorm.io/#/migrations
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

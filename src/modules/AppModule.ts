import { Module } from '@nestjs/common';
import { HealthModule } from "./HealthModule/HealthModule";

@Module({
  imports: [
      HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

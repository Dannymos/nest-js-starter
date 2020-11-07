import { Module } from '@nestjs/common';
import { HealthController } from "./controllers/HealthController";
import { HealthService } from "./services/HealthService";

@Module({
    imports: [],
    controllers: [
        HealthController
    ],
    providers: [
        HealthService
    ],
})

export class HealthModule {}
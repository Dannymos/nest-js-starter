import { HealthService } from '../../../src/modules/HealthModule/services/HealthService';
import {Test, TestingModule} from "@nestjs/testing";

describe('HealthService', () => {
    let healthService: HealthService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [HealthService]
        }).compile();
        healthService = module.get<HealthService>(HealthService);
    });

    describe('getHealth', () => {
        it('should return "Healthy!"', () => {

            expect(healthService.getHealth()).toBe('Healthy!');
        });
    });
});

import { Test, TestingModule } from '@nestjs/testing';
import { authService } from './auth.service';

describe('authService', () => {
  let service: authService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [authService],
    }).compile();

    service = module.get<authService>(authService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

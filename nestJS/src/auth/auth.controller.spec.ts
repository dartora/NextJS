import { Test, TestingModule } from '@nestjs/testing';
import { authController } from './auth.controller';

describe('authController', () => {
  let controller: authController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [authController],
    }).compile();

    controller = module.get<authController>(authController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

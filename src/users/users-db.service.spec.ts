import { Test, TestingModule } from '@nestjs/testing';
import { UsersDbService } from './users-db.service';

describe('UsersDbService', () => {
  let service: UsersDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersDbService],
    }).compile();

    service = module.get<UsersDbService>(UsersDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

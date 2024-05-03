import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('GET /users/ retorna un array de usuarios y código de status 200', async () => {
    //* Supertest => Librería que permite testear Server sin Levantarlo
    const req = await request(app.getHttpServer()).get('/users/');
    console.log(request);
    expect(req.status).toBe(200);
    expect(req.body).toBeInstanceOf(Array);
  });
});

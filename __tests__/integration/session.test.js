import request from 'supertest';
import User from '../../src/app/models/User';
import app from '../../src/app';

import truncate from '../utils/truncate';


describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to authenticate user with valid credentials', async () => {
    const user = await User.create({
      name: 'Guilherme',
      email: 'guifaleiros23@gmail.com',
      password: '12345',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '12345',
      });

    expect(response.status).toBe(200);
  });

  it('should not be authenticated with wrong password', async () => {
    const user = await User.create({
      name: 'Guilherme',
      email: 'guifaleiros23@gmail.com',
      password: '12345',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123451',
      });

    expect(response.status).toBe(401);
  });

  it('should not be authenticated with wrong email', async () => {
    await User.create({
      name: 'Guilherme',
      email: 'guifaleiros23@gmail.com',
      password: '12345',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'guifaleiros21@gmail.com',
        password: '12345',
      });

    expect(response.status).toBe(401);
  });
});

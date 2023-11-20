import request from 'supertest';
import app from '../server.js';

describe('UserController', () => {
  it('should register a new user', async () => {
    try {
      const response = await request(app)
        .post('/signup')
        .send({
          nome: 'Test User',
          email: 'testeee@example.com',
          senha: 'password123',
          telefones: [{ numero: '123456789', ddd: '11' }],
        });
  
      console.log('Response Body:', response.body);
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }, 10000);
  
  

  it('should log in a user', async () => {
    const response = await request(app)
      .post('/signin')
      .send({
        email: 'test@example.com',
        senha: 'password123',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});

import { SignUpController } from './signup.controller';

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        // name: 'Felipe Austríaco',
        email: 'felipe1180@hotmail.com',
        password: 'testpassword',
        passwordConfirmation: 'testpassword',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});

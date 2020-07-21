import FakeMessageRepository from '../repositories/fakes/FakeMessageRepository';
import CreateMessageService from './CreateMessageService';

import AppError from '../errors/AppError';

describe('Create Message', () => {
  it('should ne able to create new Message', async () => {
    const fakeUserRepository = new FakeMessageRepository();
    const createMessage = new CreateMessageService(fakeUserRepository);

    const message = await createMessage.execute({
      subject: 'Creating test message',
      detail: 'Civi App - Testing message',
    });

    expect(message).toHaveProperty('id');
  });
});

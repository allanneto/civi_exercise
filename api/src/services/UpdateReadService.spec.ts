import FakeMessageRepository from '../repositories/fakes/FakeMessageRepository';
import UpdateMessageRead from './UpdateReadService';
import CreateMessageService from './CreateMessageService';

import AppError from '../errors/AppError';

describe('Update Read Message', () => {
  it('should be able to update read status', async () => {
    const fakeUserRepository = new FakeMessageRepository();
    const updateMessage = new UpdateMessageRead(fakeUserRepository);
    const createMessage = new CreateMessageService(fakeUserRepository);

    const message = await createMessage.execute({
      subject: 'Creating test message',
      detail: 'Civi App - Testing message',
    });

    const updatedMessage = await updateMessage.execute(message.id);

    expect(updatedMessage.read).toBe(true);
  });
});

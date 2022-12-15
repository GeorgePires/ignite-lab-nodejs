import { Notification } from '@app/entities/notification';
import { NotificationsRespository } from '@app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRespository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

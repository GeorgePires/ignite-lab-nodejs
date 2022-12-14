import { Notification } from '../../src/app/entities/notification';
import { NotificationsRespository } from '../../src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRespository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}

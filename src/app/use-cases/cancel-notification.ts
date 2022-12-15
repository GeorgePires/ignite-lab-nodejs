import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRespository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificaionRequest {
  notificationId: string;
}

type CancelNotificaionResponse = void;

@Injectable()
export class CancelNotificaion {
  constructor(private notificationsRepository: NotificationsRespository) {}

  async execute(
    request: CancelNotificaionRequest,
  ): Promise<CancelNotificaionResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }
  }
}

export interface NotificationData {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createAt: Date;
}
export class Notification {
  private data: NotificationData;

  constructor(data: NotificationData) {
    this.data = data;
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set content(content: string) {
    this.data.content = content;
  }

  public get content(): string {
    return this.data.content;
  }

  public set category(category: string) {
    this.data.category = category;
  }

  public get category(): string {
    return this.data.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.data.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public get createAt(): Date {
    return this.data.createAt;
  }
}

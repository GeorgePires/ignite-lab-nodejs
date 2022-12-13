import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  // Attributes validator
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}

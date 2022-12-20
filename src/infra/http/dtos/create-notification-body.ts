import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  // Attributes validator
  @ApiProperty({
    description: 'Notification example',
    minimum: 5,
    maximum: 240,
  })
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  category: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}

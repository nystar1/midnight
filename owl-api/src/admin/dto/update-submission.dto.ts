import { IsOptional, IsString, IsNumber, IsEnum, MaxLength, IsBoolean } from 'class-validator';

export class UpdateSubmissionDto {
  @IsNumber()
  @IsOptional()
  approvedHours?: number;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  hoursJustification?: string;

  @IsEnum(['pending', 'approved', 'rejected'])
  @IsOptional()
  approvalStatus?: 'pending' | 'approved' | 'rejected';

  @IsBoolean()
  @IsOptional()
  sendEmail?: boolean;
}

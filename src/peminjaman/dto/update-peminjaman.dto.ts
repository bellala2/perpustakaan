import { IsEnum } from 'class-validator';
import { peminjaman_status } from '@prisma/client';

export class UpdatePeminjamanDto {
  @IsEnum(peminjaman_status)
  status!: peminjaman_status;
}
import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePeminjamanDto {
  @ApiProperty({ example: 1, description: 'ID Buku yang dipinjam' })
  @IsInt()
  @IsNotEmpty()
  bookId!: number;

  @ApiProperty({ example: 1, description: 'ID Siswa yang meminjam' })
  @IsInt()
  @IsNotEmpty()
  studentId!: number;
}
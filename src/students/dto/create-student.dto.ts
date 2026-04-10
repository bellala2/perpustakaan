import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({ example: '12345', description: 'Nomor Induk Siswa' })
  nis: string;

  @ApiProperty({ example: 'Bella', description: 'Nama Lengkap Siswa' })
  name: string;

  @ApiProperty({ example: 'bella@mail.com', description: 'Email Aktif' })
  email: string;

  @ApiProperty({ example: 'XII-RPL', description: 'Kelas Siswa' })
  kelas: string;

  @ApiProperty({ example: 'Rekayasa Perangkat Lunak', description: 'Jurusan Siswa' })
  jurusan: string;
}
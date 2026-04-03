import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ example: 'bella_putri' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: 'password123' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiPropertyOptional({ enum: ['ADMIN', 'PETUGAS', 'MEMBER'], example: 'MEMBER' })
    @IsOptional()
    @IsEnum(['ADMIN', 'PETUGAS', 'MEMBER'])
    role?: 'ADMIN' | 'PETUGAS' | 'MEMBER';

}
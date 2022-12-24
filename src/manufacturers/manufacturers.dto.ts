import { Disc, Plastic } from '@prisma/client';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class ManufacturerDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsArray()
  public discs: Disc[];

  @IsArray()
  public plastics: Plastic[];
}

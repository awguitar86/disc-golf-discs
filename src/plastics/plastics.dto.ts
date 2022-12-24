import { IsString, IsNotEmpty } from 'class-validator';

export class PlasticDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public manufacturerId: string;
}

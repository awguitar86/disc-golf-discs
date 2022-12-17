import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class DiscsDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNumber()
  @IsNotEmpty()
  public speed: number;

  @IsNumber()
  @IsNotEmpty()
  public glide: number;

  @IsNumber()
  @IsNotEmpty()
  public turn: number;

  @IsNumber()
  @IsNotEmpty()
  public fade: number;

  @IsNumber()
  @IsNotEmpty()
  public maxWeight: number;

  @IsNumber()
  @IsNotEmpty()
  public height: number;

  @IsNumber()
  @IsNotEmpty()
  public diameter: number;

  @IsNumber()
  @IsNotEmpty()
  public rimWidth: number;

  @IsNumber()
  @IsNotEmpty()
  public rimDepth: number;

  @IsString()
  @IsNotEmpty()
  public manufacturerId: string;
}

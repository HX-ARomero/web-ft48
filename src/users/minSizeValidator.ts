import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MinSizeValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const minSize = 10000;

    if (value.size < minSize) {
      throw new BadRequestException('Tamaño mínimo de 10kb');
    }
    return value;
  }
}

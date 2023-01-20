import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyDiscount',
})
export class ApplyDiscountPipe implements PipeTransform {
  transform(value: number, pc: number): number {
    return value - value * (pc / 100);
  }
}

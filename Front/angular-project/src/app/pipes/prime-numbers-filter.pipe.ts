import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeNumbersFilter'
})
export class PrimeNumbersFilterPipe implements PipeTransform {

  transform(array: any[], ...args: unknown[]): number[] | string {
    let result: number[] = []
    try {
      for (let value of array) {
        if (!isNaN(Number(value))) {
          if (value > 1) {
            if (value == 2) {
              result.push(value)
            } else if (value % 2 != 0) {
              let isPrime = false;
              for(let i = 2; i <= Math.sqrt(value); i ++) {
                if (value % i == 0) {
                  isPrime = true;
                  break;
                }
              }
              if (!isPrime) {
                result.push(value);
              }
            }
          }
        }
      }
    } catch (error) {
    }
    
    if (result.length > 0) {
      return result;
    }
    return "No se encontraron números primos.";
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: any[], args?: string): any {
    if (args === '' || args === undefined) {
      return value;
    }

    return value.filter((item) =>
      item.title.toLowerCase().includes(args.toLowerCase())
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sample4',
})
export class Sample4Pipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length < limit ? value : value.slice(0, limit) + '...';
  }
}

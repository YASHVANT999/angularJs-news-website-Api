import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angularCLI',
})
export class AngularCLIPipe implements PipeTransform {
  transform(value: string, length: number): string {
    return value.substring(0, length);
  }
}

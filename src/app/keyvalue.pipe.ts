import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyvalue'
})
export class KeyvaluePipe implements PipeTransform {

  transform(value: { [key: string]: any }): { key: string, value: any }[] {
    if (!value) {
      return [];
    }
    return Object.keys(value).map(key => ({ key, value: value[key] }));
  }

}

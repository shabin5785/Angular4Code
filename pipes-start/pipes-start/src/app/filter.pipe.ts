import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string, propName : string): any {
    if(value.length===0 || filterString==='') {
      return value;
    }
    const result = [];
    for(const v of value){
      if(v[propName]=== filterString){
        result.push(v);
      }
    }
    return result
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataArray: any[], sdata: string, DataKey: string): any {

    const result: any = []

    if (!dataArray || !sdata || !DataKey) {
      return dataArray
    }
    else {
      dataArray.forEach((item: any) => {
        if (item[DataKey].trim().toLowerCase().includes(sdata.trim().toLowerCase())) {
          result.push(item)
          // console.log(typeof searchString);
          // console.log(searchString);

        }

      })
      return result

    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, format: string = 'DD/MM/YYYY'): string {
    return moment(value).format(format);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

import * as zxcvbn from 'zxcvbn';

@Pipe({
  name: 'progressBar'
})
export class ProgressBarPipe implements PipeTransform {
  numberProgress = {
    0: 20,
    1: 20,
    2: 40,
    3: 65,
    4: 100
  }

  transform(value: any): any {
    if (!value) {
      return 0;
    }
    console.log('number score', this.numberProgress[zxcvbn(value).score])
    return this.numberProgress[zxcvbn(value).score];
  }

}

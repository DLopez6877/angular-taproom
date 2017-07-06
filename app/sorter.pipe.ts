import {Pipe, PipeTransform} from '@angular/core';
import {Beer} from './beer.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {


  transform(input: Beer[], desiredFilter) {
    var output: Beer[] = [];
    if(desiredFilter === "showMostPopular") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].popular === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "showStaffPicks") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].staffPick === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}

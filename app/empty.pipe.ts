// import {Pipe, PipeTransform} from 'angular2/core';
// import {Keg} from './keg.model';
//
// @Pipe({
//   name: "empty",
//   pure: false
// })
// export class EmptyPipe implements PipeTransform {
//   transform(input: Keg[], args) {
//     var desiredPriority = args[0];
//     if(desiredPriority === "Full") {
//       return input.filter((keg) => {
//          [class.full] = "keg.pints > 80"});
//     } else if (desiredPriority === "Medium") {
//       return input.filter((keg) => {
//         return keg.pints > 11});
//     } else if (desiredPriority === "Low") {
//       return input.filter((keg) => {
//         return keg.pints < 11 });
//     } else {
//       return input;
//     }
//   }
// }

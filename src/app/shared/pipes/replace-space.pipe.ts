import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' //TODO: <== nombre de tu pipe
})
export class ReplaceSpacePipe implements PipeTransform {

  //TODO NickName: (Hola soy pepe) == hola-soy-pepe
  transform(value: string, args?:string): string {
    // return null; //TODO: <== estamos retornandu un null
    value = value.split(' ').join(args).toLocaleLowerCase()
    return value;
  }

}

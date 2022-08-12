import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.lenght < 3) return value;
    const resultPosts = [];
    for(const Re of value){
      if (Re.Titulo.toLowerCase().indexOf(arg.toLowerCase) > -1){
        resultPosts.push(Re);
      };
    };
    return resultPosts;
  }

}

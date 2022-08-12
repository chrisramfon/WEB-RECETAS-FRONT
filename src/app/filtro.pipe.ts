import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, campo:string, ...args: any[]): any {
    if(!value)return null;
    if(!args)return value;

    return value.filter(singleItem =>
      singleItem[campo].toLowerCase().includes(args));

       /*
       value: any, arg: any
       if(arg === '' || arg.lenght < 3) return value;
  const resultPosts = [];
  for(const Re of value){
    if (Re.Titulo.toLowerCase().indexOf(arg.toLowerCase) > -1){
      resultPosts.push(Re);
    };
  };
  return resultPosts;*/
  }

}



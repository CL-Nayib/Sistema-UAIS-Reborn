import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../interfaces/searchengine.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(users: Users[], page: number = 0, search: string = ''): Users[] {

    if (search.length == 0) {
      return users.slice(page, page + 4);
    }

    const filteredUsers = users.filter(user => user.name.includes(search));
    return filteredUsers.slice(page, page + 5);

  }

}

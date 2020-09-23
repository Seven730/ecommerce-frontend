import { HttpClient } from '@angular/common/http';

interface IListService {
  // getList(url: string): string[];
}
export class ListService implements IListService {
  getList(url) {
    const list = HttpClient;
    console.log(list);
    return ['a', 'b'];
  }
}

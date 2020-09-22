interface IListService {
  url: string;
  // getList(): string[];
}

export class ListService implements IListService {
  url = 'http://127.0.0.1:8000/api/book/?format=json';
  async getList() {
    let list = await fetch(this.url)
      .then((response) => response.json())
      .then((data) => data);
    console.log(list.map((book) => book.title));
    return ['a', 'b'];
  }
}

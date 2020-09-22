export class ListService {
  url: string = 'http://127.0.0.1:8000/api/book/?format=json';
  getList() {
    fetch(this.url)
      .then((response) => response.json)
      .then((data) => console.log(data));
  }
}

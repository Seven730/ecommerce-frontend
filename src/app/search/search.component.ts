import { ListService } from './../list/list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  value = '';
  message: string;
  @Output() myEvent = new EventEmitter();

  constructor(private service: ListService) {}

  setUrl(value) {
    this.service.changeMessage(value);
    this.myEvent.emit(null);
  }

  ngOnInit() {
    this.service.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}

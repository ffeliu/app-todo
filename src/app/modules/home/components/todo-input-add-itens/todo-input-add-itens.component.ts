import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() public emitItemTaskList = new EventEmitter();

  public itemToAdd: string = "";

  public submitItemTaskList() {
    if(this.itemToAdd.trim().length > 0 ){
      this.emitItemTaskList.emit(this.itemToAdd);
      this.itemToAdd = "";
    }
  }
}

import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = [
    {description: "Teste 1", finalizada:false},
    {description: "Teste 2", finalizada:false},
    {description: "Teste 3", finalizada:false},
    {description: "Teste 4", finalizada:false},
    {description: "Teste 5", finalizada:false},
  ];

  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.finalizada) - Number(last.finalizada));
   }

  ngOnInit(): void {
  }

  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll(){
    let confirmDelete = window.confirm("Deseja excluir todos os itens?");
    if(confirmDelete){
      this.taskList = [];
    }
  }

  public addItem(event: string){
    this.taskList.push({description: event, finalizada: false});
  }

  public validationInput(event: string, index: number){
    if(event.length == 0){
      let confirm = window.confirm("Deseja excluir esse item?");

      if(confirm)
      {
        this.taskList.splice(index, 1);
      }
    }
  }
}

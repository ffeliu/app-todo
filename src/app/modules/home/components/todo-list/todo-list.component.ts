import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {description: "Teste 1", finalizada:false},
    {description: "Teste 2", finalizada:true},
    {description: "Teste 3", finalizada:false},
  ];

  constructor() { }

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

}

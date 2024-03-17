import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskGroupComponent } from './components/task-group/task-group.component';
import { TaskStatus, TaskGroup, TaskItem } from './types/TypesTasks';
import { Button } from "../ui/button/button.component";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskGroupComponent, Button, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public taskGroups: TaskGroup[];

  constructor() {
    this.taskGroups = [{
      title: 'Группа задач',
      items: [{
        title: 'Задача в работе',
        description: 'Описание задачи',
        status: TaskStatus.IN_PROGRESS
      },
      {
        title: 'Задача без статуса',
        description: 'Описание задачи',
        status: TaskStatus.NOT_STARTED
      },
      {
        title: 'Задача выполнена',
        description: 'Описание задачи',
        status: TaskStatus.DONE
      }
      ]
    }]
  }

  public addGroup(): void {
    let tempGroup: TaskGroup = {
      title: '',
      items: []
    }

    this.taskGroups.unshift(tempGroup)
  }

  public handleChangeTitle(value: { value: string, index: number }): void {
    this.taskGroups[value.index].title = value.value;
  }

  public handleDeleteGroup(value: number) {
    this.taskGroups.splice(value, 1)
  }

  public handleNewItem(value: { item: TaskItem, index: number }) {
    this.taskGroups[value.index].items.push(value.item);
  }

  public handleChangeDescription(value: { description: string, indexGroup: number, indexItem: number }) {
    this.taskGroups[value.indexGroup].items[value.indexItem].description = value.description;
  }

  public handleChangeStatus(value: { status: TaskStatus, indexItem: number, groupIndex: number }): void {
    this.taskGroups[value.groupIndex].items[value.indexItem].status = value.status;
  }

  public handleDeleteItem(value: { indexItem: number, indexGroup: number }): void {
    this.taskGroups[value.indexGroup].items.splice(value.indexItem, 1);
  }

}

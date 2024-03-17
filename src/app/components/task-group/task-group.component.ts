import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskGroup, TaskItem } from '../../types/TypesTasks';
import { TaskDoneComponent } from '../task/task-done/task-done.component';
import { TaskInProgressComponent } from '../task/task-in-progress/task-in-progress.component';
import { TaskNotStartedComponent } from '../task/task-not-started/task-not-started.component';
import { TaskStatus } from '../../types/TypesTasks';
import { Button } from "../../../ui/button/button.component";
import { InputComponent } from "../../../ui/input/input.component";


@Component({
  "selector": 'app-task-group',
  "standalone": true,
  "imports": [
    CommonModule,
    TaskDoneComponent,
    TaskInProgressComponent,
    TaskNotStartedComponent,
    Button,
    InputComponent
  ],
  "templateUrl": './task-group.component.html',
  "styleUrl": './task-group.component.scss'
})
export class TaskGroupComponent implements OnInit {

  @Input() taskGroup!: TaskGroup;
  @Input() index!: number;

  @Output() changeTitleEvent: EventEmitter<{
    value: string, index: number
  }> = new EventEmitter<{ value: string, index: number }>()

  @Output() deleteGroup = new EventEmitter<number>();

  @Output() addNewItem = new EventEmitter<{
    item: TaskItem, index: number
  }>();

  @Output() changeDescription = new EventEmitter<{
    description: string, indexGroup: number, indexItem: number
  }>();

  @Output() changeItemStatus = new EventEmitter<{
    status: TaskStatus, indexItem: number, groupIndex: number
  }>()

  @Output() deleteItem = new EventEmitter<{
    indexItem: number, indexGroup: number
  }>()

  public isShowTitle = true;

  public groupTitle: string = '';


  ngOnInit(): void {
    this.groupTitle = this.taskGroup.title;

    if (this.taskGroup.title === '') {
      this.isShowTitle = false;
    }
  }

  public onEnterValue(): void {
    this.isShowTitle = true;
    this.changeTitleEvent.emit({
      value: this.groupTitle! || 'Без названия',
      index: this.index
    });
  }

  public deleteGroupEvent(): void {
    this.deleteGroup.emit(this.index);
  }

  public addNewTask(value: string) {
    console.log(this.addNewItem);
    this.addNewItem.emit({
      item: {
        status: TaskStatus.NOT_STARTED,
        title: value || 'Без названия',
        description: '',
      },
      index: this.index
    })
  }

  public handleChangeItemDescription(value: { description: string, index: number }): void {
    this.changeDescription.emit({ description: value.description, indexGroup: this.index, indexItem: value.index });
  }

  public handleChangeStatus(value: { status: TaskStatus, index: number }): void {
    this.changeItemStatus.emit({ status: value.status, indexItem: value.index, groupIndex: this.index });
  }

  public handleDeleteItem(value: number) {
    this.deleteItem.emit({ indexItem: value, indexGroup: this.index })
  }
}

import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskStatus, TaskItem } from '../../../types/TypesTasks';

@Directive({
  selector: 'task-base',
  standalone: true,
})
export class TaskBaseComponent implements OnInit {
  @Input() taskItem!: TaskItem;
  @Input() index!: number;

  @Output() eventChangeDescription = new EventEmitter<{ description: string, index: number }>();

  @Output() changeStatus = new EventEmitter<{ status: TaskStatus, index: number }>()

  @Output() deleteItem = new EventEmitter<number>()

  public taskStatus = TaskStatus;

  public isShowDescriptions = false;

  public description?: string;

  ngOnInit(): void {
    this.description = this.taskItem.description;
  }

  public emitChangeDescription(value: string): void {
    this.eventChangeDescription.emit({ description: value, index: this.index });
  }

  public emitChangeStatus(value: TaskStatus): void {
    this.changeStatus.emit({ status: value, index: this.index })
  }

  public emitDeleteItem(): void {
    this.deleteItem.emit(this.index)
  }

}

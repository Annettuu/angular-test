import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskBaseComponent } from '../task-base/task-base.component';
import { Button } from "../../../../ui/button/button.component";

@Component({
  selector: 'app-task-done',
  standalone: true,
  imports: [CommonModule, FormsModule, Button],
  templateUrl: './task-done.component.html',
  styleUrl: './task-done.component.scss',
})
export class TaskDoneComponent extends TaskBaseComponent {}

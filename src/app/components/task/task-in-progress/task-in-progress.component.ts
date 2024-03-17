import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskBaseComponent } from '../task-base/task-base.component';
import { Button } from "../../../../ui/button/button.component";


@Component({
  selector: 'app-task-in-progress',
  standalone: true,
  imports: [CommonModule, FormsModule, Button],
  templateUrl: './task-in-progress.component.html',
  styleUrl: './task-in-progress.component.scss'
})
export class TaskInProgressComponent extends TaskBaseComponent {}

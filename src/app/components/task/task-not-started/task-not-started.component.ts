import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskBaseComponent } from '../task-base/task-base.component';
import { Button } from "../../../../ui/button/button.component";


@Component({
  selector: 'app-task-not-started',
  standalone: true,
  imports: [CommonModule, FormsModule, Button],
  templateUrl: './task-not-started.component.html',
  styleUrl: './task-not-started.component.scss'
})
export class TaskNotStartedComponent extends TaskBaseComponent {}

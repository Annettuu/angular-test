export interface TaskGroup {
    title: string;
    items: TaskItem[];
}

export interface TaskItem {
    title: string;
    status: TaskStatus;
    description: string;
}

export enum TaskStatus {
    NOT_STARTED = 'not_started',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
}

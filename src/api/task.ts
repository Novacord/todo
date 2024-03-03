import { TaskModel } from '../models'
import { ENV } from '../utils'

export class Task {
    create( task: TaskModel ) {
        const tasks: TaskModel[] = this.obtain()
        tasks.push(task)
        localStorage.setItem(ENV.LOCAL_STORAGE.TASKS, JSON.stringify(tasks))
    }

    obtain(): TaskModel[] {
        const response = localStorage.getItem(ENV.LOCAL_STORAGE.TASKS)
        if (!response) return []
        return JSON.parse(response)
    }

    changeAllTasks(task: TaskModel[]) {
        localStorage.setItem(ENV.LOCAL_STORAGE.TASKS, JSON.stringify(task))
    }

    delete(taskId: string) {
        let tasks: TaskModel[] = this.obtain();
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem(ENV.LOCAL_STORAGE.TASKS, JSON.stringify(tasks));
    }
}
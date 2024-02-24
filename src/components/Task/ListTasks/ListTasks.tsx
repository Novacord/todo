import { IonCheckbox } from '@ionic/react'
import { map, size } from 'lodash'
import { useTasks } from '../../../hooks'
import { TaskModel } from'../../../models'
import { TaskItem } from '../TaskItem'
import './ListTasks.scss'

export function ListTasks() {
    
    const { tasks, completedTask } = useTasks()

    console.log(tasks)

  return (
    <div className='list-tasks'>
        {size(tasks) === 0 && size(completedTask) === 0 && (
          <p className='list-tasks__no-found'>Empieza a crear tus tareas</p>
        )}

        {size(tasks) > 0 && (
          <h3> Tareas </h3>
        )}

        { map(tasks, (task: TaskModel) => (
          <TaskItem key={task.id} task={task} />
        ) ) }

        {size(completedTask) > 0 && (
          <h3> Tareas completadas </h3>
        )}

        { map(completedTask, (task: TaskModel) => (
          <TaskItem key={task.id} task={task} />
        ) ) }
    </div>
  )
}
import { useState, useEffect, useRef, createContext } from 'react'
import { map, size } from 'lodash'
import { IonModal, IonContent } from '@ionic/react'
import { TasksContextTypes } from './TasksContext.type'
import { TaskForm } from '../../components/Task'
import { TaskModel } from '../../models'
import { Task } from '../../api'
import { checkbox } from 'ionicons/icons'

const TasksController = new Task()

export const TasksContext = createContext<TasksContextTypes.Context>({
  totalTask: 0,
  totalTaskCompleted: 0,
  tasks: [],
  completedTask: [],
  openFormTask: () => {},
  createTask: () => {},
  checkUncheckCompleted: () => {},
})

export function TasksProvider( props: TasksContextTypes.Props ) {

    const {children} = props

    const modalRef = useRef<HTMLIonModalElement>(null)

    const [ tasks, setTasks ] = useState<TaskModel []>([])

    const [ completedTask, setCompletedTask ] = useState<TaskModel []>([])

    const openFormTask = () => modalRef.current?.present()

    const closedFormTask = () => modalRef.current?.dismiss()

    const [ totalTask, setTotalTask] = useState(0)

    const [ totalTaskCompleted, setTotalTaskCompleted] = useState(0)

    useEffect(() => {
      obtainTask()
    }, [])

    const createTask = ( task: TaskModel ) => {
      TasksController.create(task)
      obtainTask()
    }

    const obtainTask = () => {
      const response = TasksController.obtain()

      response.sort(
        (a,b)=> new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )

      const tasksTemp = response.filter((task)=> !task.completed)

      const completedTaskTemp = response.filter((task)=> task.completed)

      setTasks(tasksTemp)

      setCompletedTask(completedTaskTemp)

      setTotalTask(size(response))
      setTotalTaskCompleted(size(completedTaskTemp))
    }

    const checkUncheckCompleted = (id:string, check: boolean) => {
      const newTask = [...tasks, ...completedTask]
      newTask.filter((task)=>{
        if(task.id === id) task.completed = check
      })

      TasksController.changeAllTasks(newTask)
      obtainTask()
    }

    const valueContext: TasksContextTypes.Context = {
      totalTask,
      totalTaskCompleted,
      tasks,
      completedTask,
      openFormTask,
      createTask,
      checkUncheckCompleted,
    }

  return (
    <TasksContext.Provider value={valueContext}>
      {children}

      <IonModal ref={modalRef} trigger='open-modal' initialBreakpoint={0.25} breakpoints={[ 0, 0.25 ]}>
        <IonContent className='Ion-padding'>
          <TaskForm onClose={closedFormTask} />
        </IonContent>
      </IonModal>
    </TasksContext.Provider>
  )
}

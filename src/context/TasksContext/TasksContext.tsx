import { useState, useEffect, useRef, createContext } from 'react'
import { IonModal, IonContent } from '@ionic/react'
import { TasksContextTypes } from './TasksContext.type'
import { TaskForm } from '../../components/Task'

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

    const openFormTask = () => modalRef.current?.present()

    const closedFormTask = () => modalRef.current?.dismiss()

    const valueContext: TasksContextTypes.Context = {
      totalTask: 10,
      totalTaskCompleted: 3,
      tasks: [],
      completedTask: [],
      openFormTask,
      createTask: () => {},
      checkUncheckCompleted: () => {},
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

import { useState, useEffect, useRef, createContext } from 'react'
import { TasksContextTypes } from './TasksContext.type'

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

    const valueContext: TasksContextTypes.Context = {
      totalTask: 10,
      totalTaskCompleted: 3,
      tasks: [],
      completedTask: [],
      openFormTask: () => {},
      createTask: () => {},
      checkUncheckCompleted: () => {},
    }

  return (
    <TasksContext.Provider value={valueContext}>
      {children}
    </TasksContext.Provider>
  )
}

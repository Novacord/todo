import { IonInput, IonButton, IonSpinner } from '@ionic/react'
import { TaskFormTypes } from './TaskForm.type'
import './TaskForm.scss'

export function TaskForm(props: TaskFormTypes.Props) {
    const { onClose } = props
  return (
    <div className='task-form'>
      <IonInput placeholder='descripcion de la tarea' />
      <IonButton expand='block'>
        Crear
      </IonButton>
    </div>
  )
}

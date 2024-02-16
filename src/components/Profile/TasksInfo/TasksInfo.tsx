import { IonGrid, IonRow, IonCol, IonText } from '@ionic/react'
import { useTasks } from '../../../hooks'
import './TasksInfo.scss'

export function TasksInfo() {

    const { totalTask, totalTaskCompleted } = useTasks()

  return (
    <div className='tasks-info-container'>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText color='dark'>{totalTask}</IonText>
                    <IonText color='dark'>Tareas</IonText>
                </IonCol>
                <IonCol>
                    <IonText color='dark'>{totalTaskCompleted}</IonText>
                    <IonText color='dark'>Completadas</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}

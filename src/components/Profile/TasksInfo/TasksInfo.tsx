import { IonGrid, IonRow, IonCol, IonText } from '@ionic/react'
import './TasksInfo.scss'

export function TasksInfo() {
    const totalTasks = 100
    const totalTasksCompleted = 37
  return (
    <div className='tasks-info-container'>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText color='dark'>{totalTasks}</IonText>
                    <IonText color='dark'>Tareas</IonText>
                </IonCol>
                <IonCol>
                    <IonText color='dark'>{totalTasksCompleted}</IonText>
                    <IonText color='dark'>Completadas</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}

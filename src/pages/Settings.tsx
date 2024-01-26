import { IonPage, IonContent } from '@ionic/react'
import { Avatar, TasksInfo, MenuOptions } from '../components/Profile'
import './settings.scss'

export function Settings() {

  return (
    <IonPage>
      <IonContent>
        <Avatar/>
        <TasksInfo/>
        <MenuOptions/>
      </IonContent>
    </IonPage>
  )
}

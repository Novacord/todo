import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { Header } from '../components'
import { ListTasks } from '../components/Task'

export function Tasks() {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
          {/* <IonToolbar>
            <IonTitle size='large'>
              Lista de tareas
            </IonTitle>
          </IonToolbar> */}
          <IonContent>  
            <ListTasks />
          </IonContent>
      </IonContent>
    </IonPage>
  )
}


import { IonHeader, IonAvatar, IonProgressBar, IonText, IonIcon } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'
import { useUser, useTasks } from '../../hooks'
import './Header.scss'

export function Header() {

    const { avatar } = useUser()

    const {totalTask, totalTaskCompleted } = useTasks()

    const valueBar = totalTaskCompleted / totalTask

  return (
    <IonHeader className='custom-header'>
        <div className='custom-header__top'>
            <IonAvatar>
                <img src={avatar} />
            </IonAvatar>
            <IonIcon icon={addCircleOutline} />
        </div>
        <div className='progress'>
            <IonText color='dark' className='progress__title'>
                Tu progreso
            </IonText>
            <div className='progress__info'>
                <IonText color='dark'>
                    Tareas
                </IonText>
                <IonText color='dark'>
                    {totalTaskCompleted}/{totalTask}
                </IonText>
            </div>
            <IonProgressBar value={valueBar} className='progress__bar' />
        </div>
    </IonHeader>
  )
}

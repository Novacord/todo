import { IonIcon } from '@ionic/react'
import { chevronForwardOutline } from 'ionicons/icons'
import { OptionTypes } from './option.type'
import './Option.scss'

export function Option(props: OptionTypes.Props) {

    const { title, icon, onclick } = props

  return (
    <div className='option' onClick={onclick}>
        <div>
            <IonIcon icon={icon} />
            <span>{title}</span>
        </div>
        <IonIcon icon={chevronForwardOutline} />
    </div>
  )
}

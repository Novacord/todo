import { useRef } from 'react'
import { IonModal, IonContent } from '@ionic/react'
import { imageOutline, personCircleOutline } from 'ionicons/icons'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { useUser } from '../../../hooks'
import { ChangeNameForm} from '../ChangeNameForm'
import { Option } from './Option'
import './MenuOptions.scss'

export function MenuOptions() {
    
    const modalRef = useRef<HTMLIonModalElement>(null)

    const { onChangeAvatar } = useUser() 

    const openChangeName = () => modalRef.current?.present()

    const closeModal = () => modalRef.current?.dismiss()

    const openGallery = async () => {
      const response = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        quality: 100,
      });
    
      console.log(response);
    
      if (response.dataUrl) {
        onChangeAvatar(response.dataUrl);
      }
    };

  return (
    <>
        <div className='menu-options-container'>
            <Option title='Cambiar avatar' icon={imageOutline} onclick={openGallery}/>
            <Option title='Cambiar nombre' icon={personCircleOutline} onclick={openChangeName}/>
        </div>
        <IonModal ref={modalRef} trigger='open-modal' initialBreakpoint={0.35} breakpoints={[0, 0.35]}>
          <IonContent className='ion-padding'>
            <ChangeNameForm onClose={closeModal} />
          </IonContent>
        </IonModal>
    </>
  )
}

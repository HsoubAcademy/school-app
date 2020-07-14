import React from 'react';
import { IonLabel, IonCard, IonCardContent } from '@ionic/react';

class Loading extends React.Component<any, any> {
    render() {
        return(
                <IonCard>
                    <IonCardContent>
                        <IonLabel className="center-message">جارٍ التحميل</IonLabel>
                    </IonCardContent> 
                </IonCard>
            )
    }
}
export default Loading; 

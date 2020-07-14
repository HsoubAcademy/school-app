import React from 'react';
import { IonLabel, IonCard, IonCardContent } from '@ionic/react';

class NoItems extends React.Component<any, any> {
    render() {
        return(
                <IonCard>
                    <IonCardContent>
                        <IonLabel className="center-message">{this.props.text}</IonLabel>
                    </IonCardContent> 
                </IonCard>
            )
    }
}
export default NoItems; 

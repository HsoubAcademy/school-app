import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonTitle } from '@ionic/react';
import { logOut } from 'ionicons/icons';

class Header extends React.Component<any, any> {
    render() {
        return(
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref={this.props.backRoute} />
                </IonButtons>
                
                <IonTitle>{this.props.title}</IonTitle>

                {this.props.logoutRoute ? (
                <IonButtons slot="end">
                    <IonButton routerLink="/login">
                    <IonIcon slot="start" color="light" icon={logOut} />
                    </IonButton>
                </IonButtons>
                ):""}
            </IonToolbar>
          </IonHeader>
            )
    }
}
export default Header; 

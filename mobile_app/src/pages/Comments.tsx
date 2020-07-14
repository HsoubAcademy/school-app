import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonAvatar, IonCard, IonLabel, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './General.css';


class ExamsResults extends React.Component {
  render(){
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>التعليقات</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonAvatar className="avatar-25">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggkmDAjlk-immNIahB_dSYCjwr0nnymGAezPr4uX_XNoBZcS9&s" alt="" />
              </IonAvatar>
              <span> أحمد الشامي </span>
              <i>23-10-2019 10:30AM</i>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel>
              عمل رائع جداً بارك الله تعالى بكم
            </IonLabel>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
            <IonAvatar className="avatar-25">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggkmDAjlk-immNIahB_dSYCjwr0nnymGAezPr4uX_XNoBZcS9&s" alt="" />
              </IonAvatar>
              <span> أحمد الحلبي </span>
              <i>23-10-2019 10:30AM</i>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel>
              عمل رائع جداً بارك الله تعالى بكم
            </IonLabel>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
}
}

export default ExamsResults;

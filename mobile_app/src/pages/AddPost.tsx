import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonTextarea, IonItem, IonLabel, IonButton } from '@ionic/react';


  class AddPost extends React.Component {
    render(){
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>إضافة منشور</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">اكتب منشورك الآن...</IonLabel>
          <IonTextarea rows={7}></IonTextarea>
        </IonItem>
        <IonButton color="primary" expand="full">نشر</IonButton>
      </IonContent>
    </IonPage>
  );
}}

export default AddPost;

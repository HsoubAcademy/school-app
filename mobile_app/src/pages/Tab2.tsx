import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonAvatar, IonCard, IonCardContent, IonCardHeader,  IonCardSubtitle, IonIcon, IonGrid, IonRow, IonButton, IonCol } from '@ionic/react';
import { thumbsUp, create } from 'ionicons/icons';
import './Tab2.css';

  class Tab2 extends React.Component {
    render(){
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>المشاركات</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
              <IonItem routerLink="/tab2/AddPost">
                <IonLabel>
                  <h2>أضف مشاركتك الآن ...</h2>
                </IonLabel>
              </IonItem>

            <IonCard>
              <IonCardHeader>
                  <IonAvatar>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggkmDAjlk-immNIahB_dSYCjwr0nnymGAezPr4uX_XNoBZcS9&s" alt="" />
                  </IonAvatar>
                  <IonLabel>
                    اسم الطالب
                    <i>23-10-2019 10:30AM</i>
                  </IonLabel>                
              </IonCardHeader>

              <IonCardContent>
                نص المنشور نص المنشور نص المنشور نص المنشور نص المنشور نص المنشور نص المنشور
          </IonCardContent>
              <IonGrid>
                <IonRow class="react-info">
                  <IonCol size="6" className="react-info-likes">
                    <span>12</span> إعجاباً
                </IonCol>
                  <IonCol size="6" className="react-info-comments">
                    <span>15</span><a href="/tab2/Comments"> تعليقاً</a> 
                </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonButton>
                      <IonIcon icon={thumbsUp}></IonIcon>
                      أعجبني
                    </IonButton>
                  </IonCol>
                  <IonCol size="6">
                    <IonButton routerLink="/tab2/AddComment">
                      <IonIcon icon={create}></IonIcon>
                      تعليق
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          </IonContent>
        </IonPage>
      );
  }
}

export default Tab2;
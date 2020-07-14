import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, codeWorking, grid, clipboard, notifications, paper, hand, globe, logOut } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

class Tab1 extends React.Component {
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>الصفحة الرئيسية</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>

          {/* List */}
          <IonList>
            <IonItemDivider>
              <IonLabel>
                وظائف التطبيق
            </IonLabel>
            </IonItemDivider>
            <IonItem routerLink="/tab1/ClassesSchedule">
              <IonIcon slot="start" color="medium" icon={book} />
              <IonLabel class="ion-text-wrap">
                <h2> البرنامج الأسبوعي</h2>
                <p>استعراض جميع الصفوف التدريسية التي يتم إعطاؤها</p>
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/tab1/Homeworks">
              <IonIcon slot="start" color="medium" icon={codeWorking} />
              <IonLabel class="ion-text-wrap">
                <h2>جدول الوظائف</h2>
                <p>استعراض جميع الوظائف التي يتم تقريرها</p>
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/tab1/ExamsTable">
              <IonIcon slot="start" color="medium" icon={grid} />
              <IonLabel class="ion-text-wrap">
                <h2>جدول الامتحانات</h2>
                <p>استعراض جميع الامتحانات الفصلية للطالب </p>
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/tab1/ExamsResults">
              <IonIcon slot="start" color="medium" icon={clipboard} />
              <IonLabel class="ion-text-wrap">
                <h2>نتائج الامتحانات</h2>
                <p>استعراض جميع نتائج الامتحانات السنوية للطالب </p>
              </IonLabel>
            </IonItem>

            <IonItem routerLink="/tab1/Notifications">
              <IonIcon slot="start" color="medium" icon={notifications} />
              <IonLabel class="ion-text-wrap">
                <h2>الإشعارات</h2>
                <p>استعراض جميع الإشعارات المرسلة من إدراة المدرسة </p>
              </IonLabel>
            </IonItem>

            <IonItem routerLink="/login">
              <IonIcon slot="start" color="medium" icon={logOut} />
              <IonLabel class="ion-text-wrap">
                <h2>خروج</h2>
                <p>تسجيل خروج من التطبيق </p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  }
};

export default Tab1;

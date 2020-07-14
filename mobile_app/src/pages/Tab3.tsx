import React from 'react';
import { IonPage, IonContent, IonAvatar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonInput, IonDatetime, IonItem, IonLabel } from '@ionic/react';
import './Tab3.css';
import getRequest from "../services/API";
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Error';

class Tab3Page extends React.Component<any, any> {
   

  constructor(props: any) {

    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    const data = getRequest("user_info?user_id=" + localStorage.getItem("user_id"));
    data.then(data => {
      var result = JSON.parse(data.data);
      this.setState({
        isLoaded: true,
        items: result.message
      });
    })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error.error
        });
      });

  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <IonPage>
        <Header title="الملف الشخصي" logoutRoute="true" />
        <IonContent className="center-text">
          {error ? (<Error text={error} />)
            : !isLoaded ? (<Loading />)
              : items.map((item: any) => (
                <React.Fragment>
                  <IonAvatar className="userAvatar">
                    <img src={item.avatar} alt="" />
                  </IonAvatar>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>المعلومات الشخصية</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                      <IonInput clearInput placeholder="اسم الطالب" value={item.full_name}></IonInput>
                      <IonInput clearInput placeholder="رقم الجوال" value={item.mobile}></IonInput>
                      <IonInput clearInput placeholder="البريد الإلكتروني" value={item.email}></IonInput>
                      <IonItem>
                        <IonLabel>تاريخ الميلاد</IonLabel>
                        <IonDatetime displayFormat="YYYY - MM - DD" value={item.birthdate}></IonDatetime>
                      </IonItem>
                    </IonCardContent>

                  </IonCard>
                </React.Fragment>
              ))
          }
        </IonContent>
      </IonPage>
    );
  }
}

export default Tab3Page;

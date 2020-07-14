import React from 'react';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import getRequest from "../services/API";
import getClassName from "../services/GetCalendarInfo";
import { getClassTime } from "../services/GetCalendarInfo";
import NoItems from '../components/NoItems';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Error';

class ClassesSchedule extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    const data = getRequest("classes_calendar?user_id=" + localStorage.getItem("user_id"));

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
        <Header title="البرنامج الأسبوعي" backRoute="/tab1" />
        <IonContent>
          {error ? (<Error text={error} />)
            : !isLoaded ? (<Loading />)
              : Array.isArray(items) && items.length ?
                items.map((item: any) => (
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>يوم {item.day}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>
                        <b>{getClassName(item.period)} </b>
                        <span> ({getClassTime(item.period)}) </span>
                      </p>
                      <p> مادة {item.subject_name}</p>
                    </IonCardContent>
                  </IonCard>
                ))
                : (<NoItems text="لم تقم الإدارة بتحديد البرنامج الفصلي بعد" />)
          }
        </IonContent>
      </IonPage>
    );
  }
}

export default ClassesSchedule;

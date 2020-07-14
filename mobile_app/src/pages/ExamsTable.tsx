import React from 'react';
import { IonPage, IonContent, IonCard, IonLabel, IonCardHeader, IonCardContent, IonCardSubtitle } from '@ionic/react';
import getRequest from "../services/API";
import NoItems from '../components/NoItems';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Error';

class ExamTable extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    const data = getRequest("exam_schedule?user_id=" + localStorage.getItem("user_id"));
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
        <Header title="جدول الامتحانات الفصلية" backRoute="/tab1" />
        <IonContent>
          {error ? (<Error text={error} />)
            : !isLoaded ? (<Loading />)
              : Array.isArray(items) && items.length ?
                items.map((item: any) => (
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>
                        <b>
                          <span> يوم {item.day} </span>
                          <span> ({item.date}) </span>
                        </b>
                      </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonLabel>
                        <p><b> اسم المادة: </b> <span> {item.subject_name} </span></p>
                        <p><b>وقت الامتحان: </b> <span> {item.time} </span></p>
                        <p><b>مدة الامتحان: </b> <span> {item.duration} </span></p>
                      </IonLabel>
                    </IonCardContent>
                  </IonCard>
                ))
                : (<NoItems text="لم يتم تحديد جدول الامتحانات بعد" />)
          }
        </IonContent>
      </IonPage>
    )
  }
}

export default ExamTable;

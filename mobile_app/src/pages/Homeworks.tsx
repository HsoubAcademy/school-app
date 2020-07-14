import React from 'react';
import { IonPage, IonContent, IonLabel, IonItemDivider, IonCard, IonCardContent } from '@ionic/react';
import './General.css';
import NoItems from '../components/NoItems';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Error';
import getRequest from "../services/API";

class Homeworks extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    const data = getRequest("homeworks?user_id=" + localStorage.getItem("user_id"));
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
        <Header title="وظائف الطالب" backRoute="/tab1" />

        <IonContent>
          <IonItemDivider>
            <IonLabel>
              الوظائف القادمة
            </IonLabel>
          </IonItemDivider>
          {error ? (<Error text={error} />)
            : !isLoaded ? (<Loading />)
              : Array.isArray(items) && items.length ?
                items.map((item: any) => (
                  <IonCard>
                    <IonCardContent>
                      <IonLabel>
                        <p><b> يوم التسليم: </b> <span> {item.deadline_day} </span></p>
                        <p><b> تاريخ التسليم: </b> <span> {item.deadline_date} </span></p>
                        <p><b> وقت التسليم: </b> <span> {item.deadline_date} </span></p>
                        <p><b>المادة: </b> <span> {item.subject_name} </span></p>
                        <p><b>وصف الوظيفة: </b> <span> {item.description} </span></p>
                      </IonLabel>
                    </IonCardContent>
                  </IonCard>
                ))
                : (<NoItems text="ليس لديك أي وظائف قادمة" />)
          }
        </IonContent>
      </IonPage>);

  };
}
export default Homeworks;

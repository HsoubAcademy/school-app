import React from 'react';
import { IonPage, IonContent, IonCard, IonLabel, IonCardContent } from '@ionic/react';
import NoItems from '../components/NoItems';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Error';
import getRequest from "../services/API";

class Notifications extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    const data = getRequest("notifications?user_id=" + localStorage.getItem("user_id"));
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
        <Header title="صفحة الإشعارات" backRoute="/tab1" />

        <IonContent>
          {error ? (<Error text={error} />)
            : !isLoaded ? (<Loading />)
              : Array.isArray(items) && items.length ?
                items.map((item: any) => (
                  <IonCard>
                    <IonCardContent>
                      <IonLabel>
                        <p><b> 1. </b> <span> {item.title} </span></p>
                        <p> <span> {item.text} </span></p>
                        <i>{item.created_at}</i>
                      </IonLabel>
                    </IonCardContent>
                  </IonCard>
                ))
                : (<NoItems text="ليس لديك أي إشعارات" />)
          }
        </IonContent>
      </IonPage>
    )
  }
}

export default Notifications;

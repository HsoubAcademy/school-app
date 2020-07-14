import React from 'react';
import { IonPage, IonContent, IonCard, IonLabel, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/react';
import getRequest from "../services/API";
import NoItems from '../components/NoItems';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Error';

class ExamsResults extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    const data = getRequest("exam_results?user_id=" + localStorage.getItem("user_id"));
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
        <Header title="نتائج الامتحانات" backRoute="/tab1" />
        <IonContent>
          {error ? (<Error text={error} />)
            : !isLoaded ? (<Loading />)
              : Array.isArray(items) && items.length ?
                items.map((item: any) => (
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>
                        <b>
                          <span> مادة {item.subject_name} </span>
                        </b>
                      </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonLabel>
                        <p><b>  علامة الامتحان: </b> <span> {item.result}/100 </span></p>
                      </IonLabel>
                    </IonCardContent>
                  </IonCard>
                ))
                : (<NoItems text="ليس لديك أي نتائج امتحانية" />)
          }
        </IonContent>
      </IonPage>
    )
  }
}

export default ExamsResults;
